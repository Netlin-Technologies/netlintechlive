import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { firstName, lastName, workEmail, service, message, discoveryCall } = body || {}

    if (!firstName || !lastName || !workEmail || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.hostinger.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        // Fix: allow self-signed/intercepting proxies in cert chain
        rejectUnauthorized: false,
      },
    })

    const to = process.env.CONTACT_TO || process.env.SMTP_USER
    if (!to) {
      return NextResponse.json({ error: 'Email config missing (CONTACT_TO/SMTP_USER)' }, { status: 500 })
    }

    const info = await transporter.sendMail({
      from: `Website Contact <${process.env.SMTP_USER}>`,
      to,
      subject: `New contact form submission${service ? ` - ${service}` : ''}`,
      replyTo: workEmail,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${workEmail}</p>
        ${service ? `<p><strong>Service:</strong> ${service}</p>` : ''}
        <p><strong>Discovery Call:</strong> ${discoveryCall ? 'Yes' : 'No'}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || '').replace(/\n/g, '<br/>')}</p>
      `,
    })

    return NextResponse.json({ ok: true, id: info.messageId })
  } catch (error: any) {
    console.error('Contact API error:', error)
    return NextResponse.json({ error: error?.message ?? 'Internal error' }, { status: 500 })
  }
}

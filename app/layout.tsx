import { ClientLayout } from '@/components/ClientLayout'
import type { Metadata } from 'next'
import { Montserrat, Sora } from 'next/font/google';
import './globals.css'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Netlintech - Automate your business, not your life',
  description: 'We develop custom AI-powered systems that eliminate manual work, save time, and keep your business running even when you\'re offline.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${sora.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  )
}
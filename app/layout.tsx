import { ClientLayout } from '@/components/ClientLayout'
import type { Metadata } from 'next'
import { Montserrat, Sora } from 'next/font/google';
import './globals.css'
import {t} from "@/lib/locales";

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
  title: t.metaData.homeTitle,
  description: t.metaData.homeDesc,
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
import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Sora } from 'next/font/google';
import { ClientLayout } from '@/components/ClientLayout'
import { GoogleAnalytics } from '@next/third-parties/google'


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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang={(process.env.NEXT_PUBLIC_LOCALE || "en")}>
      <body className={`${montserrat.variable} ${sora.variable}`}>
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
      <GoogleAnalytics gaId="G-LRJNGV7EWL" />
    </html>
  )
}
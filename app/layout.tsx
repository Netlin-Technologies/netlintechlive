import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Sora } from 'next/font/google';
import { ClientLayout } from '@/components/ClientLayout'
import { GoogleAnalytics } from '@next/third-parties/google'
import JsonLd from '@/components/JsonLd'
import { getSiteUrl } from '@/lib/utils'


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
  const layoutLocale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const siteUrl = getSiteUrl(layoutLocale)
  return (
    <html lang={layoutLocale}>
      <body className={`${montserrat.variable} ${sora.variable}`}>
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Netlin Technologies',
            url: siteUrl,
            logo: `${siteUrl}/logo.png`,
            sameAs: [
              'https://www.linkedin.com/company/netlin-technologies',
            ]
          }}
        />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
      <GoogleAnalytics gaId="G-LRJNGV7EWL" />
    </html>
  )
}
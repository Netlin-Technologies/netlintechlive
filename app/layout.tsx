import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Sora } from 'next/font/google';
import { ClientLayout } from '@/components/ClientLayout'
import RouteProgress from '@/components/RouteProgress'
import { GoogleAnalytics } from '@next/third-parties/google'
import JsonLd from '@/components/JsonLd'
import { getSiteUrl } from '@/lib/utils'
import { PostHogProvider } from './providers'

// Provide a site-wide metadata base so OG/Twitter images resolve to absolute URLs
const buildLocale = process.env.NEXT_PUBLIC_LOCALE || 'en'
export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl(buildLocale)),
}

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
        <PostHogProvider>
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
            <RouteProgress />
            {children}
          </ClientLayout>
        </PostHogProvider>
      </body>
      <GoogleAnalytics gaId="G-LRJNGV7EWL" />
    </html>
  )
}
import type { Metadata } from 'next'
import React from 'react'
import './globals.css'
import { Montserrat, Sora } from 'next/font/google';
import Script from 'next/script';
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
export default function RootLayout({ children }: { children: React.ReactNode }) {
  const layoutLocale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const siteUrl = getSiteUrl(layoutLocale)
  return (
    <html lang={layoutLocale}>
      <head>
        {/* Removed global canonical + hreflang to avoid duplicates. These are now defined per-page via the metadata API. */}
        <meta name="robots" content="index,follow" />
        <Script id="linkedin-insight-config" strategy="afterInteractive">
          {`
            _linkedin_partner_id = "8732041";
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(_linkedin_partner_id);
          `}
        </Script>
        <Script id="linkedin-insight-loader" strategy="afterInteractive">
          {`
            (function(l) {
              if (!l) {
                window.lintrk = function(a, b) {
                  window.lintrk.q.push([a, b]);
                };
                window.lintrk.q = [];
              }
              var s = document.getElementsByTagName("script")[0];
              var b = document.createElement("script");
              b.type = "text/javascript";
              b.async = true;
              b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
              s.parentNode.insertBefore(b, s);
            })(window.lintrk);
          `}
        </Script>
      </head>
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
        <noscript
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html:
              '<img height="1" width="1" style="display:none;" alt="" src="https://px.ads.linkedin.com/collect/?pid=8732041&fmt=gif" />',
          }}
        />
      </body>
      <GoogleAnalytics gaId="G-LRJNGV7EWL" />
    </html>
  )
}
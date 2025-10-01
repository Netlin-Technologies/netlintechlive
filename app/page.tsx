import { Home } from '@/components/Home'
import type { Metadata } from 'next'
import { t } from '@/lib/locales'
import JsonLd from '@/components/JsonLd'
import { getSiteUrl } from '@/lib/utils'

export function generateMetadata(): Metadata {
  const title = t.metaData.homeTitle
  const description = t.metaData.homeDesc
  const domain = (process.env.NEXT_PUBLIC_LOCALE || 'en') === 'de' ? 'netlintech.de' : 'netlintech.com'
  // Provide canonical + hreflang alternates at the page level (layout no longer injects them)
  const siteUrlEn = getSiteUrl('en')
  const siteUrlDe = getSiteUrl('de')
  const currentLocale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const canonical = currentLocale === 'de' ? siteUrlDe : siteUrlEn
  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: siteUrlEn,
        de: siteUrlDe,
        'x-default': siteUrlEn,
      }
    },
    openGraph: {
      title,
      description,
      type: 'website',
      images: [
        `/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description)}&domain=${domain}`
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description
    }
  }
}

export default function HomePage() {
  const siteUrl = getSiteUrl(process.env.NEXT_PUBLIC_LOCALE)
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Netlin Technologies',
          url: siteUrl,
          inLanguage: (process.env.NEXT_PUBLIC_LOCALE || 'en'),
          potentialAction: {
            '@type': 'SearchAction',
            target: `${siteUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string'
          }
        }}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: siteUrl
            }
          ]
        }}
      />
      <Home />
    </>
  )
}
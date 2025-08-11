import { Home } from '@/components/Home'
import type { Metadata } from 'next'
import { t } from '@/lib/locales'
import JsonLd from '@/components/JsonLd'
import { getSiteUrl } from '@/lib/utils'

export function generateMetadata(): Metadata {
  const title = t.metaData.homeTitle
  const description = t.metaData.homeDesc
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'website'
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
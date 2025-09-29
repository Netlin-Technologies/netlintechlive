import { AutomationSubpage } from '@/components/AutomationSubpage'
import JsonLd from '@/components/JsonLd'
import { t } from '@/lib/locales'
import { getSiteUrl } from '@/lib/utils'

export const metadata = {
  title: t.metaData.automationTitle,
  description: t.metaData.automationDesc,
}

export default function AutomationPage() {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const siteUrl = getSiteUrl(locale)
  const url = `${siteUrl}${t.routes.automation}`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: t.metaData.automationTitle,
          description: t.metaData.automationDesc,
          provider: {
            '@type': 'Organization',
            name: 'Netlin Technologies',
            url: siteUrl,
          },
          areaServed: { '@type': 'Country', name: 'Global' },
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'EUR',
            url,
            availability: 'https://schema.org/InStock',
          },
          url,
        }}
      />
      <AutomationSubpage />
    </>
  )
}
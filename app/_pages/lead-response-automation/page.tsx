import type { Metadata } from 'next'
import UseCaseLanding from '@/components/UseCaseLanding'
import JsonLd from '@/components/JsonLd'
import { getSiteUrl } from '@/lib/utils'
import { t } from '@/lib/locales'

export async function generateMetadata(): Promise<Metadata> {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const site = getSiteUrl(locale)
  const url = `${site}${t.routes.lead_response_automation}`

  const title = t.metaData.leadResponseAutomationTitle || 'Lead Response Automation | NETLINTECH'
  const description = t.metaData.leadResponseAutomationDesc || ''
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function LeadResponseAutomationPage() {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const site = getSiteUrl(locale)
  const url = `${site}${t.routes.lead_response_automation}`

  const landing = t.content.leadResponseAutomation?.landing

  const sections = (landing?.sections || []).map((sec: any) => ({
    ...sec,
    layout: sec.layout || 'full',
  }))

  const content = {
    title: landing?.title || 'Lead Response Automation',
    subtitle: landing?.subtitle || '',
    highlights: landing?.highlights || [],
    stats: landing?.stats || [],
    sections,
    features: landing?.features || [],
    faq: landing?.faq || [],
  }

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${content.title} — Netlin Technologies`,
          description: content.subtitle,
          url,
        }}
      />
      {content.faq?.length ? (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: content.faq.map((f: any) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }}
        />
      ) : null}
      <UseCaseLanding
        title={content.title}
        subtitle={content.subtitle}
        highlights={content.highlights}
        stats={content.stats}
        sections={content.sections}
        features={content.features}
        faq={content.faq}
        faqSubtitle={t.content.leadResponseAutomation?.faqSubtitle}
        footerCtaTitle={landing?.sections?.find((s: any) => s.id === 'cta')?.heading}
        footerCtaDescription={landing?.sections?.find((s: any) => s.id === 'cta')?.paragraphs?.[0]}
        footerCtaButtonText={t.content.hero.freeAnalysisButton}
        theme="light"
      />
    </>
  )
}

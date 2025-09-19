import type { Metadata } from 'next'
import type React from 'react'
import UseCaseLanding from '@/components/UseCaseLanding'
import FlowCustomerService from '@/components/FlowCustomerService'
import StatsBeforeAfter from '@/components/StatsBeforeAfter'
import HeroAICustomerService from '@/components/HeroAICustomerService'
import HeroGraphicCustomerService from '@/components/HeroGraphicCustomerService'
import RoadmapThreeWeeks from '@/components/RoadmapThreeWeeks'
import JsonLd from '@/components/JsonLd'
import { getSiteUrl } from '@/lib/utils'
import { t } from '@/lib/locales'
import type { UseCaseSection } from '@/lib/locales'
import { LocalizedLink } from '@/components/LocalizedLink'
import { Button } from '@/components/ui/button'
import AITools from '@/components/sections/AITools'

export async function generateMetadata(): Promise<Metadata> {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const site = getSiteUrl(locale)
  const url = `${site}${t.routes.customer_service_automation}`

  const title = t.metaData.customerServiceAutomationTitle || 'Customer Service Automation | NETLINTECH'
  const description = t.metaData.customerServiceAutomationDesc || ''
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function CustomerServiceAutomationPage() {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const site = getSiteUrl(locale)
  const url = `${site}${t.routes.customer_service_automation}`
  const landing = t.content.customerServiceAutomation?.landing
  const heroChat = t.content.customerServiceAutomation?.heroChat
  const heroGraphicLabels = t.content.customerServiceAutomation?.heroGraphic
  const flowLabels = t.content.customerServiceAutomation?.flow.labels
  const statsChart = t.content.customerServiceAutomation?.statsChart

  // Base sections from locales
  type LandingSection = React.ComponentProps<typeof UseCaseLanding>['sections'][number]
  const baseSections = (landing?.sections || []).map((sec) => ({
    ...sec,
    layout: 'full' as const,
  }))

  // Locale-specific ids for custom sections
  const ids = {
    heroGraphic: 'hero-graphic',
    processFlow: locale === 'de' ? 'prozess-flow' : 'process-flow',
    visualImpact: locale === 'de' ? 'visueller-effekt' : 'visual-impact',
    implementation: locale === 'de' ? 'implementierung' : 'implementation',
  }

  const sections: LandingSection[] = baseSections.map((sec): LandingSection => {
    if (sec.id === ids.heroGraphic && heroGraphicLabels) {
      return {
        ...sec,
        layout: 'custom',
        customContent: <HeroGraphicCustomerService labels={heroGraphicLabels} />,
        // place the graphic roughly in the middle of the long copy
        customInsertIndex: Math.ceil((sec.paragraphs?.length || 0) / 2),
      }
    }
    if (sec.id === ids.processFlow && flowLabels) {
      return {
        ...sec,
        layout: 'custom',
        customContent: <FlowCustomerService labels={flowLabels} />,
      }
    }
    if (sec.id === ids.visualImpact && statsChart) {
      return {
        ...sec,
        layout: 'custom',
        customContent: (
          <StatsBeforeAfter
            title={statsChart.title}
            description={statsChart.description}
            kpis={statsChart.kpis}
            notes={statsChart.notes}
          />
        ),
      }
    }
    if (sec.id === ids.implementation) {
      const items = (sec.paragraphs || []).slice(0, 3).map((p, idx) => ({
        title: locale === 'de' ? `Woche ${idx + 1}` : `Week ${idx + 1}`,
        description: p,
      }))
      return {
        ...sec,
        layout: 'custom',
        customContent: <RoadmapThreeWeeks items={items} />,
        customInsertIndex: 0,
        // Show only the remaining paragraphs (e.g., Ongoing) beneath the roadmap
        paragraphs: (sec.paragraphs || []).slice(3),
      }
    }
    // Render per-page CTA inside sections: show heading and first paragraph, then the button
    if (sec.id === 'cta') {
      return {
        ...sec,
        layout: 'custom',
        customContent: (
          <LocalizedLink route="contact">
            <Button variant="primaryGradient" className="mt-2 px-6 h-11 text-base">
              {t.content.hero.freeAnalysisButton}
            </Button>
          </LocalizedLink>
        ),
        customInsertIndex: 1,
      }
    }
    return sec as LandingSection
  })

  const content = {
    title: landing?.title || 'Customer Service Automation',
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
            mainEntity: content.faq.map(f => ({
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
        faqSubtitle={t.content.customerServiceAutomation?.faqSubtitle}
        footerCtaTitle={landing?.sections?.find(s => s.id === 'cta')?.heading}
        footerCtaDescription={landing?.sections?.find(s => s.id === 'cta')?.paragraphs?.[0]}
        footerCtaButtonText={t.content.hero.freeAnalysisButton}
        preSections={(
          <>
            <div className="w-full">
              <div className="max-w-[1360px] px-6 mx-auto">
                <p className="mt-[75px] opacity-50 text-center text-white text-sm md:text-base font-normal font-sora uppercase leading-normal tracking-widest">
                  {t.content.bannerSection.trustText}
                </p>
              </div>
            </div>
            <AITools />
          </>
        )}
        preSectionsFullBleed
        heroCustom={
          heroChat ? (
            <HeroAICustomerService labels={heroChat} />
          ) : null
        }
      />
    </>
  )
}
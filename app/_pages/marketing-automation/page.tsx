import type { Metadata } from 'next'
import type React from 'react'
import UseCaseLanding from '@/components/UseCaseLanding'
import FlowCustomerService from '@/components/FlowCustomerService'
import StatsBeforeAfter from '@/components/StatsBeforeAfter'
import HeroAIMarketingAutomation from '@/components/HeroAIMarketingAutomation'
import HeroGraphicCustomerService from '@/components/HeroGraphicCustomerService'
import RoadmapThreeWeeks from '@/components/RoadmapThreeWeeks'
import JsonLd from '@/components/JsonLd'
import { getSiteUrl } from '@/lib/utils'
import { t } from '@/lib/locales'
import { LocalizedLink } from '@/components/LocalizedLink'
import { Button } from '@/components/ui/button'
import AITools from '@/components/sections/AITools'

export async function generateMetadata(): Promise<Metadata> {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const site = getSiteUrl(locale)
  const url = `${site}${t.routes.marketing_automation}`

  const title = t.metaData.marketingAutomationTitle || 'Marketing Automation | NETLINTECH'
  const description = t.metaData.marketingAutomationDesc || ''
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: { title, description, url },
    twitter: { card: 'summary_large_image', title, description },
  }
}

export default function MarketingAutomationPage() {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const site = getSiteUrl(locale)
  const url = `${site}${t.routes.marketing_automation}`
  // Reuse CSA structures but read from marketingAutomation if present; otherwise fallback to CSA
  const landing = t.content.marketingAutomation?.landing || t.content.customerServiceAutomation?.landing
  const heroChat = t.content.marketingAutomation?.heroChat || t.content.customerServiceAutomation?.heroChat
  const heroGraphicLabels = t.content.marketingAutomation?.heroGraphic || t.content.customerServiceAutomation?.heroGraphic
  const flowLabels = t.content.marketingAutomation?.flow?.labels || t.content.customerServiceAutomation?.flow?.labels
  const statsChart = t.content.marketingAutomation?.statsChart || t.content.customerServiceAutomation?.statsChart

  type LandingSection = React.ComponentProps<typeof UseCaseLanding>['sections'][number]
  const baseSections = (landing?.sections || []).map((sec: any) => ({
    ...sec,
    layout: 'full' as const,
  }))

  const ids = {
    heroGraphic: 'hero-graphic',
    processFlow: locale === 'de' ? 'prozess-flow' : 'process-flow',
    visualImpact: locale === 'de' ? 'visueller-effekt' : 'visual-impact',
    implementation: locale === 'de' ? 'implementierung' : 'implementation',
  }

  const sections: LandingSection[] = baseSections.map((sec: any): LandingSection => {
    if (sec.id === ids.heroGraphic && heroGraphicLabels) {
      return {
        ...sec,
        layout: 'custom',
        customContent: <HeroGraphicCustomerService labels={heroGraphicLabels} />,
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
  const items = (sec.paragraphs || []).slice(0, 3).map((p: string, idx: number) => ({
        title: locale === 'de' ? `Woche ${idx + 1}` : `Week ${idx + 1}`,
        description: p,
      }))
      return {
        ...sec,
        layout: 'custom',
        customContent: <RoadmapThreeWeeks items={items} />,
        customInsertIndex: 0,
        paragraphs: (sec.paragraphs || []).slice(3),
      }
    }
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
    title: landing?.title || 'Marketing Automation',
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
        faqSubtitle={t.content.marketingAutomation?.faqSubtitle || t.content.customerServiceAutomation?.faqSubtitle}
  footerCtaTitle={landing?.sections?.find((s: any) => s.id === 'cta')?.heading}
  footerCtaDescription={landing?.sections?.find((s: any) => s.id === 'cta')?.paragraphs?.[0]}
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
        heroCustom={heroChat ? <HeroAIMarketingAutomation labels={heroChat} /> : null}
      />
    </>
  )
}

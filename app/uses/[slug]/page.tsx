import type { Metadata } from 'next'
import UseCaseLanding from '@/components/UseCaseLanding'
import { getUseCase, listUseCases as listLocalizedUseCases } from '@/lib/locales'
import JsonLd from '@/components/JsonLd'
import { getSiteUrl } from '@/lib/utils'
import { notFound } from 'next/navigation'

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return listLocalizedUseCases().map(uc => ({ slug: uc.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const uc = getUseCase(slug)
  if (!uc) {
    return {
      title: 'Use Case — Netlin Technologies',
      description: 'AI automation use cases by Netlin Technologies.'
    }
  }
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const site = getSiteUrl(locale)
  const title = `${uc.name} Automation — Netlin Technologies`
  const description = uc.subtitle
  const url = `${site}/uses/${uc.slug}`
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: 'article',
      modifiedTime: uc.updatedAt,
      images: [
        { url: `/uses/${uc.slug}/opengraph-image` }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    }
  }
}

export default async function UseCasePage({ params }: PageProps) {
  const { slug } = await params
  const uc = getUseCase(slug)
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const site = getSiteUrl(locale)
  const url = `${site}/uses/${slug}`

  if (!uc) notFound()

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: `${uc.name} Automation`,
          description: uc.subtitle,
          url,
          dateModified: uc.updatedAt,
        }}
      />
      {uc.faq?.length ? (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: uc.faq.map(f => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          }}
        />
      ) : null}
      <UseCaseLanding
        title={uc.title}
        subtitle={uc.subtitle}
        highlights={uc.heroHighlights}
        stats={uc.stats}
        sections={uc.sections}
        features={uc.features}
  heroImage={uc.heroImage}
  heroBackdrop={uc.heroBackdrop}
  gallery={uc.gallery}
  faq={uc.faq}
      />
    </>
  )
}

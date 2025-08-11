import { Home } from '@/components/Home'
import type { Metadata } from 'next'
import { t } from '@/lib/locales'

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
  return <Home />
}
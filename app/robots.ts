import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/utils'

export default function robots(): MetadataRoute.Robots {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const baseUrl = getSiteUrl(locale)

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/admin/',
        '/api/',
        '/_pages/',
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

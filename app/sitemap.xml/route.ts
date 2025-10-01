import { supabase } from '@/lib/supabase'
import { getSiteUrl } from '@/lib/utils'
import { listUseCases } from '@/app/uses/config'

// This route generates a multilingual XML sitemap with hreflang annotations.
// It covers static pages (from our translations), automation subpages, and blog articles from Supabase.
// If performance becomes an issue, consider caching the result (edge cache or incremental revalidate pattern).

interface RouteDef {
  key: string
  en: string
  de: string
  priority?: number
  changefreq?: string
  lastmod?: string
}

function formatDate(d: Date | string | undefined): string | undefined {
  if (!d) return undefined
  const date = typeof d === 'string' ? new Date(d) : d
  if (Number.isNaN(date.getTime())) return undefined
  return date.toISOString().split('T')[0]
}

export const revalidate = 3600 // 1 hour; adjust as needed

export async function GET() {
  const siteUrlEn = getSiteUrl('en')
  const siteUrlDe = getSiteUrl('de')

  // Base translated static routes (mirror of [...slug])
  const staticRoutes: RouteDef[] = [
    { key: 'home', en: '/', de: '/', priority: 1.0, changefreq: 'daily' },
    { key: 'about', en: '/aboutus', de: '/überuns', priority: 0.8, changefreq: 'monthly' },
    { key: 'contact', en: '/contact', de: '/kontakt', priority: 0.6, changefreq: 'monthly' },
    { key: 'services', en: '/services', de: '/dienstleistungen', priority: 0.7, changefreq: 'weekly' },
    { key: 'blog', en: '/blog', de: '/blog', priority: 0.7, changefreq: 'daily' },
    { key: 'automation', en: '/automation', de: '/automatisierung', priority: 0.8, changefreq: 'weekly' },
    { key: 'customer_service_automation', en: '/customer-service-automation', de: '/kundenservice-automatisierung', priority: 0.7, changefreq: 'weekly' },
    { key: 'marketing_automation', en: '/marketing-automation', de: '/marketing-automatisierung', priority: 0.7, changefreq: 'weekly' },
    { key: 'lead_response_automation', en: '/lead-response-automation', de: '/lead-response-automatisierung', priority: 0.7, changefreq: 'weekly' },
  ]

  // Fetch blog posts to include article URLs (en + de when available)
  let blogItems: RouteDef[] = []
  try {
    const { data: posts } = await supabase
      .from('netlin_blog_posts')
      .select('slug, slug_de, updated_at, published_at, created_at')
      .limit(500)

    if (posts && posts.length) {
      blogItems = posts.map((p: any) => {
        const enSlug = p.slug || p.slug_de
        const deSlug = p.slug_de || p.slug
        const last = p.updated_at || p.published_at || p.created_at
        return {
          key: `blog:${enSlug}`,
          en: `/blog/${enSlug}`,
          de: `/blog/${deSlug}`,
          priority: 0.65,
          changefreq: 'weekly',
          lastmod: formatDate(last)
        }
      })
    }
  } catch (e) {
    // Fail silently; sitemap still useful
    console.error('sitemap fetch posts error', e)
  }

  // Use-case landing pages (same slug for EN/DE for now unless localized later)
  let useCaseItems: RouteDef[] = []
  try {
    const cases = listUseCases()
    if (cases && cases.length) {
      useCaseItems = cases.map(uc => {
        const last = uc.updatedAt ? formatDate(uc.updatedAt as any) : undefined
        return {
          key: `use:${uc.slug}`,
          en: `/uses/${uc.slug}`,
          de: `/uses/${uc.slug}`, // adjust if localization introduced
          priority: 0.7,
          changefreq: 'monthly',
          lastmod: last
        }
      })
    }
  } catch (e) {
    console.error('sitemap use-cases error', e)
  }

  const allRoutes = [...staticRoutes, ...blogItems, ...useCaseItems]

  const xmlns = 'http://www.sitemaps.org/schemas/sitemap/0.9'
  const xmlnsXhtml = 'http://www.w3.org/1999/xhtml'

  const xmlItems = allRoutes.map(r => {
    const enLoc = `${siteUrlEn}${r.en}`.replace(/(?<!:)\/\//g, '/')
    const deLoc = `${siteUrlDe}${r.de}`.replace(/(?<!:)\/\//g, '/')
    const lastmod = r.lastmod || formatDate(new Date())
    return `  <url>\n    <loc>${enLoc}</loc>\n    <xhtml:link rel="alternate" hreflang="en" href="${enLoc}"/>\n    <xhtml:link rel="alternate" hreflang="de" href="${deLoc}"/>\n    <xhtml:link rel="alternate" hreflang="x-default" href="${enLoc}"/>\n    <lastmod>${lastmod}</lastmod>\n    ${r.changefreq ? `<changefreq>${r.changefreq}</changefreq>` : ''}${r.priority ? `\n    <priority>${r.priority.toFixed(2)}</priority>` : ''}\n  </url>`
  }).join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="${xmlns}" xmlns:xhtml="${xmlnsXhtml}">\n${xmlItems}\n</urlset>`

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml; charset=UTF-8',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400'
    }
  })
}

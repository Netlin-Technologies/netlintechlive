import { MetadataRoute } from 'next'
import { getSiteUrl } from '@/lib/utils'
import { t } from '@/lib/locales'
import { supabase } from '@/lib/supabase'
import { listUseCases } from './uses/config'

async function getBlogPosts() {
  try {
    const { data, error } = await supabase
      .from('netlin_blog_posts')
      .select('slug, slug_de, updated_at, published_at')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (error) {
      console.error('Error fetching blog posts for sitemap:', error)
      return []
    }

    return data || []
  } catch (error) {
    console.error('Error fetching blog posts for sitemap:', error)
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const baseUrl = getSiteUrl(locale)

  // Get dynamic routes from locales
  const routes = t.routes

  // Create sitemap entries using the localized routes
  const staticEntries: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}${routes.home}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/uses`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}${routes.automation}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Newly added automation subpages (localized via routes)
    {
      url: `${baseUrl}${routes.customer_service_automation}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}${routes.marketing_automation}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}${routes.lead_response_automation || '/lead-response-automation'}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}${routes.contact}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}${routes.blog}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Fetch dynamic blog posts
  const blogPosts = await getBlogPosts()
  const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => {
    // Use the appropriate slug based on locale
    const slug = locale === 'de' && post.slug_de ? post.slug_de : post.slug
    const lastModified = post.updated_at ? new Date(post.updated_at) : new Date(post.published_at || new Date())
    
    return {
      url: `${baseUrl}${routes.blog}/${slug}`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.6,
    }
  })

  // Use-case landing pages
  const useCaseEntries: MetadataRoute.Sitemap = listUseCases().map((uc) => ({
    url: `${baseUrl}/uses/${uc.slug}`,
    lastModified: uc.updatedAt ? new Date(uc.updatedAt) : new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    ...staticEntries,
    ...blogEntries,
    ...useCaseEntries,
  ]
}

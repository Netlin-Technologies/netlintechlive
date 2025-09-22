import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { t } from '@/lib/locales'
import { supabase } from '@/lib/supabase'
import { getLocalizedContent, getLocalizedArray } from '@/lib/locale'
import JsonLd from '@/components/JsonLd'
import { getSiteUrl } from '@/lib/utils'

// Import your actual page components
import AboutPage from '@/app/_pages/about/page'
import ClientOnlyContact from '@/components/ClientOnlyContact'
import ServicesPage from '@/app/_pages/services/page'
import BlogPage from '@/app/_pages/blog/page'
import AutomationPage from '@/app/_pages/automation/page'
import BlogArticlePage from '@/app/_pages/blog/[slug]/page'
import AdminPage from '@/app/_pages/admin/page'
import CustomerServiceAutomationPage from '@/app/_pages/customer-service-automation/page'
import MarketingAutomationPage from '@/app/_pages/marketing-automation/page'

const pageComponents = {
  about: AboutPage,
  contact: ClientOnlyContact,
  services: ServicesPage,
  blog: BlogPage,
  automation: AutomationPage,
  admin: AdminPage,
  customer_service_automation: CustomerServiceAutomationPage,
  marketing_automation: MarketingAutomationPage,
}

// Define translations directly to avoid import issues at build time
const translations = {
  en: {
    routes: {
      about: '/aboutus',
      contact: '/contact',
      services: '/services',
      blog: '/blog',
      automation: '/automation',
      customer_service_automation: '/customer-service-automation',
      marketing_automation: '/marketing-automation',
      admin: '/admin'
    }
  },
  de: {
    routes: {
      about: '/überuns',
      contact: '/kontakt', 
      services: '/dienstleistungen',
      blog: '/blog',
      automation: '/automatisierung',
      customer_service_automation: '/kundenservice-automatisierung',
      marketing_automation: '/marketing-automatisierung',
      admin: '/admin'
    }
  }
}

interface PageProps {
  params: Promise<{ slug: string[] }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const requestedPath = '/' + slug.join('/')
  
  // Handle special cases first
  if (requestedPath === '/admin') {
    return {
      title: 'Admin Panel - Netlin Technologies',
      description: 'Admin panel for managing content'
    }
  }
  
  // Check if this is a blog article route
  if (slug.length === 2 && slug[0] === 'blog') {
    const articleSlug = slug[1]
    
    try {      
      // Try to fetch the blog post from Supabase
      let { data: post, error } = await supabase
        .from('netlin_blog_posts')
        .select('*')
        .eq('slug', articleSlug)
        .maybeSingle()

      // If not found by English slug, try German slug
      if (!post) {
        const germanResult = await supabase
          .from('netlin_blog_posts')
          .select('*')
          .eq('slug_de', articleSlug)
          .maybeSingle()
        
        post = germanResult.data
        error = germanResult.error
      }

  if (post && !error) {        
        // Get current locale
        const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
        
        // Get localized content based on locale
        let localizedTitle: string
        let localizedExcerpt: string
        
        if (locale === 'de') {
          localizedTitle = post.title_de || post.title || 'Article'
          localizedExcerpt = post.excerpt_de || post.excerpt || 'Article excerpt'
        } else {
          localizedTitle = post.title || 'Article'
          localizedExcerpt = post.excerpt || 'Article excerpt'
        }

        const metadata: Metadata = {
          title: `${localizedTitle} - Netlin Technologies`,
          description: localizedExcerpt,
          // Optional: Add more metadata
          openGraph: {
            title: localizedTitle,
            description: localizedExcerpt,
            type: 'article',
            publishedTime: post.published_at || post.created_at,
            authors: [post.author_name],
            tags: locale === 'de' ? (post.tags_de || post.tags || []) : (post.tags || []),
            images: [
              `/og?title=${encodeURIComponent(localizedTitle)}&subtitle=${encodeURIComponent(localizedExcerpt)}&domain=${(process.env.NEXT_PUBLIC_LOCALE || 'en') === 'de' ? 'netlintech.de' : 'netlintech.com'}`
            ]
          },
          twitter: {
            card: 'summary_large_image',
            title: localizedTitle,
            description: localizedExcerpt,
          }
        }
        
        return metadata
      }
    } catch (error) {
      console.error('generateMetadata: Error fetching blog post:', error)
    }
    
    // Fallback to generic blog metadata if post not found or error occurred
    const fallbackTitle = `${t.metaData.blogTitle} - ${articleSlug}`
    const fallbackDesc = t.metaData.blogDesc
    return {
      title: fallbackTitle,
      description: fallbackDesc,
      openGraph: {
        title: fallbackTitle,
        description: fallbackDesc,
        images: [
          `/og?title=${encodeURIComponent(fallbackTitle)}&subtitle=${encodeURIComponent(fallbackDesc)}&domain=${(process.env.NEXT_PUBLIC_LOCALE || 'en') === 'de' ? 'netlintech.de' : 'netlintech.com'}`
        ]
      }
    }
  }
  
  // Get the current locale from environment variable
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const currentTranslations = translations[locale as keyof typeof translations]
  
  if (!currentTranslations) {
    return {
      title: t.metaData.homeTitle,
      description: t.metaData.homeDesc
    }
  }
  
  // Find which page this route corresponds to
  const routeEntries = Object.entries(currentTranslations.routes)
  const foundRoute = routeEntries.find(([_, path]) => path === requestedPath)
  
  if (!foundRoute) {
    const title = t.metaData.homeTitle
    const description = t.metaData.homeDesc
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: [
          `/og?title=${encodeURIComponent(title)}&subtitle=${encodeURIComponent(description)}&domain=${(process.env.NEXT_PUBLIC_LOCALE || 'en') === 'de' ? 'netlintech.de' : 'netlintech.com'}`
        ]
      }
    }
  }
  
  const [routeKey] = foundRoute
  
  // Map route keys to their corresponding metadata
  const metadataMap: Record<string, { title: string; description: string }> = {
    home: {
      title: t.metaData.homeTitle,
      description: t.metaData.homeDesc
    },
    about: {
      title: t.metaData.aboutTitle,
      description: t.metaData.aboutDesc
    },
    contact: {
      title: t.metaData.contactTitle,
      description: t.metaData.contactDesc
    },
    services: {
      title: t.metaData.homeTitle, // You might want to add servicesTitle to your locales
      description: t.metaData.homeDesc // You might want to add servicesDesc to your locales
    },
    blog: {
      title: t.metaData.blogTitle,
      description: t.metaData.blogDesc
    },
    automation: {
      title: t.metaData.automationTitle,
      description: t.metaData.automationDesc
    },
    customer_service_automation: {
      // Prefer specialized CSA metadata when available
      title: t.metaData.customerServiceAutomationTitle || t.metaData.automationTitle,
      description: t.metaData.customerServiceAutomationDesc || t.metaData.automationDesc,
    },
    marketing_automation: {
      title: t.metaData.marketingAutomationTitle || t.metaData.automationTitle,
      description: t.metaData.marketingAutomationDesc || t.metaData.automationDesc,
    },
  }
  
  const pageMetadata = metadataMap[routeKey] || {
    title: t.metaData.homeTitle,
    description: t.metaData.homeDesc
  }
  
  return {
    title: pageMetadata.title,
    description: pageMetadata.description,
    openGraph: {
      title: pageMetadata.title,
      description: pageMetadata.description,
      images: [
        `/og?title=${encodeURIComponent(pageMetadata.title)}&subtitle=${encodeURIComponent(pageMetadata.description)}&domain=${(process.env.NEXT_PUBLIC_LOCALE || 'en') === 'de' ? 'netlintech.de' : 'netlintech.com'}`
      ]
    }
  }
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params
  const requestedPath = '/' + slug.join('/')
  
  // Check if this is an admin route - handle it specially
  if (requestedPath === '/admin') {
    // Import admin page dynamically to avoid SSR issues
    const AdminPageWrapper = await import('@/components/AdminPageWrapper')
    return <AdminPageWrapper.default />
  }
  
  // Check if this is a blog article route (e.g., /blog/article-slug)
  if (slug.length === 2 && slug[0] === 'blog') {
    // This is a blog article route: /blog/[article-slug]
    const articleSlug = slug[1]
    // Fetch post for JSON-LD
    const { data: post } = await supabase
      .from('netlin_blog_posts')
      .select('*')
      .or(`slug.eq.${articleSlug},slug_de.eq.${articleSlug}`)
      .maybeSingle()

  const articleLocale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const name = articleLocale === 'de' ? (post?.title_de || post?.title || 'Article') : (post?.title || 'Article')
  const description = articleLocale === 'de' ? (post?.excerpt_de || post?.excerpt || '') : (post?.excerpt || '')

  const siteUrl = getSiteUrl(articleLocale)
    const url = `${siteUrl}/blog/${articleSlug}`

    return (
      <>
        {post && (
          <JsonLd
            data={{
              '@context': 'https://schema.org',
              '@type': 'BlogPosting',
              headline: name,
              description,
              datePublished: post.published_at || post.created_at,
              author: post.author_name ? { '@type': 'Person', name: post.author_name } : undefined,
              mainEntityOfPage: { '@type': 'WebPage', '@id': url },
              url,
            }}
          />
        )}
        <BlogArticlePage params={Promise.resolve({ slug: articleSlug })} />
      </>
    )
  }
  
  // Get the current locale from environment variable
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const currentTranslations = translations[locale as keyof typeof translations]
  
  if (!currentTranslations) {
    notFound()
  }
  
  // Find which page this route corresponds to for the current locale only
  const routeEntries = Object.entries(currentTranslations.routes)
  const foundRoute = routeEntries.find(([_, path]) => path === requestedPath)
  
  if (!foundRoute) {
    notFound()
  }
  
  const [routeKey] = foundRoute
  const PageComponent = pageComponents[routeKey as keyof typeof pageComponents]
  
  if (!PageComponent) {
    notFound()
  }
  
  const pageLocale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const siteUrl = getSiteUrl(pageLocale)
  const pageUrl = `${siteUrl}${requestedPath}`
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: t.metaData.homeTitle,
          description: t.metaData.homeDesc,
          inLanguage: pageLocale,
          url: pageUrl,
        }}
      />
      <PageComponent />
    </>
  )
}

export async function generateStaticParams() {
  // Get the current locale from environment variable
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  
  // Import translations dynamically to get the correct locale
  const translations = {
    en: {
      routes: {
        about: '/aboutus',
        contact: '/contact',
        services: '/services',
        blog: '/blog',
        automation: '/automation',
        customer_service_automation: '/customer-service-automation',
        marketing_automation: '/marketing-automation',
        // admin: '/admin' // Exclude admin from static generation
      }
    },
    de: {
      routes: {
        about: '/überuns',
        contact: '/kontakt', 
        services: '/dienstleistungen',
        blog: '/blog',
        automation: '/automatisierung',
        customer_service_automation: '/kundenservice-automatisierung',
        marketing_automation: '/marketing-automatisierung',
        // admin: '/admin' // Exclude admin from static generation
      }
    }
  }
  
  // Generate paths for the current locale
  const currentTranslations = translations[locale as keyof typeof translations]
  if (!currentTranslations) {
    return []
  }
  
  const routeSlugs = Object.values(currentTranslations.routes)
    .map(path => path.replace(/^\//, '')) // remove leading slash
    .map(path => ({ slug: path.split('/') })) // Handle multi-segment paths properly
  
  return routeSlugs
}

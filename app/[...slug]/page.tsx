import { notFound } from 'next/navigation'

// Import your actual page components
import AboutPage from '@/app/_pages/about/page'
import ContactPage from '@/app/_pages/contact/page'
import ServicesPage from '@/app/_pages/services/page'
import BlogPage from '@/app/_pages/blog/page'
import AutomationPage from '@/app/_pages/automation/page'
import BlogArticlePage from '@/app/_pages/blog/[slug]/page'
import AdminPage from '@/app/_pages/admin/page'

const pageComponents = {
  about: AboutPage,
  contact: ContactPage,
  services: ServicesPage,
  blog: BlogPage,
  automation: AutomationPage,
  admin: AdminPage,
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
      admin: '/admin'
    }
  }
}

interface PageProps {
  params: Promise<{ slug: string[] }>
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
    return <BlogArticlePage params={Promise.resolve({ slug: slug[1] })} />
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
  
  return <PageComponent />
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

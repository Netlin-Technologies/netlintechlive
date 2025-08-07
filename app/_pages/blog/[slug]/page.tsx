import { ArticlePage } from '@/components/ArticlePage'

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>
}

export default function BlogArticlePage({ params }: BlogArticlePageProps) {
  return <ArticlePage />
}

// Optional: Generate static params for known blog posts
export async function generateStaticParams() {
  // You can implement this to pre-generate static pages for your blog posts
  // For now, we'll let them be generated on-demand
  return []
}

"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { useParams } from 'next/navigation'
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { Card, CardContent } from './ui/card'
import { useBlogPosts } from '../hooks/useBlogPosts'
import { NetlinBlogPost } from '../lib/supabase'
import { NavbarSection } from './sections/NavbarSection'
import { FooterSection } from './sections/FooterSection'
import { getLocalizedContent, getLocalizedArray, getLanguageLabels, getLocalizedSlug, getLocalizedFeaturedImage } from '../lib/locale'
import Link from 'next/link'

export const ArticlePage: React.FC = () => {
  const { slug } = useParams<{ slug: string | string[] }>()
  
  // Extract the actual article slug from the params
  // If slug is an array like ["blog", "article-slug"], we want just "article-slug"
  const articleSlug = Array.isArray(slug) ? slug[slug.length - 1] : slug
  
  const { getPostBySlug, getPublishedPosts, error: hookError } = useBlogPosts()
  const [post, setPost] = useState<NetlinBlogPost | null>(null)
  const [relatedPosts, setRelatedPosts] = useState<NetlinBlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [debugInfo, setDebugInfo] = useState<string>('')
  
  const labels = getLanguageLabels()

  const fetchPost = useCallback(async () => {
    if (!articleSlug) return
    
    try {
      setLoading(true)
      setError(null) // Clear any previous errors
      setDebugInfo(`Fetching post with slug: ${articleSlug}`)
      
      const postData = await getPostBySlug(articleSlug)
      setDebugInfo(`Post fetched successfully: ${getLocalizedContent(postData, 'title') || 'No title'}`)
      setPost(postData)
      setError(null) // Ensure error is cleared on success
      setLoading(false) // Explicitly set loading to false on success
      
      // Fetch related posts
      if (postData) {
        try {
          const allPosts = await getPublishedPosts()
          const related = allPosts
            .filter(p => p.id !== postData.id && p.slug !== postData.slug) // Exclude current post by both id and slug
            .filter(p => 
              getLocalizedContent(p, 'category') === getLocalizedContent(postData, 'category') || // Same category
              (getLocalizedArray(postData, 'tags') && getLocalizedArray(p, 'tags') && 
               getLocalizedArray(p, 'tags').some(tag => getLocalizedArray(postData, 'tags').includes(tag))) // Similar tags
            )
            .slice(0, 3) // Limit to 3 related posts
          setRelatedPosts(related)
        } catch (err) {
          // If fetching related posts fails, use fallback
          const fallbackRelated = getFallbackRelatedPosts(getLocalizedContent(postData, 'category'), postData.id, getLocalizedSlug(postData))
          setRelatedPosts(fallbackRelated)
        }
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Post not found'
      setPost(null) // Clear any previous post data
      setError(errorMessage)
      setDebugInfo(`Error occurred: ${errorMessage}`)
      console.error('Error fetching post:', err)
      setLoading(false) // Explicitly set loading to false on error
    }
  }, [articleSlug, getPostBySlug, getPublishedPosts])

  useEffect(() => {
    fetchPost()
  }, [fetchPost]) // Now only depends on the memoized fetchPost function

  // Also check for hook-level errors
  useEffect(() => {
    if (hookError) {
      setPost(null) // Clear post data when hook error occurs
      setError(hookError)
      setLoading(false)
      setDebugInfo(`Hook error: ${hookError}`)
    }
  }, [hookError])

  if (loading && !post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">{labels.loadingArticles}</p>
          {debugInfo && (
            <p className="mt-2 text-sm text-gray-500">Debug: {debugInfo}</p>
          )}
          <button 
            onClick={() => {
              setLoading(false)
              setError('Loading timeout - please try again')
            }}
            className="mt-4 px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
          >
            Stop Loading
          </button>
        </div>
      </div>
    )
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-white">
        <NavbarSection theme="light"/>
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {error?.includes('connect to the database') ? labels.connectionError : labels.articleNotFound}
          </h1>
          <p className="text-gray-600 mb-8">
            {error || labels.articleNotFoundDesc}
          </p>
          {error?.includes('connect to the database') && (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-8 text-left max-w-md mx-auto">
              <h3 className="font-semibold text-yellow-800 mb-2">Troubleshooting Steps:</h3>
              <ul className="text-sm text-yellow-700 space-y-1">
                <li>• Check your internet connection</li>
                <li>• Verify Supabase configuration</li>
                <li>• Contact support if the issue persists</li>
              </ul>
            </div>
          )}
          <Link href="/blog">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              {labels.backToBlog}
            </Button>
          </Link>
        </div>
        <FooterSection theme="light" />
      </div>
    )
  }

  // Only render article if we have post data and no error
  if (post && !error) {
    return (
    <div className="min-h-screen bg-white">
      <NavbarSection theme="light" />
      
      {/* Article Header */}
      <section className="bg-neutral-50 border-b border-[#e4e4e4] py-16">
        <div className="max-w-4xl mx-auto px-4">
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {labels.backToBlog}
          </Link>
          
          <div className="space-y-6">
            <Badge className="bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] text-white">
              {getLocalizedContent(post, 'category')}
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-['Sora',Helvetica] text-[#080808] leading-tight">
              {getLocalizedContent(post, 'title')}
            </h1>
            
            <p className="text-xl md:text-2xl font-normal font-['Sora',Helvetica] text-[#5d5d5d] leading-relaxed">
              {getLocalizedContent(post, 'excerpt')}
            </p>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>{post.author_name}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{new Date(post.published_at || post.created_at || '').toLocaleDateString()}</span>
              </div>
              {post.read_time && (
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>{post.read_time}</span>
                </div>
              )}
            </div>
            
            {getLocalizedArray(post, 'tags').length > 0 && (
              <div className="flex items-center gap-2 flex-wrap">
                <Tag className="w-4 h-4 text-gray-500" />
                {getLocalizedArray(post, 'tags').map((tag, index) => (
                  <Badge key={index} variant="outline" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {getLocalizedFeaturedImage(post) && (
        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4">
            <img
              src={getLocalizedFeaturedImage(post)}
              alt={getLocalizedContent(post, 'title')}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
      )}

      {/* Article Content */}
      <section className="py-4">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border-none shadow-none bg-transparent">
            <CardContent className="p-0">
              <div 
                className="prose prose-lg max-w-none font-['Sora',Helvetica] text-gray-800 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: getLocalizedContent(post, 'content') }}
                style={{
                  fontSize: '18px',
                  lineHeight: '1.8'
                }}
              />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Author Info */}
      <section className="py-16 bg-neutral-50 border-t border-[#e4e4e4]">
        <div className="max-w-4xl mx-auto px-4">
          <Card className="border border-[#e4e4e4]">
            <CardContent className="p-8">
              <div className="flex items-center gap-4">
                {post.author_image ? (
                  <img
                    src={post.author_image}
                    alt={post.author_name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold font-['Sora',Helvetica] text-gray-900">
                    {post.author_name}
                  </h3>
                  <p className="text-gray-600 font-['Sora',Helvetica]">
                    {labels.author}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-white border-t border-[#e4e4e4]">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-semibold font-['Sora',Helvetica] text-gray-900 mb-8">
              {labels.relatedArticles}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${getLocalizedSlug(relatedPost)}`} className="block">
                  <Card className="border border-[#e4e4e4] rounded-xl hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <img
                        className="w-full h-40 object-cover rounded-lg mb-4"
                        alt={getLocalizedContent(relatedPost, 'title')}
                        src={getLocalizedFeaturedImage(relatedPost) || "/image-174-8.png"}
                      />
                      <div className="space-y-3 flex-1 flex flex-col">
                        <Badge className="bg-transparent hover:bg-transparent text-[#3072eb] font-['Sora',Helvetica] font-semibold text-sm w-fit">
                          {getLocalizedContent(relatedPost, 'category')}
                        </Badge>
                        <h3 className="font-['Sora',Helvetica] font-semibold text-gray-900 text-lg leading-tight">
                          {getLocalizedContent(relatedPost, 'title')}
                        </h3>
                        <p className="font-['Sora',Helvetica] font-normal text-gray-600 text-sm flex-1">
                          {getLocalizedContent(relatedPost, 'excerpt')}
                        </p>
                        <div className="mt-auto pt-3">
                          <div className="inline-flex items-center gap-2 text-[#3072eb] hover:text-[#2563eb]">
                            <span className="font-['Sora',Helvetica] font-semibold text-sm">
                              {labels.readMore}
                            </span>
                            <img className="w-3 h-3" alt="Arrow icon" src="/icon.svg" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FooterSection theme="light" />
    </div>
    )
  }

  // Fallback - should not reach here, but just in case
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Something went wrong. Please try again.</p>
        <Link href="/blog">
          <Button className="mt-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            {labels.backToBlog}
          </Button>
        </Link>
      </div>
    </div>
  )
}

// Fallback function to get related posts when database is unavailable
function getFallbackRelatedPosts(category: string, currentPostId: string, currentPostSlug: string): NetlinBlogPost[] {
  const allFallbackPosts: NetlinBlogPost[] = [
    {
      id: 'fallback-1',
      title: 'SEO Optimization Strategies for Modern Websites',
      title_de: 'SEO-Optimierungsstrategien für moderne Websites',
      slug: 'seo-optimization-strategies-modern-websites',
      excerpt: 'Discover the latest SEO techniques and strategies to improve your website\'s search engine rankings and drive more organic traffic.',
      excerpt_de: 'Entdecken Sie die neuesten SEO-Techniken und -Strategien zur Verbesserung der Suchmaschinenrankings Ihrer Website und zur Steigerung des organischen Traffics.',
      content: '',
      content_de: '',
      featured_image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg',
      author_name: 'Sarah Johnson',
      author_image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      category: 'SEO',
      category_de: 'SEO',
      tags: ['SEO', 'Digital Marketing', 'Web Development'],
      tags_de: ['SEO', 'Digitales Marketing', 'Webentwicklung'],
      status: 'published',
      read_time: '8 min read',
      published_at: '2024-01-15T10:00:00Z',
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-15T10:00:00Z'
    },
    {
      id: 'fallback-2',
      title: 'The Future of Business Automation: AI-Powered Solutions',
      title_de: 'Die Zukunft der Geschäftsautomatisierung: KI-gestützte Lösungen',
      slug: 'future-business-automation-ai-powered-solutions',
      excerpt: 'Explore how artificial intelligence is revolutionizing business processes and creating new opportunities for automation and efficiency.',
      excerpt_de: 'Erfahren Sie, wie künstliche Intelligenz Geschäftsprozesse revolutioniert und neue Möglichkeiten für Automatisierung und Effizienz schafft.',
      content: '',
      content_de: '',
      featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      author_name: 'Michael Chen',
      author_image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      category: 'Technology',
      category_de: 'Technologie',
      tags: ['AI', 'Automation', 'Business'],
      tags_de: ['KI', 'Automatisierung', 'Geschäft'],
      status: 'published',
      read_time: '6 min read',
      published_at: '2024-01-10T14:30:00Z',
      created_at: '2024-01-10T14:30:00Z',
      updated_at: '2024-01-10T14:30:00Z'
    },
    {
      id: 'fallback-3',
      title: 'Tiny Houses: The Future of Sustainable Living',
      title_de: 'Tiny Houses: Die Zukunft des nachhaltigen Wohnens',
      slug: 'tiny-houses-future-sustainable-living',
      excerpt: 'Explore how tiny houses are revolutionizing sustainable living and offering an eco-friendly alternative to traditional housing.',
      excerpt_de: 'Erfahren Sie, wie Tiny Houses das nachhaltige Wohnen revolutionieren und eine umweltfreundliche Alternative zum traditionellen Wohnen bieten.',
      content: '',
      content_de: '',
      featured_image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      author_name: 'Emma Rodriguez',
      author_image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      category: 'Lifestyle',
      category_de: 'Lebensstil',
      tags: ['Tiny Houses', 'Sustainability', 'Minimalism', 'Eco-Living'],
      tags_de: ['Tiny Houses', 'Nachhaltigkeit', 'Minimalismus', 'Öko-Leben'],
      status: 'published',
      read_time: '7 min read',
      published_at: '2024-01-08T09:15:00Z',
      created_at: '2024-01-08T09:15:00Z',
      updated_at: '2024-01-08T09:15:00Z'
    },
    {
      id: 'fallback-4',
      title: 'Web Development Best Practices for 2025',
      title_de: 'Best Practices für Webentwicklung 2025',
      slug: 'web-development-best-practices-2025',
      excerpt: 'Stay ahead of the curve with the latest web development trends, tools, and best practices that will define the industry in 2025.',
      excerpt_de: 'Bleiben Sie mit den neuesten Webentwicklungstrends, Tools und Best Practices, die die Branche 2025 prägen werden, auf dem Laufenden.',
      content: '',
      content_de: '',
      featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      author_name: 'David Kim',
      author_image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      category: 'Web Development',
      category_de: 'Webentwicklung',
      tags: ['Web Development', 'JavaScript', 'React', 'Best Practices', '2025'],
      tags_de: ['Webentwicklung', 'JavaScript', 'React', 'Best Practices', '2025'],
      status: 'published',
      read_time: '10 min read',
      published_at: '2024-01-05T16:45:00Z',
      created_at: '2024-01-05T16:45:00Z',
      updated_at: '2024-01-05T16:45:00Z'
    }
  ]

  return allFallbackPosts
    .filter(post => post.id !== currentPostId && post.slug !== currentPostSlug) // Exclude current post by both id and slug
    .filter(post => getLocalizedContent(post, 'category') === category) // Same category first
    .slice(0, 3) // Limit to 3 posts
}
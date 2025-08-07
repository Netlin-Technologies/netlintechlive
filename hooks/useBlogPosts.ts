import { useState, useEffect, useCallback } from 'react'
import { supabase, NetlinBlogPost } from '../lib/supabase'

export function useBlogPosts() {
  const [posts, setPosts] = useState<NetlinBlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchPosts = async () => {
    try {
      setLoading(true)
      setError(null)
      const { data, error } = await supabase
        .from('netlin_blog_posts')
        .select('*')
        .order('created_at', { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (err) {
      // Handle network/CORS errors specifically
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        console.log('Database unavailable, using fallback data')
        setPosts(getAllFallbackPosts())
        setError(null) // Clear error since we have fallback data
      } else {
        setError(err instanceof Error ? err.message : 'An error occurred')
      }
    } finally {
      setLoading(false)
    }
  }

  const createPost = async (post: Omit<NetlinBlogPost, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      console.log('Creating post:', post.title)
      const { data, error } = await supabase
        .from('netlin_blog_posts')
        .insert([post])
        .select()
        .single()

      if (error) {
        console.error('Supabase error:', error)
        throw new Error(`Database error: ${error.message}`)
      }
      
      console.log('Post created successfully:', data)
      setPosts(prev => [data, ...prev])
      return data
    } catch (err) {
      console.error('Create post error:', err)
      throw new Error(err instanceof Error ? err.message : 'Failed to create post')
    }
  }

  const updatePost = async (id: string, updates: Partial<NetlinBlogPost>) => {
    try {
      console.log('Updating post:', id, updates)
      const { data, error } = await supabase
        .from('netlin_blog_posts')
        .update(updates)
        .eq('id', id)
        .select()

      if (error) {
        console.error('Supabase error:', error)
        throw new Error(`Database error: ${error.message}`)
      }
      
      if (!data || data.length === 0) {
        throw new Error('Post not found or update failed')
      }
      
      const updatedPost = data[0]
      console.log('Post updated successfully:', updatedPost)
      setPosts(prev => prev.map(post => post.id === id ? updatedPost : post))
      return updatedPost
    } catch (err) {
      console.error('Update post error:', err)
      throw new Error(err instanceof Error ? err.message : 'Failed to update post')
    }
  }

  const deletePost = async (id: string) => {
    try {
      console.log('Deleting post:', id)
      const { error } = await supabase
        .from('netlin_blog_posts')
        .delete()
        .eq('id', id)

      if (error) {
        console.error('Supabase error:', error)
        throw new Error(`Database error: ${error.message}`)
      }
      
      console.log('Post deleted successfully')
      setPosts(prev => prev.filter(post => post.id !== id))
    } catch (err) {
      console.error('Delete post error:', err)
      throw new Error(err instanceof Error ? err.message : 'Failed to delete post')
    }
  }

  const getPostBySlug = useCallback(async (slug: string) => {
    try {
      console.log('Attempting to fetch post with slug:', slug)
      
      // Try to find post by English slug first, then German slug
      let { data, error } = await supabase
        .from('netlin_blog_posts')
        .select('*')
        .eq('slug', slug)
        .maybeSingle()

      // If not found by English slug, try German slug
      if (!data) {
        console.log('Post not found by English slug, trying German slug')
        const germanResult = await supabase
          .from('netlin_blog_posts')
          .select('*')
          .eq('slug_de', slug)
          .maybeSingle()
        
        data = germanResult.data
        error = germanResult.error
      }

      if (error) {
        console.error('Supabase error:', error)
        // If it's a network error, use fallback data
        if (error.message === 'Failed to fetch') {
          console.log('Network error, using fallback data')
          return getFallbackPost(slug)
        }
        throw new Error(`Database error: ${error.message}`)
      }
      
      // If no data found, use fallback
      if (!data) {
        console.log('Post not found in database, trying fallback data')
        return getFallbackPost(slug)
      }
      
      console.log('Post fetched successfully from database:', data.title)
      return data
    } catch (err) {
      // If network error, try fallback data as last resort
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        console.log('Network error, using fallback data')
        return getFallbackPost(slug)
      }
      console.error('getPostBySlug error:', err)
      return getFallbackPost(slug)
    }
  }, [])

  const getPublishedPosts = useCallback(async () => {
    try {
      // Check if we're in fallback mode (no real database connection)
      if (posts.length > 0 && posts[0].id.startsWith('fallback-')) {
        return posts.filter(post => post.status === 'published')
      }

      const { data, error } = await supabase
        .from('netlin_blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })

      if (error) throw error
      return data || []
    } catch (err) {
      // Handle network/CORS errors specifically
      if (err instanceof TypeError && err.message === 'Failed to fetch') {
        // Return published fallback posts instead of throwing error
        console.log('Network error in getPublishedPosts, using fallback data')
        return getAllFallbackPosts().filter(post => post.status === 'published')
      }
      console.error('getPublishedPosts error:', err)
      // Return fallback data instead of throwing error
      return getAllFallbackPosts().filter(post => post.status === 'published')
    }
  }, [posts])

  useEffect(() => {
    fetchPosts()
  }, [])

  return {
    posts,
    loading,
    error,
    createPost,
    updatePost,
    deletePost,
    getPostBySlug,
    getPublishedPosts,
    refetch: fetchPosts
  }
}

// Fallback data for when database is unavailable
function getFallbackPost(slug: string): NetlinBlogPost {
  const fallbackPosts: Record<string, NetlinBlogPost> = {
    'seo-optimization-strategies-modern-websites': {
      id: 'fallback-1',
      title: 'SEO Optimization Strategies for Modern Websites',
      slug: 'seo-optimization-strategies-modern-websites',
      excerpt: 'Discover the latest SEO techniques and strategies to improve your website\'s search engine rankings and drive more organic traffic.',
      content: `
        <h2>Introduction to Modern SEO</h2>
        <p>Search Engine Optimization (SEO) has evolved significantly over the years. Today's SEO strategies focus on user experience, content quality, and technical excellence.</p>
        
        <h2>Key SEO Strategies</h2>
        <ul>
          <li><strong>Content Quality:</strong> Create valuable, original content that answers user queries</li>
          <li><strong>Technical SEO:</strong> Optimize site speed, mobile responsiveness, and crawlability</li>
          <li><strong>User Experience:</strong> Focus on Core Web Vitals and overall site usability</li>
          <li><strong>Local SEO:</strong> Optimize for local search results if applicable</li>
        </ul>
        
        <h2>Implementation Tips</h2>
        <p>Start with keyword research, optimize your content structure, and ensure your website loads quickly across all devices.</p>
        
        <blockquote>
          "The best place to hide a dead body is page 2 of Google search results." - Anonymous SEO Expert
        </blockquote>
      `,
      featured_image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg',
      author_name: 'Sarah Johnson',
      author_image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      category: 'SEO',
      tags: ['SEO', 'Digital Marketing', 'Web Development'],
      status: 'published',
      read_time: '8 min read',
      published_at: '2024-01-15T10:00:00Z',
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-15T10:00:00Z'
    },
    'future-business-automation-ai-powered-solutions': {
      id: 'fallback-2',
      title: 'The Future of Business Automation: AI-Powered Solutions',
      slug: 'future-business-automation-ai-powered-solutions',
      excerpt: 'Explore how artificial intelligence is revolutionizing business processes and creating new opportunities for automation and efficiency.',
      content: `
        <h2>The AI Revolution in Business</h2>
        <p>Artificial Intelligence is transforming how businesses operate, from customer service to data analysis and decision-making processes.</p>
        
        <h2>Key Areas of AI Implementation</h2>
        <ul>
          <li><strong>Customer Service:</strong> Chatbots and virtual assistants</li>
          <li><strong>Data Analysis:</strong> Predictive analytics and insights</li>
          <li><strong>Process Automation:</strong> Workflow optimization</li>
          <li><strong>Marketing:</strong> Personalized campaigns and targeting</li>
        </ul>
        
        <h2>Benefits of AI Automation</h2>
        <p>AI-powered automation reduces costs, improves accuracy, and allows businesses to scale operations efficiently.</p>
        
        <blockquote>
          "AI is not about replacing humans, but about augmenting human capabilities." - Tech Industry Leader
        </blockquote>
      `,
      featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      author_name: 'Michael Chen',
      author_image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      category: 'Technology',
      tags: ['AI', 'Automation', 'Business'],
      status: 'published',
      read_time: '6 min read',
      published_at: '2024-01-10T14:30:00Z',
      created_at: '2024-01-10T14:30:00Z',
      updated_at: '2024-01-10T14:30:00Z'
    },
    'tiny-houses-future-sustainable-living': {
      id: 'fallback-3',
      title: 'Tiny Houses: The Future of Sustainable Living',
      slug: 'tiny-houses-future-sustainable-living',
      excerpt: 'Explore how tiny houses are revolutionizing sustainable living and offering an eco-friendly alternative to traditional housing.',
      content: `
        <h2>The Rise of Tiny House Movement</h2>
        <p>The tiny house movement represents a significant shift towards minimalist, sustainable living. These compact homes typically range from 100 to 400 square feet and offer a unique solution to housing affordability and environmental concerns.</p>
        
        <h2>Benefits of Tiny House Living</h2>
        <ul>
          <li><strong>Environmental Impact:</strong> Reduced carbon footprint and energy consumption</li>
          <li><strong>Financial Freedom:</strong> Lower mortgage payments and reduced living expenses</li>
          <li><strong>Minimalist Lifestyle:</strong> Focus on experiences over possessions</li>
          <li><strong>Mobility:</strong> Many tiny houses are built on wheels for easy relocation</li>
        </ul>
        
        <h2>Design Innovations</h2>
        <p>Modern tiny houses incorporate clever design solutions like multi-functional furniture, vertical storage, and space-saving appliances to maximize every square foot.</p>
        
        <h2>Challenges and Considerations</h2>
        <p>While tiny houses offer many benefits, potential residents should consider zoning laws, financing options, and lifestyle adjustments before making the transition.</p>
        
        <blockquote>
          "Living in a tiny house taught me that happiness doesn't come from the size of your space, but from how you use it." - Tiny House Owner
        </blockquote>
      `,
      featured_image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      author_name: 'Emma Rodriguez',
      author_image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      category: 'Lifestyle',
      tags: ['Tiny Houses', 'Sustainability', 'Minimalism', 'Eco-Living'],
      status: 'published',
      read_time: '7 min read',
      published_at: '2024-01-08T09:15:00Z',
      created_at: '2024-01-08T09:15:00Z',
      updated_at: '2024-01-08T09:15:00Z'
    },
    'web-development-best-practices-2025': {
      id: 'fallback-4',
      title: 'Web Development Best Practices for 2025',
      slug: 'web-development-best-practices-2025',
      excerpt: 'Stay ahead of the curve with the latest web development trends, tools, and best practices that will define the industry in 2025.',
      content: `
        <h2>The Evolution of Web Development</h2>
        <p>As we move into 2025, web development continues to evolve rapidly. New frameworks, tools, and methodologies are reshaping how we build and deploy web applications.</p>
        
        <h2>Key Trends for 2025</h2>
        <ul>
          <li><strong>AI Integration:</strong> AI-powered development tools and features</li>
          <li><strong>Performance Optimization:</strong> Core Web Vitals and speed improvements</li>
          <li><strong>Accessibility First:</strong> Building inclusive web experiences</li>
          <li><strong>Progressive Web Apps:</strong> Bridging the gap between web and mobile</li>
          <li><strong>Serverless Architecture:</strong> Scalable and cost-effective solutions</li>
        </ul>
        
        <h2>Essential Tools and Frameworks</h2>
        <p>Modern web development relies on powerful tools like React, Vue.js, Next.js, and TypeScript. These technologies enable developers to build robust, scalable applications efficiently.</p>
        
        <h2>Security Best Practices</h2>
        <p>With increasing cyber threats, implementing proper security measures including HTTPS, input validation, and secure authentication is more critical than ever.</p>
        
        <h2>Mobile-First Development</h2>
        <p>Responsive design and mobile-first approaches ensure optimal user experiences across all devices and screen sizes.</p>
        
        <blockquote>
          "The best web developers are those who never stop learning and adapting to new technologies." - Senior Developer
        </blockquote>
      `,
      featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      author_name: 'David Kim',
      author_image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      category: 'Web Development',
      tags: ['Web Development', 'JavaScript', 'React', 'Best Practices', '2025'],
      status: 'published',
      read_time: '10 min read',
      published_at: '2024-01-05T16:45:00Z',
      created_at: '2024-01-05T16:45:00Z',
      updated_at: '2024-01-05T16:45:00Z'
    }
  }
  
  return fallbackPosts[slug] || {
    id: 'fallback-default',
    title: 'Article Not Found',
    slug: slug,
    excerpt: 'The requested article could not be found.',
    content: '<p>Sorry, the article you are looking for is not available.</p>',
    featured_image: 'https://images.pexels.com/photos/261909/pexels-photo-261909.jpeg',
    author_name: 'Admin',
    category: 'General',
    tags: [],
    status: 'published',
    read_time: '1 min read',
    published_at: new Date().toISOString(),
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
}

// Helper function to get all fallback posts as an array
function getAllFallbackPosts(): NetlinBlogPost[] {
  return [
    {
      id: 'fallback-1',
      title: 'SEO Optimization Strategies for Modern Websites',
      slug: 'seo-optimization-strategies-modern-websites',
      excerpt: 'Discover the latest SEO techniques and strategies to improve your website\'s search engine rankings and drive more organic traffic.',
      content: `
        <h2>Introduction to Modern SEO</h2>
        <p>Search Engine Optimization (SEO) has evolved significantly over the years. Today's SEO strategies focus on user experience, content quality, and technical excellence.</p>
        
        <h2>Key SEO Strategies</h2>
        <ul>
          <li><strong>Content Quality:</strong> Create valuable, original content that answers user queries</li>
          <li><strong>Technical SEO:</strong> Optimize site speed, mobile responsiveness, and crawlability</li>
          <li><strong>User Experience:</strong> Focus on Core Web Vitals and overall site usability</li>
          <li><strong>Local SEO:</strong> Optimize for local search results if applicable</li>
        </ul>
        
        <h2>Implementation Tips</h2>
        <p>Start with keyword research, optimize your content structure, and ensure your website loads quickly across all devices.</p>
        
        <blockquote>
          "The best place to hide a dead body is page 2 of Google search results." - Anonymous SEO Expert
        </blockquote>
      `,
      featured_image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg',
      author_name: 'Sarah Johnson',
      author_image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
      category: 'SEO',
      tags: ['SEO', 'Digital Marketing', 'Web Development'],
      status: 'published',
      read_time: '8 min read',
      published_at: '2024-01-15T10:00:00Z',
      created_at: '2024-01-15T10:00:00Z',
      updated_at: '2024-01-15T10:00:00Z'
    },
    {
      id: 'fallback-2',
      title: 'The Future of Business Automation: AI-Powered Solutions',
      slug: 'future-business-automation-ai-powered-solutions',
      excerpt: 'Explore how artificial intelligence is revolutionizing business processes and creating new opportunities for automation and efficiency.',
      content: `
        <h2>The AI Revolution in Business</h2>
        <p>Artificial Intelligence is transforming how businesses operate, from customer service to data analysis and decision-making processes.</p>
        
        <h2>Key Areas of AI Implementation</h2>
        <ul>
          <li><strong>Customer Service:</strong> Chatbots and virtual assistants</li>
          <li><strong>Data Analysis:</strong> Predictive analytics and insights</li>
          <li><strong>Process Automation:</strong> Workflow optimization</li>
          <li><strong>Marketing:</strong> Personalized campaigns and targeting</li>
        </ul>
        
        <h2>Benefits of AI Automation</h2>
        <p>AI-powered automation reduces costs, improves accuracy, and allows businesses to scale operations efficiently.</p>
        
        <blockquote>
          "AI is not about replacing humans, but about augmenting human capabilities." - Tech Industry Leader
        </blockquote>
      `,
      featured_image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg',
      author_name: 'Michael Chen',
      author_image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      category: 'Technology',
      tags: ['AI', 'Automation', 'Business'],
      status: 'published',
      read_time: '6 min read',
      published_at: '2024-01-10T14:30:00Z',
      created_at: '2024-01-10T14:30:00Z',
      updated_at: '2024-01-10T14:30:00Z'
    },
    {
      id: 'fallback-3',
      title: 'Tiny Houses: The Future of Sustainable Living',
      slug: 'tiny-houses-future-sustainable-living',
      excerpt: 'Explore how tiny houses are revolutionizing sustainable living and offering an eco-friendly alternative to traditional housing.',
      content: `
        <h2>The Rise of Tiny House Movement</h2>
        <p>The tiny house movement represents a significant shift towards minimalist, sustainable living. These compact homes typically range from 100 to 400 square feet and offer a unique solution to housing affordability and environmental concerns.</p>
        
        <h2>Benefits of Tiny House Living</h2>
        <ul>
          <li><strong>Environmental Impact:</strong> Reduced carbon footprint and energy consumption</li>
          <li><strong>Financial Freedom:</strong> Lower mortgage payments and reduced living expenses</li>
          <li><strong>Minimalist Lifestyle:</strong> Focus on experiences over possessions</li>
          <li><strong>Mobility:</strong> Many tiny houses are built on wheels for easy relocation</li>
        </ul>
        
        <h2>Design Innovations</h2>
        <p>Modern tiny houses incorporate clever design solutions like multi-functional furniture, vertical storage, and space-saving appliances to maximize every square foot.</p>
        
        <h2>Challenges and Considerations</h2>
        <p>While tiny houses offer many benefits, potential residents should consider zoning laws, financing options, and lifestyle adjustments before making the transition.</p>
        
        <blockquote>
          "Living in a tiny house taught me that happiness doesn't come from the size of your space, but from how you use it." - Tiny House Owner
        </blockquote>
      `,
      featured_image: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg',
      author_name: 'Emma Rodriguez',
      author_image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      category: 'Lifestyle',
      tags: ['Tiny Houses', 'Sustainability', 'Minimalism', 'Eco-Living'],
      status: 'published',
      read_time: '7 min read',
      published_at: '2024-01-08T09:15:00Z',
      created_at: '2024-01-08T09:15:00Z',
      updated_at: '2024-01-08T09:15:00Z'
    },
    {
      id: 'fallback-4',
      title: 'Web Development Best Practices for 2025',
      slug: 'web-development-best-practices-2025',
      excerpt: 'Stay ahead of the curve with the latest web development trends, tools, and best practices that will define the industry in 2025.',
      content: `
        <h2>The Evolution of Web Development</h2>
        <p>As we move into 2025, web development continues to evolve rapidly. New frameworks, tools, and methodologies are reshaping how we build and deploy web applications.</p>
        
        <h2>Key Trends for 2025</h2>
        <ul>
          <li><strong>AI Integration:</strong> AI-powered development tools and features</li>
          <li><strong>Performance Optimization:</strong> Core Web Vitals and speed improvements</li>
          <li><strong>Accessibility First:</strong> Building inclusive web experiences</li>
          <li><strong>Progressive Web Apps:</strong> Bridging the gap between web and mobile</li>
          <li><strong>Serverless Architecture:</strong> Scalable and cost-effective solutions</li>
        </ul>
        
        <h2>Essential Tools and Frameworks</h2>
        <p>Modern web development relies on powerful tools like React, Vue.js, Next.js, and TypeScript. These technologies enable developers to build robust, scalable applications efficiently.</p>
        
        <h2>Security Best Practices</h2>
        <p>With increasing cyber threats, implementing proper security measures including HTTPS, input validation, and secure authentication is more critical than ever.</p>
        
        <h2>Mobile-First Development</h2>
        <p>Responsive design and mobile-first approaches ensure optimal user experiences across all devices and screen sizes.</p>
        
        <blockquote>
          "The best web developers are those who never stop learning and adapting to new technologies." - Senior Developer
        </blockquote>
      `,
      featured_image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg',
      author_name: 'David Kim',
      author_image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg',
      category: 'Web Development',
      tags: ['Web Development', 'JavaScript', 'React', 'Best Practices', '2025'],
      status: 'published',
      read_time: '10 min read',
      published_at: '2024-01-05T16:45:00Z',
      created_at: '2024-01-05T16:45:00Z',
      updated_at: '2024-01-05T16:45:00Z'
    }
  ]
}
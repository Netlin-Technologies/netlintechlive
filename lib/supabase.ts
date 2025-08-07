import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

console.log('Supabase configuration:', {
  url: supabaseUrl ? 'Set' : 'Missing',
  key: supabaseAnonKey ? 'Set' : 'Missing'
})

// Validate environment variables
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  },
  db: {
    schema: 'public'
  },
  realtime: {
    params: {
      eventsPerSecond: 10
    }
  }
})

// Export configuration for validation
export const supabaseConfig = {
  supabaseUrl,
  supabaseKey: supabaseAnonKey
}

export type NetlinBlogPost = {
  id: string
  title: string
  title_de?: string
  slug: string
  slug_de?: string
  excerpt: string
  excerpt_de?: string
  content: string
  content_de?: string
  featured_image?: string
  author_name: string
  author_image?: string
  category: string
  category_de?: string
  tags?: string[]
  tags_de?: string[]
  featured_image_de?: string
  status: 'draft' | 'published'
  read_time?: string
  published_at?: string
  created_at?: string
  updated_at?: string
}
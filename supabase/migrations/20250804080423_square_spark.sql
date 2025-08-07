/*
  # Create Netlin Blog Posts Table

  1. New Tables
    - `netlin_blog_posts`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `slug` (text, unique, required)
      - `excerpt` (text, required)
      - `content` (text, required)
      - `featured_image` (text, optional)
      - `author_name` (text, required)
      - `author_image` (text, optional)
      - `category` (text, required)
      - `tags` (text array, optional)
      - `status` (text, draft/published)
      - `read_time` (text, optional)
      - `published_at` (timestamp, optional)
      - `created_at` (timestamp, default now)
      - `updated_at` (timestamp, default now)

  2. Security
    - Enable RLS on `netlin_blog_posts` table
    - Add policies for public read access to published posts
    - Add policies for authenticated users to manage all posts

  3. Sample Data
    - Insert sample blog posts including the "tiny-houses-are-the-future" article
*/

-- Create the netlin_blog_posts table
CREATE TABLE IF NOT EXISTS netlin_blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text NOT NULL,
  content text NOT NULL,
  featured_image text,
  author_name text NOT NULL,
  author_image text,
  category text NOT NULL,
  tags text[] DEFAULT '{}',
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  read_time text,
  published_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_netlin_blog_posts_slug ON netlin_blog_posts (slug);
CREATE INDEX IF NOT EXISTS idx_netlin_blog_posts_status ON netlin_blog_posts (status);
CREATE INDEX IF NOT EXISTS idx_netlin_blog_posts_category ON netlin_blog_posts (category);
CREATE INDEX IF NOT EXISTS idx_netlin_blog_posts_published_at ON netlin_blog_posts (published_at DESC);

-- Enable Row Level Security
ALTER TABLE netlin_blog_posts ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can read published blog posts"
  ON netlin_blog_posts
  FOR SELECT
  TO public
  USING (status = 'published');

CREATE POLICY "Authenticated users can read all blog posts"
  ON netlin_blog_posts
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can insert blog posts"
  ON netlin_blog_posts
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON netlin_blog_posts
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated users can delete blog posts"
  ON netlin_blog_posts
  FOR DELETE
  TO authenticated
  USING (true);

-- Create trigger function for updating updated_at
CREATE OR REPLACE FUNCTION update_netlin_blog_posts_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger
CREATE TRIGGER update_netlin_blog_posts_updated_at
  BEFORE UPDATE ON netlin_blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_netlin_blog_posts_updated_at();

-- Insert sample blog posts
INSERT INTO netlin_blog_posts (
  title,
  slug,
  excerpt,
  content,
  featured_image,
  author_name,
  author_image,
  category,
  tags,
  status,
  read_time,
  published_at
) VALUES 
(
  'The Future of Business Automation: AI-Powered Solutions',
  'future-business-automation-ai-powered-solutions',
  'Discover how AI-powered automation is revolutionizing business operations and eliminating manual work across industries.',
  '<h2>Introduction to Business Automation</h2><p>In today''s fast-paced business environment, automation has become more than just a competitive advantage—it''s a necessity. Companies that embrace AI-powered automation are seeing dramatic improvements in efficiency, cost reduction, and scalability.</p><h3>Key Benefits of AI Automation</h3><ul><li><strong>Increased Efficiency:</strong> Automate repetitive tasks and focus on strategic work</li><li><strong>Cost Reduction:</strong> Reduce operational costs by up to 60%</li><li><strong>Scalability:</strong> Handle growing workloads without proportional staff increases</li><li><strong>Accuracy:</strong> Eliminate human errors in data processing</li></ul><h3>Real-World Applications</h3><p>From customer service chatbots to automated data analysis, AI automation is transforming every aspect of business operations. Companies are using these technologies to:</p><blockquote><p>"Automation is not about replacing humans, but about empowering them to do more meaningful work."</p></blockquote><p>The future belongs to businesses that can successfully integrate AI automation into their core operations while maintaining the human touch where it matters most.</p>',
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Sarah Johnson',
  'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
  'Automation',
  ARRAY['AI', 'Automation', 'Business', 'Technology'],
  'published',
  '5 min read',
  NOW() - INTERVAL '2 days'
),
(
  'SEO Optimization Strategies for Modern Websites',
  'seo-optimization-strategies-modern-websites',
  'Learn the latest SEO techniques and strategies to improve your website''s search engine rankings and drive organic traffic.',
  '<h2>Modern SEO: Beyond Keywords</h2><p>Search Engine Optimization has evolved significantly over the past few years. Today''s SEO strategies focus on user experience, content quality, and technical excellence rather than just keyword stuffing.</p><h3>Core SEO Principles</h3><ol><li><strong>Content Quality:</strong> Create valuable, original content that serves user intent</li><li><strong>Technical SEO:</strong> Ensure fast loading times and mobile responsiveness</li><li><strong>User Experience:</strong> Design for engagement and easy navigation</li><li><strong>Authority Building:</strong> Develop high-quality backlinks and citations</li></ol><h3>Technical Implementation</h3><p>Modern SEO requires attention to technical details:</p><ul><li>Core Web Vitals optimization</li><li>Schema markup implementation</li><li>Mobile-first indexing preparation</li><li>Site architecture optimization</li></ul><p>The key to successful SEO is understanding that search engines prioritize websites that provide genuine value to users. Focus on creating content that answers questions, solves problems, and provides actionable insights.</p>',
  'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Michael Chen',
  'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
  'SEO',
  ARRAY['SEO', 'Digital Marketing', 'Web Development', 'Content Strategy'],
  'published',
  '7 min read',
  NOW() - INTERVAL '5 days'
),
(
  'Tiny Houses: The Future of Sustainable Living',
  'tiny-houses-are-the-future',
  'Explore how tiny houses are revolutionizing sustainable living and offering an alternative to traditional housing models.',
  '<h2>The Tiny House Movement</h2><p>The tiny house movement represents more than just a housing trend—it''s a lifestyle philosophy that prioritizes sustainability, financial freedom, and intentional living. As housing costs continue to rise and environmental concerns grow, tiny houses offer a compelling alternative.</p><h3>Benefits of Tiny House Living</h3><ul><li><strong>Environmental Impact:</strong> Reduced carbon footprint and resource consumption</li><li><strong>Financial Freedom:</strong> Lower mortgage payments and utility costs</li><li><strong>Minimalist Lifestyle:</strong> Focus on experiences over possessions</li><li><strong>Mobility:</strong> Freedom to relocate and travel</li></ul><h3>Design Innovation</h3><p>Modern tiny houses showcase incredible design innovation, maximizing every square foot through:</p><blockquote><p>"Living simply is not about deprivation, but about finding abundance in less."</p></blockquote><ul><li>Multi-functional furniture and storage solutions</li><li>Vertical space utilization</li><li>Smart home technology integration</li><li>Sustainable building materials</li></ul><h3>Challenges and Considerations</h3><p>While tiny house living offers many benefits, it''s important to consider the challenges:</p><ol><li>Zoning and legal restrictions</li><li>Limited storage space</li><li>Financing difficulties</li><li>Social adjustments</li></ol><p>The tiny house movement continues to grow as more people seek sustainable, affordable housing solutions that align with their values and lifestyle goals.</p>',
  'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Emma Rodriguez',
  'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150',
  'Sustainability',
  ARRAY['Tiny Houses', 'Sustainability', 'Lifestyle', 'Housing'],
  'published',
  '6 min read',
  NOW() - INTERVAL '1 day'
),
(
  'Web Development Best Practices for 2025',
  'web-development-best-practices-2025',
  'Stay ahead of the curve with the latest web development trends, tools, and best practices for building modern applications.',
  '<h2>The Evolution of Web Development</h2><p>Web development continues to evolve at a rapid pace, with new frameworks, tools, and methodologies emerging regularly. Staying current with best practices is essential for building performant, secure, and maintainable applications.</p><h3>Modern Development Stack</h3><p>The current web development landscape favors:</p><ul><li><strong>React/Next.js:</strong> For building interactive user interfaces</li><li><strong>TypeScript:</strong> For type-safe JavaScript development</li><li><strong>Tailwind CSS:</strong> For utility-first styling</li><li><strong>Supabase/Firebase:</strong> For backend-as-a-service solutions</li></ul><h3>Performance Optimization</h3><p>Performance remains critical for user experience and SEO:</p><ol><li>Implement lazy loading for images and components</li><li>Optimize bundle sizes with code splitting</li><li>Use CDNs for static asset delivery</li><li>Implement proper caching strategies</li></ol><h3>Security Considerations</h3><p>Security should be built into every layer of your application:</p><blockquote><p>"Security is not a feature, it''s a foundation."</p></blockquote><ul><li>Input validation and sanitization</li><li>HTTPS everywhere</li><li>Content Security Policy implementation</li><li>Regular dependency updates</li></ul><p>The key to successful web development in 2025 is balancing innovation with stability, ensuring that new technologies serve real user needs rather than just following trends.</p>',
  'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800',
  'David Kim',
  'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150',
  'Web Development',
  ARRAY['Web Development', 'JavaScript', 'React', 'Best Practices'],
  'published',
  '8 min read',
  NOW() - INTERVAL '3 days'
);
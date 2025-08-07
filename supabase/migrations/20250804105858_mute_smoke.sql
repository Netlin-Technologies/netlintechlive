/*
  # Add multilingual support to blog posts

  1. Schema Changes
    - Add German language fields to netlin_blog_posts table
    - Add title_de, excerpt_de, content_de, category_de columns
    - Add tags_de array field for German tags
    - Maintain existing English fields for backward compatibility

  2. Indexes
    - Add indexes for German content fields for better performance
    - Maintain existing indexes for English content

  3. Security
    - RLS policies remain the same as they apply to the entire row
    - No additional security changes needed
*/

-- Add German language columns to netlin_blog_posts table
DO $$
BEGIN
  -- Add German title field
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'netlin_blog_posts' AND column_name = 'title_de'
  ) THEN
    ALTER TABLE netlin_blog_posts ADD COLUMN title_de text;
  END IF;

  -- Add German excerpt field
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'netlin_blog_posts' AND column_name = 'excerpt_de'
  ) THEN
    ALTER TABLE netlin_blog_posts ADD COLUMN excerpt_de text;
  END IF;

  -- Add German content field
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'netlin_blog_posts' AND column_name = 'content_de'
  ) THEN
    ALTER TABLE netlin_blog_posts ADD COLUMN content_de text;
  END IF;

  -- Add German category field
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'netlin_blog_posts' AND column_name = 'category_de'
  ) THEN
    ALTER TABLE netlin_blog_posts ADD COLUMN category_de text;
  END IF;

  -- Add German tags field
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'netlin_blog_posts' AND column_name = 'tags_de'
  ) THEN
    ALTER TABLE netlin_blog_posts ADD COLUMN tags_de text[] DEFAULT '{}';
  END IF;
END $$;

-- Add indexes for German content fields for better search performance
CREATE INDEX IF NOT EXISTS idx_netlin_blog_posts_title_de ON netlin_blog_posts (title_de);
CREATE INDEX IF NOT EXISTS idx_netlin_blog_posts_category_de ON netlin_blog_posts (category_de);

-- Add comments for documentation
COMMENT ON COLUMN netlin_blog_posts.title_de IS 'German version of the blog post title';
COMMENT ON COLUMN netlin_blog_posts.excerpt_de IS 'German version of the blog post excerpt';
COMMENT ON COLUMN netlin_blog_posts.content_de IS 'German version of the blog post content';
COMMENT ON COLUMN netlin_blog_posts.category_de IS 'German version of the blog post category';
COMMENT ON COLUMN netlin_blog_posts.tags_de IS 'German version of the blog post tags';
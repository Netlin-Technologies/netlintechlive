/*
  # Add German slug field to blog posts

  1. Schema Changes
    - Add `slug_de` column to `netlin_blog_posts` table
    - Add unique constraint for German slugs
    - Add index for better query performance

  2. Data Migration
    - Set default German slugs based on existing slugs
    - Ensure no duplicate slugs exist

  3. Security
    - No RLS changes needed (inherits from table)
*/

-- Add German slug column
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'netlin_blog_posts' AND column_name = 'slug_de'
  ) THEN
    ALTER TABLE netlin_blog_posts ADD COLUMN slug_de text;
  END IF;
END $$;

-- Add unique constraint for German slugs
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.table_constraints
    WHERE table_name = 'netlin_blog_posts' AND constraint_name = 'netlin_blog_posts_slug_de_key'
  ) THEN
    ALTER TABLE netlin_blog_posts ADD CONSTRAINT netlin_blog_posts_slug_de_key UNIQUE (slug_de);
  END IF;
END $$;

-- Add index for German slugs
CREATE INDEX IF NOT EXISTS idx_netlin_blog_posts_slug_de ON netlin_blog_posts (slug_de);

-- Set default German slugs for existing posts (append -de to avoid conflicts)
UPDATE netlin_blog_posts 
SET slug_de = slug || '-de' 
WHERE slug_de IS NULL AND slug IS NOT NULL;
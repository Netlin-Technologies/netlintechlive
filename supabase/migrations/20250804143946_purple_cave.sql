/*
  # Add German featured image column

  1. Schema Changes
    - Add `featured_image_de` column to `netlin_blog_posts` table
    - Column type: text (nullable)
    - Purpose: Store German-specific featured image URLs

  2. Notes
    - This allows different featured images for German and English versions
    - Column is nullable to maintain backward compatibility
    - Existing posts will have NULL for this field initially
*/

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'netlin_blog_posts' AND column_name = 'featured_image_de'
  ) THEN
    ALTER TABLE netlin_blog_posts ADD COLUMN featured_image_de text;
  END IF;
END $$;
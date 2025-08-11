/** @type {import('next').NextConfig} */
const nextConfig = {
  // Only use static export for production builds when explicitly requested
  ...(process.env.BUILD_STATIC === 'true' && { output: 'export' }),
  // Keep URLs without a trailing slash (e.g., /automation)
  trailingSlash: false,
  
  env: {
    LOCALE: process.env.NEXT_PUBLIC_LOCALE || 'en',
  },
}

module.exports = nextConfig
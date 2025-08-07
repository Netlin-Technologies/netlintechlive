// Locale utilities for multilingual support

export const getLocale = (): 'en' | 'de' => {
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  return locale === 'de' ? 'de' : 'en'
}

export const isGerman = (): boolean => {
  return getLocale() === 'de'
}

export const isEnglish = (): boolean => {
  return getLocale() === 'en'
}

// Get localized content from blog post
export const getLocalizedContent = (post: any, field: string): string => {
  const locale = getLocale()
  
  if (locale === 'de') {
    const germanField = `${field}_de`
    return post[germanField] || post[field] || ''
  }
  
  return post[field] || ''
}

// Get localized array content (like tags)
export const getLocalizedArray = (post: any, field: string): string[] => {
  const locale = getLocale()
  
  if (locale === 'de') {
    const germanField = `${field}_de`
    return post[germanField] || post[field] || []
  }
  
  return post[field] || []
}

// Get localized slug
export const getLocalizedSlug = (post: any): string => {
  const locale = getLocale()
  
  if (locale === 'de') {
    return post.slug_de || post.slug || ''
  }
  
  return post.slug || ''
}

// Get localized featured image
export const getLocalizedFeaturedImage = (post: any): string => {
  const locale = getLocale()
  
  if (locale === 'de') {
    return post.featured_image_de || post.featured_image || ''
  }
  
  return post.featured_image || ''
}

// Language labels for UI
export const getLanguageLabels = () => {
  const locale = getLocale()
  
  if (locale === 'de') {
    return {
      allArticles: 'Alle Artikel',
      searchPlaceholder: 'Artikel suchen...',
      learnMore: 'Mehr erfahren',
      backToBlog: 'Zurück zum Blog',
      author: 'Autor',
      relatedArticles: 'Ähnliche Artikel',
      readMore: 'Weiterlesen',
      noArticlesFound: 'Keine Artikel gefunden',
      adjustFilters: 'Versuchen Sie, Ihre Such- oder Kategoriefilter anzupassen',
      loadingArticles: 'Artikel werden geladen...',
      articleNotFound: 'Artikel nicht gefunden',
      articleNotFoundDesc: 'Der gesuchte Artikel existiert nicht oder wurde entfernt.',
      connectionError: 'Verbindungsfehler',
      category: 'Kategorie',
      publishedOn: 'Veröffentlicht am',
      readTime: 'Lesezeit'
    }
  }
  
  return {
    allArticles: 'All Articles',
    searchPlaceholder: 'Search articles...',
    learnMore: 'Learn More',
    backToBlog: 'Back to Blog',
    author: 'Author',
    relatedArticles: 'Related Articles',
    readMore: 'Read More',
    noArticlesFound: 'No articles found',
    adjustFilters: 'Try adjusting your search or category filter',
    loadingArticles: 'Loading articles...',
    articleNotFound: 'Article Not Found',
    articleNotFoundDesc: "The article you're looking for doesn't exist or has been removed.",
    connectionError: 'Connection Error',
    category: 'Category',
    publishedOn: 'Published on',
    readTime: 'read'
  }
}
import React, { useState, useEffect } from 'react'
import { ArrowLeft, Save, Eye, Languages, Loader2 } from 'lucide-react'
import slugify from 'slugify'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Badge } from '../../components/ui/badge'
import { RichTextEditor } from '../../components/RichTextEditor'
import { useBlogPosts } from '../../hooks/useBlogPosts'
import { NetlinBlogPost } from '../../lib/supabase'
import { translateToGerman, isOpenAIConfigured } from '../../lib/openai'

interface BlogEditorProps {
  post: NetlinBlogPost | null
  onClose: () => void
  isCreating: boolean
}

export const BlogEditor: React.FC<BlogEditorProps> = ({ post, onClose, isCreating }) => {
  const { createPost, updatePost } = useBlogPosts()
  const [loading, setSaving] = useState(false)
  const [translating, setTranslating] = useState(false)
  const [activeLanguage, setActiveLanguage] = useState<'en' | 'de'>('en')
  const [tagsInput, setTagsInput] = useState('')
  const [tagsInputDe, setTagsInputDe] = useState('')
  const [formData, setFormData] = useState({
    title: '',
    title_de: '',
    slug: '',
    slug_de: '',
    excerpt: '',
    excerpt_de: '',
    content: '',
    content_de: '',
    featured_image: '',
    author_name: '',
    author_image: '',
    category: '',
    category_de: '',
    tags: [] as string[],
    tags_de: [] as string[],
    featured_image_de: '',
    status: 'draft' as 'draft' | 'published',
    read_time: ''
  })

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        title_de: post.title_de || '',
        slug: post.slug || '',
        slug_de: post.slug_de || '',
        excerpt: post.excerpt || '',
        excerpt_de: post.excerpt_de || '',
        content: post.content || '',
        content_de: post.content_de || '',
        featured_image: post.featured_image || '',
        author_name: post.author_name || '',
        author_image: post.author_image || '',
        category: post.category || '',
        category_de: post.category_de || '',
        tags: post.tags || [],
        tags_de: post.tags_de || [],
        featured_image_de: post.featured_image_de || '',
        status: post.status || 'draft',
        read_time: post.read_time || ''
      })
      setTagsInput((post.tags || []).join(', '))
      setTagsInputDe((post.tags_de || []).join(', '))
    }
  }, [post])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === 'title' && { slug: slugify(value, { lower: true, strict: true }) }),
      ...(field === 'title_de' && { slug_de: slugify(value, { lower: true, strict: true }) })
    }))
  }

  const handleTagsChange = (value: string) => {
    if (activeLanguage === 'de') {
      setTagsInputDe(value)
      const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag)
      setFormData(prev => ({ ...prev, tags_de: tags }))
    } else {
      setTagsInput(value)
      const tags = value.split(',').map(tag => tag.trim()).filter(tag => tag)
      setFormData(prev => ({ ...prev, tags: tags }))
    }
  }

  const calculateReadTime = (content: string) => {
    const wordsPerMinute = 200
    const words = content.replace(/<[^>]*>/g, '').split(/\s+/).length
    const minutes = Math.ceil(words / wordsPerMinute)
    return `${minutes} min read`
  }

  const handleTranslateToGerman = async () => {
    // Validate required English fields
    if (!formData.title || !formData.excerpt || !formData.content || !formData.category) {
      alert('Please fill in all English fields (Title, Excerpt, Content, Category) before translating.')
      return
    }

    setTranslating(true)
    try {
      const translation = await translateToGerman({
        title: formData.title,
        excerpt: formData.excerpt,
        content: formData.content,
        category: formData.category,
        tags: formData.tags
      })

      // Update form data with translations
      setFormData(prev => ({
        ...prev,
        title_de: translation.title_de,
        excerpt_de: translation.excerpt_de,
        content_de: translation.content_de,
        category_de: translation.category_de,
        tags_de: translation.tags_de,
        slug_de: translation.slug_de
      }))

      // Update tags input for German
      setTagsInputDe(translation.tags_de.join(', '))

      // Switch to German tab to show results
      setActiveLanguage('de')

      alert('Translation completed successfully! Check the German tab to review the translations.')
    } catch (error) {
      console.error('Translation failed:', error)
      const errorMessage = error instanceof Error ? error.message : 'Translation failed'
      alert(`Translation failed: ${errorMessage}`)
    } finally {
      setTranslating(false)
    }
  }

  const handleSave = async (status: 'draft' | 'published') => {
    // Validate required fields for both languages
    const missingFields = []
    if (!formData.title) missingFields.push('English Title')
    if (!formData.content) missingFields.push('English Content')
    if (!formData.author_name) missingFields.push('Author Name')
    if (!formData.category) missingFields.push('English Category')
    if (!formData.excerpt) missingFields.push('English Excerpt')
    
    // Only validate German fields if German content exists (optional for now)
    const hasGermanContent = formData.title_de || formData.content_de || formData.excerpt_de || formData.category_de
    if (hasGermanContent) {
      if (!formData.title_de) missingFields.push('German Title')
      if (!formData.content_de) missingFields.push('German Content')
      if (!formData.category_de) missingFields.push('German Category')
      if (!formData.excerpt_de) missingFields.push('German Excerpt')
    }
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`)
      return
    }

    setSaving(true)
    try {
      // Only include German fields if they have actual content
      const hasGermanContent = formData.title_de || formData.content_de || formData.excerpt_de || formData.category_de
      
      const postData = {
        title: formData.title,
        slug: formData.slug,
        excerpt: formData.excerpt,
        content: formData.content,
        featured_image: formData.featured_image || undefined,
        author_name: formData.author_name,
        author_image: formData.author_image || undefined,
        category: formData.category,
        tags: formData.tags,
        status,
        read_time: calculateReadTime(formData.content),
        published_at: status === 'published' ? new Date().toISOString() : undefined,
        // Only include German fields if there's actual German content
        ...(hasGermanContent && {
          title_de: formData.title_de || undefined,
          slug_de: formData.slug_de || undefined,
          excerpt_de: formData.excerpt_de || undefined,
          content_de: formData.content_de || undefined,
          category_de: formData.category_de || undefined,
          tags_de: formData.tags_de,
          featured_image_de: formData.featured_image_de || undefined
        })
      }

      if (isCreating) {
        await createPost(postData)
      } else if (post) {
        await updatePost(post.id, postData)
      }

      onClose()
    } catch (error) {
      console.error('Save error:', error)
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred'
      alert(`Failed to save post: ${errorMessage}`)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={onClose}>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Admin
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {isCreating ? 'Create New Article' : 'Edit Article'}
              </h1>
              <p className="text-gray-600">
                {isCreating ? 'Write and publish a new blog article' : 'Update your blog article'}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={() => handleSave('draft')}
              disabled={loading}
            >
              <Save className="w-4 h-4 mr-2" />
              Save Draft
            </Button>
            <Button
              onClick={() => handleSave('published')}
              disabled={loading}
              className="bg-green-600 hover:bg-green-700"
            >
              <Eye className="w-4 h-4 mr-2" />
              Publish
            </Button>
          </div>
        </div>

        {/* Language Tabs */}
        <div className="mb-8">
          <div className="flex items-center gap-4">
            <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setActiveLanguage('en')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeLanguage === 'en'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🇺🇸 English
            </button>
            <button
              onClick={() => setActiveLanguage('de')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeLanguage === 'de'
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              🇩🇪 Deutsch
            </button>
          </div>
            
            {/* Translate Button */}
            {isOpenAIConfigured() && (
              <Button
                onClick={handleTranslateToGerman}
                disabled={translating || loading}
                variant="outline"
                className="flex items-center gap-2 bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100"
              >
                {translating ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Languages className="w-4 h-4" />
                )}
                {translating ? 'Translating...' : 'Translate to German'}
              </Button>
            )}
            
            {!isOpenAIConfigured() && (
              <div className="text-sm text-gray-500 bg-yellow-50 border border-yellow-200 rounded-lg px-3 py-2">
                💡 Add VITE_OPENAI_API_KEY to enable AI translation
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>
                  Article Content ({activeLanguage === 'en' ? 'English' : 'Deutsch'})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {activeLanguage === 'en' ? 'Title *' : 'Titel *'}
                  </label>
                  <Input
                    value={activeLanguage === 'en' ? formData.title : formData.title_de}
                    onChange={(e) => handleInputChange(activeLanguage === 'en' ? 'title' : 'title_de', e.target.value)}
                    placeholder={activeLanguage === 'en' ? 'Enter article title...' : 'Artikel-Titel eingeben...'}
                    className="text-lg"
                  />
                </div>

                {activeLanguage === 'en' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug
                    </label>
                    <Input
                      value={formData.slug}
                      onChange={(e) => handleInputChange('slug', e.target.value)}
                      placeholder="article-slug"
                    />
                  </div>
                )}

                {activeLanguage === 'de' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Slug (Deutsch)
                    </label>
                    <Input
                      value={formData.slug_de}
                      onChange={(e) => handleInputChange('slug_de', e.target.value)}
                      placeholder="artikel-slug"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {activeLanguage === 'en' ? 'Excerpt *' : 'Zusammenfassung *'}
                  </label>
                  <textarea
                    value={activeLanguage === 'en' ? formData.excerpt : formData.excerpt_de}
                    onChange={(e) => handleInputChange(activeLanguage === 'en' ? 'excerpt' : 'excerpt_de', e.target.value)}
                    placeholder={activeLanguage === 'en' ? 'Brief description of the article...' : 'Kurze Beschreibung des Artikels...'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows={3}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {activeLanguage === 'en' ? 'Content *' : 'Inhalt *'}
                  </label>
                  <RichTextEditor
                    key={`content-${activeLanguage}`}
                    value={activeLanguage === 'en' ? formData.content : formData.content_de}
                    onChange={(value) => handleInputChange(activeLanguage === 'en' ? 'content' : 'content_de', value)}
                    placeholder={activeLanguage === 'en' ? 'Write your article content...' : 'Schreiben Sie Ihren Artikel-Inhalt...'}
                  />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Article Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <Badge variant={formData.status === 'published' ? 'default' : 'secondary'}>
                    {formData.status}
                  </Badge>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {activeLanguage === 'en' ? 'Category *' : 'Kategorie *'}
                  </label>
                  <Input
                    value={activeLanguage === 'en' ? formData.category : formData.category_de}
                    onChange={(e) => handleInputChange(activeLanguage === 'en' ? 'category' : 'category_de', e.target.value)}
                    placeholder={activeLanguage === 'en' ? 'e.g., Automation, SEO, Web Development' : 'z.B., Automatisierung, SEO, Webentwicklung'}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {activeLanguage === 'en' ? 'Tags' : 'Schlagwörter'}
                  </label>
                  <textarea
                    value={activeLanguage === 'en' ? tagsInput : tagsInputDe}
                    onChange={(e) => handleTagsChange(e.target.value)}
                    placeholder={activeLanguage === 'en' ? 'tag1, tag2, tag3' : 'schlagwort1, schlagwort2, schlagwort3'}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                    rows={2}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {activeLanguage === 'en' ? 'Separate tags with commas' : 'Schlagwörter mit Kommas trennen'}
                  </p>
                </div>

                {activeLanguage === 'en' && (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Author Name *
                      </label>
                      <Input
                        value={formData.author_name}
                        onChange={(e) => handleInputChange('author_name', e.target.value)}
                        placeholder="Author name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Author Image URL
                      </label>
                      <Input
                        value={formData.author_image}
                        onChange={(e) => handleInputChange('author_image', e.target.value)}
                        placeholder="https://example.com/author.jpg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Featured Image URL
                      </label>
                      <Input
                        value={formData.featured_image}
                        onChange={(e) => handleInputChange('featured_image', e.target.value)}
                        placeholder="https://example.com/image.jpg"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Featured Image URL (German)
                      </label>
                      <Input
                        value={formData.featured_image_de}
                        onChange={(e) => handleInputChange('featured_image_de', e.target.value)}
                        placeholder="https://example.com/german-image.jpg"
                      />
                    </div>
                  </>
                )}

                {activeLanguage === 'de' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Featured Image URL (Deutsch)
                    </label>
                    <Input
                      value={formData.featured_image_de}
                      onChange={(e) => handleInputChange('featured_image_de', e.target.value)}
                      placeholder="https://example.com/german-image.jpg"
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>SEO Preview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-blue-600 text-lg font-medium truncate">
                    {(activeLanguage === 'en' ? formData.title : formData.title_de) || 
                     (activeLanguage === 'en' ? 'Article Title' : 'Artikel-Titel')}
                  </div>
                  <div className="text-green-600 text-sm">
                    yoursite.com/article/{(activeLanguage === 'en' ? formData.slug : formData.slug_de) || (activeLanguage === 'en' ? 'article-slug' : 'artikel-slug')}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {(activeLanguage === 'en' ? formData.excerpt : formData.excerpt_de) || 
                     (activeLanguage === 'en' ? 'Article excerpt will appear here...' : 'Artikel-Zusammenfassung wird hier angezeigt...')}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
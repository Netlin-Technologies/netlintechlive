import OpenAI from 'openai'

// Only initialize OpenAI client if API key is available
const getOpenAIClient = () => {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OpenAI API key is not configured');
  }
  return new OpenAI({
    apiKey,
    dangerouslyAllowBrowser: true
  });
};

export interface TranslationRequest {
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
}

export interface TranslationResponse {
  title_de: string
  excerpt_de: string
  content_de: string
  category_de: string
  tags_de: string[]
  slug_de: string
}

export async function translateToGerman(data: TranslationRequest): Promise<TranslationResponse> {
  const openai = getOpenAIClient();
  
  if (!process.env.NEXT_PUBLIC_OPENAI_API_KEY) {
    throw new Error('OpenAI API key is not configured. Please add NEXT_PUBLIC_OPENAI_API_KEY to your .env file.')
  }

  try {
    const prompt = `You are a professional German translator specializing in technical and business content. 
    
      Please translate the following blog post content from English to German. Maintain the same tone, style, and technical accuracy. Keep HTML tags intact in the content field.

      For the slug, create a German URL-friendly version (lowercase, hyphens instead of spaces, no special characters).

      Please respond with a valid JSON object containing the German translations:

      English Content:
      - Title: "${data.title}"
      - Excerpt: "${data.excerpt}"
      - Content: "${data.content}"
      - Category: "${data.category}"
      - Tags: ${JSON.stringify(data.tags)}

      Please respond with ONLY a JSON object in this exact format:
      {
        "title_de": "German title here",
        "excerpt_de": "German excerpt here", 
        "content_de": "German content here (keep HTML tags)",
        "category_de": "German category here",
        "tags_de": ["German tag 1", "German tag 2"],
        "slug_de": "german-url-slug-here"
      }`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini-2024-07-18",
      messages: [
        {
          role: "system",
          content: "You are a professional German translator. Always respond with valid JSON only, no additional text or formatting."
        },
        {
          role: "user",
          content: prompt
        }
      ],
      temperature: 0.3,
    //  max_tokens: 4000
    })

    const response = completion.choices[0]?.message?.content
    if (!response) {
      throw new Error('No response from OpenAI')
    }

    // Clean the response to ensure it's valid JSON
    const cleanedResponse = response.trim().replace(/```json\n?|\n?```/g, '')
    
    try {
      const translation = JSON.parse(cleanedResponse) as TranslationResponse
      
      // Validate the response has all required fields
      if (!translation.title_de || !translation.excerpt_de || !translation.content_de || 
          !translation.category_de || !translation.tags_de || !translation.slug_de) {
        throw new Error('Translation response is missing required fields')
      }
      
      return translation
    } catch (parseError) {
      console.error('Failed to parse OpenAI response:', cleanedResponse)
      throw new Error('Invalid JSON response from OpenAI')
    }
    
  } catch (error) {
    console.error('Translation error:', error)
    if (error instanceof Error) {
      throw error
    }
    throw new Error('Failed to translate content')
  }
}

// Check if OpenAI is configured
export function isOpenAIConfigured(): boolean {
  const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
  console.log('OpenAI API Key check:', {
    exists: !!apiKey,
    length: apiKey?.length,
    startsWithSk: apiKey?.startsWith('sk-'),
    value: apiKey ? `${apiKey.substring(0, 10)}...` : 'undefined'
  });
  return !!(apiKey && apiKey.trim() && !apiKey.startsWith('your-key-here'))
}
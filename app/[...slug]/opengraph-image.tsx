import { ImageResponse } from 'next/og'
import { t } from '@/lib/locales'
import { supabase } from '@/lib/supabase'
import { getSiteUrl } from '@/lib/utils'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = { params: Promise<{ slug: string[] }> }

export default async function Image({ params }: Props) {
  const { slug } = await params
  const isBlog = slug.length === 2 && slug[0] === 'blog'

  let title = t.metaData.homeTitle
  let subtitle = ''

  if (isBlog) {
    const articleSlug = slug[1]
    const { data: post } = await supabase
      .from('netlin_blog_posts')
      .select('*')
      .or(`slug.eq.${articleSlug},slug_de.eq.${articleSlug}`)
      .maybeSingle()
    title = post?.title || post?.title_de || t.metaData.blogTitle
    subtitle = post?.excerpt || post?.excerpt_de || ''
  } else {
    // Non-blog routes: use mapping or fallbacks
    const path = '/' + slug.join('/')
    if (path.includes('about')) title = t.metaData.aboutTitle
    else if (path.includes('contact')) title = t.metaData.contactTitle
    else if (path.includes('services')) title = t.metaData.homeTitle
    else if (path.includes('automation')) title = t.metaData.automationTitle
    else if (path.includes('blog')) title = t.metaData.blogTitle
    subtitle = t.metaData.homeDesc
  }

  const siteUrl = getSiteUrl(process.env.NEXT_PUBLIC_LOCALE || 'en')

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          padding: 64,
          justifyContent: 'space-between',
          background:
            'linear-gradient(135deg, #0B1220 0%, #101827 50%, #0F172A 100%)',
          color: 'white',
          fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif',
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
        {subtitle ? <div style={{ fontSize: 30, opacity: 0.9 }}>{subtitle}</div> : null}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 18,
              height: 18,
              borderRadius: 999,
              background: '#22d3ee',
            }}
          />
          <div style={{ fontSize: 28, opacity: 0.9 }}>Netlin Technologies • {siteUrl.replace('https://', '')}</div>
        </div>
      </div>
    ),
    { ...size }
  )
}

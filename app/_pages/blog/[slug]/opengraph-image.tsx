import { ImageResponse } from 'next/og'
import { t } from '@/lib/locales'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

type Props = { params: Promise<{ slug: string }> }

export default async function Image({ params }: Props) {
  const { slug } = await params
  const title = `${t.metaData.blogTitle}: ${slug}`
  const subtitle = t.metaData.blogDesc

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
        <div style={{ fontSize: 30, opacity: 0.9 }}>{subtitle}</div>
      </div>
    ),
    { ...size }
  )
}

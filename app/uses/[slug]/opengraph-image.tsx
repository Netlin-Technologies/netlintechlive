import { ImageResponse } from 'next/og'
import { getUseCase } from '@/lib/locales'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

interface Props {
  params: Promise<{ slug: string }>
}

export default async function OgImage({ params }: Props) {
  const { slug } = await params
  const uc = getUseCase(slug)
  const title = uc ? uc.name : 'Use case'
  const subtitle = uc ? uc.subtitle : 'Practical automation playbooks'

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
          background: 'linear-gradient(135deg, #0B1220 0%, #101827 50%, #0F172A 100%)',
          color: 'white',
          fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif',
        }}
      >
        <div style={{ fontSize: 58, fontWeight: 800, lineHeight: 1.1 }}>{title}</div>
        <div style={{ fontSize: 30, opacity: 0.9, maxWidth: 920 }}>{subtitle}</div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 18, height: 18, borderRadius: 999, background: '#22d3ee' }} />
          <div style={{ fontSize: 28, opacity: 0.9 }}>Netlin Technologies • netlin.tech</div>
        </div>
      </div>
    ),
    { ...size }
  )
}

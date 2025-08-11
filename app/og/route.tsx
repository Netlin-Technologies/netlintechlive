import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Netlin Technologies'
  const subtitle = searchParams.get('subtitle') || ''
  const domain = searchParams.get('domain') || 'netlintech.com'

  const image = new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
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
          <div style={{ fontSize: 28, opacity: 0.9 }}>Netlin Technologies • {domain}</div>
        </div>
      </div>
    )
  )
  return new Response(image.body, {
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=600, stale-while-revalidate=3600',
    },
  })
}

import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') || 'Netlin Technologies'
  const subtitle = searchParams.get('subtitle') || ''
  const domain = searchParams.get('domain') || 'netlintech.com'
  const footerText = `Netlin Technologies • ${domain}`

  return new ImageResponse(
    (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0B1220 0%, #101827 50%, #0F172A 100%)', color: 'white', fontFamily: 'system-ui, Segoe UI, Roboto, sans-serif' }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: 64 }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
          {subtitle ? (<div style={{ marginTop: 16, fontSize: 30, opacity: 0.9 }}>{subtitle}</div>) : null}
          <div style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, background: '#22d3ee', marginRight: 12 }} />
            <div style={{ fontSize: 24, opacity: 0.9 }}>{footerText}</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=600, stale-while-revalidate=3600',
      },
    }
  )
}

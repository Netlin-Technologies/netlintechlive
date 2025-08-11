import { ImageResponse } from 'next/og'
import { t, currentLocale } from '@/lib/locales'
import { getSiteUrl } from '@/lib/utils'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  const title = t.metaData.homeTitle
  const description = t.metaData.homeDesc
  const locale = currentLocale || 'en'
  const siteUrl = getSiteUrl(locale)

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
        <div style={{ fontSize: 30, opacity: 0.9 }}>{description}</div>
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

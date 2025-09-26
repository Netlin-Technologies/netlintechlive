// app/providers.tsx
'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

export function PostHogProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY
    if (!key) return
    const init = () => {
      posthog.init(key, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://eu.i.posthog.com',
        person_profiles: 'identified_only',
        capture_pageview: true,
      })
    }
    if (typeof window !== 'undefined') {
      // Defer heavy analytics init to idle for faster FCP
      if ('requestIdleCallback' in window) {
        ;(window as any).requestIdleCallback(init)
      } else {
        setTimeout(init, 250)
      }
    }
  }, [])

  return (
    <PHProvider client={posthog}>
      {children}
    </PHProvider>
  )
}

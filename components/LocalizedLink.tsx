'use client';

import Link from 'next/link'
import { t } from '@/lib/locales'
import { ComponentProps } from 'react'

interface LocalizedLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  route: keyof typeof t.routes;
  children: React.ReactNode;
}

export function LocalizedLink({ route, children, onClick, ...props }: LocalizedLinkProps) {
  const raw = t.routes[route]
  const href: string = typeof raw === 'string' ? raw : '/'
  if (!raw) {
    // eslint-disable-next-line no-console
    console.warn(`[LocalizedLink] Missing route for key ${String(route)}; defaulting to '/'`)
  }
  return (
    <Link
      href={href}
      onClick={(e) => {
        if (onClick) onClick(e)
      }}
      {...props}
    >
      {children}
    </Link>
  )
}
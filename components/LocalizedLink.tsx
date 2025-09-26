'use client';

import Link from 'next/link'
import { t } from '@/lib/locales'
import { ComponentProps } from 'react'

interface LocalizedLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  route: keyof typeof t.routes;
  children: React.ReactNode;
}

export function LocalizedLink({ route, children, onClick, ...props }: LocalizedLinkProps) {
  const href = t.routes[route]
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
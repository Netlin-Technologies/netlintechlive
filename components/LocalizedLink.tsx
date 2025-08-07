'use client';

import Link from 'next/link'
import { t } from '@/lib/locales'
import { ComponentProps } from 'react'
import { useLoading } from './LoadingContext'

interface LocalizedLinkProps extends Omit<ComponentProps<typeof Link>, 'href'> {
  route: keyof typeof t.routes;
  children: React.ReactNode;
}

export function LocalizedLink({ route, children, onClick, ...props }: LocalizedLinkProps) {
  const href = t.routes[route]
  const { startLoading } = useLoading()
  
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    startLoading()
    if (onClick) {
      onClick(e)
    }
  }
  
  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
import { Blog } from '@/components/Blog'
import type { Metadata } from 'next'
import { t } from "@/lib/locales";


export const metadata: Metadata = {
  title: t.metaData.blogTitle,
  description: t.metaData.blogDesc,
}

export default function BlogPage() {
  return <Blog />
}
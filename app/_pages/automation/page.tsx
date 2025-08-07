import { AutomationSubpage } from '@/components/AutomationSubpage'
import type { Metadata } from 'next'
import { t } from "@/lib/locales";


export const metadata: Metadata = {
  title: t.metaData.automationTitle,
  description: t.metaData.automationDesc,
}

export default function AutomationPage() {
  return <AutomationSubpage />
}
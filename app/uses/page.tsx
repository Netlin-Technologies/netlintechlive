import type { Metadata } from 'next'
import { NavbarSection } from '@/components/sections/NavbarSection'
import { FooterSection } from '@/components/sections/FooterSection'
import { getUsesIndexMeta, listUseCases } from '@/lib/locales'
import { getSiteUrl } from '@/lib/utils'
import UseCasesIndexClient from '@/components/uses/UseCasesIndexClient'

const meta = getUsesIndexMeta()
export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
}

export default function UseCasesIndex() {
  const items = listUseCases()
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  const site = getSiteUrl(locale)
  const url = `${site}/uses`

  return (
    <div className="min-h-screen bg-[#0c0e14]">
      <NavbarSection />
      <main className="w-full bg-[#0D0C14] px-5 pt-12 pb-16">
        <section className="max-w-[1100px] mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-white font-sora font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight">Use cases</h1>
            <p className="mt-3 text-[#C6D5DD] text-base md:text-lg">Implementation-ready landing pages for popular automation scenarios.</p>
          </header>

          <UseCasesIndexClient items={items} />
        </section>
      </main>
      <FooterSection />
    </div>
  )
}

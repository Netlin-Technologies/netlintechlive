"use client"
import Link from 'next/link'
import { useMemo, useState } from 'react'

type Item = {
  slug: string
  name: string
  title: string
  subtitle: string
  tags?: string[]
  heroHighlights?: string[]
  heroImage?: string
}

export default function UseCasesIndexClient({ items }: { items: Item[] }) {
  const [query, setQuery] = useState('')
  const [activeTags, setActiveTags] = useState<string[]>([])
  const allTags = useMemo(() => Array.from(new Set(items.flatMap(i => i.tags || []))).sort(), [items])
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return items.filter(i => {
      const matchesQuery = !q || [i.name, i.title, i.subtitle, ...(i.heroHighlights || [])].some(t => t.toLowerCase().includes(q))
      const matchesTags = activeTags.length === 0 || (i.tags && activeTags.every(t => i.tags!.includes(t)))
      return matchesQuery && matchesTags
    })
  }, [items, query, activeTags])
  function toggleTag(tag: string) {
    setActiveTags(prev => prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag])
  }

  return (
    <>
      {/* Filters */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search use cases..."
          className="w-full md:max-w-sm rounded-[10px] border border-[#1E2A42] bg-[#0e1118] px-3 py-2 text-white placeholder:text-[#8aa1b1] outline-none focus:ring-2 focus:ring-[#4D9AFF]"
        />
        <div className="flex flex-wrap gap-2">
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-2.5 py-1 rounded-full border text-xs font-sora transition-colors ${activeTags.includes(tag) ? 'border-[#4D9AFF] text-white bg-[linear-gradient(90deg,rgba(61,137,249,0.18)_0%,rgba(39,98,186,0.18)_100%)]' : 'border-[#1E2A42] text-[#C6D5DD] hover:border-[#2b3c55]'}`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((uc) => (
          <Link key={uc.slug} href={`/uses/${uc.slug}`} className="rounded-[16px] border border-[#1E2A42] bg-[#0e1118] overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#4D9AFF]">
            <div className="aspect-[16/9] bg-[#0E1118] overflow-hidden">
              <img src={uc.heroImage || '/assets/uses/placeholder-illustration.svg'} alt={uc.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
            </div>
            <div className="p-5">
              <h2 className="text-white font-sora font-semibold text-lg mb-1">{uc.name}</h2>
              <p className="text-[#9fb4c4] text-sm line-clamp-3">{uc.subtitle}</p>
              {uc.tags && uc.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {uc.tags.slice(0, 4).map((tg) => (
                    <span key={tg} className="px-2 py-0.5 rounded-full border border-[#1E2A42] text-[11px] text-[#9fb4c4]">{tg}</span>
                  ))}
                </div>
              )}
              {uc.heroHighlights && uc.heroHighlights.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-3">
                  {uc.heroHighlights.slice(0, 3).map((h, i) => (
                    <span key={i} className="px-2 py-0.5 rounded border border-[#4d9aff] bg-[linear-gradient(90deg,rgba(61,137,249,0.15)_0%,rgba(39,98,186,0.15)_100%)] text-white/90 text-xs font-sora">{h}</span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
      {filtered.length === 0 && (
        <div className="text-center text-[#9fb4c4] mt-10">No use cases match your filters.</div>
      )}
    </>
  )
}

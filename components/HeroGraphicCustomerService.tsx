import * as React from 'react'
import { motion } from 'framer-motion'

type Labels = {
  title?: string
  subtitle?: string
  channelsHeading: string
  channels: string[]
  aiHeading: string
  aiBullets: string[]
  outcomesHeading: string
  outcomes: string[]
}

export default function HeroGraphicCustomerService({ labels }: { labels: Labels }) {
  const { title, subtitle, channelsHeading, channels, aiHeading, aiBullets, outcomesHeading, outcomes } = labels

  return (
    <div className="w-full">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title ? (
          <h3 className="text-xl md:text-2xl font-semibold text-white mb-2">{title}</h3>
        ) : null}
        {subtitle ? (
          <p className="text-sm md:text-base text-[#9fb4c4] mb-6">{subtitle}</p>
        ) : null}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {/* Channels */}
          <div className="relative rounded-2xl border border-[#1E2A42] bg-[#0f1320] p-5">
            <div className="text-[#9fb4c4] text-xs uppercase tracking-wider mb-3">{channelsHeading}</div>
            <ul className="space-y-2">
              {channels.map((c, i) => (
                <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#3D89F9]" />
                  <span className="truncate">{c}</span>
                </li>
              ))}
            </ul>
            {/* Arrow to center */}
            <ArrowRight className="hidden lg:block absolute right-[-18px] top-1/2 -translate-y-1/2" />
          </div>

          {/* AI core */}
          <div className="relative rounded-2xl border border-[#2a4875] bg-[linear-gradient(180deg,rgba(61,137,249,0.16)_0%,rgba(39,98,186,0.12)_100%)] p-5 shadow-[0_0_40px_rgba(61,137,249,0.15)]">
            <div className="flex items-center gap-2 mb-3">
              <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#22C55E]" />
              <div className="text-white font-medium">{aiHeading}</div>
            </div>
            <ul className="space-y-2">
              {aiBullets.map((b, i) => (
                <li key={i} className="flex items-start gap-2 text-[#DCE9FF] text-sm">
                  <span className="mt-1 inline-flex h-1.5 w-1.5 rounded-full bg-[#9CC2FF]" />
                  <span className="leading-relaxed">{b}</span>
                </li>
              ))}
            </ul>
            {/* Arrows out */}
            <ArrowRight className="hidden lg:block absolute right-[-18px] top-1/2 -translate-y-1/2" color="#22C55E" />
            <ArrowDown className="lg:hidden absolute left-1/2 -translate-x-1/2 -bottom-5" />
          </div>

          {/* Outcomes */}
          <div className="relative rounded-2xl border border-[#1E2A42] bg-[#0f1320] p-5">
            <div className="text-[#9fb4c4] text-xs uppercase tracking-wider mb-3">{outcomesHeading}</div>
            <ul className="space-y-2">
              {outcomes.map((o, i) => (
                <li key={i} className="flex items-center gap-2 text-white/90 text-sm">
                  <span className="inline-flex h-2 w-2 rounded-full bg-[#22C55E]" />
                  <span className="truncate">{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Mobile flow arrows */}
        <div className="mt-4 grid grid-cols-3 gap-2 lg:hidden">
          <div />
          <ArrowDown className="mx-auto" />
          <div />
        </div>
      </div>
    </div>
  )
}

function ArrowRight({ className = '', color = '#3D89F9' }: { className?: string; color?: string }) {
  return (
    <svg className={className} width="36" height="12" viewBox="0 0 36 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 6h30" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M24 1l6 5-6 5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowDown({ className = '', color = '#3D89F9' }: { className?: string; color?: string }) {
  return (
    <svg className={className} width="12" height="36" viewBox="0 0 12 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 0v30" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M1 24l5 6 5-6" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

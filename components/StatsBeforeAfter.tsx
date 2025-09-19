"use client"
import React from 'react'

type KPI = { label: string; before: number; after: number; unit?: string; betterIsLower?: boolean }

type Props = {
  title?: string
  description?: string
  kpis: KPI[]
  notes?: string
}

function Bar({ value, color, ariaLabel }: { value: number; color: string; ariaLabel: string }) {
  const clamped = Math.max(0, Math.min(100, value))
  return (
    <div className="flex-1 bg-[#141821] rounded-md overflow-hidden" aria-label={ariaLabel} role="img">
      <div className="h-3" style={{ width: `${clamped}%`, backgroundColor: color }} />
    </div>
  )
}

export default function StatsBeforeAfter({ title, description, kpis, notes }: Props) {
  return (
    <div className="rounded-2xl border border-[#1E2A42] bg-[#0f1017] p-4 md:p-6">
      {title && <h4 className="text-white font-sora font-semibold text-xl md:text-2xl">{title}</h4>}
      {description && <p className="text-[#C6D5DD] mt-2">{description}</p>}

      <div className="mt-4 grid gap-4">
        {kpis.map((kpi, i) => {
          const unit = kpi.unit || '%'
          const betterLower = Boolean(kpi.betterIsLower)
          // For display, clamp and compute percents for bars
          const beforeVal = Math.max(0, kpi.before)
          const afterVal = Math.max(0, kpi.after)
          // Normalize bars to the max of before/after per KPI to show relative change intuitively
          const maxVal = Math.max(beforeVal, afterVal, 1)
          const beforePct = Math.round((beforeVal / maxVal) * 100)
          const afterPct = Math.round((afterVal / maxVal) * 100)

          return (
            <div key={i} className="rounded-xl border border-[#1E2A42] bg-[#0e1118] p-4">
              <div className="flex items-center justify-between gap-3">
                <div className="text-[#DCE9FF] font-sora font-medium">{kpi.label}</div>
                <div className="hidden sm:flex items-center gap-2 text-xs text-[#9fb4c4]">
                  <span className="inline-flex items-center gap-1"><span className="w-[10px] h-[10px] rounded-sm bg-[#F97316] inline-block"/>Before</span>
                  <span className="inline-flex items-center gap-1"><span className="w-[10px] h-[10px] rounded-sm bg-[#22C55E] inline-block"/>After</span>
                  <span>({betterLower ? 'lower is better' : 'higher is better'})</span>
                </div>
              </div>
              <div className="mt-3 flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <span className="w-16 text-right text-xs text-[#9fb4c4]">Before</span>
                  <Bar value={beforePct} color="#F97316" ariaLabel={`${kpi.label} before: ${beforeVal}${unit}`} />
                  <span className="w-16 text-xs text-[#DCE9FF]">{beforeVal}{unit}</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="w-16 text-right text-xs text-[#9fb4c4]">After</span>
                  <Bar value={afterPct} color="#22C55E" ariaLabel={`${kpi.label} after: ${afterVal}${unit}`} />
                  <span className="w-16 text-xs text-[#DCE9FF]">{afterVal}{unit}</span>
                </div>
              </div>
              {/* Callout for change */}
              <div className="mt-3 text-xs text-[#9fb4c4]">
                {betterLower ? (
                  <span>Change: {Math.max(0, beforeVal - afterVal)}{unit} improvement</span>
                ) : (
                  <span>Change: +{Math.max(0, afterVal - beforeVal)}{unit} improvement</span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {notes && <div className="mt-4 text-[#9fb4c4] text-sm">{notes}</div>}
    </div>
  )
}

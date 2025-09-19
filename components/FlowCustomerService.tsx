"use client"
import React from 'react'

type Props = {
  labels: {
    captureTitle: string
    captureDesc1: string
    captureDesc2: string
    understandTitle: string
    understandDesc1: string
    understandDesc2: string
    actTitle: string
    actDesc1: string
    actDesc2: string
    measureTitle: string
    measureDesc1: string
    measureDesc2: string
    channels: string[]
    kpiHeading: string
    kpiLine: string
  }
}

function Box({ title, lines, rightArrow = false }: { title: string; lines: string[]; rightArrow?: boolean }) {
  return (
    <div className="relative w-full h-full min-w-0 rounded-xl border border-[#1E2A42] bg-[#11121a] p-4">
      <div className="text-white font-sora font-semibold text-lg">{title}</div>
      {lines.map((l, i) => (
        <div key={i} className={`text-[#C6D5DD] text-sm ${i === 0 ? 'mt-2' : 'mt-1'}`}>{l}</div>
      ))}
      {rightArrow && (
        <div className="hidden lg:block absolute top-1/2 -right-3 -translate-y-1/2">
          <div className="w-6 h-[3px] bg-[#3D89F9] rounded" />
          <div className="absolute top-1/2 -translate-y-1/2 left-6 w-0 h-0 border-y-[7px] border-y-transparent border-l-[10px] border-l-[#3D89F9]" />
        </div>
      )}
    </div>
  )
}

function VConnector() {
  return (
    <div className="md:hidden flex flex-col items-center my-2">
      <div className="h-6 w-[3px] bg-[#3D89F9] rounded" />
      <div className="w-0 h-0 border-x-[8px] border-x-transparent border-t-[12px] border-t-[#3D89F9]" />
    </div>
  )
}

export default function FlowCustomerService({ labels }: Props) {
  const {
    captureTitle,
    captureDesc1,
    captureDesc2,
    understandTitle,
    understandDesc1,
    understandDesc2,
    actTitle,
    actDesc1,
    actDesc2,
    measureTitle,
    measureDesc1,
    measureDesc2,
    channels,
    kpiHeading,
    kpiLine,
  } = labels

  return (
    <div className="rounded-2xl border border-[#1E2A42] bg-[#0f1017] p-4 md:p-6">
      {/* Flow row (horizontal on lg+, stacked below). Arrows are overlays to avoid taking row width. */}
      <div className="hidden lg:grid lg:grid-cols-4 items-stretch gap-6">
        <Box title={captureTitle} lines={[captureDesc1, captureDesc2]} rightArrow />
        <Box title={understandTitle} lines={[understandDesc1, understandDesc2]} rightArrow />
        <Box title={actTitle} lines={[actDesc1, actDesc2]} rightArrow />
        <Box title={measureTitle} lines={[measureDesc1, measureDesc2]} />
      </div>

      {/* Stacked on mobile & md */}
      <div className="lg:hidden flex flex-col">
        <Box title={captureTitle} lines={[captureDesc1, captureDesc2]} />
        <VConnector />
        <Box title={understandTitle} lines={[understandDesc1, understandDesc2]} />
        <VConnector />
        <Box title={actTitle} lines={[actDesc1, actDesc2]} />
        <VConnector />
        <Box title={measureTitle} lines={[measureDesc1, measureDesc2]} />
      </div>

      {/* Channels */}
      <div className="mt-5 flex flex-wrap gap-2">
        {channels.map((c, i) => (
          <div key={i} className="inline-flex items-center gap-2 px-3 h-8 rounded-lg border border-[#1E2A42] bg-[#11121a]">
            <span className="w-[8px] h-[8px] rounded-full bg-[#4D9AFF]" />
            <span className="text-[#DCE9FF] text-xs font-sora">{c}</span>
          </div>
        ))}
      </div>

      {/* KPI callout */}
      <div className="mt-5 rounded-xl border border-[#1E2A42] bg-[#11121a] p-4">
        <div className="text-[#C6D5DD] text-sm">{kpiHeading}</div>
        <div className="text-white font-sora font-semibold text-base mt-1">{kpiLine}</div>
      </div>
    </div>
  )
}

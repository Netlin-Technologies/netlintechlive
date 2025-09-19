"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Item = {
  title: string
  description: string
}

type Props = {
  items: Item[]
}

const weekColors = [
  'from-[#3D89F9] to-[#2762BA]',
  'from-[#8B5CF6] to-[#6D28D9]',
  'from-[#10B981] to-[#059669]',
]

export default function RoadmapThreeWeeks({ items }: Props) {
  const safeItems = (items || []).slice(0, 3)
  return (
    <div className="w-full">
      {/* Timeline container */}
  <div className="relative pb-12 md:pb-16">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {safeItems.map((it, idx) => (
            <motion.div
              key={idx}
              className="relative"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, ease: 'easeOut', delay: idx * 0.05 }}
            >
              {/* Card */}

              <div className="rounded-2xl border border-[#1E2A42] bg-[#0e1118] p-5 h-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${weekColors[idx]} flex items-center justify-center text-white font-sora font-semibold`}>W{idx + 1}</div>
                    <div className="text-white font-sora font-semibold text-lg md:text-xl">
                      {it.title}
                    </div>
                  </div>
                </div>
                <p className="text-[#C6D5DD] mt-3 text-sm md:text-base leading-relaxed min-h-[3rem]">{it.description}</p>

                {/* Progress bar */}
                <div className="mt-4 h-1.5 rounded-full bg-[#141821] overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${weekColors[idx]}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: ['70%', '100%'] }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: 'easeOut' }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Subtle gradient beam + orbs as timeline (both mobile & desktop) */}
  <div aria-hidden className="pointer-events-none absolute left-4 right-4 md:left-6 md:right-6 bottom-0">
          {/* Thin beam */}
          <div className="h-[6px] rounded-full bg-gradient-to-r from-[#3D89F9]/0 via-[#3D89F9]/35 to-[#10B981]/0" />
          {/* Glow under-beam */}
          <div className="mt-[-6px] h-10 rounded-full bg-gradient-to-r from-[#3D89F9]/0 via-[#3D89F9]/15 to-[#10B981]/0 blur-2xl" />

          {/* Orbs aligned with cards */}
          <div className="hidden md:grid grid-cols-3 items-center -mt-8">
            {[0, 1, 2].map((i) => (
              <div key={i} className="flex justify-center">
                <div
                  className={`w-3.5 h-3.5 rounded-full bg-gradient-to-br ${weekColors[i]} shadow-[0_0_0_8px_rgba(61,137,249,0.06),0_0_24px_8px_rgba(61,137,249,0.25)]`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

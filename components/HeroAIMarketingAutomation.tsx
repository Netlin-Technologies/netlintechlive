"use client"
import React from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'

type Props = {
  labels: {
    chatHeader: string
    chatSub?: string
    voiceHeader: string
    voiceSub?: string
    stages?: Array<{ name: string; detail: string }>
    audienceTags?: string[]
    audienceSyncLabel?: string
    metricsLabels?: { mqlToSql: string; cpl: string }
    runningLabel?: string
  }
}

function PanelFrame({ children, footer, tilt = 0 }: { children: React.ReactNode; footer?: React.ReactNode; tilt?: number }) {
  return (
    <motion.div
      className="w-full max-w-[520px]"
      initial={{ rotate: tilt }}
      whileHover={{ rotate: 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 16 }}
    >
      <div className="relative rounded-[28px] p-[10px] bg-[linear-gradient(135deg,#1a2436_0%,#0b0f18_60%,#1a2436_100%)] shadow-[0_10px_40px_rgba(0,0,0,0.45)] border border-[#24324b]">
        <div className="pointer-events-none absolute -inset-2 rounded-[34px] bg-[radial-gradient(60%_50%_at_50%_10%,rgba(61,137,249,0.25),transparent_70%)]" />
        <div className="relative rounded-[22px] overflow-hidden border border-[#1E2A42] bg-[#0f1017]">
          {children}
          {footer}
        </div>
      </div>
    </motion.div>
  )
}

function JourneyBuilder({ title, subtitle, stages: stagesIn, runningLabel }: { title: string; subtitle?: string; stages?: Array<{ name: string; detail: string }>; runningLabel?: string }) {
  const stages = stagesIn && stagesIn.length > 0 ? stagesIn : [
    { name: 'Capture', detail: 'Ads · Website · Forms · Webinars' },
    { name: 'Score', detail: 'Behavior + Firmographic intent' },
    { name: 'Segment', detail: 'ICP · Stage · Interest' },
    { name: 'Nurture', detail: 'Email · Retarget · Message' },
    { name: 'Handoff', detail: 'Route to Sales with context' },
  ]
  const [active, setActive] = React.useState(0)
  React.useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % stages.length), 1600)
    return () => clearInterval(t)
  }, [])

  return (
    <PanelFrame tilt={-2}
      footer={
        <div className="p-3 border-t border-[#1E2A42] bg-[#0e1118]">
          <div className="flex items-center gap-2 bg-[#11121a] border border-[#1E2A42] rounded-full px-3 py-2">
            <div className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
            <div className="text-[#9fb4c4] text-sm">{runningLabel || 'Journeys running · Auto‑optimize'}</div>
          </div>
        </div>
      }
    >
      <div className="px-4 py-3 border-b border-[#1E2A42] bg-[#0f121a]">
        <div className="text-white font-sora font-semibold">{title}</div>
        {subtitle ? <div className="text-[#9fb4c4] text-[11px] mt-0.5">{subtitle}</div> : null}
      </div>
      <div className="p-4">
        <div className="relative">
          <div className="absolute left-4 top-1 bottom-1 w-[2px] bg-[#23314b]" />
          <ul className="space-y-3">
            {stages.map((s, i) => (
              <li key={i} className="relative pl-10">
                <motion.span
                  className={`absolute left-3 top-1.5 w-3 h-3 rounded-full ${i === active ? 'bg-[#4D9AFF] shadow-[0_0_20px_#4D9AFF66]' : 'bg-[#2a3b59]'}`}
                  layout
                  transition={{ type: 'spring', stiffness: 600, damping: 24 }}
                />
                <div className="text-white font-sora font-semibold text-sm">{s.name}</div>
                <div className="text-[#C6D5DD] text-xs">{s.detail}</div>
                {i < stages.length - 1 && (
                  <div className="mt-2 ml-[-6px] h-3 w-12 rounded bg-[linear-gradient(90deg,rgba(61,137,249,0.18)_0%,rgba(39,98,186,0.18)_100%)] border border-[#2a4875]" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PanelFrame>
  )
}

function AudienceAndMetrics({ title, subtitle, audienceTags, audienceSyncLabel, metricsLabels }: { title: string; subtitle?: string; audienceTags?: string[]; audienceSyncLabel?: string; metricsLabels?: { mqlToSql: string; cpl: string } }) {
  const mqlSql = useMotionValue(22)
  const cpl = useMotionValue(20)
  const [mqlSqlDisp, setMqlSqlDisp] = React.useState('22')
  const [cplDisp, setCplDisp] = React.useState('20')
  React.useEffect(() => {
    const controls1 = animate(mqlSql, 30, { duration: 2.4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' })
    const controls2 = animate(cpl, 13, { duration: 2.6, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' })
    const unsub1 = mqlSql.on("change", (v) => setMqlSqlDisp(v.toFixed(0)))
    const unsub2 = cpl.on("change", (v) => setCplDisp(v.toFixed(0)))
    return () => { controls1.stop(); controls2.stop(); unsub1(); unsub2() }
  }, [])

  const tagLabels = audienceTags && audienceTags.length ? audienceTags : ['High Intent', 'Cold', 'ICP', 'Retarget']
  const tags = [
    { label: tagLabels[0], color: '#22C55E' },
    { label: tagLabels[1], color: '#9CA3AF' },
    { label: tagLabels[2], color: '#3D89F9' },
    { label: tagLabels[3], color: '#F59E0B' },
  ]

  return (
    <PanelFrame tilt={2}>
      <div className="px-4 py-3 border-b border-[#1E2A42] bg-[#0f121a]">
        <div className="text-white font-sora font-semibold">{title}</div>
        {subtitle ? <div className="text-[#9fb4c4] text-[11px] mt-0.5">{subtitle}</div> : null}
      </div>
      <div className="p-4 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {tags.map((t, i) => (
            <span key={i} className="inline-flex items-center gap-2 px-3 h-8 rounded-lg border border-[#1E2A42] bg-[#11121a] text-[#DCE9FF] text-xs font-sora">
              <span className="w-[8px] h-[8px] rounded-full" style={{ background: t.color }} />
              {t.label}
            </span>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-[#1E2A42] bg-[#11121a] p-3">
            <div className="text-[#9fb4c4] text-xs">{metricsLabels?.mqlToSql || 'MQL → SQL'}</div>
            <div className="text-white font-sora font-semibold text-lg">{mqlSqlDisp}%</div>
          </div>
          <div className="rounded-xl border border-[#1E2A42] bg-[#11121a] p-3">
            <div className="text-[#9fb4c4] text-xs">{metricsLabels?.cpl || 'CPL'}</div>
            <div className="text-white font-sora font-semibold text-lg">€{cplDisp}</div>
          </div>
        </div>

        <div className="rounded-xl border border-[#1E2A42] bg-[#11121a] p-3">
          <div className="text-[#9fb4c4] text-xs mb-2">{audienceSyncLabel || 'Audience Sync'}</div>
          <div className="flex items-center gap-2">
            <SyncPill label="Mailchimp" />
            <SyncPill label="Klaviyo" />
            <SyncPill label="Meta / Google Ads" />
            <SyncPill label="LinkedIn" />
          </div>
        </div>
      </div>
    </PanelFrame>
  )
}

function SyncPill({ label }: { label: string }) {
  const [on, setOn] = React.useState(true)
  React.useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 2600)
    return () => clearInterval(t)
  }, [])
  return (
    <button onClick={() => setOn((v) => !v)} className={`px-3 h-8 rounded-full border text-xs ${on ? 'border-[#2a4875] bg-[linear-gradient(90deg,rgba(61,137,249,0.18)_0%,rgba(39,98,186,0.18)_100%)] text-white' : 'border-[#2a3142] bg-[#0f121a] text-[#9fb4c4]'}`}>{label}</button>
  )
}

export default function HeroAIMarketingAutomation({ labels }: Props) {
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <JourneyBuilder title={labels.chatHeader || 'Journey Orchestrator'} subtitle={labels.chatSub} stages={labels.stages} runningLabel={labels.runningLabel} />
        <AudienceAndMetrics title={labels.voiceHeader || 'Audiences & Metrics'} subtitle={labels.voiceSub} audienceTags={labels.audienceTags} audienceSyncLabel={labels.audienceSyncLabel} metricsLabels={labels.metricsLabels} />
      </div>
    </div>
  )
}

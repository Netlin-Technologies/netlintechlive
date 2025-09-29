"use client";
import React, { useEffect, useRef, useState } from 'react'
import {
  Mail,
  MessageCircle,
  Phone,
  ClipboardList,
  Calendar,
  Megaphone
} from 'lucide-react'

// Concept B: Radial Lead Orbit → Gravity Capture Core
// Lightweight, CSS-driven orbital animation. Prefers reduced motion.
// Right side panel cycles through enrichment phases.

interface Props {
  className?: string
  theme?: 'dark' | 'light'
}

type Phase = { stage: string; details: string; key: string }

const phases: Phase[] = [
  { key: 'captured', stage: 'Captured', details: 'Inbound web form (utm + source tracked)' },
  { key: 'enriched', stage: 'Enriched', details: 'Company: Acme Inc · Size: 120 · Industry: SaaS' },
  { key: 'scored', stage: 'Scored', details: 'Lead Score: 82 / 100 (ICP fit, intent high)' },
  { key: 'routed', stage: 'Routed', details: 'Assigned to SDR Queue · Slack + CRM created' },
]

const orbitIcons = [
  { id: 'mail', Icon: Mail, label: 'Email' },
  { id: 'chat', Icon: MessageCircle, label: 'Live Chat' },
  { id: 'phone', Icon: Phone, label: 'Call' },
  { id: 'form', Icon: ClipboardList, label: 'Form' },
  { id: 'calendar', Icon: Calendar, label: 'Booking' },
  { id: 'ads', Icon: Megaphone, label: 'Ads' },
]

export default function HeroLeadResponseOrbit({ className = '', theme = 'light' }: Props) {
  const [phaseIndex, setPhaseIndex] = useState(0)
  const reduced = usePrefersReducedMotion()
  const [mounted, setMounted] = useState(false)
  // cycle phases
  useEffect(() => {
    if (reduced) return
    const id = setInterval(() => {
      setPhaseIndex((p) => (p + 1) % phases.length)
    }, 3400)
    return () => clearInterval(id)
  }, [reduced])
  useEffect(() => { setMounted(true) }, [])

  const isLight = theme === 'light'
  const bgPanel = isLight ? 'bg-white/70 backdrop-blur-xl border border-slate-200 shadow-[0_4px_18px_rgba(30,64,175,0.08)]' : 'bg-[#0f1320]/70 backdrop-blur-xl border border-[#1E2A42] shadow-[0_4px_18px_rgba(0,0,0,0.5)]'
  const textPrimary = isLight ? 'text-slate-800' : 'text-white'
  const textMuted = isLight ? 'text-slate-500' : 'text-[#9fb4c4]'
  const accentBlue = isLight ? '#2563eb' : '#4d9aff'
  const success = '#22C55E'
  // Removed vertical global progress bar in favor of subtle per-item connectors.

  return (
    <div className={`relative w-full mx-auto max-w-[1100px] ${className}`}>      
      <div className="grid gap-12 items-center justify-center lg:grid-cols-[560px_340px]">
        {/* LEFT: Orbit Scene */}
  <div className="relative w-full mx-auto max-w-[560px] aspect-square">
          <BubblesOrbit isLight={isLight} reduced={reduced} />
          <CoreNode isLight={isLight} accent={accentBlue} success={success} reduced={reduced} />
        </div>

        {/* RIGHT: Phase Panel */}
        <div className="relative">
          <div className={`relative rounded-2xl p-6 md:p-7 ${bgPanel}`}>            
            <h4 className={`font-sora font-semibold text-lg mb-4 ${textPrimary}`}>Lead Intelligence Pipeline</h4>
            <ul className="pl-4 space-y-5 relative">
              {phases.map((ph, idx) => {
                const active = idx === phaseIndex
                const done = idx < phaseIndex
                return (
                  <li
                    key={ph.key}
                    className={`phase-item relative flex flex-col gap-0.5 ${done ? 'opacity-60' : 'opacity-100'} ${active ? 'phase-active' : ''}`}
                    data-active={active}
                  >
                    <span
                      className={`phase-dot absolute -left-[14px] top-1 w-3.5 h-3.5 rounded-full border ${active ? 'dot-active' : done ? 'bg-emerald-500 border-emerald-500' : isLight ? 'bg-slate-200 border-slate-300' : 'bg-[#1E2A42] border-[#244165]'}`}
                      style={active ? { ['--c1' as any]: accentBlue, ['--c2' as any]: success } : undefined}
                    />
                    <div className={`text-sm font-semibold transition-colors ${active ? 'text-emerald-600' : done ? 'text-slate-400 line-through' : textPrimary}`}>{ph.stage}</div>
                    <div className={`text-xs leading-relaxed transition-opacity ${textMuted}`}>{ph.details}</div>
                    {ph.key === 'scored' && active && (
                      <div className="mt-2 h-2 w-full rounded-full bg-slate-200/70 relative overflow-hidden dark:bg-[#1E2A42]">
                        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full score-bar" />
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
            <div className="mt-6 grid grid-cols-3 gap-3 text-center">
              <Metric label="Resp. Time" value="<15s" accent={accentBlue} muted={textMuted} primary={textPrimary} />
              <Metric label="SQL Rate" value="+38%" accent={accentBlue} muted={textMuted} primary={textPrimary} />
              <Metric label="Meetings" value="2x" accent={accentBlue} muted={textMuted} primary={textPrimary} />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-[radial-gradient(circle_at_60%_10%,rgba(59,130,246,0.20),transparent_70%)]" />
        </div>
      </div>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) { .score-bar, .orbit-rotator, .ring-pulse, .ring-pulse-delay { animation: none !important; } }
        .score-bar { animation: fillScore 3.2s cubic-bezier(.4,.0,.2,1) forwards; }
        @keyframes fillScore { from { width: 0%; } to { width: 82%; } }
  .phase-item { position: relative; padding-left: 0; transform-origin: left center; transition: transform 900ms cubic-bezier(.4,0,.2,1), opacity 600ms ease; }
        .phase-item.phase-active { transform: translateX(2px) scale(1.025); }
        .phase-dot { box-shadow: 0 0 0 0 rgba(37,99,235,0); transition: box-shadow 1200ms cubic-bezier(.4,0,.2,1), background 600ms, border-color 600ms; }
        .dot-active { background: conic-gradient(var(--c1), var(--c2)); border: 0; animation: dotGlow 4.2s ease-in-out infinite; }
        @keyframes dotGlow { 0%,100% { box-shadow: 0 0 0 0 rgba(37,99,235,0.5);} 50% { box-shadow: 0 0 0 6px rgba(37,99,235,0); } }
        @media (prefers-reduced-motion: reduce) { .dot-active { animation: none !important; } }
      `}</style>
    </div>
  )
}

function CoreNode({ isLight, accent, success, reduced }: { isLight: boolean; accent: string; success: string; reduced: boolean }) {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="relative w-[210px] h-[210px]">
        <div className="absolute inset-0 rounded-full border-2" style={{ borderColor: isLight ? '#e2e8f0' : '#1E2A42', background: isLight ? 'linear-gradient(180deg,#ffffff,#f1f5f9)' : 'linear-gradient(180deg,#101726,#0b0f18)' }} />
        <div className="absolute inset-[18px] rounded-full" style={{ background: `radial-gradient(circle at 50% 45%, ${accent}33, transparent 70%)` }} />
        <div className={`absolute inset-[34px] rounded-full flex items-center justify-center ${isLight ? 'bg-white' : 'bg-[#0f1320]'} border`} style={{ borderColor: isLight ? '#e2e8f0' : '#1E2A42' }}>
          <div className="text-center px-4">
            <div className={`font-sora font-semibold text-sm ${isLight ? 'text-slate-700' : 'text-white'}`}>AI CORE</div>
            <div className={`mt-1 text-[10px] tracking-wide ${isLight ? 'text-slate-500' : 'text-[#9fb4c4]'}`}>Prioritize · Enrich · Route</div>
          </div>
        </div>
        {/* pulsing ring refined for smoother motion */}
        <div className={`absolute inset-0 rounded-full ring-pulse border`} style={{ borderColor: accent }} />
        <div className={`absolute inset-0 rounded-full ring-pulse-delay border opacity-60`} style={{ borderColor: success }} />
      </div>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) { .ring-pulse, .ring-pulse-delay { animation: none !important; } }
        .ring-pulse { animation: pulseRing 6.2s cubic-bezier(.4,.0,.2,1) infinite; }
        .ring-pulse-delay { animation: pulseRing 7.4s cubic-bezier(.4,.0,.2,1) infinite 1.1s; }
        @keyframes pulseRing { 0% { transform: scale(1); opacity: 0.85;} 35% { transform: scale(1.08); opacity: 0.45;} 70% { transform: scale(1.03); opacity: 0.65;} 100% { transform: scale(1); opacity: 0.85;} }
      `}</style>
    </div>
  )
}

function Metric({ label, value, accent, muted, primary }: { label: string; value: string; accent: string; muted: string; primary: string }) {
  return (
    <div className="rounded-lg px-2.5 py-2 border border-slate-200/70 dark:border-[#1E2A42] bg-white/60 dark:bg-[#0f1320]/60 backdrop-blur">
      <div className={`text-[10px] tracking-wider font-medium ${muted}`}>{label}</div>
      <div className="text-sm font-semibold" style={{ color: accent }}>{value}</div>
    </div>
  )
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = () => setReduced(mq.matches)
    handler();
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return reduced
}

function BubblesOrbit({ isLight, reduced }: { isLight: boolean; reduced: boolean }) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const bubbleRefs = useRef<(HTMLDivElement | null)[]>([])
  const factorY = 0.72 // slightly less flattening to reduce vertical overlap
  const radius = 205
  const rotationPeriodSec = 32 // one full clockwise rotation
  const speedDegPerSec = 360 / rotationPeriodSec
  useEffect(() => {
    if (reduced) return
    let frame: number
    const start = performance.now()
    const animate = () => {
      const now = performance.now()
      const t = (now - start) / 1000 // seconds
      orbitIcons.forEach((cfg, i) => {
        const el = bubbleRefs.current[i]
        if (!el) return
        const baseAngle = (i / orbitIcons.length) * 360
        const angle = baseAngle + speedDegPerSec * t // clockwise
        const rad = (angle * Math.PI) / 180
        const x = Math.cos(rad) * radius
        const y = Math.sin(rad) * radius * factorY
        el.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
      })
      frame = requestAnimationFrame(animate)
    }
    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [reduced])

  return (
    <div ref={wrapperRef} className="absolute inset-0">
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_50%_46%,rgba(59,130,246,0.18),transparent_72%)]" />
      {orbitIcons.map((o, i) => (
        <div
          key={o.id}
          ref={(r) => { bubbleRefs.current[i] = r }}
          className="absolute left-1/2 top-1/2 will-change-transform"
          style={reduced ? computeStaticStatic(o, i, factorY, radius) : undefined}
        >
          <div className={`flex items-center gap-1.5 pl-2 pr-3 py-1 rounded-full ${isLight ? 'bg-white/85 border border-slate-200' : 'bg-[#0f1320]/80 border border-[#1E2A42]'} shadow-sm backdrop-blur animate-[softFloat_5.6s_ease-in-out_infinite]`} style={{ animationDelay: `${i * 320}ms` }}>
            <span className={`${isLight ? 'bg-blue-50 border border-blue-200' : 'bg-[#132133] border border-[#244165]'} w-6 h-6 rounded-full flex items-center justify-center`}>
              <o.Icon className={`w-3.5 h-3.5 ${isLight ? 'text-blue-600' : 'text-[#4d9aff]'}`} />
            </span>
            <span className={`text-xs font-medium ${isLight ? 'text-slate-700' : 'text-white'}`}>{o.label}</span>
          </div>
        </div>
      ))}
      <style jsx>{`
        @keyframes softFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
      `}</style>
    </div>
  )
}

function computeStaticStatic(o: any, i: number, factorY: number, radius: number) {
  const angle = (i / orbitIcons.length) * 360
  const rad = (angle * Math.PI) / 180
  const x = Math.cos(rad) * radius
  const y = Math.sin(rad) * radius * factorY
  return { transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }
}

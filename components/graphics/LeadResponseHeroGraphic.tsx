"use client";
import React, { useEffect, useRef } from 'react'

interface LeadResponseHeroGraphicProps {
  theme?: 'dark' | 'light'
  className?: string
}

/*
  LeadResponseHeroGraphic
  ---------------------------------
  A lightweight SVG-based animated network/funnel graphic representing lead intake -> routing -> responses.
  Goals:
   - Smooth, subtle motion (60fps on modern devices)
   - Respect prefers-reduced-motion
   - Minimal JS: only for the soft glow cursor parallax & reduced motion detection
*/
export const LeadResponseHeroGraphic: React.FC<LeadResponseHeroGraphicProps> = ({ theme = 'light', className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return
    const el = containerRef.current
    const glow = glowRef.current
    if (!el || !glow) return
    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      glow.style.transform = `translate3d(${x * 40}px, ${y * 40}px, 0)`
    }
    el.addEventListener('pointermove', handleMove)
    return () => el.removeEventListener('pointermove', handleMove)
  }, [])

  const isLight = theme === 'light'
  const lineColor = isLight ? '#2563eb' : '#4d9aff'
  const nodePrimary = isLight ? '#3b82f6' : '#4d9aff'
  const nodeSecondary = isLight ? '#60a5fa' : '#7fb9ff'
  const bgGradientFrom = isLight ? 'rgba(59,130,246,0.10)' : 'rgba(30,58,138,0.25)'
  const bgGradientTo = isLight ? 'rgba(219,234,254,0.35)' : 'rgba(29,78,216,0.15)'

  return (
    <div
      ref={containerRef}
      className={`relative w-full aspect-[1000/520] max-w-[1000px] mx-auto overflow-visible ${className}`}
      aria-hidden="true"
    >
      {/* Background soft radial gradient */}
      <div className="absolute inset-0 -z-10">
        <div
          ref={glowRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-[50%] blur-3xl opacity-70 transition-transform duration-500 will-change-transform"
          style={{
            background: `radial-gradient(circle at 50% 50%, ${bgGradientFrom}, ${bgGradientTo})`,
            mask: 'radial-gradient(circle at 50% 50%, rgba(0,0,0,0.9), transparent 70%)'
          }}
        />
      </div>
      <svg
        viewBox="0 0 1000 520"
        fill="none"
        className="w-full h-full"
        role="presentation"
      >
        <defs>
          <linearGradient id="grad-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor={lineColor} stopOpacity={0.0} />
            <stop offset="40%" stopColor={lineColor} stopOpacity={0.9} />
            <stop offset="100%" stopColor={lineColor} stopOpacity={0.0} />
          </linearGradient>
          <radialGradient id="node-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0) rotate(45) scale(40)">
            <stop stopColor={nodeSecondary} stopOpacity={0.9} />
            <stop offset="100%" stopColor={nodeSecondary} stopOpacity={0} />
          </radialGradient>
          <filter id="soft-blur" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.6 0" />
          </filter>
        </defs>

        {/* Flow Lines (animated stroke dash) */}
        {[
          'M120 180 C 260 60, 400 60, 540 180',
          'M120 260 C 300 160, 420 160, 620 300',
          'M120 340 C 260 420, 460 440, 700 340',
          'M300 420 C 480 380, 640 300, 820 260',
        ].map((d, i) => (
          <path
            key={i}
            d={d}
            stroke="url(#grad-line)"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`path-flow path-${i}`}
          />
        ))}

        {/* Nodes (core entry / processing / routing / success) */}
        {[
          { x: 110, y: 260, r: 34 }, // intake hub
          { x: 300, y: 180, r: 22 },
          { x: 300, y: 340, r: 22 },
          { x: 540, y: 180, r: 26 },
          { x: 620, y: 300, r: 28 },
          { x: 700, y: 340, r: 22 },
          { x: 820, y: 260, r: 40 }, // conversion / response
        ].map((n, i) => (
          <g key={i} className={`node node-${i}`} transform={`translate(${n.x} ${n.y})`}>
            <circle r={n.r} fill={isLight ? '#ffffff' : '#0e1118'} stroke={lineColor} strokeWidth={1.5} />
            <circle r={n.r * 0.65} fill={`url(#node-glow)`} filter="url(#soft-blur)" />
            <circle r={Math.max(4, n.r * 0.18)} fill={nodePrimary} className="pulse-core" />
          </g>
        ))}

        {/* Direction indicators (small moving dots along main path) */}
        {[0,1,2].map(i => (
          <circle key={i} className={`traveller traveller-${i}`} r={5} fill={nodePrimary} />
        ))}
      </svg>
      <style jsx>{`
        @media (prefers-reduced-motion: reduce) {
          :global(.path-flow), :global(.pulse-core), :global(.traveller) { animation: none !important; }
        }
        .path-flow {
          stroke-dasharray: 6 180;
          animation: dashMove 7s linear infinite;
        }
        .path-1 { animation-duration: 8.2s; animation-delay: -2s; }
        .path-2 { animation-duration: 9s; animation-delay: -4s; }
        .path-3 { animation-duration: 10.5s; animation-delay: -6s; }
        @keyframes dashMove { to { stroke-dashoffset: -400; } }
        .pulse-core { animation: pulse 3.8s ease-in-out infinite; transform-origin: center; }
        .node-0 .pulse-core { animation-duration: 4.4s; }
        .node-4 .pulse-core { animation-duration: 3.4s; }
        .node-6 .pulse-core { animation-duration: 5s; }
        @keyframes pulse { 0%,100% { transform: scale(0.9); opacity: 0.85;} 50% { transform: scale(1.15); opacity: 1; } }
        .traveller { animation: travelPath 11s linear infinite; }
        .traveller-1 { animation-duration: 13s; animation-delay: -6s; }
        .traveller-2 { animation-duration: 15s; animation-delay: -9s; }
        @keyframes travelPath {
          0% { transform: translate(110px,260px) scale(1); opacity: 0; }
          5% { opacity: 1; }
          25% { transform: translate(300px,180px) scale(0.9); }
          40% { transform: translate(540px,180px) scale(1); }
          55% { transform: translate(620px,300px) scale(1.05); }
          70% { transform: translate(700px,340px) scale(0.95); }
          85% { transform: translate(820px,260px) scale(1.15); }
          100% { transform: translate(820px,260px) scale(0.4); opacity: 0; }
        }
      `}</style>
    </div>
  )
}

export default LeadResponseHeroGraphic

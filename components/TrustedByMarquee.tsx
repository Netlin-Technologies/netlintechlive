"use client"
import React from 'react'
import { t } from '@/lib/locales'

type Logo = { src: string; alt?: string; bgClass?: string }

export default function TrustedByMarquee({
  title,
  logos,
  speed = 30,
}: {
  title?: string
  logos?: Logo[]
  speed?: number // seconds per loop
}) {
  const trustTitle = title ?? (t as any)?.content?.home?.bannerSection?.trustText ?? 'Those who ALREADY trust us.'
  const items: Logo[] =
    logos ?? [
      { src: '/group-835.png', alt: 'Client logo 1' },
      { src: '/group-835-1.png', alt: 'Client logo 2' },
      { src: '/group-836.png', alt: 'Client logo 3', bgClass: 'bg-[url(/krook2st-1.png)] bg-[100%_100%]' },
      { src: '/group-836-1.png', alt: 'Client logo 4', bgClass: 'bg-[url(/krook2st-1-1.png)] bg-[100%_100%]' },
    ]

  return (
    <section className="px-5">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-center text-[#9fb4c4] text-[11px] md:text-xs uppercase tracking-[0.2em]">
          {trustTitle}
        </p>
        <div className="mt-4 relative overflow-hidden">
          <div className="inline-flex items-center gap-10 md:gap-14 whitespace-nowrap animate-marquee will-change-transform">
            {[...items, ...items].map((logo, idx) => (
              <div key={idx} className="h-8 md:h-10 flex items-center">
                {logo.bgClass ? (
                  <div className={`relative w-[80px] md:w-[103px] h-[16px] md:h-[21px] ${logo.bgClass}`}>
                    <img className="absolute w-full h-full top-0 left-0" alt={logo.alt || 'Company logo'} src={logo.src} />
                  </div>
                ) : (
                  <img className="h-8 md:h-10 w-auto opacity-90" alt={logo.alt || 'Company logo'} src={logo.src} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-marquee { animation: marquee ${speed}s linear infinite; }
      `}</style>
    </section>
  )
}

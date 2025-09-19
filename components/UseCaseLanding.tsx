"use client"
import React, { useRef } from 'react'
import { NavbarSection } from './sections/NavbarSection'
import { FooterSection } from './sections/FooterSection'
import { Button } from './ui/button'
import { LocalizedLink } from './LocalizedLink'
import { motion, useInView } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { t } from '@/lib/locales'

type Stat = { label: string; value: string }

interface Props {
  title: string
  subtitle: string
  highlights?: string[]
  stats?: Stat[]
  sections: { id: string; heading: string; paragraphs: string[]; image?: string; imageAlt?: string; imageCaption?: string; imageCaptionMode?: 'below' | 'overlay'; layout?: 'imageLeft' | 'imageRight' | 'full' | 'imageBelow' | 'twoUp' | 'custom'; columns?: { left: string[]; right: string[] }; customContent?: React.ReactNode; customInsertIndex?: number }[]
  features?: { title: string; items: string[]; icon?: string }[]
  heroImage?: string
  heroBackdrop?: string
  gallery?: { title: string; items: { image: string; title?: string; description?: string }[] }
  faq?: { q: string; a: string }[]
  heroCustom?: React.ReactNode
  faqSubtitle?: string
  footerCtaTitle?: string
  footerCtaDescription?: string
  footerCtaButtonText?: string
  preSections?: React.ReactNode
  preSectionsFullBleed?: boolean
}

function FadeIn({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  )
}

export default function UseCaseLanding({ title, subtitle, highlights = [], stats = [], sections, features = [], heroImage = '/assets/uses/placeholder-illustration.svg', heroBackdrop = '/assets/uses/gradient-blob.svg', gallery, faq = [], heroCustom, faqSubtitle, footerCtaTitle, footerCtaDescription, footerCtaButtonText, preSections, preSectionsFullBleed }: Props) {
  return (
    <div className="min-h-screen bg-[#0c0e14]">
      <NavbarSection />
      <main className="w-full bg-[#0D0C14]">
        {/* Hero */}
  <section className="relative overflow-hidden px-5 pt-16 md:pt-24 pb-16 md:pb-24">
          <div className="max-w-[1100px] mx-auto text-center relative z-10">
            <FadeIn>
              <h1 className="text-white font-sora font-semibold text-3xl sm:text-4xl md:text-5xl xl:text-6xl leading-tight">
                {title}
              </h1>
            </FadeIn>
            <FadeIn delay={0.05}>
              <p className="mt-4 text-[#C6D5DD] text-base md:text-lg xl:text-xl leading-relaxed">
                {subtitle}
              </p>
            </FadeIn>

            {highlights.length > 0 && (
              <FadeIn delay={0.1}>
                <div className="flex flex-wrap gap-2 justify-center mt-6">
                  {highlights.map((h, i) => (
                    <span key={i} className="px-3 py-1 rounded border border-[#4d9aff] bg-[linear-gradient(90deg,rgba(61,137,249,0.15)_0%,rgba(39,98,186,0.15)_100%)] text-white/90 text-sm font-sora">
                      {h}
                    </span>
                  ))}
                </div>
              </FadeIn>
            )}

            <FadeIn delay={0.15}>
              <div className="w-full max-w-[520px] mx-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 mt-8">
                <LocalizedLink route="contact">
                  <Button variant="primaryGradient" className="w-full sm:w-auto px-5 h-11 text-base">
                    {t.content.hero.freeAnalysisButton}
                  </Button>
                </LocalizedLink>
                <Button
                  onClick={() => {
                    const el = document.getElementById('usecase-stats')
                    if (el) {
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                  }}
                  className="w-full sm:w-auto px-5 h-11 rounded border border-[#555555] bg-[linear-gradient(90deg,rgba(36,36,36,1)_0%,rgba(79,79,79,1)_100%)] text-white text-base font-sora font-semibold"
                >
                  {t.content.hero.howItWorksButton}
                </Button>
              </div>
            </FadeIn>

            {/* Hero visual */}
            <div className="relative mt-10 md:mt-12">
              {heroCustom ? (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}>
                  {heroCustom}
                </motion.div>
              ) : (
                <motion.img
                  src={heroImage}
                  alt="Illustration"
                  className="w-full max-w-[1000px] mx-auto rounded-[16px] border border-[#1E2A42] shadow-[0px_10px_30px_rgba(0,0,0,0.25)]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
                />
              )}
            </div>
          </div>

          {/* Background glows */}
          <div className="pointer-events-none absolute inset-0">
            <motion.div
              className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[900px] h-[280px] rounded-full blur-[120px] bg-gradient-to-br from-[#003066] to-[#005ED3] opacity-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 0.8 }}
            />
            <motion.img
              src={heroBackdrop}
              alt="Decor"
              className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1200px] opacity-30"
              animate={{ y: [0, -8, 0, 8, 0] }}
              transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </section>

        {/* Stats */}
        {stats.length > 0 && (
          <section id="usecase-stats" className="px-5 mt-6 scroll-mt-24">
            <div className="max-w-[1100px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
              {stats.map((s, i) => (
                <FadeIn key={i} delay={i * 0.05}>
                  <div className="rounded-[14px] border border-[#1E2A42] bg-[#11121a] p-4 text-center">
                    <div className="text-white font-sora text-2xl md:text-3xl font-semibold">{s.value}</div>
                    <div className="text-[#9fb4c4] text-xs md:text-sm mt-1">{s.label}</div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        )}
          {/* Full-width inserts between hero and sections (no card wrapper) */}
          {preSections ? (
            preSectionsFullBleed ? (
              <div className="mt-6 md:mt-8 w-screen relative left-1/2 ml-[-50vw]">
                {preSections}
              </div>
            ) : (
              <div className="mt-6 md:mt-8">
                {preSections}
              </div>
            )
          ) : null}


        {/* Content sections */}
        <section className="px-5 mt-10 md:mt-14">
          <div className="max-w-[1100px] mx-auto flex flex-col gap-10">
            {sections.map((sec, idx) => {
              const layout = sec.layout || 'full'
              if (layout === 'custom' && sec.customContent) {
                return (
                  <FadeIn key={sec.id}>
                    <article id={sec.id} className="rounded-[18px] border border-[#1E2A42] bg-[#0e1118] p-6 md:p-8 relative overflow-hidden">
                      <h2 className="text-white font-sora font-semibold text-2xl md:text-3xl">{sec.heading}</h2>
                      {(() => {
                        const paras = sec.paragraphs || []
                        const insertIndex = typeof sec.customInsertIndex === 'number'
                          ? Math.min(Math.max(0, sec.customInsertIndex), paras.length)
                          : paras.length
                        const before = paras.slice(0, insertIndex)
                        const after = paras.slice(insertIndex)
                        return (
                          <>
                            {before.length > 0 && (
                              <div className="mt-4 flex flex-col gap-4">
                                {before.map((p, i) => (
                                  <p key={`before-${i}`} className="text-[#C6D5DD] text-base md:text-lg leading-relaxed">{p}</p>
                                ))}
                              </div>
                            )}
                            <div className="mt-6">{sec.customContent}</div>
                            {after.length > 0 && (
                              <div className="mt-6 flex flex-col gap-4">
                                {after.map((p, i) => (
                                  <p key={`after-${i}`} className="text-[#C6D5DD] text-base md:text-lg leading-relaxed">{p}</p>
                                ))}
                              </div>
                            )}
                          </>
                        )
                      })()}
                      <div className="absolute -right-20 -bottom-16 w-[340px] h-[220px] rounded-full blur-[80px] bg-gradient-to-br from-[#003066] to-[#005ED3] opacity-30" />
                    </article>
                  </FadeIn>
                )
              }
              const hasImage = Boolean(sec.image)
              if (!hasImage || layout === 'full') {
                return (
                  <FadeIn key={sec.id}>
                  <article id={sec.id} className="rounded-[18px] border border-[#1E2A42] bg-[#0e1118] p-6 md:p-8 relative overflow-hidden">
                    <h2 className="text-white font-sora font-semibold text-2xl md:text-3xl">{sec.heading}</h2>
                    <div className="mt-4 flex flex-col gap-4">
                      {sec.paragraphs.map((p, i) => (
                        <p key={i} className="text-[#C6D5DD] text-base md:text-lg leading-relaxed">{p}</p>
                      ))}
                    </div>
                    {hasImage && (
                      <div className="mt-6 relative">
                        <img src={sec.image!} alt={sec.imageAlt || `${sec.heading} visual`} className="w-full rounded-[12px] border border-[#1E2A42]" />
                        {sec.imageCaption && sec.imageCaptionMode !== 'overlay' && (
                          <p className="text-[#9fb4c4] text-sm mt-2">{sec.imageCaption}</p>
                        )}
                        {sec.imageCaption && sec.imageCaptionMode === 'overlay' && (
                          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-[8px] border border-[#4d9aff] bg-[linear-gradient(90deg,rgba(61,137,249,0.18)_0%,rgba(39,98,186,0.18)_100%)] text-white text-xs font-sora">
                            {sec.imageCaption}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="absolute -right-20 -bottom-16 w-[340px] h-[220px] rounded-full blur-[80px] bg-gradient-to-br from-[#003066] to-[#005ED3] opacity-30" />
                  </article>
                  </FadeIn>
                )
              }

              // Split layouts
              if (layout === 'imageBelow') {
                return (
                  <FadeIn key={sec.id}>
                  <article id={sec.id} className="rounded-[18px] border border-[#1E2A42] bg-[#0e1118] p-6 md:p-8 relative overflow-hidden">
                    <h2 className="text-white font-sora font-semibold text-2xl md:text-3xl">{sec.heading}</h2>
                    <div className="mt-4 flex flex-col gap-4">
                      {sec.paragraphs.map((p, i) => (
                        <p key={i} className="text-[#C6D5DD] text-base md:text-lg leading-relaxed">{p}</p>
                      ))}
                    </div>
                    {hasImage && (
                      <div className="mt-6 relative">
                        <img src={sec.image!} alt={sec.imageAlt || `${sec.heading} visual`} className="w-full rounded-[12px] border border-[#1E2A42]" />
                        {sec.imageCaption && sec.imageCaptionMode !== 'overlay' && (
                          <p className="text-[#9fb4c4] text-sm mt-2">{sec.imageCaption}</p>
                        )}
                        {sec.imageCaption && sec.imageCaptionMode === 'overlay' && (
                          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-[8px] border border-[#4d9aff] bg-[linear-gradient(90deg,rgba(61,137,249,0.18)_0%,rgba(39,98,186,0.18)_100%)] text-white text-xs font-sora">
                            {sec.imageCaption}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="absolute -right-20 -bottom-16 w-[340px] h-[220px] rounded-full blur-[80px] bg-gradient-to-br from-[#003066] to-[#005ED3] opacity-30" />
                  </article>
                  </FadeIn>
                )
              }

              if (layout === 'twoUp') {
                return (
                  <FadeIn key={sec.id}>
                  <article id={sec.id} className="rounded-[18px] border border-[#1E2A42] bg-[#0e1118] p-6 md:p-8 relative overflow-hidden">
                    <h2 className="text-white font-sora font-semibold text-2xl md:text-3xl">{sec.heading}</h2>
                    <div className="mt-4 grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-3">
                        {sec.columns?.left?.map((t, i) => (
                          <p key={i} className="text-[#C6D5DD] text-base md:text-lg leading-relaxed">{t}</p>
                        ))}
                      </div>
                      <div className="flex flex-col gap-3">
                        {sec.columns?.right?.map((t, i) => (
                          <p key={i} className="text-[#C6D5DD] text-base md:text-lg leading-relaxed">{t}</p>
                        ))}
                      </div>
                    </div>
                    {hasImage && (
                      <div className="mt-6 relative">
                        <img src={sec.image!} alt={sec.imageAlt || `${sec.heading} visual`} className="w-full rounded-[12px] border border-[#1E2A42]" />
                        {sec.imageCaption && sec.imageCaptionMode !== 'overlay' && (
                          <p className="text-[#9fb4c4] text-sm mt-2">{sec.imageCaption}</p>
                        )}
                        {sec.imageCaption && sec.imageCaptionMode === 'overlay' && (
                          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-[8px] border border-[#4d9aff] bg-[linear-gradient(90deg,rgba(61,137,249,0.18)_0%,rgba(39,98,186,0.18)_100%)] text-white text-xs font-sora">
                            {sec.imageCaption}
                          </div>
                        )}
                      </div>
                    )}
                    <div className="absolute -right-20 -bottom-16 w-[340px] h-[220px] rounded-full blur-[80px] bg-gradient-to-br from-[#003066] to-[#005ED3] opacity-30" />
                  </article>
                  </FadeIn>
                )
              }

              const isLeft = layout === 'imageLeft'
              return (
                <FadeIn key={sec.id}>
                <article id={sec.id} className="rounded-[18px] border border-[#1E2A42] bg-[#0e1118] p-6 md:p-8 relative overflow-hidden">
                  <div className={`grid md:grid-cols-2 gap-6 items-center`}>
                    {isLeft && (
                      <div>
                        <img src={sec.image!} alt={sec.imageAlt || `${sec.heading} visual`} className="w-full rounded-[12px] border border-[#1E2A42]" />
                        {sec.imageCaption && sec.imageCaptionMode !== 'overlay' && (
                          <p className="text-[#9fb4c4] text-sm mt-2">{sec.imageCaption}</p>
                        )}
                        {sec.imageCaption && sec.imageCaptionMode === 'overlay' && (
                          <div className="absolute bottom-6 left-6 px-2.5 py-1 rounded-[8px] border border-[#4d9aff] bg-[linear-gradient(90deg,rgba(61,137,249,0.18)_0%,rgba(39,98,186,0.18)_100%)] text-white text-xs font-sora">
                            {sec.imageCaption}
                          </div>
                        )}
                      </div>
                    )}
                    <div>
                      <h2 className="text-white font-sora font-semibold text-2xl md:text-3xl">{sec.heading}</h2>
                      <div className="mt-4 flex flex-col gap-4">
                        {sec.paragraphs.map((p, i) => (
                          <p key={i} className="text-[#C6D5DD] text-base md:text-lg leading-relaxed">{p}</p>
                        ))}
                      </div>
                    </div>
                    {!isLeft && (
                      <div>
                        <img src={sec.image!} alt={sec.imageAlt || `${sec.heading} visual`} className="w-full rounded-[12px] border border-[#1E2A42]" />
                        {sec.imageCaption && sec.imageCaptionMode !== 'overlay' && (
                          <p className="text-[#9fb4c4] text-sm mt-2">{sec.imageCaption}</p>
                        )}
                        {sec.imageCaption && sec.imageCaptionMode === 'overlay' && (
                          <div className="absolute bottom-6 right-6 px-2.5 py-1 rounded-[8px] border border-[#4d9aff] bg-[linear-gradient(90deg,rgba(61,137,249,0.18)_0%,rgba(39,98,186,0.18)_100%)] text-white text-xs font-sora">
                            {sec.imageCaption}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                  <div className="absolute -right-20 -bottom-16 w-[340px] h-[220px] rounded-full blur-[80px] bg-gradient-to-br from-[#003066] to-[#005ED3] opacity-30" />
                </article>
                </FadeIn>
              )
            })}
          </div>
        </section>

        {/* Feature lists */}
        {features.length > 0 && (
          <section className="px-5 mt-10 md:mt-14">
            <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 items-stretch gap-6">
              {features.map((group, idx) => (
                <FadeIn key={idx} className="h-full">
                  <div className="h-full rounded-[18px] border border-[#1E2A42] bg-[#0e1118] p-6 md:p-8 flex flex-col">
                    <h3 className="text-white font-sora font-semibold text-xl md:text-2xl mb-4">{group.title}</h3>
                    <div className="space-y-3">
                      {group.items.map((li, i) => (
                        <div key={i} className="flex items-start gap-3">
                          {group.icon ? (
                            <img src={group.icon} alt="icon" className="mt-1 w-[18px] h-[18px]" />
                          ) : (
                            <span className="mt-1 w-[8px] h-[8px] rounded-full bg-[#4D9AFF] inline-block" />
                          )}
                          <span className="text-[#C6D5DD]">{li}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </section>
        )}

        {/* Gallery */}
        {gallery && gallery.items?.length > 0 && (
          <section className="px-5 mt-10 md:mt-16">
            <div className="max-w-[1100px] mx-auto">
              <h3 className="text-white font-sora font-semibold text-2xl md:text-3xl mb-6">{gallery.title}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.items.map((g, i) => (
                  <motion.div
                    key={i}
                    className="rounded-[16px] border border-[#1E2A42] bg-[#0e1118] overflow-hidden"
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.05 }}
                    whileHover={{ y: -2 }}
                  >
                    <img src={g.image} alt={g.title || 'Gallery image'} className="w-full h-auto" />
                    {(g.title || g.description) && (
                      <div className="p-4">
                        {g.title && <div className="text-white font-sora font-semibold">{g.title}</div>}
                        {g.description && <div className="text-[#9fb4c4] text-sm mt-1">{g.description}</div>}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {faq && faq.length > 0 && (
          <section className="px-5 mt-12 md:mt-18 mb-14 md:mb-20 lg:mb-24">
            <div className="max-w-[1100px] mx-auto">
              <h3 className="text-white font-sora font-semibold text-2xl md:text-3xl mb-4">{t.content.faq.title}</h3>
              <p className="text-[#C6D5DD] mb-6">{faqSubtitle || t.content.faq.subtitle}</p>
              <Accordion type="single" collapsible className="w-full">
                {faq.map((item, i) => (
                  <AccordionItem key={`faq-${i}`} value={`item-${i}`} className="border-b border-[#ffffff26] py-4 md:py-6">
                    <AccordionTrigger className="flex-1 justify-between py-2 text-left">
                      <div className="flex-1 font-['Sora',Helvetica] font-normal text-white text-base md:text-lg leading-snug">
                        {item.q}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pb-2 font-['Sora',Helvetica] font-light text-[#9fb4c4] text-base md:text-lg leading-relaxed">
                        {item.a}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </section>
        )}

        {/* CTA removed: rely on per-page footer CTA */}

      </main>
      <FooterSection ctaTitle={footerCtaTitle} ctaDescription={footerCtaDescription} ctaButtonText={footerCtaButtonText} />
    </div>
  )
}

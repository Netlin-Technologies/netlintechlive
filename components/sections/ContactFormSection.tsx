'use client'

import { ChevronDownIcon, Loader2 } from "lucide-react";
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { t } from '@/lib/locales';
import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";

// Dynamically import Select components to prevent SSR issues
const Select = dynamic(
  () => import("../ui/select").then((mod) => mod.Select),
  { ssr: false }
);
const SelectContent = dynamic(
  () => import("../ui/select").then((mod) => mod.SelectContent),
  { ssr: false }
);
const SelectItem = dynamic(
  () => import("../ui/select").then((mod) => mod.SelectItem),
  { ssr: false }
);
const SelectTrigger = dynamic(
  () => import("../ui/select").then((mod) => mod.SelectTrigger),
  { ssr: false }
);
const SelectValue = dynamic(
  () => import("../ui/select").then((mod) => mod.SelectValue),
  { ssr: false }
);

export const ContactFormSection = (): JSX.Element => {
  // Prevent SSR issues by only rendering on client side
  const [mounted, setMounted] = useState(false)

  // Local state
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    service: '',
    message: '',
  })
  const [discoveryCall, setDiscoveryCall] = useState(true)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  // Track whether discovery call was enabled when the form was submitted
  const [submittedDiscoveryCall, setSubmittedDiscoveryCall] = useState(false)

  // Ensure component only renders on client side
  useEffect(() => {
    setMounted(true)
  }, [])

  // Optional: configurable Google Calendar embed URL via env (client-side only)
  const calendarEmbedUrl = typeof window !== 'undefined' ? process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMBED_URL || '' : ''
  // Force a light-looking calendar using a CSS filter (useful when the Google UI renders dark)
  const calendarForceLight = typeof window !== 'undefined' ? (process.env.NEXT_PUBLIC_CALENDAR_FORCE_LIGHT || 'true') !== 'false' : true
  const calendarIframeClasses = `w-full h-[800px] border-0 ${calendarForceLight ? 'filter invert hue-rotate-180 saturate-125 brightness-105' : ''}`

  // Don't render anything on server side
  if (!mounted) {
    return <div className="flex flex-col items-center justify-center gap-6 pt-8 md:pt-16 pb-0 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative self-stretch w-full animate-fade-in-up animation-delay-600">
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    </div>
  }

  // Form field data for mapping
  const formFields = [
    {
      row: 1,
      fields: [
        {
          id: "firstName",
          label: t.content.contactForm.form.firstName.label,
          placeholder: t.content.contactForm.form.firstName.placeholder,
          type: "text",
        },
        {
          id: "lastName",
          label: t.content.contactForm.form.lastName.label,
          placeholder: t.content.contactForm.form.lastName.placeholder,
          type: "text",
        },
      ],
    },
    {
      row: 2,
      fields: [
        {
          id: "workEmail",
          label: t.content.contactForm.form.workEmail.label,
          placeholder: t.content.contactForm.form.workEmail.placeholder,
          type: "email",
        },
        {
          id: "service",
          label: t.content.contactForm.form.service.label,
          placeholder: t.content.contactForm.form.service.placeholder,
          isSelect: true,
        },
      ],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    setFieldErrors({})

    // Require service selection
    const errs: Record<string, string> = {}
    if (!form.service) {
      errs.service = t.content.contactForm.errors.serviceRequired
    }
    if (!form.firstName) errs.firstName = t.content.contactForm.errors.firstNameRequired
    if (!form.lastName) errs.lastName = t.content.contactForm.errors.lastNameRequired
    if (!form.workEmail) errs.workEmail = t.content.contactForm.errors.emailRequired
    if (!form.message) errs.message = t.content.contactForm.errors.messageRequired

    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs)
      setLoading(false)
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, discoveryCall })
      })

      if (!res.ok) {
        const data = await res.json().catch(() => ({}))
        throw new Error(data?.error || 'Failed to send message')
      }

      setSuccess(true)
      // Remember the discoveryCall state at the moment of successful submit
      setSubmittedDiscoveryCall(discoveryCall)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send message')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 pt-8 md:pt-16 pb-0 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative self-stretch w-full animate-fade-in-up animation-delay-600">
      <Card className="flex flex-col gap-6 md:gap-8 p-6 md:p-8 lg:p-10 bg-[#0c0b12] rounded-2xl border border-solid border-[hsl(0,0,18%)] shadow-[0px_0px_100px_#034baecc] w-full max-w-4xl hover:shadow-[0px_0px_120px_#034baecc] transition-all duration-500">
        <CardContent className="flex flex-col gap-6 md:gap-8 p-0">
          {success ? (
            <>
              <div className="flex flex-col items-center justify-center text-center gap-4 p-8 bg-[#0e0d16] rounded-2xl border border-[hsl(0,0,18%)]">
                <div className="w-14 h-14 rounded-full bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] flex items-center justify-center shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-sora font-semibold text-white text-2xl">{t.content.contactForm.success.title}</h3>
                <p className="font-sora text-[#b9b8c0]">{t.content.contactForm.success.description}</p>
                <Button onClick={() => { setSuccess(false); setSubmittedDiscoveryCall(false); setForm({ firstName:'', lastName:'', workEmail:'', service:'', message:'' }) }} className="mt-2 p-3 md:p-4 rounded-lg border border-solid border-[#4d9aff] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] text-white font-sora hover:opacity-90 transition-all duration-300">
                  {t.content.contactForm.success.anotherMessageButton}
                </Button>
              </div>

              {submittedDiscoveryCall && (
                <div className="flex flex-col gap-4 md:gap-6 mt-6">
                  <h4 className="font-sora font-semibold text-white text-xl text-center">{t.content.contactForm.discoveryCall.title}</h4>
                  {calendarEmbedUrl && calendarEmbedUrl.trim() ? (
                    <div className="overflow-hidden rounded-2xl border border-[hsl(0,0,18%)] bg-[#0e0d16]">
                      <iframe
                        src={calendarEmbedUrl}
                        className={calendarIframeClasses}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allow="clipboard-write; encrypted-media;"
                        title="Discovery Call Booking"
                      />
                      <div className="flex justify-center py-3">
                        <a
                          href={calendarEmbedUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm font-sora text-[#b9b8c0] hover:text-white transition-colors"
                        >
                          {t.content.contactForm.booking.openInNewTab}
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center text-sm md:text-base font-sora text-[#b9b8c0] bg-[#0e0d16] rounded-2xl border border-[hsl(0,0,18%)] p-6">
                      {t.content.contactForm.booking.notConfigured}
                    </div>
                  )}
                </div>
              )}
            </>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:gap-8">
              {formFields.map((row) => (
                <div
                  key={`row-${row.row}`}
                  className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 lg:gap-8 w-full"
                >
                  {row.fields.map((field: any) => (
                    <div
                      key={field.id}
                      className="flex flex-col items-start gap-2 md:gap-3 w-full"
                    >
                      <Label
                        htmlFor={field.id}
                        className="font-sora font-normal text-white text-sm md:text-base"
                      >
                        {field.label}
                      </Label>

                      {field.isSelect ? (
                        <>
                          {mounted ? (
                            <Select value={form.service} onValueChange={(v) => { setForm({ ...form, service: v }); setFieldErrors(prev => ({ ...prev, service: '' })) }}>
                              <SelectTrigger
                                id={field.id}
                                className={`text-white placeholder:text-[#414141] justify-between p-3 md:p-4 w-full bg-[#12101e] rounded-xl border border-solid text-sm md:text-base font-sora font-normal transition-all duration-300 hover:animate-rotate-glow-subtle ${fieldErrors.service ? 'border-red-500' : 'border-[hsl(0,0,18%)] hover:border-[#4d9aff] focus:border-[#4d9aff]'}`}
                                aria-invalid={!!fieldErrors.service}
                              >
                                <SelectValue 
                                  placeholder={field.placeholder}
                                  className="text-white placeholder:text-[#414141] font-sora"
                                />
                              </SelectTrigger>
                              <SelectContent className="bg-[#12101e] border border-[hsl(0,0,18%)] rounded-xl">
                                <SelectItem value="web-development" className="cursor-pointer text-white font-sora text-sm hover:bg-[#1a1825] hover:text-white focus:bg-[#1a1825] focus:text-white transition-colors duration-200">
                                  {t.content.contactForm.form.service.options.webDevelopment}
                                </SelectItem>
                                <SelectItem value="ai-automation" className="cursor-pointer text-white font-sora text-sm hover:bg-[#1a1825] hover:text-white focus:bg-[#1a1825] focus:text-white transition-colors duration-200">
                                  {t.content.contactForm.form.service.options.aiAutomation}
                                </SelectItem>
                                <SelectItem value="consulting" className="cursor-pointer text-white font-sora text-sm hover:bg-[#1a1825] hover:text-white focus:bg-[#1a1825] focus:text-white transition-colors duration-200">
                                  {t.content.contactForm.form.service.options.consulting}
                                </SelectItem>
                                <SelectItem value="custom-solutions" className="cursor-pointer text-white font-sora text-sm hover:bg-[#1a1825] hover:text-white focus:bg-[#1a1825] focus:text-white transition-colors duration-200">
                                  {t.content.contactForm.form.service.options.customSolutions}
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          ) : (
                            <div 
                              className={`text-white placeholder:text-[#414141] justify-between p-3 md:p-4 w-full bg-[#12101e] rounded-xl border border-solid text-sm md:text-base font-sora font-normal transition-all duration-300 flex items-center ${fieldErrors.service ? 'border-red-500' : 'border-[hsl(0,0,18%)]'}`}
                            >
                              <span className="text-[#414141]">{field.placeholder}</span>
                              <ChevronDownIcon className="h-4 w-4 opacity-50" />
                            </div>
                          )}
                          {fieldErrors.service && (
                            <p className="text-red-400 text-xs mt-1">{fieldErrors.service}</p>
                          )}
                        </>
                      ) : (
                        <>
                          <Input
                            id={field.id}
                            type={field.type}
                            placeholder={field.placeholder}
                            value={(form as any)[field.id]}
                            onChange={(e) => { setForm({ ...form, [field.id]: e.target.value }); setFieldErrors(prev => ({ ...prev, [field.id]: '' })) }}
                            className={`text-white p-3 md:p-4 w-full bg-[#12101E] rounded-lg border border-solid text-sm md:text-base font-sora font-normal placeholder:text-[#414141] transition-all duration-300 hover:animate-rotate-glow-subtle focus:animate-rotate-glow-subtle ${fieldErrors[field.id] ? 'border-red-500' : 'border-[hsl(0,0,18%)] hover:border-[#4d9aff] focus:border-[#4d9aff]'}`}
                            aria-invalid={!!fieldErrors[field.id]}
                          />
                          {fieldErrors[field.id] && (
                            <p className="text-red-400 text-xs mt-1">{fieldErrors[field.id]}</p>
                          )}
                        </>
                      )}
                    </div>
                  ))}
                </div>
              ))}

              {/* Message textarea */}
              <div className="flex flex-col items-start gap-2 md:gap-3 w-full">
                <Label
                  htmlFor="message"
                  className="font-sora font-normal text-white text-sm md:text-base"
                >
                  {t.content.contactForm.form.message.label}
                </Label>
                <textarea
                  id="message"
                  placeholder={t.content.contactForm.form.message.placeholder}
                  rows={4}
                  value={form.message}
                  onChange={(e) => { setForm({ ...form, message: e.target.value }); setFieldErrors(prev => ({ ...prev, message: '' })) }}
                  className={`text-white p-3 md:p-4 w-full bg-[#12101e] rounded-xl border border-solid text-sm md:text-base font-sora font-normal placeholder:text-[#414141] transition-all duration-300 hover:animate-rotate-glow-subtle focus:animate-rotate-glow-subtle resize-vertical min-h-[100px] focus:outline-none focus:ring-0 ${fieldErrors.message ? 'border-red-500' : 'border-[hsl(0,0,18%)] hover:border-[#4d9aff] focus:border-[#4d9aff]'}`}
                  aria-invalid={!!fieldErrors.message}
                />
                {fieldErrors.message && (
                  <p className="text-red-400 text-xs mt-1">{fieldErrors.message}</p>
                )}
              </div>

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-6 w-full">
                <div className="flex-1">
                  <h3 className="font-sora font-semibold text-white text-lg md:text-xl mb-2">
                    {t.content.contactForm.discoveryCall.title}
                  </h3>
                  <p className="font-sora font-normal text-sm md:text-base leading-relaxed">
                    <span className="text-[#807f8c]">{t.content.contactForm.discoveryCall.description.part1}</span>
                    <span className="text-white">
                      {t.content.contactForm.discoveryCall.description.highlight1}
                    </span>
                    <span className="text-[#807f8c]">
                      {" "}
                      {t.content.contactForm.discoveryCall.description.part2}{" "}
                    </span>
                    <span className="text-white">
                      {t.content.contactForm.discoveryCall.description.highlight2}
                    </span>
                    <span className="text-[#807f8c]">
                      {" "}
                      {t.content.contactForm.discoveryCall.description.part3}
                    </span>
                  </p>
                </div>
                <div className="flex items-center justify-center">
                  <Switch
                    className="data-[state=checked]:bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] data-[state=unchecked]:bg-[#33323e] h-8 w-14 rounded-full border-0 [&>span]:h-6 [&>span]:w-6 [&>span]:data-[state=checked]:translate-x-6 [&>span]:data-[state=unchecked]:translate-x-1 [&>span]:transition-transform [&>span]:duration-200 [&>span]:bg-white [&>span]:rounded-full [&>span]:shadow-lg"
                    checked={discoveryCall}
                    onCheckedChange={setDiscoveryCall}
                  />
                </div>
              </div>

              {error && (
                <div className="text-red-400 font-sora text-sm bg-red-950/30 border border-red-900 rounded-lg p-3">
                  {error}
                </div>
              )}

              <Button type="submit" disabled={loading} className="w-full p-3 md:p-4 rounded-lg border border-solid border-[#4d9aff] bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] text-white text-base md:text-lg font-sora font-normal hover:opacity-90 transition-all duration-300 hover:animate-rotate-glow">
                {loading ? (
                  <span className="inline-flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    {t.content.contactForm.states.sending}
                  </span>
                ) : (
                  t.content.contactForm.submitButton
                )}
              </Button>

              <p className="text-center text-sm md:text-base font-sora font-normal leading-relaxed">
                <span className="text-[#807f8c]">
                  {t.content.contactForm.agreement.text}{" "}
                </span>
                <span className="font-semibold text-white cursor-pointer hover:text-[#4d9aff] transition-colors duration-200">
                  {t.content.contactForm.agreement.terms}
                </span>
                <span className="text-[#807f8c]"> {t.content.contactForm.agreement.and} </span>
                <span className="font-semibold text-white cursor-pointer hover:text-[#4d9aff] transition-colors duration-200">
                  {t.content.contactForm.agreement.privacy}
                </span>
                <span className="text-[#807f8c]">.</span>
              </p>
            </form>
          )}
        </CardContent>
      </Card>

      {/* Contact Information Card */}
      <Card className="flex flex-col gap-4 md:gap-6 p-6 md:p-8 bg-[#0c0b12] rounded-2xl border border-solid border-[hsl(0,0,18%)] animate-rotate-glow-subtle w-full max-w-4xl transition-all duration-500 animate-fade-in-up animation-delay-800">
        <CardContent className="flex flex-col gap-4 md:gap-6 p-0">
          <h3 className="font-sora font-semibold text-white text-lg md:text-xl text-center">
            {t.content.contactForm.contactInfo.title}
          </h3>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            {/* Phone */}
            <a href="tel:+36702002220">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] rounded-full flex items-center justify-center animate-pulse-subtle">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="font-sora font-normal text-white text-sm">{t.content.contactForm.contactInfo.phone.label}</div>
                <div className="font-sora font-light text-[#807f8c] text-sm">{t.content.contactForm.contactInfo.phone.value}</div>
              </div>
            </a>

            {/* Email */}
            <a href="mailto:info@netlintech.com">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] rounded-full flex items-center justify-center animate-pulse-subtle animation-delay-200">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="font-sora font-normal text-white text-sm">{t.content.contactForm.contactInfo.email.label}</div>
                <div className="font-sora font-light text-[#807f8c] text-sm">{t.content.contactForm.contactInfo.email.value}</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a href="https://www.facebook.com/netlintech" target="_blank">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-12 h-12 bg-[linear-gradient(90deg,rgba(61,137,249,1)_0%,rgba(39,98,186,1)_100%)] rounded-full flex items-center justify-center animate-pulse-subtle animation-delay-400">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="font-sora font-normal text-white text-sm">{t.content.contactForm.contactInfo.linkedin.label}</div>
                <div className="font-sora font-light text-[#807f8c] text-sm">{t.content.contactForm.contactInfo.linkedin.value}</div>
              </div>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
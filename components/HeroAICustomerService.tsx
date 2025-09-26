"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  labels: {
    chatHeader: string
    chatItems: { side: 'user' | 'ai'; text: string }[]
    typingText: string
    typingUserText?: string
    typingAiText?: string
    voiceHeader: string
    voiceStatus: string
    callDuration: string
    mute: string
    end: string
  }
}

function PhoneFrame({ children, footer, tilt = 0 }: { children: React.ReactNode; footer?: React.ReactNode; tilt?: number }) {
  return (
    <motion.div
      className="w-full max-w-[520px]"
      initial={{ rotate: tilt }}
      whileHover={{ rotate: 0 }}
      transition={{ type: 'spring', stiffness: 140, damping: 16 }}
    >
      <div className="relative rounded-[28px] p-[10px] bg-[linear-gradient(135deg,#1a2436_0%,#0b0f18_60%,#1a2436_100%)] shadow-[0_10px_40px_rgba(0,0,0,0.45)] border border-[#24324b]">
        {/* subtle outer glow */}
        <div className="pointer-events-none absolute -inset-2 rounded-[34px] bg-[radial-gradient(60%_50%_at_50%_10%,rgba(61,137,249,0.25),transparent_70%)]" />

        <div className="relative rounded-[22px] overflow-hidden border border-[#1E2A42] bg-[#0f1017]">
          {/* side buttons */}
          <div className="absolute -left-1 top-20 h-8 w-[3px] rounded bg-[#2b3954]" />
          <div className="absolute -left-1 top-32 h-12 w-[3px] rounded bg-[#2b3954]" />
          <div className="absolute -right-1 top-28 h-16 w-[3px] rounded bg-[#2b3954]" />

          {children}
          {footer}
        </div>
      </div>
    </motion.div>
  )
}

function ChatPhone({ labels }: Props) {
  const { chatHeader, chatItems, typingText, typingUserText, typingAiText } = labels
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const [typed, setTyped] = React.useState('')
  const [finished, setFinished] = React.useState(false)

  React.useEffect(() => {
    let charTimer: any
    let pauseTimer: any
    if (finished) return
    const msg = chatItems[currentIndex]
    if (!msg) return
    const full = msg.text
    let i = 0

    const typeStep = () => {
      setTyped(full.slice(0, i))
      i += 1
      if (i <= full.length) {
        charTimer = setTimeout(typeStep, 75) // slower typing
      } else {
        pauseTimer = setTimeout(() => {
          setTyped('')
          // If this was the last message, finalize and stop.
          if (currentIndex >= chatItems.length - 1) {
            setCurrentIndex(chatItems.length) // render all messages
            setFinished(true)
          } else {
            setCurrentIndex((prev) => prev + 1)
          }
        }, 1200) // small pause between messages
      }
    }
    // small initial delay so it feels natural
    charTimer = setTimeout(typeStep, 600)
    return () => {
      clearTimeout(charTimer)
      clearTimeout(pauseTimer)
    }
  }, [currentIndex, chatItems, finished])

  const indicatorRole = finished ? undefined : (chatItems[currentIndex]?.side || 'ai')
  const roleLabel = indicatorRole === 'user' ? (typingUserText || 'Customer') : indicatorRole === 'ai' ? (labels.typingAiText ? labels.typingAiText.replace(/\s*is typing…?$/i, '') : 'AI') : ''
  // Messages already completed
  const completed = finished ? chatItems : chatItems.slice(0, currentIndex)
  const currentTyping = !finished ? chatItems[currentIndex] : null

  return (
    <PhoneFrame
      tilt={-2}
      footer={
        <div className="p-3 border-t border-[#1E2A42] bg-[#0e1118]">
          <div className="flex items-center gap-2 bg-[#11121a] border border-[#1E2A42] rounded-full px-3 py-2">
            <div className={`w-2 h-2 rounded-full ${finished ? 'bg-[#47556f]' : 'bg-[#22C55E] animate-pulse'}`} />
            <div className="flex-1 min-w-0 text-left">
              <span className="block text-[#9fb4c4] text-sm">
                {finished ? '' : (
                  <>
                    {roleLabel}: {typed && typed.length > 0 ? typed : '…'}
                    <span className="inline-block w-[10px]">{typed.length < ((chatItems[currentIndex]?.text?.length) || 0) ? '|' : ''}</span>
                  </>
                )}
              </span>
            </div>
          </div>
        </div>
      }
    >
      <div className="px-4 py-3 border-b border-[#1E2A42] bg-[#0f121a]">
        <div className="text-white font-sora font-semibold">{chatHeader}</div>
      </div>
      <ul className="p-4 flex flex-col gap-3 min-h-[260px]" aria-live="polite">
        {completed.map((item, i) => (
          <motion.li
            key={i}
            className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
              item.side === 'user'
                ? 'self-end bg-[linear-gradient(90deg,rgba(61,137,249,0.18)_0%,rgba(39,98,186,0.18)_100%)] border border-[#2a4875] text-white'
                : 'self-start bg-[#141821] border border-[#1E2A42] text-[#DCE9FF]'
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            {item.text}
          </motion.li>
        ))}
        {currentTyping ? (
          <motion.li
            key="typing"
            className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
              currentTyping.side === 'user'
                ? 'self-end bg-[linear-gradient(90deg,rgba(61,137,249,0.18)_0%,rgba(39,98,186,0.18)_100%)] border border-[#2a4875] text-white'
                : 'self-start bg-[#141821] border border-[#1E2A42] text-[#DCE9FF]'
            }`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
            aria-label={typed ? `${roleLabel} typing ${typed}` : `${roleLabel} typing`}
          >
            {typed || '‎'}{/* invisible placeholder char keeps height */}
            {typed.length < ((chatItems[currentIndex]?.text?.length) || 0) && <span className="inline-block w-[6px] animate-pulse">|</span>}
          </motion.li>
        ) : null}
      </ul>
    </PhoneFrame>
  )
}

function VoicePhone({ labels }: Props) {
  const { voiceHeader, voiceStatus, callDuration, mute, end } = labels
  // Bar animation variants with different phase offsets
  const bars = [0, 0.2, 0.4, 0.1, 0.3]
  return (
    <PhoneFrame tilt={2}>
      <div className="px-4 py-3 border-b border-[#1E2A42] bg-[#0f121a]">
        <div className="text-white font-sora font-semibold">{voiceHeader}</div>
      </div>
      <div className="p-4 flex flex-col items-center gap-4 min-h-[260px] justify-center">
        <div className="text-[#9fb4c4] text-sm">{voiceStatus}</div>
        <div className="flex items-end gap-2 h-16">
          {bars.map((delay, idx) => (
            <motion.div
              key={idx}
              className="w-2 rounded bg-[#3D89F9]"
              initial={{ height: 8, opacity: 0.9 }}
              animate={{ height: [8, 28, 14, 22, 10, 26, 8] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay }}
            />
          ))}
        </div>
        <div className="text-white font-sora tracking-wider text-sm mt-1">{callDuration}</div>
        <div className="mt-3 flex items-center gap-3">
          <button className="px-3 h-9 rounded-full border border-[#1E2A42] bg-[#11121a] text-[#DCE9FF] text-sm">{mute}</button>
          <button className="px-3 h-9 rounded-full border border-[#7a1a1a] bg-[linear-gradient(90deg,rgba(255,86,86,0.2)_0%,rgba(201,43,43,0.25)_100%)] text-white text-sm">{end}</button>
        </div>
      </div>
    </PhoneFrame>
  )
}

export default function HeroAICustomerService({ labels }: Props) {
  // Provide minimal fallbacks so component always renders visible boxes
  const safe: Props['labels'] = {
    chatHeader: labels.chatHeader || 'AI Chat',
    chatItems: labels.chatItems && labels.chatItems.length ? labels.chatItems : [
      { side: 'user', text: 'Hey, can you help me with my order?' },
      { side: 'ai', text: 'Of course! What is your order ID?' }
    ],
    typingText: labels.typingText || 'typing…',
    typingUserText: labels.typingUserText || 'Customer',
    typingAiText: labels.typingAiText || 'Agent',
    voiceHeader: labels.voiceHeader || 'Live AI Voice',
    voiceStatus: labels.voiceStatus || 'Connected to caller',
    callDuration: labels.callDuration || '00:32',
    mute: labels.mute || 'Mute',
    end: labels.end || 'End'
  }
  return (
    <div className="w-full">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        <ChatPhone labels={safe} />
        <VoicePhone labels={safe} />
      </div>
    </div>
  )
}

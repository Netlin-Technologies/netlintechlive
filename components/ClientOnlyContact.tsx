'use client'

import dynamic from 'next/dynamic'
import React from 'react'

const Contact = dynamic(async () => {
  const mod = await import('./Contact')
  return mod.Contact
}, {
  ssr: false,
  loading: () => (
    <div className="flex flex-col items-center justify-center gap-6 pt-8 md:pt-16 pb-0 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative self-stretch w-full">
      <div className="flex justify-center items-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    </div>
  )
})

export default function ClientOnlyContact() {
  return <Contact />
}

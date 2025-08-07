"use client"

import dynamic from 'next/dynamic'

// Dynamic import for admin page to avoid SSR issues with rich text editor
const AdminPanel = dynamic(() => import('./AdminPanel').then(mod => ({ default: mod.AdminPanel })), { 
  ssr: false,
  loading: () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading admin panel...</p>
      </div>
    </div>
  )
})

export default function AdminPageWrapper() {
  return <AdminPanel />
}

import { Contact } from '@/components/Contact'

export default function ContactPage() {
  return <Contact />
}
/*
export default function ContactPage() {
  // Get the current locale from environment variable
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  
  const content = {
    en: {
      title: 'Contact Us',
      description: 'Get in touch with us'
    },
    de: {
      title: 'Kontakt',
      description: 'Kontaktieren Sie uns'
    }
  }
  
  const currentContent = content[locale as keyof typeof content]
  
  return (
    <div>
      <h1>{currentContent.title}</h1>
      <p>{currentContent.description}</p>
    </div>
  )
}
  */

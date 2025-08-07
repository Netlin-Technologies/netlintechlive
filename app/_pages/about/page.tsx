export default function AboutPage() {
  // Get the current locale from environment variable
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  
  const content = {
    en: {
      title: 'About Us',
      description: 'Learn more about our company'
    },
    de: {
      title: 'Über Uns',
      description: 'Erfahren Sie mehr über unser Unternehmen'
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
export default function ServicesPage() {
  // Get the current locale from environment variable
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  
  const content = {
    en: {
      title: 'Our Services',
      description: 'Discover what we can do for you'
    },
    de: {
      title: 'Unsere Dienstleistungen',
      description: 'Entdecken Sie, was wir für Sie tun können'
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

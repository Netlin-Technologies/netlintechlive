export default function Custom404() {
  // Get the current locale from environment variable
  const locale = process.env.NEXT_PUBLIC_LOCALE || 'en'
  
  const content = {
    en: {
      title: '404 - Page Not Found',
      description: 'The page you are looking for does not exist.',
      goHome: 'Go Home'
    },
    de: {
      title: '404 - Seite nicht gefunden',
      description: 'Die gesuchte Seite existiert nicht.',
      goHome: 'Zur Startseite'
    }
  }
  
  const currentContent = content[locale as keyof typeof content]
  
  return (
    <div className="min-h-screen bg-[#0c0e14] flex items-center justify-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">{currentContent.title}</h1>
        <p className="text-xl mb-8">{currentContent.description}</p>
        <a 
          href="/" 
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          {currentContent.goHome}
        </a>
      </div>
    </div>
  )
}

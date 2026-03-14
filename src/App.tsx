import { Background } from './components/Background'
import { SiteHeader } from './components/SiteHeader'
import { FeaturesSection } from './sections/FeaturesSection'
import { HeroSection } from './sections/HeroSection'
import { LanguagesSection } from './sections/LanguagesSection'
import { ProvidersSection } from './sections/ProvidersSection'
import { QuickStartSection } from './sections/QuickStartSection'
import { SiteFooter } from './sections/SiteFooter'

function App() {
  return (
    <>
      <Background />
      <SiteHeader />

      <main id="top" className="wrap">
        <HeroSection />
        <FeaturesSection />
        <LanguagesSection />
        <ProvidersSection />
        <QuickStartSection />
        <SiteFooter />
      </main>
    </>
  )
}

export default App


import SiteShell from './layout/SiteShell'
import {
  HeroSection,
  ManifestoSection,
  FeaturedSection,
  TopicsSection,
  JourneySection,
  NewsletterSection,
  ContactSection,
  FooterSection,
} from './sections'

function App() {
  return (
    <SiteShell>
      <HeroSection />
      <ManifestoSection />
      <FeaturedSection />
      <TopicsSection />
      <JourneySection />
      <NewsletterSection />
      <ContactSection />
      <FooterSection />
    </SiteShell>
  )
}

export default App

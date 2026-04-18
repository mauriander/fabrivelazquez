import SiteShell from './layout/SiteShell'
import {
  AboutSection,
  BlogSection,
  ContactSection,
  FooterSection,
  HeroSection,
  MethodSection,
  ProjectsSection,
  ServicesSection,
} from './sections'

function App() {
  return (
    <SiteShell>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <BlogSection />
      <MethodSection />
      <ContactSection />
      <FooterSection />
    </SiteShell>
  )
}

export default App

import { ArrowRight } from 'lucide-react'
import SectionWrapper from '../layout/SectionWrapper'
import { heroContent } from '../content/siteContent'

function HeroSection() {
  return (
    <SectionWrapper id="inicio" labelledBy="hero-title" className="hero-section" innerClassName="hero-grid">
        <p className="section-eyebrow">{heroContent.eyebrow}</p>
        <h1 id="hero-title">{heroContent.title}</h1>
        <p className="hero-description">{heroContent.description}</p>

        <div className="hero-actions">
          <a className="button-primary" href={heroContent.primaryCta.href}>
            {heroContent.primaryCta.label}
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
          <a className="button-secondary" href={heroContent.secondaryCta.href}>
            {heroContent.secondaryCta.label}
          </a>
        </div>
    </SectionWrapper>
  )
}

export default HeroSection

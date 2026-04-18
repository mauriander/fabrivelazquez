import { ArrowUpRight } from 'lucide-react'
import SectionWrapper from '../layout/SectionWrapper'
import { aboutSection } from '../content/siteContent'

function AboutSection() {
  return (
    <SectionWrapper id="enfoque" labelledBy="enfoque-title" className="about-section" innerClassName="about-layout">
      <div className="about-copy">
        <p className="section-eyebrow">{aboutSection.eyebrow}</p>
        <h2 id="enfoque-title">{aboutSection.title}</h2>
        <p className="about-lead">{aboutSection.lead}</p>
        <p className="section-description">{aboutSection.description}</p>
        <a className="text-link" href={aboutSection.cta.href}>
          {aboutSection.cta.label}
          <ArrowUpRight size={17} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>

      <figure className="about-visual">
        <img src={aboutSection.image.src} alt={aboutSection.image.alt} />
      </figure>
    </SectionWrapper>
  )
}

export default AboutSection

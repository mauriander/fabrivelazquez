import { Send } from 'lucide-react'
import ParallaxVisual from '../components/ParallaxVisual'
import SectionWrapper from '../layout/SectionWrapper'
import { newsletterContent, sectionVisuals } from '../content/siteContent'

function NewsletterSection() {
  return (
    <SectionWrapper
      id="newsletter"
      labelledBy="newsletter-title"
      className="newsletter-section"
      innerClassName="newsletter-inner"
    >
      <div className="bleed-viewport">
        <ParallaxVisual
          className="closing-visual"
          mediaClassName="closing-visual-media"
          imageSrc={sectionVisuals.closing.src}
          imageAlt={sectionVisuals.closing.alt}
          imagePosition="center center"
          overlayClassName="parallax-visual-overlay--soft"
          ariaLabel="Bloque visual de cierre editorial"
          speed={12}
          reverse
        />
      </div>

      <p className="section-eyebrow">{newsletterContent.eyebrow}</p>
      <h2 id="newsletter-title">{newsletterContent.title}</h2>
      <p className="newsletter-description">{newsletterContent.description}</p>
      <p className="newsletter-supporting">{newsletterContent.supportingText}</p>

      <a
        className="button-primary newsletter-cta"
        href={newsletterContent.cta.href}
        target="_blank"
        rel="noreferrer"
        aria-label={newsletterContent.cta.label}
      >
        {newsletterContent.cta.label}
        <Send size={16} strokeWidth={2} aria-hidden="true" />
      </a>

      <p className="newsletter-note">
        {newsletterContent.note}
      </p>
    </SectionWrapper>
  )
}

export default NewsletterSection

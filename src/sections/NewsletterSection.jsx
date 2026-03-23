import { Send } from 'lucide-react'
import SectionWrapper from '../layout/SectionWrapper'

function NewsletterSection() {
  return (
    <SectionWrapper id="newsletter" labelledBy="newsletter-title" className="newsletter-section" innerClassName="newsletter-inner">
        <p className="section-eyebrow">Newsletter</p>
        <h2 id="newsletter-title">Un correo breve cuando haya algo valioso para pensar.</h2>
        <p>
          Placeholder para integrar formulario con Substack, ConvertKit o endpoint propio sin cambiar la estructura de UI.
        </p>
        <a className="button-primary" href="#" aria-label="Suscribirme a la newsletter">
          Suscribirme
          <Send size={16} strokeWidth={2} aria-hidden="true" />
        </a>
    </SectionWrapper>
  )
}

export default NewsletterSection

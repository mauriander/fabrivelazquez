import { Mail, ExternalLink } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'

function ContactSection() {
  return (
    <SectionWrapper id="contacto" labelledBy="contacto-title">
        <SectionHeading
          eyebrow="Contacto"
          title="Colaboraciones, charlas y proyectos editoriales"
          description="Punto único de contacto para iniciativas profesionales y conversaciones de largo plazo."
          id="contacto-title"
        />

        <ul className="contact-list">
          <li>
            <a href="mailto:hola@fabrivelazquez.com">
              <Mail size={16} strokeWidth={2} aria-hidden="true" />
              hola@fabrivelazquez.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/fabri-velázquez/" target="_blank" rel="noreferrer">
              <ExternalLink size={16} strokeWidth={2} aria-hidden="true" />
              LinkedIn
            </a>
          </li>
        </ul>
    </SectionWrapper>
  )
}

export default ContactSection

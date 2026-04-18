import { ArrowUpRight, Mail, Minus, Plus } from 'lucide-react'
import { useState } from 'react'
import SectionWrapper from '../layout/SectionWrapper'
import { contactSection, faqs } from '../content/siteContent'

function ContactSection() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <SectionWrapper id="contacto" labelledBy="contacto-title" className="contact-section" innerClassName="contact-layout">
      <div className="faq-column">
        <p className="section-eyebrow">Preguntas frecuentes</p>
        <h2>Antes de coordinar</h2>

        <div className="faq-list">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index

            return (
              <article className="faq-item" key={faq.question}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                >
                  <span>{faq.question}</span>
                  {isOpen ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
                </button>
                {isOpen ? <p>{faq.answer}</p> : null}
              </article>
            )
          })}
        </div>
      </div>

      <div className="contact-panel">
        <p className="section-eyebrow">{contactSection.eyebrow}</p>
        <h2 id="contacto-title">{contactSection.title}</h2>
        <p>{contactSection.description}</p>

        <div className="contact-actions">
          <a className="contact-action" href={contactSection.primaryCta.href}>
            <span>
              <Mail size={18} strokeWidth={2} aria-hidden="true" />
              {contactSection.primaryCta.label}
            </span>
            <ArrowUpRight size={24} strokeWidth={2} aria-hidden="true" />
          </a>
          <a className="contact-action" href={contactSection.secondaryCta.href}>
            <span>{contactSection.secondaryCta.label}</span>
            <ArrowUpRight size={24} strokeWidth={2} aria-hidden="true" />
          </a>
        </div>

        <p className="contact-email">{contactSection.email}</p>
      </div>
    </SectionWrapper>
  )
}

export default ContactSection

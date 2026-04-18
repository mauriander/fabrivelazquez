import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'
import { methodSection, methodSteps, trustSection } from '../content/siteContent'

function MethodSection() {
  return (
    <SectionWrapper id="metodo" labelledBy="metodo-title" className="method-section">
      <div className="method-intro">
        <SectionHeading
          eyebrow={methodSection.eyebrow}
          title={methodSection.title}
          description={methodSection.description}
          id="metodo-title"
        />
        <a className="button-primary" href="#contacto">
          Empezar por una reunión
          <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
        </a>
      </div>

      <ol className="method-grid">
        {methodSteps.map((step) => (
          <li className="method-step" key={step.number}>
            <p className="method-number">{step.number}</p>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </li>
        ))}
      </ol>

      <aside className="trust-panel" aria-label="Criterios de trabajo">
        <div>
          <p className="section-eyebrow">{trustSection.eyebrow}</p>
          <h3>{trustSection.title}</h3>
        </div>
        <ul>
          {trustSection.points.map((point) => (
            <li key={point}>
              <CheckCircle2 size={18} strokeWidth={2} aria-hidden="true" />
              {point}
            </li>
          ))}
        </ul>
      </aside>
    </SectionWrapper>
  )
}

export default MethodSection

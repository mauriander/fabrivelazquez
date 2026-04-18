import { Globe, Palette, TrendingUp, Video } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'
import { services, servicesSection } from '../content/siteContent'

const serviceIcons = {
  Globe,
  Palette,
  TrendingUp,
  Video,
}

function ServicesSection() {
  return (
    <SectionWrapper id="servicios" labelledBy="servicios-title" className="services-section">
      <div className="section-header-row">
        <SectionHeading
          eyebrow={servicesSection.eyebrow}
          title={servicesSection.title}
          description={servicesSection.description}
          id="servicios-title"
        />
        <p className="section-count">01 - 04</p>
      </div>

      <div className="services-grid">
        {services.map((service) => {
          const Icon = serviceIcons[service.icon] ?? TrendingUp

          return (
            <article className="service-card" key={service.title}>
              <span className="service-icon" aria-hidden="true">
                <Icon size={23} strokeWidth={2} />
              </span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          )
        })}
      </div>
    </SectionWrapper>
  )
}

export default ServicesSection

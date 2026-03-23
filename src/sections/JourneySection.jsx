import SectionHeading from '../components/SectionHeading'
import TimelineItem from '../components/TimelineItem'
import SectionWrapper from '../layout/SectionWrapper'
import { journey } from '../content/siteContent'

function JourneySection() {
  return (
    <SectionWrapper id="trayectoria" labelledBy="trayectoria-title">
        <SectionHeading
          eyebrow="Trayectoria"
          title="Una línea de evolución profesional"
          description="Bloque inicial para luego integrar hitos, proyectos, publicaciones y colaboraciones clave."
          id="trayectoria-title"
        />

        <ol className="timeline-list">
          {journey.map((step) => (
            <TimelineItem key={step.title} {...step} />
          ))}
        </ol>
    </SectionWrapper>
  )
}

export default JourneySection

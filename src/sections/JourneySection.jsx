import SectionHeading from '../components/SectionHeading'
import ParallaxVisual from '../components/ParallaxVisual'
import TimelineItem from '../components/TimelineItem'
import SectionWrapper from '../layout/SectionWrapper'
import { journey, journeySection, sectionVisuals } from '../content/siteContent'

function JourneySection() {
  return (
    <SectionWrapper
      id="trayectoria"
      labelledBy="trayectoria-title"
      className="journey-section"
      innerClassName="journey-layout"
    >
      <SectionHeading
        eyebrow={journeySection.eyebrow}
        title={journeySection.title}
        description={journeySection.description}
        id="trayectoria-title"
      />

      <p className="section-lead journey-intro">{journeySection.intro}</p>

      <div className="bleed-viewport">
        <ParallaxVisual
          className="journey-visual"
          mediaClassName="journey-visual-media"
          imageSrc={sectionVisuals.journey.src}
          imageAlt={sectionVisuals.journey.alt}
          imagePosition="center 35%"
          overlayClassName="parallax-visual-overlay--soft"
          kicker="Trayectoria"
          title="Progreso no lineal"
          description="Cada etapa suma preguntas y criterio, no solo hitos."
          ariaLabel="Bloque visual de la sección de recorrido"
          speed={16}
        />
      </div>

      <ol className="journey-timeline">
        {journey.map((step) => (
          <TimelineItem key={step.title} {...step} />
        ))}
      </ol>
    </SectionWrapper>
  )
}

export default JourneySection

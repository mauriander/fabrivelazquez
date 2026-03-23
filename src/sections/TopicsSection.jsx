import SectionHeading from '../components/SectionHeading'
import ParallaxVisual from '../components/ParallaxVisual'
import ThemeCard from '../components/ThemeCard'
import SectionWrapper from '../layout/SectionWrapper'
import {
  thinkingAreas,
  thinkingAreasSection,
  sectionVisuals,
} from '../content/siteContent'

function TopicsSection() {
  return (
    <SectionWrapper
      id="temas"
      labelledBy="temas-title"
      className="themes-section"
      innerClassName="themes-layout"
    >
      <SectionHeading
        eyebrow={thinkingAreasSection.eyebrow}
        title={thinkingAreasSection.title}
        description={thinkingAreasSection.description}
        id="temas-title"
      />

      <p className="section-lead themes-intro">{thinkingAreasSection.intro}</p>

      <div className="bleed-viewport">
        <ParallaxVisual
          className="themes-visual"
          mediaClassName="themes-visual-media"
          imageSrc={sectionVisuals.themes.src}
          imageAlt={sectionVisuals.themes.alt}
          imagePosition="center center"
          overlayClassName="parallax-visual-overlay--soft"
          kicker="Mapa conceptual"
          title="Cinco temas, una misma búsqueda"
          description="Entender el presente sin simplificarlo."
          ariaLabel="Bloque visual de la sección de temas"
          speed={18}
          reverse
        />
      </div>

      <div className="themes-grid">
        {thinkingAreas.map((area) => (
          <ThemeCard key={area.title} {...area} />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default TopicsSection

import SectionHeading from '../components/SectionHeading'
import ArticleCard from '../components/ArticleCard'
import ParallaxVisual from '../components/ParallaxVisual'
import SectionWrapper from '../layout/SectionWrapper'
import {
  featuredWritings,
  featuredWritingsSection,
  sectionVisuals,
} from '../content/siteContent'

function FeaturedSection() {
  return (
    <SectionWrapper
      id="escritos"
      labelledBy="escritos-title"
      className="featured-section"
      innerClassName="featured-layout"
    >
      <SectionHeading
        eyebrow={featuredWritingsSection.eyebrow}
        title={featuredWritingsSection.title}
        description={featuredWritingsSection.description}
        id="escritos-title"
      />

      <p className="section-lead featured-intro">{featuredWritingsSection.intro}</p>

      <div className="bleed-viewport">
        <ParallaxVisual
          className="featured-visual"
          mediaClassName="featured-visual-media"
          imageSrc={sectionVisuals.featured.src}
          imageAlt={sectionVisuals.featured.alt}
          imagePosition="center center"
          overlayClassName="parallax-visual-overlay--soft"
          kicker="Selección del mes"
          title="Textos que conectan ideas y experiencia"
          description="Una curaduría breve para leer en secuencia, sin ruido."
          ariaLabel="Bloque visual editorial de la sección de escritos"
          speed={22}
        />
      </div>

      <div className="article-grid">
        {featuredWritings.map((writing, index) => (
          <ArticleCard
            key={writing.title}
            variant={index === 0 ? 'lead' : 'default'}
            {...writing}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default FeaturedSection

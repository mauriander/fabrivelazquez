import SectionHeading from '../components/SectionHeading'
import ArticleCard from '../components/ArticleCard'
import SectionWrapper from '../layout/SectionWrapper'
import { featuredEssays } from '../content/siteContent'

function FeaturedSection() {
  return (
    <SectionWrapper id="escritos" labelledBy="escritos-title">
        <SectionHeading
          eyebrow="Escritos destacados"
          title="Textos destacados"
          description="Sección placeholder para conectar luego con CMS, MDX o API de Substack."
          id="escritos-title"
        />

        <div className="article-grid">
          {featuredEssays.map((essay) => (
            <ArticleCard key={essay.title} {...essay} />
          ))}
        </div>
    </SectionWrapper>
  )
}

export default FeaturedSection

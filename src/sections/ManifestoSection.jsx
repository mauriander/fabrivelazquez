import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'
import { manifestoContent } from '../content/siteContent'

function ManifestoSection() {
  return (
    <SectionWrapper id="manifiesto" labelledBy="manifiesto-title">
      <SectionHeading
        eyebrow={manifestoContent.eyebrow}
        title={manifestoContent.title}
        description={manifestoContent.description}
        id="manifiesto-title"
      />

      <div className="manifesto-copy">
        <p>
          La intención es publicar piezas que ayuden a pensar con más contexto:
          menos opinión rápida y más trabajo de observación.
        </p>
        <p>
          Cada sección de esta página está diseñada para facilitar lectura,
          navegación y continuidad narrativa en una sola experiencia de scroll.
        </p>
      </div>
    </SectionWrapper>
  )
}

export default ManifestoSection

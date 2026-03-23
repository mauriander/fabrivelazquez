import { motion as Motion, useReducedMotion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import ParallaxVisual from '../components/ParallaxVisual'
import SectionWrapper from '../layout/SectionWrapper'
import {
  manifestoContent,
  manifestoFragments,
  manifestoClosing,
  sectionVisuals,
} from '../content/siteContent'

const manifestoGroup = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const manifestoItem = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function ManifestoSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper
      id="manifiesto"
      labelledBy="manifiesto-title"
      className="manifesto-section"
      innerClassName="manifesto-layout"
    >
      <SectionHeading
        eyebrow={manifestoContent.eyebrow}
        title={manifestoContent.title}
        description={manifestoContent.description}
        id="manifiesto-title"
      />

      <div className="manifesto-split">
        <Motion.div
          className="manifesto-content"
          variants={shouldReduceMotion ? undefined : manifestoGroup}
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView={shouldReduceMotion ? undefined : 'visible'}
          viewport={shouldReduceMotion ? undefined : { once: true, amount: 0.35 }}
        >
          <Motion.p className="manifesto-lead" variants={shouldReduceMotion ? undefined : manifestoItem}>
            Escribo porque pensar en silencio ya no alcanza.
            <br />
            Publicar me obliga a ordenar, revisar y volver a empezar.
          </Motion.p>

          <div className="manifesto-fragments" aria-label="Ejes del manifiesto">
            {manifestoFragments.map((fragment) => (
              <Motion.article
                key={fragment.label}
                className="manifesto-fragment"
                variants={shouldReduceMotion ? undefined : manifestoItem}
              >
                <h3>{fragment.label}</h3>
                <p>{fragment.text}</p>
              </Motion.article>
            ))}
          </div>

          <Motion.p className="manifesto-closing" variants={shouldReduceMotion ? undefined : manifestoItem}>
            {manifestoClosing}
          </Motion.p>
        </Motion.div>

        <div className="manifesto-visual-wrap">
          <div className="bleed-viewport manifesto-visual-bleed">
            <ParallaxVisual
              className="manifesto-visual"
              mediaClassName="manifesto-visual-media"
              imageSrc={sectionVisuals.manifesto.src}
              imageAlt={sectionVisuals.manifesto.alt}
              imagePosition="center center"
              overlayClassName="parallax-visual-overlay--soft"
              kicker="Cuaderno de notas"
              title="Ideas en estado de revisión permanente"
              description="La escritura como práctica para pensar mejor, no para cerrar debates."
              ariaLabel="Bloque visual de la sección manifiesto"
              speed={20}
            />
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default ManifestoSection

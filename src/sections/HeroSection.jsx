import { motion as Motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, ChevronDown } from 'lucide-react'
import ParallaxVisual from '../components/ParallaxVisual'
import SectionWrapper from '../layout/SectionWrapper'
import { heroContent, sectionVisuals } from '../content/siteContent'

const heroParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function HeroSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <SectionWrapper
      id="inicio"
      labelledBy="hero-title"
      className="hero-section"
      innerClassName="hero-grid"
      animate={false}
    >
      <div className="bleed-viewport hero-visual-stage" aria-hidden="true">
        <ParallaxVisual
          className="hero-panel hero-panel--back"
          mediaClassName="hero-panel-media hero-panel-media--back"
          imageSrc={sectionVisuals.heroBack.src}
          imageAlt={sectionVisuals.heroBack.alt}
          imagePosition="center center"
          overlayClassName="parallax-visual-overlay--soft"
          priority
          speed={16}
          ariaLabel="Capa de fondo del hero"
        />
        <ParallaxVisual
          className="hero-panel hero-panel--front"
          mediaClassName="hero-panel-media hero-panel-media--front"
          imageSrc={sectionVisuals.heroFront.src}
          imageAlt={sectionVisuals.heroFront.alt}
          imagePosition="center 35%"
          overlayClassName="parallax-visual-overlay--contrast"
          priority
          speed={28}
          reverse
          ariaLabel="Capa principal del hero"
        />
      </div>

      <Motion.div
        className="hero-stack"
        variants={shouldReduceMotion ? undefined : heroParent}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? undefined : 'visible'}
      >
        <Motion.p className="section-eyebrow" variants={shouldReduceMotion ? undefined : heroItem}>
          {heroContent.eyebrow}
        </Motion.p>

        <Motion.h1 id="hero-title" variants={shouldReduceMotion ? undefined : heroItem}>
          {heroContent.name}
        </Motion.h1>

        <Motion.p className="hero-headline" variants={shouldReduceMotion ? undefined : heroItem}>
          {heroContent.headline}
        </Motion.p>

        <Motion.p className="hero-description" variants={shouldReduceMotion ? undefined : heroItem}>
          {heroContent.description}
        </Motion.p>

        <Motion.div className="hero-actions" variants={shouldReduceMotion ? undefined : heroItem}>
          <a className="button-primary" href={heroContent.primaryCta.href}>
            {heroContent.primaryCta.label}
            <ArrowRight size={16} strokeWidth={2} aria-hidden="true" />
          </a>
          <a className="button-secondary" href={heroContent.secondaryCta.href}>
            {heroContent.secondaryCta.label}
          </a>
        </Motion.div>

        <Motion.a className="hero-scroll-cue" href={heroContent.scrollCue.href} variants={shouldReduceMotion ? undefined : heroItem}>
          <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
          {heroContent.scrollCue.label}
        </Motion.a>
      </Motion.div>
    </SectionWrapper>
  )
}

export default HeroSection

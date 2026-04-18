import { motion as Motion, useReducedMotion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import SectionWrapper from '../layout/SectionWrapper'
import { heroContent } from '../content/siteContent'

const heroParent = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
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
      innerClassName="hero-layout"
      animate={false}
    >
      <Motion.div
        className="hero-copy"
        variants={shouldReduceMotion ? undefined : heroParent}
        initial={shouldReduceMotion ? false : 'hidden'}
        animate={shouldReduceMotion ? undefined : 'visible'}
      >
        <Motion.p className="hero-eyebrow" variants={shouldReduceMotion ? undefined : heroItem}>
          {heroContent.eyebrow}
        </Motion.p>

        <Motion.h1 id="hero-title" variants={shouldReduceMotion ? undefined : heroItem}>
          {heroContent.headline}{' '}
          <em>{heroContent.highlight}</em>
        </Motion.h1>

        <Motion.p className="hero-description" variants={shouldReduceMotion ? undefined : heroItem}>
          {heroContent.description}{' '}
          <strong>{heroContent.emphasis}</strong>{' '}
          {heroContent.closing}
        </Motion.p>

        <Motion.div className="hero-actions" variants={shouldReduceMotion ? undefined : heroItem}>
          <a className="button-primary" href={heroContent.primaryCta.href}>
            {heroContent.primaryCta.label}
            <ArrowUpRight size={18} strokeWidth={2} aria-hidden="true" />
          </a>
          <a className="button-plain" href={heroContent.secondaryCta.href}>
            {heroContent.secondaryCta.label}
          </a>
        </Motion.div>
      </Motion.div>

      <ul className="hero-stats" aria-label="Datos de trabajo">
        {heroContent.stats.map((stat) => (
          <li key={stat.value}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </li>
        ))}
      </ul>
    </SectionWrapper>
  )
}

export default HeroSection

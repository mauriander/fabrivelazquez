import { motion as Motion, useReducedMotion } from 'framer-motion'
import Container from './Container'
import { revealInView } from '../lib/motion'

function SectionWrapper({
  id,
  labelledBy,
  className = '',
  innerClassName = '',
  animate = true,
  children,
}) {
  const shouldReduceMotion = useReducedMotion()
  const sectionClasses = ['section-shell', className].filter(Boolean).join(' ')
  const innerClasses = ['section-inner', innerClassName].filter(Boolean).join(' ')

  if (!animate || shouldReduceMotion) {
    return (
      <section id={id} aria-labelledby={labelledBy} className={sectionClasses}>
        <Container className={innerClasses}>{children}</Container>
      </section>
    )
  }

  return (
    <Motion.section
      id={id}
      aria-labelledby={labelledBy}
      className={sectionClasses}
      {...revealInView}
    >
      <Container className={innerClasses}>{children}</Container>
    </Motion.section>
  )
}

export default SectionWrapper

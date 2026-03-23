import { motion as Motion } from 'framer-motion'
import Container from './Container'
import { revealInView } from '../lib/motion'

function SectionWrapper({
  id,
  labelledBy,
  className = '',
  innerClassName = '',
  children,
}) {
  const sectionClasses = ['section-shell', className].filter(Boolean).join(' ')
  const innerClasses = ['section-inner', innerClassName].filter(Boolean).join(' ')

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

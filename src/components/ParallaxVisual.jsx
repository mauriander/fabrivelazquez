import { useRef } from 'react'
import { motion as Motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'

function ParallaxVisual({
  className = '',
  mediaClassName = '',
  imageSrc,
  imageAlt = '',
  imagePosition = 'center',
  overlayClassName = '',
  priority = false,
  kicker,
  title,
  description,
  ariaLabel,
  speed = 26,
  reverse = false,
}) {
  const ref = useRef(null)
  const shouldReduceMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const from = reverse ? speed : speed * -1
  const to = reverse ? speed * -1 : speed
  const y = useTransform(scrollYProgress, [0, 1], [from, to])
  const mediaStyle = shouldReduceMotion ? {} : { y }
  const imageProps = priority
    ? { loading: 'eager', fetchPriority: 'high' }
    : { loading: 'lazy', fetchPriority: 'auto' }

  return (
    <figure ref={ref} className={['parallax-visual', className].filter(Boolean).join(' ')}>
      <Motion.div
        className={['parallax-visual-media', mediaClassName].filter(Boolean).join(' ')}
        style={mediaStyle}
        role={ariaLabel ? 'img' : undefined}
        aria-label={ariaLabel}
      >
        {imageSrc ? (
          <img
            className="parallax-visual-image"
            src={imageSrc}
            alt={imageAlt}
            style={{ objectPosition: imagePosition }}
            {...imageProps}
            decoding="async"
            sizes="(max-width: 960px) 96vw, 92vw"
            draggable="false"
          />
        ) : null}
        <span
          className={['parallax-visual-overlay', overlayClassName].filter(Boolean).join(' ')}
          aria-hidden="true"
        />
      </Motion.div>

      {(kicker || title || description) && (
        <figcaption className="parallax-visual-caption">
          {kicker ? <p className="parallax-kicker">{kicker}</p> : null}
          {title ? <h3>{title}</h3> : null}
          {description ? <p>{description}</p> : null}
        </figcaption>
      )}
    </figure>
  )
}

export default ParallaxVisual

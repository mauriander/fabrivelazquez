function SectionHeading({ eyebrow, title, description, id }) {
  return (
    <header className="section-heading">
      {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
      <h2 id={id}>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </header>
  )
}

export default SectionHeading

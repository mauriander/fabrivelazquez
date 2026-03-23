function TimelineItem({ year, title, note }) {
  return (
    <li className="timeline-item">
      <p className="timeline-year">{year}</p>
      <div>
        <h3>{title}</h3>
        <p>{note}</p>
      </div>
    </li>
  )
}

export default TimelineItem

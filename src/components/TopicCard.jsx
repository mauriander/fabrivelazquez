function TopicCard({ icon: Icon, title, description }) {
  return (
    <article className="topic-card">
      <Icon size={18} strokeWidth={2} aria-hidden="true" />
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}

export default TopicCard

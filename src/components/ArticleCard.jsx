import { ArrowUpRight } from 'lucide-react'

function ArticleCard({ title, excerpt, meta, href }) {
  return (
    <article className="article-card">
      <p className="article-meta">{meta}</p>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <a href={href} className="inline-link">
        Leer borrador
        <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
      </a>
    </article>
  )
}

export default ArticleCard

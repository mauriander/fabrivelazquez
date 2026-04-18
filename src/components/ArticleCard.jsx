import { ArrowUpRight } from 'lucide-react'

function ArticleCard({
  title,
  category,
  dateLabel,
  dateTime,
  abstract,
  href,
  external = false,
  variant = 'default',
}) {
  return (
    <article className={['article-card', `article-card--${variant}`].join(' ')}>
      <div className="article-topline">
        {category ? <p className="article-category">{category}</p> : null}
        <time className="article-date" dateTime={dateTime}>
          {dateLabel}
        </time>
      </div>

      <h3 className="article-title">{title}</h3>
      <p className="article-abstract">{abstract}</p>

      <a
        href={href}
        className="article-cta"
        aria-label={`Leer artículo: ${title}`}
        target={external ? '_blank' : undefined}
        rel={external ? 'noreferrer' : undefined}
      >
        Leer artículo
        <ArrowUpRight size={16} strokeWidth={2} aria-hidden="true" />
      </a>
    </article>
  )
}

export default ArticleCard

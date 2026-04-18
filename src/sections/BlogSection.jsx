import ArticleCard from '../components/ArticleCard'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'
import { blogPosts, blogSection } from '../content/siteContent'

function BlogSection() {
  return (
    <SectionWrapper id="blog" labelledBy="blog-title" className="blog-section">
      <div className="section-header-row">
        <SectionHeading
          eyebrow={blogSection.eyebrow}
          title={blogSection.title}
          description={blogSection.description}
          id="blog-title"
        />
        <a className="button-secondary" href={blogSection.cta.href} target="_blank" rel="noreferrer">
          {blogSection.cta.label}
        </a>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <ArticleCard key={post.title} {...post} variant="business" />
        ))}
      </div>
    </SectionWrapper>
  )
}

export default BlogSection

import { ArrowUpRight } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SectionWrapper from '../layout/SectionWrapper'
import { projects, projectsSection } from '../content/siteContent'

function ProjectsSection() {
  return (
    <SectionWrapper id="proyectos" labelledBy="proyectos-title" className="projects-section">
      <SectionHeading
        eyebrow={projectsSection.eyebrow}
        title={projectsSection.title}
        description={projectsSection.description}
        id="proyectos-title"
      />

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <figure className="project-media">
              <img src={project.image} alt="" loading="lazy" />
              <figcaption>{project.category}</figcaption>
            </figure>
            <div className="project-copy">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href="#contacto" className="project-link">
                Pensar algo similar
                <ArrowUpRight size={15} strokeWidth={2} aria-hidden="true" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  )
}

export default ProjectsSection

import { Cpu, BriefcaseBusiness, Fingerprint } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import TopicCard from '../components/TopicCard'
import SectionWrapper from '../layout/SectionWrapper'
import { focusTopics } from '../content/siteContent'

const icons = [Cpu, BriefcaseBusiness, Fingerprint]

function TopicsSection() {
  return (
    <SectionWrapper id="temas" labelledBy="temas-title">
        <SectionHeading
          eyebrow="Temas"
          title="Áreas de exploración"
          description="Ejes curatoriales para ordenar el contenido por conversación y no por formato."
          id="temas-title"
        />

        <div className="topics-grid">
          {focusTopics.map((topic, index) => (
            <TopicCard key={topic.title} icon={icons[index]} {...topic} />
          ))}
        </div>
    </SectionWrapper>
  )
}

export default TopicsSection

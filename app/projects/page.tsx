import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import FadeIn from '@/components/FadeIn'
import { projects } from '@/src/data/projects'

export default function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <FadeIn>
        <SectionHeading title="My Projects" />
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.map((project, index) => (
            <div key={project.id} style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </FadeIn>
    </div>
  )
}

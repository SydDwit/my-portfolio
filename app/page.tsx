import SocialBar from '@/components/SocialBar'
import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/src/data/projects'

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Siddhartha&apos;s Portfolio
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Full Stack Developer
          </p>
          <SocialBar />
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <SectionHeading title="Featured Projects" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {projects.slice(0, 6).map((project) => (
            <div key={project.id}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <SectionHeading title="About Me" />
        <div className="max-w-4xl mx-auto mt-8">
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            I&apos;m a passionate full-stack developer with experience in modern web technologies. 
            I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
          </p>
        </div>
      </section>
    </div>
  )
}

import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/src/data/projects'
import SectionHeading from '@/components/SectionHeading'
import { Badge } from '@/components/ui/badge'

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find(p => p.slug === slug)
  
  if (!project) {
    notFound()
  }
  
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading title={project.title} />
      
      <div className="max-w-4xl mx-auto mt-8">
        <div className="mb-8">
          <Image 
            src={project.image} 
            alt={project.title}
            width={800}
            height={400}
            className="w-full h-64 object-cover rounded-lg shadow-md"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">About This Project</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {project.longDescription || project.description}
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300 mb-6">
              <li>Responsive design that works on all devices</li>
              <li>Modern user interface with smooth animations</li>
              <li>Optimized performance and fast loading times</li>
              <li>Clean and maintainable code structure</li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="text-xl font-semibold mb-4">Technologies Used</h3>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            
            <div className="space-y-4">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors"
                >
                  View Live Site
                </a>
              )}
              
              {project.githubUrl && (
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full bg-gray-800 hover:bg-gray-900 text-white text-center py-2 px-4 rounded-lg transition-colors"
                >
                  View on GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

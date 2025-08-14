"use client";
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink, Github } from 'lucide-react'

type Project = {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
  featured: boolean
}

type Props = {
  project: Project
}

export default function ActualProjectCard({ project }: Props) {
  return (
    <div className="group rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative overflow-hidden rounded-t-xl">
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={200}
          className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-2">
            <Link
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-white transition-colors"
            >
              <ExternalLink size={14} />
              Demo
            </Link>
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 bg-white/90 text-black px-3 py-1 rounded-full text-sm font-medium hover:bg-white transition-colors"
            >
              <Github size={14} />
              Code
            </Link>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs text-muted-foreground">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

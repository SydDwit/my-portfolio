"use client";
import { useState, useEffect } from 'react'
import SocialBar from '@/components/SocialBar'
import SectionHeading from '@/components/SectionHeading'
import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/src/data/projects'

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0)
  const [showProjects, setShowProjects] = useState(6)
  const [isVisible, setIsVisible] = useState({ hero: false, projects: false, about: false })
  
  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "TypeScript Expert",
    "UI/UX Enthusiast",
    "Problem Solver"
  ]

  // Animated role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [roles.length])

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionName = entry.target.getAttribute('data-section')
            if (sectionName) {
              setIsVisible(prev => ({ ...prev, [sectionName]: true }))
            }
          }
        })
      },
      { threshold: 0.1 }
    )

    const sections = document.querySelectorAll('[data-section]')
    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section with enhanced animations */}
      <section 
        className="min-h-screen flex items-center justify-center"
        data-section="hero"
      >
        <div className={`text-center transition-all duration-1000 ${
          isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="relative">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
              Siddhartha&apos;s Portfolio
            </h1>
            {/* Animated underline */}
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-expand-width"></div>
          </div>
          
          {/* Animated role with typewriter effect */}
          <div className="h-8 mb-8 flex items-center justify-center">
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              <span className="inline-block min-w-0 transition-all duration-500">
                {roles[currentRole]}
              </span>
              <span className="animate-pulse text-primary ml-1">|</span>
            </p>
          </div>
          
          <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
            <SocialBar />
          </div>
        </div>
      </section>

      {/* Projects Section with stagger animations */}
      <section 
        className="py-16"
        data-section="projects"
      >
        <div className={`transition-all duration-1000 delay-200 ${
          isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <SectionHeading title="Featured Projects" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.slice(0, showProjects).map((project, index) => (
              <div 
                key={project.id}
                className={`transition-all duration-700 ${
                  isVisible.projects ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
          
          {/* Load more projects button */}
          {showProjects < projects.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowProjects(prev => Math.min(prev + 3, projects.length))}
                className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Load More Projects
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-y-0.5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced About Section */}
      <section 
        className="py-16"
        data-section="about"
      >
        <div className={`transition-all duration-1000 delay-400 ${
          isVisible.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <SectionHeading title="About Me" />
          <div className="max-w-4xl mx-auto mt-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                I&apos;m a passionate full-stack developer with experience in modern web technologies. 
                I love creating beautiful, functional, and user-friendly applications that solve real-world problems.
              </p>
              
              {/* Skills with animated progress bars */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                {[
                  { name: "React/Next.js", level: 95 },
                  { name: "TypeScript", level: 90 },
                  { name: "Node.js", level: 85 },
                  { name: "UI/UX Design", level: 80 }
                ].map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible.about ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 200}ms`
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes expand-width {
          0% { width: 0; }
          100% { width: 200px; }
        }
        
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        
        .animate-expand-width {
          animation: expand-width 1s ease-out 0.5s forwards;
        }
      `}</style>
    </div>
  )
}

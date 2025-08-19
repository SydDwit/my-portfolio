'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

type Project = {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  slug: string;
};

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [showAllTechs, setShowAllTechs] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect dark mode
  useEffect(() => {
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkDarkMode();

    // Listen for changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  // Function to determine if image should be inverted
  const shouldInvertImage = (originalPath: string, isDark: boolean) => {
    if (!isDark) return false; // Light mode uses original images

    // Check if this is an image that should be inverted in dark mode
    const filename = originalPath.split('/').pop()?.replace('.svg', '');
    const invertibleImages = [
      'vote',
      'disease',
      'diabetes',
      'resume',
      'portfolio',
    ];

    return filename && invertibleImages.includes(filename);
  };

  const shouldInvert = shouldInvertImage(project.image, isDarkMode);

  return (
    <div
      className="group rounded-xl border bg-card text-card-foreground shadow-sm hover:shadow-xl hover:shadow-primary/20 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-t-xl">
        <div className="relative">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={200}
            className={`h-48 w-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 ${
              shouldInvert ? 'filter-invert' : ''
            }`}
            style={{
              filter: shouldInvert ? 'invert(1)' : 'invert(0)',
              transition:
                'filter 0.3s ease-in-out, transform 0.5s ease, filter 0.5s ease',
            }}
          />
          {/* Animated border on hover */}
          <div className="absolute inset-0 rounded-t-xl border-2 border-transparent group-hover:border-primary/30 transition-all duration-300" />
        </div>

        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

        {/* Action buttons with enhanced animations */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-500 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex gap-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Live Demo
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn flex items-center gap-2 bg-white/95 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <svg
                  className="w-4 h-4 transition-transform group-hover/btn:rotate-12"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View Code
              </Link>
            )}
          </div>
        </div>

        {/* Project number indicator */}
        <div className="absolute top-4 right-4 w-8 h-8 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary text-sm font-bold opacity-0 group-hover:opacity-100 transition-all duration-300">
          {project.id}
        </div>
      </div>

      <div className="p-6">
        <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-all duration-300 group-hover:translate-x-1">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 group-hover:line-clamp-3 transition-all duration-300">
          {project.description}
        </p>

        {/* Enhanced technology tags with animations */}
        <div className="flex flex-wrap gap-2">
          {(showAllTechs
            ? project.technologies
            : project.technologies.slice(0, 3)
          ).map((tech, index) => (
            <span
              key={tech}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 cursor-default"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isHovered
                  ? 'fadeInUp 0.5s ease-out forwards'
                  : undefined,
              }}
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && !showAllTechs && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAllTechs(true);
              }}
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 px-2 py-1 rounded-full hover:bg-secondary/50"
            >
              +{project.technologies.length - 3} more
            </button>
          )}
          {showAllTechs && project.technologies.length > 3 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowAllTechs(false);
              }}
              className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200 px-2 py-1 rounded-full hover:bg-secondary/50"
            >
              Show less
            </button>
          )}
        </div>

        {/* Progress bar animation on hover */}
        <div className="mt-4 h-1 bg-secondary rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ${
              isHovered ? 'w-full' : 'w-0'
            }`}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

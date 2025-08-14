export interface Project {
  id: number
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  slug: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with Next.js and Stripe integration.',
    longDescription: 'A comprehensive e-commerce solution featuring user authentication, product management, shopping cart functionality, and secure payment processing through Stripe. Built with modern technologies for optimal performance and user experience.',
    image: '/projects/project1.svg',
    technologies: ['Next.js', 'React', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    liveUrl: 'https://example-ecommerce.com',
    githubUrl: 'https://github.com/yourusername/ecommerce-platform',
    slug: 'ecommerce-platform'
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A collaborative task management application with real-time updates.',
    longDescription: 'A modern task management application that enables teams to collaborate effectively. Features include real-time updates, drag-and-drop functionality, user roles, and comprehensive project tracking.',
    image: '/projects/project2.svg',
    technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
    liveUrl: 'https://example-tasks.com',
    githubUrl: 'https://github.com/yourusername/task-manager',
    slug: 'task-management-app'
  },
  {
    id: 3,
    title: 'Weather Dashboard',
    description: 'A responsive weather dashboard with location-based forecasts.',
    longDescription: 'An intuitive weather dashboard that provides detailed weather information based on user location. Includes 7-day forecasts, interactive maps, and weather alerts.',
    image: '/projects/project1.svg',
    technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
    liveUrl: 'https://example-weather.com',
    githubUrl: 'https://github.com/yourusername/weather-dashboard',
    slug: 'weather-dashboard'
  },
  {
    id: 4,
    title: 'Social Media Analytics',
    description: 'Analytics dashboard for social media performance tracking.',
    longDescription: 'A comprehensive analytics platform for tracking social media performance across multiple platforms. Features include engagement metrics, audience insights, and automated reporting.',
    image: '/projects/project2.svg',
    technologies: ['Vue.js', 'D3.js', 'Python', 'Django', 'PostgreSQL'],
    liveUrl: 'https://example-analytics.com',
    githubUrl: 'https://github.com/yourusername/social-analytics',
    slug: 'social-media-analytics'
  },
  {
    id: 5,
    title: 'Blog Platform',
    description: 'A modern blog platform with content management system.',
    longDescription: 'A feature-rich blog platform with a built-in CMS, SEO optimization, and social sharing capabilities. Supports multiple authors and advanced content management.',
    image: '/projects/project1.svg',
    technologies: ['Gatsby', 'GraphQL', 'Contentful', 'Netlify'],
    liveUrl: 'https://example-blog.com',
    githubUrl: 'https://github.com/yourusername/blog-platform',
    slug: 'blog-platform'
  },
  {
    id: 6,
    title: 'Portfolio Website',
    description: 'Personal portfolio website with modern design and animations.',
    longDescription: 'A modern, responsive portfolio website showcasing projects and skills. Features smooth animations, dark mode toggle, and optimized performance.',
    image: '/projects/project2.svg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    liveUrl: 'https://your-portfolio.com',
    githubUrl: 'https://github.com/yourusername/portfolio',
    slug: 'portfolio-website'
  }
]

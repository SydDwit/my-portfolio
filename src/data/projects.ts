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
    title: 'Vote Sphere',
    description: 'Built a secure web-based voting platform enabling user authentication, vote casting, and result tallying in real time.',
    longDescription: 'A comprehensive voting solution featuring user authentication, vote management, and real-time result tallying. Built with modern technologies for optimal performance and user experience.',
    image: '/vote.svg',
    technologies: ['html', 'css', 'php', 'mysql'],
    githubUrl: 'https://github.com/SydDwit/VoteSphere',
    slug: 'vote-sphere'
  },
  {
    id: 2,
    title: 'Disease Prediction System',
    description: 'A machine learning-based system for predicting disease outbreaks.',
    longDescription: 'An advanced disease prediction system that leverages machine learning algorithms to analyze health data and predict potential outbreaks. Features include data visualization, real-time monitoring, and automated reporting.',
    image: '/disease.svg',
    technologies: ['React', 'Python', 'fastAPI', 'mysql'],
    githubUrl: 'https://github.com/SydDwit/disease-prediction',
    slug: 'disease-prediction-system'
  },
  {
    id: 3,
    title: 'Diabetes Prediction System',
    description: 'A machine learning-based system for predicting diabetes risk.',
    longDescription: 'An advanced diabetes prediction system that leverages machine learning algorithms to analyze health data and predict potential diabetes risk. Features include data visualization, real-time monitoring, and automated reporting.',
    image: '/diabetes.svg',
    technologies: ['React', 'Python', 'fastAPI', 'mysql'],
    githubUrl: '',
    slug: 'diabetes-prediction-system'
  },
  {
    id: 4,
    title: 'Resume Screening System',
    description: 'A machine learning-based system for automating resume screening.',
    longDescription: 'An advanced resume screening system that leverages natural language processing and machine learning algorithms to analyze resumes and identify the best candidates. Features include keyword extraction, candidate ranking, and integration with applicant tracking systems.',
    image: '/resume.svg',
    technologies: ['React', 'Python', 'flask', 'mysql'],
    githubUrl: 'https://github.com/SydDwit/resume-screening',
    slug: 'resume-screening-system'
  },
  {
    id: 5,
    title: 'my-portfolio',
    description: 'A modern portfolio website showcasing my work and skills.',
    longDescription: 'A feature-rich portfolio website with a built-in CMS, SEO optimization, and social sharing capabilities. Supports multiple authors and advanced content management.',
    image: '/portfolio.svg',
    technologies: ['React', 'Nextjs'],
    githubUrl: 'https://github.com/SydDwit/my-portfolio',
    slug: 'my-portfolio'
  },
  {
    id: 6,
    title: 'Upcoming Project',
    description: 'upcoming projects',
    longDescription: 'upcoming',
    image: '/projects/project2.svg',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: '',
    slug: 'upcoming-project'
  }
]

"use client";

import { useState, useEffect } from "react";
import SocialBar from "@/components/SocialBar";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import SkillTag from "@/components/SkillTag";
import FadeIn from "@/components/FadeIn";
import ProfileCard from "@/components/ProfileCard";
import IconBullets from "@/components/IconBullets";
import Timeline from "@/components/Timeline";
import LearningJourneyTimeline from "@/components/LearningJourneyTimeline";
import { projects } from "@/src/data/projects";

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [showProjects, setShowProjects] = useState(6);
  const [activeSection, setActiveSection] = useState("home");

  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "TypeScript Expert",
    "UI/UX Enthusiast",
    "Problem Solver",
  ];

  // Skills data
  const frontendSkills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
  ];

  const backendSkills = ["Node.js", "Python", "PHP", "Flask", "FastAPI", "Express.js"];

  const databaseSkills = ["PostgreSQL", "MySQL", "MongoDB", "Redis"];

  const toolsSkills = ["Git", "GitHub", "VS Code", "Docker", "Figma", "Postman", "Linux", "AWS"];

  // Animated role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Simplified scroll-based navigation tracking
  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contact"];
    
    // Simple scroll handler without problematic transitions
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // Better trigger point
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            if (activeSection !== sectionId) {
              setActiveSection(sectionId);
            }
            break;
          }
        }
      }
    };

    // Add subtle fade-in effect only
    const initSections = () => {
      sections.forEach((sectionId) => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.style.opacity = '1';
          el.style.transform = 'none';
          el.style.transition = 'opacity 0.3s ease-out';
        }
      });
    };

    initSections();
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-white/90 dark:bg-gray-900/90 relative overflow-hidden z-10 transition-all duration-1000 ease-out"
      >
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-70" style={{ animationDelay: '0s', animationDuration: '3s' }}></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60" style={{ animationDelay: '1s', animationDuration: '4s' }}></div>
          <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-80" style={{ animationDelay: '2s', animationDuration: '3.5s' }}></div>
          <div className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-blue-300 rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}></div>
          
          {/* Floating shapes */}
          <div className="absolute top-32 right-1/4 w-8 h-8 border-2 border-blue-300 rotate-45 opacity-30 animate-spin" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-32 left-1/4 w-6 h-6 border-2 border-purple-300 rounded-full opacity-40 animate-ping" style={{ animationDuration: '3s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <FadeIn>
            <div className="relative">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
                Siddhartha&apos;s Portfolio
              </h1>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-expand-width" />
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="h-8 mb-8 flex items-center justify-center">
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                <span className="inline-block min-w-0 transition-all duration-500 transform hover:scale-110">
                  {roles[currentRole]}
                </span>
                <span className="animate-pulse text-primary ml-1">|</span>
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mb-8 transform hover:scale-105 transition-transform duration-300">
              <SocialBar />
            </div>
          </FadeIn>

          <FadeIn delay={0.6}>
            <button
              onClick={() => scrollToSection("about")}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl transform active:scale-95"
            >
              Get to know me
              <svg className="w-4 h-4 transition-transform group-hover:translate-y-1 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </FadeIn>

          {/* Scroll indicator */}
          <FadeIn delay={0.8}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* About Section */}
      <section 
        id="about" 
        className="min-h-screen py-24 bg-white/90 dark:bg-gray-900/90 relative z-10 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading title="About Me" />
          </FadeIn>

          <div className="max-w-5xl mx-auto mt-16 space-y-16">
            {/* Enhanced Profile Card with Education */}
            <FadeIn delay={0.2}>
              <section className="rounded-2xl border p-6 md:p-8 bg-white/5 backdrop-blur-sm">
                <ProfileCard
                  name="Siddhartha Shakya"
                  title="Full‑Stack Developer · Next.js/TS"
                  location="Kathmandu, Nepal"
                  phone="977-9869801351"
                  nationality="Nepali"
                  education={{
                    institution: "Deerwalk College",
                    degree: "Bachelor in Computer Application"
                  }}
                  avatarSrc="/avatar.png"
                  resumeHref="/resume.pdf"
                />
              </section>
            </FadeIn>

            {/* Certifications Grid */}
            <FadeIn delay={0.3}>
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Certifications & Achievements
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FadeIn delay={0.4}>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                      <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">DataCamp - Data Analyst</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Certified in data analysis</p>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.5}>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                      <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Python Certification</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Coursera - Advanced Python</p>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.6}>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                      <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Community Leadership</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">PatanJCI Digital Initiatives</p>
                    </div>
                  </FadeIn>
                  
                  <FadeIn delay={0.7}>
                    <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg group">
                      <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">Blockchain Community</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">DWIT - Hackathon Participant</p>
                    </div>
                  </FadeIn>
                </div>
              </div>
            </FadeIn>

            {/* Unified Professional Timeline */}
            <FadeIn delay={0.4}>
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Professional Journey
                </h2>
                
                <div className="relative">
                  {/* Timeline Line */}
                  <div className="absolute left-4 top-0 bottom-0 w-px bg-gray-300 dark:bg-gray-600"></div>
                  
                  <div className="space-y-8">
                    {/* 2024 - Advanced Development */}
                    <FadeIn delay={0.5}>
                      <div className="relative flex items-start gap-6 group hover:scale-[1.02] transition-transform duration-300">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1 pb-8 group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/50 rounded-lg p-4 -ml-4 transition-colors duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Advanced Full-Stack & AI/ML</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">2024</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Diving deep into AI/ML integration and advanced Next.js patterns
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">TensorFlow</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">Scikit-learn</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">Advanced Next.js</span>
                          </div>
                        </div>
                      </div>
                    </FadeIn>

                    {/* 2023 - Modern Web */}
                    <FadeIn delay={0.6}>
                      <div className="relative flex items-start gap-6 group hover:scale-[1.02] transition-transform duration-300">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1 pb-8 group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/50 rounded-lg p-4 -ml-4 transition-colors duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Modern Web Development</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">2023</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Mastered React ecosystem and TypeScript development
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">React</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">Next.js</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">TypeScript</span>
                          </div>
                        </div>
                      </div>
                    </FadeIn>

                    {/* 2022-2023 - PatanJCI Coordinator */}
                    <FadeIn delay={0.7}>
                      <div className="relative flex items-start gap-6 group hover:scale-[1.02] transition-transform duration-300">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1 pb-8 group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/50 rounded-lg p-4 -ml-4 transition-colors duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">PatanJCI - Digital Transformation Coordinator</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">2022-2023</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            Led digital transformation initiatives and community development projects
                          </p>
                        </div>
                      </div>
                    </FadeIn>

                    {/* 2022 - Backend Development */}
                    <FadeIn delay={0.8}>
                      <div className="relative flex items-start gap-6 group hover:scale-[1.02] transition-transform duration-300">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1 pb-8 group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/50 rounded-lg p-4 -ml-4 transition-colors duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Backend & Database Mastery</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">2022</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Explored server-side development and database design
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">Node.js</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">Python</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">PostgreSQL</span>
                          </div>
                        </div>
                      </div>
                    </FadeIn>

                    {/* 2021 - Programming Start */}
                    <FadeIn delay={0.9}>
                      <div className="relative flex items-start gap-6 group hover:scale-[1.02] transition-transform duration-300">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-blue-500/25">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                        <div className="flex-1 pb-8 group-hover:bg-gray-50/50 dark:group-hover:bg-gray-800/50 rounded-lg p-4 -ml-4 transition-colors duration-300">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 dark:text-white">Programming Foundations</h3>
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">2021</span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                            Started with core programming concepts and web basics
                          </p>
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">JavaScript</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">HTML</span>
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs hover:bg-blue-100 hover:text-blue-700 dark:hover:bg-blue-900 dark:hover:text-blue-300 transition-colors">CSS</span>
                          </div>
                        </div>
                      </div>
                    </FadeIn>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="min-h-screen py-16 bg-white/90 dark:bg-gray-900/90 relative z-10 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading title="Skills & Technologies" />
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Strong foundation in full-stack development with experience in AI/ML projects including
              Diabetes Prediction, Resume Screening System, and Online Voting platforms.
            </p>
          </FadeIn>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <FadeIn delay={0.2}>
              <div className="rounded-2xl border p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🎨</span>
                  Frontend Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Modern web interfaces with React ecosystem
                </p>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="rounded-2xl border p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">⚙️</span>
                  Backend Development
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Scalable server-side applications and APIs
                </p>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="rounded-2xl border p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🗄️</span>
                  Database & Tools
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Data management and development workflow
                </p>
                <div className="flex flex-wrap gap-2">
                  {[...databaseSkills, ...toolsSkills.slice(0, 4)].map((skill) => (
                    <SkillTag key={skill} name={skill} />
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.5}>
              <div className="rounded-2xl border p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                  <span className="text-2xl">🤖</span>
                  AI/ML & Data Science
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Machine learning and intelligent systems
                </p>
                <div className="flex flex-wrap gap-2">
                  <SkillTag name="Python" />
                  <SkillTag name="Machine Learning" />
                  <SkillTag name="Data Analysis" />
                  <SkillTag name="TensorFlow" />
                  <SkillTag name="Scikit-learn" />
                  <SkillTag name="Pandas" />
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Beyond Code */}
          <FadeIn delay={0.6}>
            <div className="max-w-4xl mx-auto mt-8">
              <div className="rounded-2xl border p-6 md:p-8 bg-gradient-to-r from-pink-50/50 to-purple-50/50 dark:from-pink-900/20 dark:to-purple-900/20 backdrop-blur-sm border-pink-200/30 dark:border-pink-700/30">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="text-2xl">🌟</span>
                  Beyond Code
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-center">
                  When I&apos;m not coding, you&apos;ll find me exploring creative outlets that fuel my passion for
                  innovation.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <SkillTag name="🎮 Gaming" />
                  <SkillTag name="🎙️ Podcasting" />
                  <SkillTag name="🎬 Video Editing" />
                  <SkillTag name="☕ Coffee Enthusiast" />
                  <SkillTag name="🎵 Music Lover" />
                  <SkillTag name="📚 Tech Blogger" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Projects Section */}
      <section 
        id="projects" 
        className="min-h-screen py-16 bg-white/90 dark:bg-gray-900/90 relative z-10 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading title="Featured Projects" />
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {projects.slice(0, showProjects).map((project, index) => (
                <FadeIn key={project.id} delay={0.1 * index}>
                  <div className="transform hover:scale-105 transition-all duration-300 hover:z-10 relative group">
                    <ProjectCard project={project} />
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>

          {showProjects < projects.length && (
            <FadeIn delay={0.4}>
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowProjects((prev) => Math.min(prev + 3, projects.length))}
                  className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
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
            </FadeIn>
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen py-16 bg-white/90 dark:bg-gray-900/90 relative z-10 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <FadeIn>
            <SectionHeading title="Get In Touch" />
            <p className="text-center text-muted-foreground mt-4 max-w-2xl mx-auto">
              Building scalable apps that blend functionality with delightful UX. Let&apos;s work together to bring your
              ideas to life.
            </p>
          </FadeIn>

          <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <div className="rounded-2xl border p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Let&apos;s Connect</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">shakyasyd@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-muted-foreground">Sanobharyang, Kathmandu, Nepal</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium">Open for Work</p>
                      <p className="text-muted-foreground">Freelance</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-4">Professional Links</h4>
                  <SocialBar />
                </div>

                <div className="mt-6">
                  <a
                    href="/resume.pdf"
                    download
                    className="group w-full inline-flex items-center justify-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-medium hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    Download CV
                  </a>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="rounded-2xl border p-8 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <textarea
                      rows={4}
                      placeholder="Your Message"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </form>

                <div className="mt-8 p-4 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200/30 dark:border-blue-700/30">
                  <p className="text-center text-sm italic text-blue-700 dark:text-blue-300">
                    &ldquo;Keep Learning | Keep Building | Keep Growing&rdquo; 
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }
        @keyframes expand-width {
          0% {
            width: 0;
          }
          100% {
            width: 200px;
          }
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideInLeft {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }
        .animate-expand-width {
          animation: expand-width 1s ease-out 0.5s forwards;
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        /* Simplified, non-intrusive transitions */
        section {
          transition: opacity 0.4s ease-out;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar for webkit browsers */
        ::-webkit-scrollbar {
          width: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: rgba(156, 163, 175, 0.1);
        }
        
        ::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.3);
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.5);
        }
      `}</style>
    </div>
  );
}

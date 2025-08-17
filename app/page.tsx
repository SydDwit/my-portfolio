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
import Image from "next/image";
import { MapPin, CheckCircle, GraduationCap } from "lucide-react";

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
    if (el) {
      const navbarHeight = 64; // Height of the fixed navbar (h-16 = 4rem = 64px)
      const elementPosition = el.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div>
      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden z-10 transition-all duration-1000 ease-out"
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
      <section id="about" className="min-h-screen py-24 relative z-10 transition-all duration-1000 ease-out">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Main About Content - Two Column Layout */}
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Side - Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-300 flex items-center gap-2">
                      Hi <span className="text-orange-400">✴︎</span> I am <span className="font-semibold text-white">Siddhartha Shakya</span>
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                      Full-Stack Developer<br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Tailored for Your Success
                      </span>
                    </h1>

                    <p className="text-lg text-gray-300 leading-relaxed max-w-xl">
                      Explore how I can elevate your business to new heights through innovative development strategies. 
                      I design and build clean, performant web applications with modern technologies and strong user experience.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/resume.pdf"
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      My Resume
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7" />
                      </svg>
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 border border-gray-400 text-white hover:bg-white/10 transition-all duration-300"
                    >
                      Contact Me
                    </a>
                  </div>

                  {/* Quick Info Tags */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-gray-200 text-sm flex items-center gap-2">
                      <MapPin size={14} className="text-blue-400" />
                      Kathmandu, Nepal
                    </span>
                    <span className="px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-gray-200 text-sm flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-400" />
                      Available for Projects
                    </span>
                    <span className="px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-gray-200 text-sm flex items-center gap-2">
                      <GraduationCap size={14} className="text-purple-400" />
                      BCA Student
                    </span>
                  </div>
                </div>

                {/* Right Side - Professional Photo */}
                <div className="flex justify-center lg:justify-end">
                  <div className="relative">
                    <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800">
                      <Image
                        src="/avatar.png"
                        alt="Siddhartha Shakya"
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
                    <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-purple-400 rounded-full opacity-40"></div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Education & Achievements Section */}
            <div className="mt-24 space-y-12">
              <FadeIn>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  {/* Left Side - Professional Photo */}
                  <div className="flex justify-center lg:justify-start">
                    <div className="relative">
                      <div className="relative w-80 h-96 lg:w-96 lg:h-[500px] overflow-hidden rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800">
                        <Image
                          src="/mixed.jpg"
                          alt="mixed"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      {/* Decorative elements */}
                      <div className="absolute -top-4 -right-4 w-8 h-8 bg-blue-400 rounded-full opacity-60"></div>
                      <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400 rounded-full opacity-40"></div>
                    </div>
                  </div>

                  {/* Right Side - Education & Achievements Content */}
                  <div className="space-y-8">
                    <div className="space-y-6">
                      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
                        Education &<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                          Achievements
                        </span>
                      </h2>
                    </div>

                    {/* Education Section */}
                    <div className="space-y-6">
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"/>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-white mb-1">Bachelor in Computer Application</h3>
                            <p className="text-blue-400 font-semibold mb-2">Deerwalk College</p>
                            <p className="text-gray-400 text-sm mb-3">2021 - Present</p>
                            <p className="text-gray-300 text-sm leading-relaxed">
                              Focused on software engineering, data structures, and modern development practices with hands-on experience in AI/ML projects.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-green-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="font-bold text-white text-sm mb-1">DataCamp - Data Analyst</h4>
                            <p className="text-gray-400 text-xs">Certified in data analysis and visualization</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="font-bold text-white text-sm mb-1">Python Certification</h4>
                            <p className="text-gray-400 text-xs">Coursera - Advanced Python Programming</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-purple-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="font-bold text-white text-sm mb-1">Community Leadership</h4>
                            <p className="text-gray-400 text-xs">PatanJCI Digital Initiatives Leader</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="font-bold text-white text-sm mb-1">Blockchain Community</h4>
                            <p className="text-gray-400 text-xs">DWIT - Hackathon Participant & Developer</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section 
        id="skills" 
        className="min-h-screen py-16 relative z-10 transition-all duration-1000 ease-out"
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
        className="min-h-screen py-16 relative z-10 transition-all duration-1000 ease-out"
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
        className="min-h-screen py-16 relative z-10 transition-all duration-1000 ease-out"
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

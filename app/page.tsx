'use client';

import { useState, useEffect } from 'react';
import SocialBar from '@/components/SocialBar';
import SectionHeading from '@/components/SectionHeading';
import ProjectCard from '@/components/ProjectCard';
import SkillTag from '@/components/SkillTag';
import FadeIn from '@/components/FadeIn';
import ProfileCard from '@/components/ProfileCard';
import IconBullets from '@/components/IconBullets';
import Timeline from '@/components/Timeline';
import LearningJourneyTimeline from '@/components/LearningJourneyTimeline';
import { projects } from '@/src/data/projects';
import Image from 'next/image';
import { MapPin, CheckCircle, GraduationCap } from 'lucide-react';

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [showProjects, setShowProjects] = useState(6);
  const [activeSection, setActiveSection] = useState('home');

  const roles = [
    'Full Stack Developer',
    'React Enthusiast',
    'UI/UX Enthusiast',
    'Problem Solver',
  ];

  // Skills data
  const frontendSkills = [
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Tailwind CSS',
    'Bootstrap',
  ];

  const backendSkills = [
    'Node.js',
    'Python',
    'PHP',
    'Flask',
    'FastAPI',
    'Express.js',
  ];

  const databaseSkills = ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'];

  const toolsSkills = [
    'Git',
    'GitHub',
    'VS Code',
    'Docker',
    'Figma',
    'Postman',
    'Linux',
    'AWS',
  ];

  // Animated role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [roles.length]);

  // Simplified scroll-based navigation tracking
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'contact'];

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
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const navbarHeight = 64; // Height of the fixed navbar (h-16 = 4rem = 64px)
      const elementPosition = el.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth',
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
          <div
            className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-70"
            style={{ animationDelay: '0s', animationDuration: '3s' }}
          ></div>
          <div
            className="absolute top-40 right-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-60"
            style={{ animationDelay: '1s', animationDuration: '4s' }}
          ></div>
          <div
            className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-80"
            style={{ animationDelay: '2s', animationDuration: '3.5s' }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-2.5 h-2.5 bg-blue-300 rounded-full animate-bounce opacity-50"
            style={{ animationDelay: '0.5s', animationDuration: '4.5s' }}
          ></div>

          {/* Floating shapes */}
          <div
            className="absolute top-32 right-1/4 w-8 h-8 border-2 border-blue-400 dark:border-blue-300 rotate-45 opacity-30 animate-spin"
            style={{ animationDuration: '10s' }}
          ></div>
          <div
            className="absolute bottom-32 left-1/4 w-6 h-6 border-2 border-purple-400 dark:border-purple-300 rounded-full opacity-40 animate-ping"
            style={{ animationDuration: '3s' }}
          ></div>
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
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 font-medium">
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
              onClick={() => scrollToSection('about')}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-xl transform active:scale-95"
            >
              Get to know me
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-y-1 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </FadeIn>

          {/* Scroll indicator */}
          <FadeIn delay={0.8}>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-gray-500 dark:border-gray-400 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gray-500 dark:bg-gray-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Aesthetic Line */}
      <div className="w-full flex justify-center py-8">
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gray-400 dark:via-white to-transparent opacity-60"></div>
      </div>

      {/* About Section */}
      <section
        id="about"
        className="min-h-screen py-24 relative z-10 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Main About Content - Two Column Layout */}
            <FadeIn>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Left Side - Content */}
                <div className="space-y-8">
                  <div className="space-y-6">
                    <p className="text-lg text-gray-700 dark:text-gray-300 flex items-center gap-2">
                      Hi <span className="text-orange-400">✴︎</span> I am{' '}
                      <span className="font-semibold text-gray-900 dark:text-white">
                        Siddhartha Shakya
                      </span>
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
                      Full-Stack Developer
                      <br />
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                        Tailored for Your Success
                      </span>
                    </h1>

                    <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                      Explore how I can elevate your business to new heights
                      through innovative development strategies. I design and
                      build clean, performant web applications with modern
                      technologies and strong user experience.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/resume.pdf"
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
                    >
                      My Resume
                      <svg
                        className="h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                      >
                        <path
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14m-7-7l7 7-7 7"
                        />
                      </svg>
                    </a>
                    <a
                      href="#contact"
                      className="inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 border border-gray-400 dark:border-gray-400 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300"
                    >
                      Contact Me
                    </a>
                  </div>

                  {/* Quick Info Tags */}
                  <div className="flex flex-wrap gap-3 pt-4">
                    <span className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-sm flex items-center gap-2">
                      <MapPin size={14} className="text-blue-400" />
                      Kathmandu, Nepal
                    </span>
                    <span className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-sm flex items-center gap-2">
                      <CheckCircle size={14} className="text-green-400" />
                      Available for Projects
                    </span>
                    <span className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 text-sm flex items-center gap-2">
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
                      <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
                        Education &<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                          Achievements
                        </span>
                      </h2>
                    </div>

                    {/* Education Section */}
                    <div className="space-y-6">
                      <div className="bg-gray-100 dark:bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700/50">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                              <svg
                                className="w-6 h-6 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 14l9-5-9-5-9 5 9 5z"
                                />
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                              Bachelor in Computer Application
                            </h3>
                            <p className="text-blue-400 font-semibold mb-2">
                              Deerwalk College
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                              2021 - Present
                            </p>
                            <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                              Focused on software engineering, data structures,
                              and modern development practices with hands-on
                              experience in AI/ML projects.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Certifications Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-gray-100 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700/50 hover:border-green-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-green-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                              DataCamp - Data Analyst
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              Certified in data analysis and visualization
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-100 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700/50 hover:border-yellow-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-yellow-500/20 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-yellow-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                              Python Certification
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              Coursera - Advanced Python Programming
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-100 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700/50 hover:border-purple-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-purple-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                              Community Leadership
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              PatanJCI Digital Initiatives Leader
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-gray-100 dark:bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-200 dark:border-gray-700/50 hover:border-blue-400/30 transition-all duration-300">
                        <div className="flex items-start gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                              <svg
                                className="w-5 h-5 text-blue-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                />
                              </svg>
                            </div>
                          </div>
                          <div className="flex-grow min-w-0">
                            <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-1">
                              Blockchain Community
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              DWIT - Hackathon Participant & Developer
                            </p>
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

      {/* Aesthetic Line */}
      <div className="w-full flex justify-center py-8">
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gray-400 dark:via-white to-transparent opacity-60"></div>
      </div>

      {/* Skills Section */}
      <section
        id="skills"
        className="min-h-screen py-16 relative z-10 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <div className="text-center space-y-6 mb-20">
                <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-tight">
                  Skills & Technologies
                </h2>
                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Strong foundation in full-stack development with experience in
                  AI/ML projects including Diabetes Prediction, Resume Screening
                  System, and Online Voting platforms.
                </p>
              </div>
            </FadeIn>

            {/* Main Skills Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <FadeIn delay={0.2}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Frontend Development
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Modern web interfaces with React ecosystem
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          name: 'React',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#61DAFB"
                            >
                              <circle cx="12" cy="12" r="2" />
                              <path
                                d="M12 7c-2.76 0-5.326 1.222-7.071 3.357C3.185 12.493 2 15.02 2 18c0 2.98 1.185 5.507 2.929 7.643C6.674 27.778 9.24 29 12 29s5.326-1.222 7.071-3.357C20.815 23.507 22 20.98 22 18c0-2.98-1.185-5.507-2.929-7.643C17.326 8.222 14.76 7 12 7z"
                                opacity="0.3"
                              />
                              <ellipse
                                cx="12"
                                cy="12"
                                rx="9"
                                ry="3"
                                fill="none"
                                stroke="#61DAFB"
                                strokeWidth="1"
                              />
                              <ellipse
                                cx="12"
                                cy="12"
                                rx="9"
                                ry="3"
                                fill="none"
                                stroke="#61DAFB"
                                strokeWidth="1"
                                transform="rotate(60 12 12)"
                              />
                              <ellipse
                                cx="12"
                                cy="12"
                                rx="9"
                                ry="3"
                                fill="none"
                                stroke="#61DAFB"
                                strokeWidth="1"
                                transform="rotate(120 12 12)"
                              />
                            </svg>
                          ),
                        },
                        {
                          name: 'Next.js',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#000000"
                            >
                              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.5 16.5L9 10v8.5c0 .276-.224.5-.5.5s-.5-.224-.5-.5v-9c0-.276.224-.5.5-.5.138 0 .263.056.354.146l8.146 8.146c-.682.452-1.417.828-2.193 1.117zM12 20c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'TypeScript',
                          logo: (
                            <svg className="w-6 h-6" viewBox="0 0 24 24">
                              <rect
                                width="24"
                                height="24"
                                fill="#3178C6"
                                rx="2"
                              />
                              <path
                                d="M9.5 9V8h5v1h-2v8h-1V9h-2zm6.5 0v1h2v1h-2v2h2v1h-2v2h2v1h-3V8h3v1h-2z"
                                fill="white"
                              />
                            </svg>
                          ),
                        },
                        {
                          name: 'JavaScript',
                          logo: (
                            <svg className="w-6 h-6" viewBox="0 0 24 24">
                              <rect width="24" height="24" fill="#F7DF1E" />
                              <path
                                d="M7.5 17.5c0 1.5 1 2.5 2.5 2.5s2.5-1 2.5-2.5V11h-2v6.5c0 .5-.5 1-1 1s-1-.5-1-1V11h-2v6.5zM16 20c1.5 0 2.5-1 2.5-2.5S17.5 15 16 15s-2.5 1-2.5 2.5S14.5 20 16 20zm0-4c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1z"
                                fill="black"
                              />
                            </svg>
                          ),
                        },
                        {
                          name: 'HTML5',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#E34F26"
                            >
                              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'Tailwind CSS',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#06B6D4"
                            >
                              <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
                            </svg>
                          ),
                        },
                      ].map((tech) => (
                        <div
                          key={tech.name}
                          className="bg-gray-50 dark:bg-gray-700/50 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          {tech.logo}
                          <span className="text-gray-800 dark:text-gray-200 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.3}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Backend Development
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Scalable server-side applications and APIs
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          name: 'Node.js',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#339933"
                            >
                              <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.331-.08-.382.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.197.045.272 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.053-.19-.137-.238L11.13.615c-.081-.047-.189-.047-.271 0L2.065 6.68c-.084.05-.138.142-.138.24v10.15c0 .097.054.189.137.237l2.408 1.392c1.307.654 2.108-.116 2.108-0.89V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.112.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L1.226 18.665c-.57-.329-.922-.943-.922-1.604V6.921c0-.661.353-1.275.922-1.603L9.021.242C9.586-.086 10.413-.086 10.979.242l8.795 5.076c.57.328.922.942.922 1.603v10.14c0 .661-.353 1.276-.922 1.604l-8.795 5.076c-.282.163-.602.247-.922.247zm2.725-7.009c-3.852 0-4.652-1.766-4.652-3.248 0-.141.114-.253.256-.253h1.138c.127 0 .233.093.252.218.171 1.154.682 1.739 3.006 1.739 1.849 0 2.635-.419 2.635-1.399 0-.565-.223-.983-3.096-1.267-2.402-.237-3.886-.767-3.886-2.684 0-1.771 1.492-2.827 3.993-2.827 2.81 0 4.2.976 4.376 3.071.008.069-.018.137-.058.188-.04.051-.096.08-.155.08h-1.138c-.118 0-.219-.085-.248-.2-.275-1.227-.946-1.616-2.777-1.616-2.043 0-2.281.712-2.281 1.245 0 .64.28.827 3.006 1.188 2.698.357 3.976.861 3.976 2.75-.001 1.908-1.591 3.013-4.368 3.013z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'Python',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#3776ab"
                            >
                              <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.4.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.4-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'PHP',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#777BB4"
                            >
                              <ellipse
                                cx="12"
                                cy="12"
                                rx="10"
                                ry="6"
                                fill="#777BB4"
                              />
                              <ellipse
                                cx="12"
                                cy="12"
                                rx="8"
                                ry="4.8"
                                fill="#FFF"
                              />
                              <path
                                d="M5.5 10.5h1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H6v1h-.5v-4zm1 1.5H6v1h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm5-1.5h1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H12v1h-.5v-4zm1 1.5H12v1h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5zm5-1.5h1.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H18v1h-.5v-4zm1 1.5H18v1h.5c.3 0 .5-.2.5-.5s-.2-.5-.5-.5z"
                                fill="#777BB4"
                              />
                            </svg>
                          ),
                        },
                        {
                          name: 'Flask',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#000000"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                              <path
                                d="M9 7v2l3 6 3-6V7H9zm2 2h2v1l-1 2-1-2V9z"
                                fill="#000000"
                              />
                            </svg>
                          ),
                        },
                        {
                          name: 'FastAPI',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#009688"
                            >
                              <circle cx="12" cy="12" r="10" fill="#009688" />
                              <path
                                d="M8 8l8 8M8 16l8-8"
                                stroke="white"
                                strokeWidth="2"
                              />
                            </svg>
                          ),
                        },
                        {
                          name: 'Express.js',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#000000"
                            >
                              <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l2.814 3.794z" />
                              <path d="M.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957c-2.864 1.607-6.509.018-7.394-2.036A4.904 4.904 0 01.002 11.576zM8.618 10.142c-1.788-2.953-6.207-2.953-8.015 0-.42.42-.42 1.154 0 1.575.42.42 1.154.42 1.575 0 1.346-1.788 4.519-1.788 5.865 0 .42.42 1.154.42 1.575 0 .42-.421.42-1.155 0-1.575z" />
                            </svg>
                          ),
                        },
                      ].map((tech) => (
                        <div
                          key={tech.name}
                          className="bg-gray-50 dark:bg-gray-700/50 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          {tech.logo}
                          <span className="text-gray-800 dark:text-gray-200 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          Database & Tools
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Data management and development workflow
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          name: 'PostgreSQL',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#336791"
                            >
                              <path d="M23.5 9.5c-.2-.9-.8-1.7-1.6-2.2-.4-.3-.9-.5-1.4-.6-.3-.1-.7-.1-1-.1v-.1c0-1.4-1.1-2.5-2.5-2.5H15c-.6 0-1.2.2-1.7.6-.5-.4-1.1-.6-1.7-.6H9.5c-1.4 0-2.5 1.1-2.5 2.5v.1c-.3 0-.7 0-1 .1-.5.1-1 .3-1.4.6-.8.5-1.4 1.3-1.6 2.2-.1.5-.1 1 0 1.5.1.9.5 1.7 1.2 2.3.3.3.7.5 1.1.7.2.1.4.2.6.2v4.3c0 1.4 1.1 2.5 2.5 2.5h8c1.4 0 2.5-1.1 2.5-2.5v-4.3c.2 0 .4-.1.6-.2.4-.2.8-.4 1.1-.7.7-.6 1.1-1.4 1.2-2.3.1-.5.1-1 0-1.5z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'MySQL',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#4479A1"
                            >
                              <path d="M16.405 5.501c-.115 0-.193.014-.274.033v.013h.014c.054.104.146.18.214.273.054.107.1.214.154.32l.014-.015c.094-.066.14-.172.14-.333-.04-.047-.046-.094-.08-.14-.04-.067-.126-.1-.18-.15zM5.77 18.695h-.927a50.854 50.854 0 00-.27-4.41h-.008l-1.41 4.41H2.45l-1.4-4.41h-.01a72.892 72.892 0 00-.195 4.41H.022c.055-1.966.192-3.81.41-5.53h1.15l1.335 4.064h.008l1.347-4.064h1.095c.242 1.966.378 3.85.403 5.53zM10.924 18.695h-.955l-2.78-5.53h1.024l2.126 4.533.018-.004 2.1-4.529h.98l-2.513 5.53zM16.405 18.695c-.022-.375-.04-.777-.04-1.224v-2.72c0-.62.062-1.19-.57-1.19-.648 0-.54.528-.54 1.19v.327h-.934v-.196c0-1.306.295-2.52 1.574-2.52 1.163 0 1.54.786 1.54 1.92v4.413h-.03zm-3.17-5.754c.4 0 .784.058 1.114.156.055.016.111.04.111.096 0 .14 0 .28-.018.42-.009.058-.024.058-.062.058-.062-.018-.125-.027-.188-.036a4.986 4.986 0 00-.8-.058c-.446 0-.642.027-.642.383 0 .18.062.29.25.29.49 0 .793-.142 1.303-.346v.422c-.062.058-.125.089-.188.125a3.264 3.264 0 01-.849.228c-.848.036-1.337-.196-1.337-.85 0-.704.453-.888 1.418-.888z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'MongoDB',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#47A248"
                            >
                              <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'Git',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#F05032"
                            >
                              <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.6-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
                            </svg>
                          ),
                        },
                        {
                          name: 'GitHub',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#181717"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'VS Code',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#007ACC"
                            >
                              <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                            </svg>
                          ),
                        },
                      ].map((tech) => (
                        <div
                          key={tech.name}
                          className="bg-gray-50 dark:bg-gray-700/50 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          {tech.logo}
                          <span className="text-gray-800 dark:text-gray-200 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200 dark:border-gray-700">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          AI/ML & Data Science
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Machine learning and intelligent systems
                        </p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        {
                          name: 'Python',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#3776ab"
                            >
                              <path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.4.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.4-.08-.41-.23-.33-.33-.22-.41-.09-.41.09z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'Machine Learning',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#FF6F00"
                            >
                              <circle cx="5" cy="12" r="2" fill="#FF6F00" />
                              <circle cx="12" cy="5" r="2" fill="#FF6F00" />
                              <circle cx="12" cy="19" r="2" fill="#FF6F00" />
                              <circle cx="19" cy="12" r="2" fill="#FF6F00" />
                              <path
                                d="M7 12h10M12 7v10"
                                stroke="#FF6F00"
                                strokeWidth="2"
                              />
                            </svg>
                          ),
                        },
                        {
                          name: 'Data Analysis',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#4CAF50"
                            >
                              <path d="M3 3v18h18v-2H5V3H3zm4 14h2v-6H7v6zm4 0h2V9h-2v8zm4 0h2v-4h-2v4z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'TensorFlow',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#FF6F00"
                            >
                              <path d="M1.292 5.856L11.54 0v24l-4.095-2.378V7.603l-6.168 3.564.015-5.31zm21.416 5.311l-6.168-3.564V7.603L10.375 4.7 21.708 11.168v-5.31z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'Scikit-learn',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#F7931E"
                            >
                              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.005 5.367 18.637.001 12.017.001zM8.542 10.467a3.521 3.521 0 117.043 0 3.521 3.521 0 01-7.043 0zm7.043 3.521a3.521 3.521 0 11-7.043 0 3.521 3.521 0 017.043 0z" />
                            </svg>
                          ),
                        },
                        {
                          name: 'Pandas',
                          logo: (
                            <svg
                              className="w-6 h-6"
                              viewBox="0 0 24 24"
                              fill="#150458"
                            >
                              <path d="M16.956 0h2.261v16.86c0 3.395-1.211 5.27-4.067 5.27-2.098 0-3.84-1.347-3.84-3.395 0-1.787 1.347-3.083 3.185-3.083 1.211 0 2.098.656 2.461 1.647V0zM9.622 3.603H7.36c-2.856 0-4.067 1.875-4.067 5.27v12.264h2.262V8.873c0-1.787 1.347-3.27 3.067-3.27z" />
                            </svg>
                          ),
                        },
                      ].map((tech) => (
                        <div
                          key={tech.name}
                          className="bg-gray-50 dark:bg-gray-700/50 rounded-xl px-4 py-3 flex items-center gap-3 hover:bg-gray-100 dark:hover:bg-gray-600/50 transition-colors"
                        >
                          {tech.logo}
                          <span className="text-gray-800 dark:text-gray-200 font-medium">
                            {tech.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Beyond Code Section */}
            <FadeIn delay={0.6}>
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center shadow-2xl">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white">
                      Beyond Code
                    </h3>
                    <p className="text-purple-100 text-lg max-w-2xl mx-auto">
                      When I&apos;m not coding, you&apos;ll find me exploring
                      creative outlets that fuel my passion for innovation.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {[
                      { name: 'Gaming', icon: '🎮' },
                      { name: 'Podcasting', icon: '🎙️' },
                      { name: 'Video Editing', icon: '🎬' },
                      { name: 'Coffee', icon: '☕' },
                      { name: 'Music', icon: '🎵' },
                      { name: 'Tech Blogger', icon: '📚' },
                    ].map((item) => (
                      <div
                        key={item.name}
                        className="bg-white/20 backdrop-blur-sm rounded-xl p-4 text-center hover:bg-white/30 transition-all duration-300"
                      >
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <span className="text-white font-medium text-sm">
                          {item.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Aesthetic Line */}
      <div className="w-full flex justify-center py-8">
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gray-400 dark:via-white to-transparent opacity-60"></div>
      </div>

      {/* Projects Section */}
      <section
        id="projects"
        className="min-h-screen py-16 relative z-10 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-8">
              <h2 className="text-5xl lg:text-6xl font-light text-gray-900 dark:text-white leading-tight">
                Featured Projects
              </h2>
            </div>
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
                  onClick={() =>
                    setShowProjects((prev) =>
                      Math.min(prev + 3, projects.length)
                    )
                  }
                  className="group inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105"
                >
                  Load More Projects
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-y-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Aesthetic Line */}
      <div className="w-full flex justify-center py-8">
        <div className="w-48 h-0.5 bg-gradient-to-r from-transparent via-gray-400 dark:via-white to-transparent opacity-60"></div>
      </div>

      {/* Contact Section */}
      <section
        id="contact"
        className="min-h-screen py-16 relative z-10 transition-all duration-1000 ease-out"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden shadow-2xl">
              {/* Left Side - Contact Information */}
              <div className="p-12 lg:p-16 bg-white">
                <FadeIn>
                  <div className="space-y-12">
                    {/* Header */}
                    <div className="space-y-6">
                      <h1 className="text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                        Contact Me
                      </h1>
                      <p className="text-gray-600 text-lg leading-relaxed max-w-md">
                        Get in touch with us for any enquiries and questions
                      </p>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-8">
                      {/* General Inquiries */}
                      <div className="space-y-3">
                        <h3 className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                          general inquiries
                        </h3>
                        <div className="space-y-1">
                          <p className="text-gray-900 font-medium">
                            shakyasyd@gmail.com
                          </p>
                          <p className="text-gray-900">+977 98-69801351</p>
                        </div>
                      </div>

                      {/* Career */}
                      <div className="space-y-3">
                        <h3 className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                          career
                        </h3>
                        <div className="space-y-1">
                          <p className="text-gray-900 font-medium">
                            siddhartha.shakya@deerwalk.edu.np
                          </p>
                        </div>
                      </div>

                      {/* Collaborations */}
                      <div className="space-y-3">
                        <h3 className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                          collaborations
                        </h3>
                        <div className="space-y-1">
                          <p className="text-gray-900 font-medium">
                            shakyasyd@gmail.com
                          </p>
                          <p className="text-gray-900">+977 98-69801351</p>
                        </div>
                      </div>

                      {/* Address */}
                      <div className="space-y-3">
                        <h3 className="text-sm text-gray-500 uppercase tracking-wider font-medium">
                          address
                        </h3>
                        <div className="space-y-1">
                          <p className="text-gray-900 font-medium">
                            Sanobharyang, Kathmandu
                          </p>
                          <p className="text-gray-900">Nepal, 44600</p>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    <div className="pt-8">
                      <div className="flex gap-6">
                        <a
                          href="https://github.com/sydDwit"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-blue-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg"
                          title="GitHub"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                        <a
                          href="https://linkedin.com/in/siddhartha-shakya"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-blue-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg"
                          title="LinkedIn"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                        <a
                          href="https://instagram.com/sydsbible/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-900 hover:text-blue-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg"
                          title="Instagram"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>

              {/* Right Side - Image */}
              <div className="relative h-96 lg:h-auto">
                <FadeIn delay={0.2}>
                  <div className="absolute inset-0">
                    <Image
                      src="/sakuragi.gif"
                      alt="Modern workspace design"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </FadeIn>
              </div>
            </div>

            {/* Optional: Download CV Section Below */}
            <FadeIn delay={0.4}>
              <div className="mt-12 text-center">
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
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

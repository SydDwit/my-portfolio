import SectionHeading from '@/components/SectionHeading';
import ProfileCard from '@/components/ProfileCard';
import IconBullets from '@/components/IconBullets';
import Timeline from '@/components/Timeline';
import SkillTag from '@/components/SkillTag';
import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading title="About Me" />

      {/* Main Content Container */}
      <div className="max-w-7xl mx-auto mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* LEFT COLUMN: Profile, Journey, Education, Animation */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Profile Card */}
            <FadeIn>
              <section className="rounded-2xl border p-6 md:p-8 bg-white/5 backdrop-blur-sm">
                <ProfileCard
                  name="Siddhartha Shakya"
                  title="Full‑Stack Developer · Next.js/TS"
                  location="Kathmandu, Nepal"
                  avatarSrc="/avatar.png"
                  resumeHref="/resume.pdf"
                />
              </section>
            </FadeIn>

            {/* My Journey */}
            <FadeIn delay={0.1}>
              <section className="rounded-2xl border p-6 md:p-8 bg-white/5 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-6 text-center lg:text-left">My Journey</h2>
                <IconBullets />
              </section>
            </FadeIn>

            {/* Experience & Education */}
            <FadeIn delay={0.2}>
              <section className="rounded-2xl border p-6 md:p-8 bg-white/5 backdrop-blur-sm">
                <h3 className="text-xl font-semibold mb-6 text-center lg:text-left">Experience & Education</h3>
                <Timeline
                  items={[
                    {
                      title: 'BCA — Deerwalk College',
                      subtitle: 'Bachelor in Computer Application',
                      period: '2021 – Present',
                    },
                    {
                      title: 'DAV School/ Lalitpur NIST',
                      subtitle: 'Pre-school & Highschool',
                      period: '2009 – 2021',
                    },
                  ]}
                />
              </section>
            </FadeIn>

            {/* Sakuragi GIF Section */}
            <FadeIn delay={0.3}>
              <section className="rounded-2xl border overflow-hidden bg-white/5 backdrop-blur-sm">
                <div className="relative h-64">
                  <img 
                    src="/sakuragi.gif" 
                    alt="Sakuragi animation" 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay Quote */}
                  <div className="absolute inset-0 flex items-end justify-center p-6 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                    <p className="text-sm text-white italic text-center font-medium">
                      "A Genius is 99% of talent, and 1% of effort.  ✨"
                    </p>
                  </div>
                </div>
              </section>
            </FadeIn>
          </div>

          {/* RIGHT COLUMN: Skills & Achievements */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Skills & Technologies */}
            <FadeIn delay={0.4}>
              <section className="rounded-2xl border p-6 md:p-8 bg-white/5 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-8 text-center lg:text-left">Skills & Technologies</h2>
                
                {/* Frontend */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Frontend</h4>
                  <div className="flex flex-wrap gap-3">
                    <SkillTag name="React" />
                    <SkillTag name="Next.js" />
                    <SkillTag name="TypeScript" />
                    <SkillTag name="Tailwind CSS" />
                  </div>
                </div>

                {/* Backend */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Backend</h4>
                  <div className="flex flex-wrap gap-3">
                    <SkillTag name="Node.js" />
                    <SkillTag name="PHP" />
                    <SkillTag name="Python" />
                    <SkillTag name="Flask" />
                    <SkillTag name="FastAPI" />
                  </div>
                </div>

                {/* Database & Tools */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Database & Tools</h4>
                  <div className="flex flex-wrap gap-3">
                    <SkillTag name="PostgreSQL" />
                    <SkillTag name="MySQL" />
                    <SkillTag name="Git" />
                  </div>
                </div>

                {/* Separator Line */}
                <div className="border-t border-gray-300/20 dark:border-gray-600/30 mb-8"></div>

                {/* Fun Facts */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-400 mb-4 uppercase tracking-wide">Fun Facts</h4>
                  <div className="flex flex-wrap gap-3">
                    <SkillTag name="🎮 Gamer" />
                    <SkillTag name="🎙️ Past podcaster" />
                    <SkillTag name="🎬 Video editing" />
                    <SkillTag name="☕ Coffee person" />
                  </div>
                </div>
              </section>
            </FadeIn>

            {/* Achievements & Highlights */}
            <FadeIn delay={0.5}>
              <section className="rounded-2xl border p-6 md:p-8 bg-white/5 backdrop-blur-sm">
                <h2 className="text-2xl font-bold mb-8 text-center lg:text-left">Achievements & Highlights</h2>
                
                <div className="space-y-6">
                  {/* DataCamp Achievement */}
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-green-600/10 border border-green-600/20 hover:bg-green-600/15 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-green-400 mb-1">DataCamp - Data Analyst</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">Certified in data analysis and visualization techniques</p>
                    </div>
                  </div>

                  {/* PatanJCI Digital Literacy */}
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-blue-600/10 border border-blue-600/20 hover:bg-blue-600/15 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold">🏆</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-400 mb-1">PatanJCI - Digital Literacy Facilitator</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">Volunteer facilitator in Digital Literacy Team</p>
                      <p className="text-xs text-gray-500 mt-2 font-medium">2021</p>
                    </div>
                  </div>

                  {/* PatanJCI Digital Transformation */}
                  <div className="flex items-start gap-4 p-5 rounded-xl bg-purple-600/10 border border-purple-600/20 hover:bg-purple-600/15 transition-colors duration-300">
                    <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-lg font-bold">🚀</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-purple-400 mb-1">PatanJCI - Digital Transformation Coordinator</h4>
                      <p className="text-sm text-gray-400 leading-relaxed">Led digital transformation initiatives and coordination</p>
                      <p className="text-xs text-gray-500 mt-2 font-medium">2022-2023</p>
                    </div>
                  </div>
                </div>
              </section>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

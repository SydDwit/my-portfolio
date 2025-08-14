import SectionHeading from '@/components/SectionHeading';
import ProfileCard from '@/components/ProfileCard';
import IconBullets from '@/components/IconBullets';
import Timeline from '@/components/Timeline';
import SkillBar from '@/components/SkillBar';
import FadeIn from '@/components/FadeIn';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <SectionHeading title="About Me" />

      {/* Wider container and bigger gaps */}
      <div className="max-w-6xl mx-auto mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT: 7/12 — profile, journey, timeline */}
          <div className="lg:col-span-7 space-y-8">
            <FadeIn>
              <div className="rounded-2xl border p-5 md:p-6 bg-white/5">
                <ProfileCard
                  name="Siddhartha Shakya"
                  title="Full‑Stack Developer · Next.js/TS"
                  location="Kathmandu, Nepal"
                  avatarSrc="/avatar.png"
                  resumeHref="/resume.pdf"
                />
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <section className="rounded-2xl border p-5 md:p-6">
                <h2 className="text-2xl font-bold mb-4">My Journey</h2>
                <IconBullets />
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section className="rounded-2xl border p-5 md:p-6">
                <h3 className="text-xl font-semibold mb-3">Experience & Education</h3>
                <Timeline
                  items={[
                    {
                      title: 'BCA — Deerwalk College',
                      subtitle: 'Bachelor in Computer Application',
                      period: '2021 – Present',
                    },
                    {
                      title: 'Lalitpur NIST/DAV School',
                      period: '2009 – 2021',
                    },
                  ]}
                />
              </section>
            </FadeIn>
          </div>

          {/* RIGHT: 5/12 — skills + fun facts grouped */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn delay={0.3}>
              <section className="rounded-2xl border p-5 md:p-6">
                <h2 className="text-2xl font-bold mb-4">Skills & Technologies</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <SkillBar name="TypeScript" level={80} />
                  <SkillBar name="Next.js" level={75} />
                  <SkillBar name="React" level={85} />
                  <SkillBar name="Node.js" level={70} />
                  <SkillBar name="PostgreSQL" level={65} />
                  <SkillBar name="Tailwind CSS" level={80} />
                </div>

                {/* Fun facts below skills */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {['🎮 Gamer', '🎙️ Past podcaster', '🎬 Video editing', '☕ Coffee person'].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full border text-sm opacity-90">
                      {t}
                    </span>
                  ))}
                </div>
              </section>
            </FadeIn>
          </div>
        </div>
      </div>
    </div>
  );
}

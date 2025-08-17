import { Calendar, Code, Trophy, BookOpen, Zap, Sparkles } from "lucide-react";

interface JourneyItem {
  year: string;
  title: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<any>;
  color: string;
  bgColor: string;
  borderColor: string;
}

export default function LearningJourneyTimeline() {
  const journeyItems: JourneyItem[] = [
    {
      year: "2024",
      title: "Advanced Full-Stack & AI/ML",
      description: "Diving deep into AI/ML integration and advanced Next.js patterns.",
      skills: ["TensorFlow", "Scikit-learn", "Pandas", "Advanced Next.js"],
      icon: Sparkles,
      color: "text-purple-400",
      bgColor: "bg-purple-600/10",
      borderColor: "border-purple-600/20"
    },
    {
      year: "2023",
      title: "Modern Web Development",
      description: "Mastered React ecosystem and TypeScript development.",
      skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
      icon: Zap,
      color: "text-blue-400",
      bgColor: "bg-blue-600/10",
      borderColor: "border-blue-600/20"
    },
    {
      year: "2022",
      title: "Backend & Database Mastery",
      description: "Explored server-side development and database design.",
      skills: ["Node.js", "Python", "Flask", "PostgreSQL"],
      icon: Code,
      color: "text-green-400",
      bgColor: "bg-green-600/10",
      borderColor: "border-green-600/20"
    },
    {
      year: "2021",
      title: "Programming Foundations",
      description: "Started with core programming concepts and web basics.",
      skills: ["JavaScript", "HTML", "CSS", "Git"],
      icon: BookOpen,
      color: "text-orange-400",
      bgColor: "bg-orange-600/10",
      borderColor: "border-orange-600/20"
    }
  ];

  return (
    <div className="relative">
      {/* Simple Timeline Line */}
      <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 via-green-500 to-orange-500 rounded-full"></div>
      
      <div className="space-y-4">
        {journeyItems.map((item, index) => {
          const Icon = item.icon;
          
          return (
            <div key={item.year} className="relative flex items-start">
              {/* Timeline Node */}
              <div className={`relative z-10 w-10 h-10 rounded-full ${item.bgColor} ${item.borderColor} border-2 flex items-center justify-center bg-white dark:bg-gray-900 shadow-sm`}>
                <Icon className={`w-4 h-4 ${item.color}`} />
              </div>
              
              {/* Content Card */}
              <div className={`ml-4 flex-1 ${item.bgColor} ${item.borderColor} border rounded-lg p-4 bg-white dark:bg-gray-800`}>
                {/* Header */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className={`text-lg font-bold ${item.color}`}>{item.year}</span>
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                  </div>
                  <Calendar className="w-3 h-3 text-gray-400 flex-shrink-0" />
                </div>
                
                {/* Description */}
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                  {item.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1 mb-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`px-2 py-0.5 text-xs font-medium rounded-md ${item.color} bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* Achievement Badge */}
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400">
                  <Trophy className={`w-3 h-3 ${item.color}`} />
                  <span>{item.skills.length} Technologies</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

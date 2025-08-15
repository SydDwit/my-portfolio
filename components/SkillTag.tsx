// components/SkillTag.tsx
export default function SkillTag({ name }: { name: string }) {
  // Technology-specific colors that work in both light and dark modes
  const getTechColor = (techName: string): string => {
    const colors: { [key: string]: string } = {
      // Frontend - works in both modes
      'React': 'bg-blue-600/20 text-blue-700 dark:text-blue-300 border border-blue-600/30 dark:border-blue-600/30',
      'Next.js': 'bg-gray-600/20 text-gray-900 dark:text-white border border-gray-600/30 dark:border-white/30',
      'TypeScript': 'bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-500/30 dark:border-blue-500/30',
      'Tailwind CSS': 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/30 dark:border-cyan-500/30',
      
      // Backend - dual mode colors
      'Node.js': 'bg-green-600/20 text-green-700 dark:text-green-300 border border-green-600/30 dark:border-green-600/30',
      'PHP': 'bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-600/30 dark:border-purple-600/30',
      'Python': 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border border-yellow-500/30 dark:border-yellow-500/30',
      'Flask': 'bg-gray-600/20 text-gray-700 dark:text-gray-300 border border-gray-600/30 dark:border-gray-600/30',
      'FastAPI': 'bg-teal-600/20 text-teal-700 dark:text-teal-300 border border-teal-600/30 dark:border-teal-600/30',
      
      // Database & Tools - dual mode colors
      'PostgreSQL': 'bg-blue-700/20 text-blue-800 dark:text-blue-300 border border-blue-700/30 dark:border-blue-700/30',
      'MySQL': 'bg-orange-600/20 text-orange-700 dark:text-orange-300 border border-orange-600/30 dark:border-orange-600/30',
      'Git': 'bg-gray-500/20 text-gray-700 dark:text-gray-300 border border-gray-500/30 dark:border-gray-500/30',
      
      // Fun Facts - dual mode colors
      '🎮 Gamer': 'bg-purple-600/20 text-purple-700 dark:text-purple-300 border border-purple-600/30 dark:border-purple-600/30',
      '🎙️ Past podcaster': 'bg-gray-600/20 text-gray-700 dark:text-gray-300 border border-gray-600/30 dark:border-gray-600/30',
      '🎬 Video editing': 'bg-purple-500/20 text-purple-700 dark:text-purple-300 border border-purple-500/30 dark:border-purple-500/30',
      '☕ Coffee person': 'bg-orange-700/20 text-orange-800 dark:text-orange-300 border border-orange-700/30 dark:border-orange-700/30',
    };

    return colors[techName] || 'bg-gray-600/20 text-gray-700 dark:text-gray-300 border border-gray-600/30 dark:border-gray-600/30';
  };

  return (
    <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${getTechColor(name)} hover:bg-opacity-30 transition-colors duration-200`}>
      {name}
    </span>
  );
}

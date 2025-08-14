// components/SkillBar.tsx
export default function SkillBar({ name, level }: { name: string; level: number }) {
  return (
    <div>
      <div className="flex justify-between text-sm">
        <span>{name}</span><span className="opacity-60">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-black/10 dark:bg-white/10 mt-1">
        <div className="h-full rounded-full bg-black/70 dark:bg-white/80" style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

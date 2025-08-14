import { Rocket, Code2, Lightbulb } from "lucide-react";

export default function IconBullets() {
  const items = [
    { icon: Rocket, text: "Ship production-ready web apps with clean UX." },
    { icon: Code2, text: "Focus on React, Next.js, Node.js, TypeScript." },
    { icon: Lightbulb, text: "Curious about AI/ML & Blockchain; love learning." },
  ];

  return (
    <ul className="space-y-3">
      {items.map(({ icon: Icon, text }) => (
        <li key={text} className="flex gap-3">
          <span className="mt-0.5 rounded-lg border p-1.5">
            <Icon size={16} />
          </span>
          <p className="text-gray-700 dark:text-gray-300">{text}</p>
        </li>
      ))}
    </ul>
  );
}
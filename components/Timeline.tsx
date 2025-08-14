// components/Timeline.tsx
type Item = { title: string; subtitle?: string; period: string };
export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s pl-6 space-y-6">
      {items.map((it) => (
        <li key={it.title}>
          <span className="absolute -start-2.5 mt-1 h-2.5 w-2.5 rounded-full border bg-white dark:bg-darkbg"></span>
          <h4 className="font-medium">{it.title}</h4>
          {it.subtitle && <p className="text-sm opacity-80">{it.subtitle}</p>}
          <p className="text-xs opacity-60 mt-0.5">{it.period}</p>
        </li>
      ))}
    </ol>
  );
}

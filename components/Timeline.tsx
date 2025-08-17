// components/Timeline.tsx
type Item = { title: string; subtitle?: string; period: string };
export default function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="relative border-s pl-6 space-y-4">
      {items.map((it) => (
        <li key={it.title}>
          <span className="absolute -start-2 mt-1 h-2 w-2 rounded-full border bg-blue-600 dark:bg-blue-500"></span>
          <div className="flex items-start gap-3">
            <div className="flex-1">
              <h4 className="font-medium text-sm text-gray-900 dark:text-white">{it.title}</h4>
              {it.subtitle && <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5">{it.subtitle}</p>}
            </div>
            <span className="text-xs font-medium text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full whitespace-nowrap">{it.period}</span>
          </div>
        </li>
      ))}
    </ol>
  );
}

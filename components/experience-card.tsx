import type { Experience } from "@/lib/data";

export function ExperienceCard({ item }: { item: Experience }) {
  return (
    <article className="grid gap-5 border-b border-slate-200 py-8 last:border-0 md:grid-cols-[220px_1fr] dark:border-slate-800">
      <div>
        <p className="font-mono text-xs uppercase tracking-[0.13em] text-emerald-700 dark:text-emerald-400">{item.period}</p>
      </div>
      <div>
        <h3 className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">{item.company}</h3>
        <p className="mt-1 text-sm font-medium text-slate-600 dark:text-slate-400">{item.role}</p>
        <ul className="mt-5 grid gap-3">
          {item.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-400 dark:bg-slate-600" />
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          {item.technologies.map((technology) => (
            <span key={technology} className="tech-chip">{technology}</span>
          ))}
        </div>
      </div>
    </article>
  );
}

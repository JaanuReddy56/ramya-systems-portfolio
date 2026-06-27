import type { Project } from "@/lib/data";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="project-card group">
      <div className="flex items-center justify-between gap-4">
        <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/40 dark:text-emerald-300">
          {project.signal}
        </span>
        <span className="font-mono text-sm text-slate-400">0{index + 1}</span>
      </div>
      <div className="mt-7">
        <p className="font-mono text-xs text-slate-500 dark:text-slate-500">{project.context}</p>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950 dark:text-white">{project.title}</h3>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">{project.summary}</p>
      </div>
      <ul className="mt-6 space-y-3">
        {project.impact.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-7 flex flex-wrap gap-2 border-t border-slate-200 pt-5 dark:border-slate-800">
        {project.stack.map((item) => (
          <span key={item} className="tech-chip">{item}</span>
        ))}
      </div>
    </article>
  );
}

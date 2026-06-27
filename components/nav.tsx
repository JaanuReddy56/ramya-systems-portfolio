import { ThemeToggle } from "@/components/theme-toggle";

const items = [
  ["Work", "#work"],
  ["Experience", "#experience"],
  ["Skills", "#skills"],
  ["Contact", "#contact"],
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/78 backdrop-blur-xl dark:border-slate-800/80 dark:bg-slate-950/78">
      <div className="shell flex h-16 items-center justify-between gap-6">
        <a href="#top" className="group flex items-center gap-3" aria-label="Ramya Reddy Koppula home">
          <span className="grid h-8 w-8 place-items-center rounded-lg border border-slate-300 bg-slate-50 font-mono text-xs font-bold text-slate-900 transition group-hover:border-emerald-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100">
            RK
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-slate-900 sm:inline dark:text-slate-100">
            Ramya Reddy Koppula
          </span>
        </a>

        <nav className="flex items-center gap-1" aria-label="Primary navigation">
          <div className="hidden items-center md:flex">
            {items.map(([label, href]) => (
              <a key={href} href={href} className="nav-link">
                {label}
              </a>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}

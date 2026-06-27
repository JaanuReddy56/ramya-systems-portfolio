import { ArrowUpRightIcon, CodeIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { ExperienceCard } from "@/components/experience-card";
import { Nav } from "@/components/nav";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { certifications, experiences, metrics, profile, projects, skillGroups } from "@/lib/data";

export default function Home() {
  return (
    <main id="top">
      <Nav />

      <section className="relative overflow-hidden border-b border-slate-200 dark:border-slate-800">
        <div className="hero-grid absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="orb orb-one" aria-hidden="true" />
        <div className="orb orb-two" aria-hidden="true" />

        <div className="shell relative grid min-h-[calc(100vh-4rem)] items-center gap-14 py-20 lg:grid-cols-[1.12fr_.88fr] lg:py-28">
          <div className="animate-reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1.5 font-mono text-xs text-slate-600 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 dark:text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to senior software engineering opportunities
            </div>

            <p className="mt-8 font-mono text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700 dark:text-emerald-400">
              {profile.role}
            </p>
            <h1 className="mt-5 max-w-4xl text-5xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              {profile.headline}
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400">
              {profile.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#work" className="primary-button">
                View featured work
                <ArrowUpRightIcon className="h-4 w-4" />
              </a>
              <a href={`mailto:${profile.email}`} className="secondary-button">
                <MailIcon className="h-4 w-4" />
                Start a conversation
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500 dark:text-slate-500">
              <span>{profile.location}</span>
              <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:inline dark:bg-slate-700" />
              <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-slate-950 dark:hover:text-white">
                <LinkedInIcon className="h-4 w-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl animate-float lg:max-w-none">
            <div className="code-window">
              <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3 dark:border-slate-800">
                <div className="flex gap-2" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <span className="font-mono text-[11px] text-slate-400">engineer.profile.ts</span>
              </div>
              <div className="overflow-x-auto p-6 font-mono text-[13px] leading-7 sm:p-8 sm:text-sm">
                <p><span className="text-fuchsia-600 dark:text-fuchsia-400">const</span> <span className="text-sky-700 dark:text-sky-300">engineer</span> = &#123;</p>
                <p className="pl-5"><span className="text-slate-500">focus:</span> <span className="text-emerald-700 dark:text-emerald-300">&quot;reliable distributed systems&quot;</span>,</p>
                <p className="pl-5"><span className="text-slate-500">backend:</span> [<span className="text-amber-700 dark:text-amber-300">&quot;Java&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;Spring Boot&quot;</span>],</p>
                <p className="pl-5"><span className="text-slate-500">frontend:</span> [<span className="text-amber-700 dark:text-amber-300">&quot;Angular&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;React&quot;</span>],</p>
                <p className="pl-5"><span className="text-slate-500">cloud:</span> [<span className="text-amber-700 dark:text-amber-300">&quot;AWS&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;Azure&quot;</span>],</p>
                <p className="pl-5"><span className="text-slate-500">principles:</span> [</p>
                <p className="pl-10 text-emerald-700 dark:text-emerald-300">&quot;security by design&quot;,</p>
                <p className="pl-10 text-emerald-700 dark:text-emerald-300">&quot;observable by default&quot;,</p>
                <p className="pl-10 text-emerald-700 dark:text-emerald-300">&quot;safe to change&quot;</p>
                <p className="pl-5">],</p>
                <p>&#125;;</p>
                <div className="mt-7 flex items-center gap-3 text-xs text-slate-400">
                  <CodeIcon className="h-4 w-4 text-emerald-500" />
                  <span>architect · build · operate · improve</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Career impact" className="border-b border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="shell grid grid-cols-2 gap-px bg-slate-200 md:grid-cols-4 dark:bg-slate-800">
          {metrics.map((metric) => (
            <div key={metric.label} className="bg-slate-50 px-5 py-8 dark:bg-slate-950">
              <p className="text-3xl font-semibold tracking-tight text-slate-950 dark:text-white">{metric.value}</p>
              <p className="mt-2 max-w-[12rem] text-xs leading-5 text-slate-500 dark:text-slate-500">{metric.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="section-space">
        <div className="shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="section-title">Engineering judgment shaped by production reality.</h2>
          </div>
          <div className="grid gap-6 text-base leading-8 text-slate-600 dark:text-slate-400 md:grid-cols-2">
            <p>
              Ramya specializes in systems where correctness, security, and recoverability matter as much as feature velocity. Her work spans regulated financial services, federal records, insurance operations, and high-volume retail platforms.
            </p>
            <p>
              She connects architecture to execution: versioned APIs, event-driven workflows, cloud infrastructure, accessible user experiences, automated delivery, and telemetry that helps teams understand what is happening in production.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="section-space border-y border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured work"
            title="Enterprise platforms designed for scale, control, and change."
            description="Selected case studies are written at a public-safe level while preserving the architecture, ownership, and business impact of the work."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section id="experience" className="section-space">
        <div className="shell">
          <SectionHeading
            eyebrow="Experience"
            title="A career built across complex, high-accountability environments."
            description="Progressive ownership across application engineering, distributed systems, cloud platforms, reliability, security, and technical leadership."
          />
          <div className="rounded-2xl border border-slate-200 bg-white px-5 shadow-sm sm:px-8 dark:border-slate-800 dark:bg-slate-950">
            {experiences.map((item) => (
              <ExperienceCard key={`${item.company}-${item.period}`} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="section-space border-y border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="shell">
          <SectionHeading
            eyebrow="Technical range"
            title="Full-stack depth without losing systems thinking."
            description="A practical toolkit for designing, shipping, and operating modern enterprise software."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="skill-card">
                <h3 className="text-sm font-semibold text-slate-950 dark:text-white">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className="tech-chip">{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 dark:border-slate-800 dark:bg-slate-950">
            <p className="eyebrow">Credentials</p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {certifications.map((certification) => (
                <div key={certification} className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 dark:border-slate-800 dark:text-slate-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{certification}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section-space">
        <div className="shell">
          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 px-6 py-12 text-white shadow-2xl sm:px-10 lg:px-14 lg:py-16">
            <div className="contact-grid absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-xs font-semibold uppercase tracking-[0.18em] text-emerald-400">Contact</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">
                  Looking for a senior engineer who can connect architecture, delivery, and operations?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                  Ramya brings hands-on full-stack depth, cloud-native architecture experience, and a production-first approach to reliable software delivery.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <a href={`mailto:${profile.email}`} className="primary-button justify-center">
                  <MailIcon className="h-4 w-4" />
                  {profile.email}
                </a>
                <a href={profile.linkedIn} target="_blank" rel="noreferrer" className="dark-button justify-center">
                  <LinkedInIcon className="h-4 w-4" />
                  LinkedIn profile
                </a>
              </div>
            </div>
            <div className="relative mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-slate-800 pt-6 font-mono text-xs text-slate-500">
              <span>{profile.phone}</span>
              <span>B.Tech · Computer Science · KL University</span>
              <span>Java · Spring Boot · Angular · AWS · Azure</span>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 py-8 dark:border-slate-800">
        <div className="shell flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-slate-500">
          <p>© {new Date().getFullYear()} Ramya Reddy Koppula.</p>
          <p className="font-mono text-xs">Designed around systems, not decoration.</p>
        </div>
      </footer>
    </main>
  );
}

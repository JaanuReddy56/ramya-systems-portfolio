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
                <p className="pl-5"><span className="text-slate-500">focus:</span> <span className="text-emerald-700 dark:text-emerald-300">&quot;enterprise service virtualization&quot;</span>,</p>
                <p className="pl-5"><span className="text-slate-500">platform:</span> [<span className="text-amber-700 dark:text-amber-300">&quot;Broadcom DevTest&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;VSE&quot;</span>],</p>
                <p className="pl-5"><span className="text-slate-500">virtualizes:</span> [<span className="text-amber-700 dark:text-amber-300">&quot;REST&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;SOAP&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;MQ&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;DB&quot;</span>],</p>
                <p className="pl-5"><span className="text-slate-500">automation:</span> [<span className="text-amber-700 dark:text-amber-300">&quot;Java&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;JavaScript&quot;</span>],</p>
                <p className="pl-5"><span className="text-slate-500">delivery:</span> [<span className="text-amber-700 dark:text-amber-300">&quot;Jenkins&quot;</span>, <span className="text-amber-700 dark:text-amber-300">&quot;OpenShift&quot;</span>],</p>
                <p className="pl-5"><span className="text-slate-500">principles:</span> [</p>
                <p className="pl-10 text-emerald-700 dark:text-emerald-300">&quot;test before dependencies exist&quot;,</p>
                <p className="pl-10 text-emerald-700 dark:text-emerald-300">&quot;repeatable environments&quot;,</p>
                <p className="pl-10 text-emerald-700 dark:text-emerald-300">&quot;faster feedback loops&quot;</p>
                <p className="pl-5">],</p>
                <p>&#125;;</p>
                <div className="mt-7 flex items-center gap-3 text-xs text-slate-400">
                  <CodeIcon className="h-4 w-4 text-emerald-500" />
                  <span>virtualize · automate · troubleshoot · scale</span>
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
            <h2 className="section-title">Service virtualization grounded in production engineering.</h2>
          </div>
          <div className="grid gap-6 text-base leading-8 text-slate-600 dark:text-slate-400 md:grid-cols-2">
            <p>
              Ramya specializes in removing unstable or unavailable dependencies from enterprise testing. Across her three most recent engagements, she has designed Broadcom DevTest virtual services for REST, SOAP, MQ, and database integrations supporting banking, mortgage, payments, and federal financial workflows.
            </p>
            <p>
              She connects platform engineering to delivery: VSE configuration, service-image management, Java and JavaScript extensions, Windows Server troubleshooting, OpenShift environments, Jenkins automation, implementation standards, and stakeholder enablement that makes service virtualization usable at enterprise scale.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="section-space border-y border-slate-200 bg-slate-50/70 dark:border-slate-800 dark:bg-slate-900/30">
        <div className="shell">
          <SectionHeading
            eyebrow="Featured work"
            title="Virtual services that remove dependencies and accelerate delivery."
            description="Selected case studies show how service virtualization improved testability across recent banking, mortgage, and federal financial-services engagements."
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
            description="Progressive ownership across service virtualization, Java automation, environment operations, integration testing, cloud platforms, and enterprise adoption."
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
            title="Broadcom DevTest depth, Java automation, and enterprise test enablement."
            description="A practical toolkit for virtual-service design, DevTest administration, custom scripting, environment troubleshooting, deployment automation, and production support."
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
                  Looking for a senior engineer who can remove test dependencies and scale service virtualization?
                </h2>
                <p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">
                  Ramya brings hands-on Broadcom DevTest expertise, Java and JavaScript automation, VSE administration, OpenShift delivery, and a production-first approach to enterprise integration testing.
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
              <span>Broadcom DevTest · Java · JavaScript · Jenkins · OpenShift · Windows Server</span>
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

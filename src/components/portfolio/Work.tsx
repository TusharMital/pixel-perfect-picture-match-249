import { useMemo, useState } from "react";
import { ArrowUpRight, Github, Plus, Search, X } from "lucide-react";
import { CATEGORIES, PROJECTS, type Category } from "@/lib/portfolio-data";
import { filterProjects } from "@/lib/project-filter";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal, SectionLabel } from "./Reveal";

export function Work() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Category | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const results = useMemo(() => filterProjects(PROJECTS, query, cat), [query, cat]);
  const filtered = query.trim() !== "" || cat !== null;

  return (
    <section id="work" className="relative border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-36">
        <Reveal>
          <SectionLabel n="02">Selected coursework</SectionLabel>
        </Reveal>
        <div className="mt-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <Reveal as="h2" className="display text-6xl md:text-8xl lg:text-9xl">
            Work<span className="text-primary">.</span>
          </Reveal>

          <Reveal delay={100} className="w-full lg:max-w-xl">
            <label className="flex items-center gap-3 border-b border-border pb-3 focus-within:border-primary">
              <Search className="h-4 w-4 text-muted-foreground" />
              <span className="sr-only">Search projects</span>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name, tech or keyword…"
                className="w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground"
              />
            </label>
            <div className="mt-4 flex flex-wrap items-center gap-2" role="group" aria-label="Filter by category">
              {CATEGORIES.map((c) => (
                <button
                  key={c}
                  aria-pressed={cat === c}
                  onClick={() => setCat(cat === c ? null : c)}
                  className={`label-mono rounded-full border px-3 py-1.5 transition-colors ${cat === c ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:text-foreground"}`}
                >
                  {c}
                </button>
              ))}
              {filtered && (
                <button
                  onClick={() => {
                    setQuery("");
                    setCat(null);
                  }}
                  className="label-mono ml-1 flex items-center gap-1 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-3 w-3" /> Clear
                </button>
              )}
            </div>
            <p className="label-mono mt-4 text-muted-foreground" aria-live="polite">
              {results.length} of {PROJECTS.length} projects
            </p>
          </Reveal>
        </div>

        <div className="mt-20 space-y-28 md:space-y-40">
          {results.length === 0 && (
            <div className="rounded-lg border border-dashed border-border py-24 text-center">
              <p className="display text-4xl">Nothing matches that yet.</p>
              <p className="mt-3 text-muted-foreground">Try “python”, “javascript” or “debugging”.</p>
            </div>
          )}
          {results.map((p, i) => {
            const flip = i % 2 === 1;
            const open = openId === p.id;
            return (
              <article key={p.id} className="group grid gap-10 md:grid-cols-12 md:gap-12">
                <Reveal
                  className={`relative aspect-[4/3] overflow-hidden rounded-lg border border-border bg-card md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : ""}`}
                >
                  <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]">
                    <ProjectVisual id={p.id} />
                  </div>
                  <span className="display absolute right-5 top-3 text-7xl text-foreground/10">{p.index}</span>
                </Reveal>

                <div className={`flex flex-col justify-center md:col-span-5 ${flip ? "md:order-1 md:col-start-1" : ""}`}>
                  <Reveal className="label-mono text-primary">{p.index} — {p.label}</Reveal>
                  <Reveal as="h3" delay={80} className="display mt-4 text-5xl md:text-6xl">
                    {p.title}
                  </Reveal>
                  <Reveal delay={160} className="mt-5 text-lg leading-relaxed text-muted-foreground">
                    {p.description}
                  </Reveal>
                  <Reveal delay={220} className="mt-6 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span key={t} className="label-mono rounded border border-hairline px-2 py-1 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </Reveal>
                  <Reveal delay={280} className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:border-foreground"
                    >
                      <Github className="h-4 w-4" /> View Source
                    </a>
                    {p.live && (
                      <a
                        href={p.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        Launch Project <ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </Reveal>

                  <div className="mt-8 border-t border-hairline">
                    <button
                      onClick={() => setOpenId(open ? null : p.id)}
                      aria-expanded={open}
                      aria-controls={`cs-${p.id}`}
                      className="label-mono flex w-full items-center justify-between py-4 text-muted-foreground hover:text-foreground"
                    >
                      Case study
                      <Plus className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-45" : ""}`} />
                    </button>
                    <div
                      id={`cs-${p.id}`}
                      className={`grid transition-all duration-500 ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                    >
                      <dl className="space-y-4 overflow-hidden">
                        {(
                          [
                            ["Objective", p.caseStudy.objective],
                            ["Implementation", p.caseStudy.implementation],
                            ["Outcome", p.caseStudy.outcome],
                          ] as const
                        ).map(([k, v]) => (
                          <div key={k} className="grid grid-cols-[110px_1fr] gap-4 pb-1">
                            <dt className="label-mono pt-1 text-signal">{k}</dt>
                            <dd className="leading-relaxed">{v}</dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

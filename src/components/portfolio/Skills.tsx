import { MILESTONES, SKILLS } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="border-t border-hairline">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-36">
        <Reveal>
          <SectionLabel n="04">Toolkit</SectionLabel>
        </Reveal>
        <Reveal as="h2" className="display mt-10 text-5xl md:text-7xl">
          What I work with <span className="text-muted-foreground">— and keep learning.</span>
        </Reveal>
        <div className="mt-16 divide-y divide-hairline border-y border-hairline">
          {SKILLS.map((g, gi) => (
            <Reveal key={g.group} delay={gi * 80} className="grid gap-4 py-8 md:grid-cols-12">
              <div className="label-mono text-primary md:col-span-3 md:pt-3">{g.group}</div>
              <ul className="flex flex-wrap gap-x-8 gap-y-2 md:col-span-9">
                {g.items.map((s) => (
                  <li
                    key={s}
                    className="display cursor-default text-3xl text-foreground/60 transition-all duration-300 hover:text-foreground hover:italic md:text-5xl"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Milestones() {
  return (
    <section id="milestones" className="border-t border-hairline bg-card">
      <div className="mx-auto grid max-w-[1400px] gap-14 px-5 py-28 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <Reveal>
              <SectionLabel n="05">Academic milestones</SectionLabel>
            </Reveal>
            <Reveal as="h2" className="display mt-10 text-5xl md:text-6xl">
              Beyond the coursework.
            </Reveal>
            <Reveal delay={100} className="mt-5 text-muted-foreground">
              Separate from the projects above — the self-directed study shaping where I’m heading.
            </Reveal>
          </div>
        </div>
        <ol className="md:col-span-8">
          {MILESTONES.map((m, i) => (
            <Reveal as="li" key={m.t} delay={i * 60} className="group grid grid-cols-[48px_1fr] gap-4 border-t border-border py-8 md:grid-cols-[80px_1fr]">
              <span className={`label-mono pt-2 ${m.future ? "text-signal" : "text-muted-foreground"}`}>
                {m.future ? "NEXT" : String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="display text-3xl transition-colors group-hover:text-primary md:text-4xl">{m.t}</h3>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{m.d}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

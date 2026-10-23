import { Reveal, SectionLabel } from "./Reveal";

const INTERESTS = [
  "Systems & low-level programming",
  "Operating systems & computer architecture",
  "Networking & protocols",
  "Data structures & algorithms",
  "Quantum computing",
];
const COURSEWORK = [
  "Prompt design & refinement",
  "AI-assisted coding",
  "Debugging & testing",
  "Code review & documentation",
  "Building & deploying web apps",
];

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
      <Reveal>
        <SectionLabel n="01">About</SectionLabel>
      </Reveal>

      <div className="mt-14 grid gap-12 md:grid-cols-12">
        <Reveal as="h2" className="display text-5xl md:col-span-8 md:text-7xl lg:text-8xl">
          Second-year CS student at <em className="text-primary">JECRC University</em>, curious about what happens{" "}
          <span className="text-outline">beneath</span> the surface.
        </Reveal>
        <div className="space-y-6 text-lg leading-relaxed text-muted-foreground md:col-span-4 md:pt-4">
          <Reveal delay={100}>
            I study C and C++, data structures and algorithms, operating systems, computer architecture, Linux environments,
            networking and quantum computing.
          </Reveal>
          <Reveal delay={200}>
            Alongside, my Prompt Engineering coursework explores how AI tools can help write programs, investigate errors,
            test behaviour, document and deploy software.
          </Reveal>
          <Reveal delay={300} className="border-l-2 border-primary pl-5 text-foreground">
            I treat AI as a development aid — not a substitute for understanding. Evaluate, inspect, test, iterate.
          </Reveal>
        </div>
      </div>

      <div className="mt-24 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
        {[
          { title: "Broader CS interests", tag: "// fundamentals", items: INTERESTS, accent: "text-primary" },
          { title: "Prompt Engineering coursework", tag: "// coursework", items: COURSEWORK, accent: "text-signal" },
        ].map((col, ci) => (
          <Reveal key={col.title} delay={ci * 150} className="bg-background p-8 md:p-12">
            <div className={`label-mono ${col.accent}`}>{col.tag}</div>
            <h3 className="display mt-4 text-4xl md:text-5xl">{col.title}</h3>
            <ul className="mt-8">
              {col.items.map((it, i) => (
                <li key={it} className="group flex items-baseline gap-5 border-t border-hairline py-4">
                  <span className="label-mono text-muted-foreground">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from "react";
import { PROCESS } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = (vh * 0.75 - r.top) / (r.height + vh * 0.1);
      setProgress(Math.max(0, Math.min(1, p)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeIdx = Math.floor(progress * PROCESS.length - 0.001);

  return (
    <section id="process" className="relative overflow-hidden border-t border-hairline bg-card">
      <div className="mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-36">
        <Reveal>
          <SectionLabel n="03">Process</SectionLabel>
        </Reveal>
        <div className="mt-10 grid gap-8 md:grid-cols-12">
          <Reveal as="h2" className="display text-5xl md:col-span-8 md:text-7xl lg:text-8xl">
            From prompt to <em className="text-primary">working</em> software.
          </Reveal>
          <Reveal delay={120} className="text-muted-foreground md:col-span-4 md:self-end">
            The practical workflow I use in my Prompt Engineering coursework — a habit, not a formal methodology every
            project follows identically.
          </Reveal>
        </div>

        <div ref={ref} className="relative mt-20">
          <div aria-hidden className="absolute left-[11px] top-0 h-full w-px bg-border md:hidden">
            <div className="h-full w-full origin-top bg-primary" style={{ transform: `scaleY(${progress})` }} />
          </div>
          <div aria-hidden className="absolute left-0 top-[11px] hidden h-px w-full bg-border md:block">
            <div className="h-full w-full origin-left bg-primary" style={{ transform: `scaleX(${progress})` }} />
          </div>
          <ol className="relative grid gap-10 md:grid-cols-6 md:gap-6">
            {PROCESS.map((s, i) => {
              const on = i <= activeIdx;
              return (
                <li key={s.k} className="relative pl-10 md:pl-0 md:pt-12">
                  <span
                    className={`absolute left-0 top-0 grid h-[23px] w-[23px] place-items-center rounded-full border transition-all duration-500 ${on ? "border-primary bg-primary" : "border-border bg-card"}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${on ? "bg-primary-foreground" : "bg-muted-foreground/50"}`} />
                  </span>
                  <div className={`transition-all duration-700 ${on ? "opacity-100" : "opacity-35"}`}>
                    <div className="label-mono text-muted-foreground">Step {String(i + 1).padStart(2, "0")}</div>
                    <h3 className="display mt-2 text-3xl md:text-4xl">{s.k}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

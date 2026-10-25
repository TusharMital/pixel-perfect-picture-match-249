import { ArrowDownRight, Github, Linkedin } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { Button } from "@/components/ui/button";
import { PROFILE, LINKS } from "@/lib/portfolio-data";
import type { CSSProperties } from "react";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-[calc(100svh-48px)] flex-col overflow-hidden">
      <ParticleField />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-b from-transparent to-background" />

      <div className="relative mx-auto flex w-full max-w-[1400px] flex-1 flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-12">
        <div className="label-mono fade-in mb-8 flex items-center gap-3 text-muted-foreground" style={d(200)}>
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
            <span className="relative h-2 w-2 rounded-full bg-signal" />
          </span>
          Building · Learning · Experimenting
        </div>

        <h1 className="display hero-name">
          <span className="name-line">
            <span style={d(100)}>Tushar</span>
          </span>
          <span className="name-line pl-8 md:pl-16">
            <span style={d(260)}>
              <em className="text-primary">M</em>ittal
            </span>
          </span>
        </h1>

        <div className="mt-10 grid gap-10 md:grid-cols-12 md:items-end">
          <p className="label-mono fade-in text-muted-foreground md:col-span-4" style={d(700)}>
            Computer Science Undergraduate
            <br />
            Exploring Programming & Systems
            <br />
            Systems Enthusiast
          </p>
          <p className="fade-in text-lg leading-relaxed md:col-span-5 md:text-xl" style={d(850)}>
            {PROFILE.intro}
          </p>
          <div className="fade-in flex flex-col gap-3 md:col-span-3 md:items-end" style={d(1000)}>
            <Button asChild variant="outline" className="h-auto"><a
              href="#work"
              className="group inline-flex items-center justify-between gap-6 rounded-full bg-foreground px-6 py-3.5 text-sm font-semibold text-background transition-all hover:bg-primary hover:text-primary-foreground"
            >
              View Projects
              <ArrowDownRight className="h-4 w-4 transition-transform group-hover:rotate-[-45deg]" />
            </a></Button>
            <Button asChild variant="outline" className="h-auto"><a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3.5 text-sm font-semibold transition-colors hover:border-foreground"
            >
              Contact Me
            </a></Button>
          </div>
        </div>

        <div className="fade-in mt-14 flex items-center justify-between border-t border-hairline pt-5" style={d(1150)}>
          <div className="flex gap-5">
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="label-mono link-underline flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Github className="h-3.5 w-3.5" /> GitHub
            </a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="label-mono link-underline flex items-center gap-2 text-muted-foreground hover:text-foreground">
              <Linkedin className="h-3.5 w-3.5" /> LinkedIn
            </a>
          </div>
          <a href="#about" className="label-mono flex items-center gap-3 text-muted-foreground" aria-label="Scroll to About">
            Scroll
            <span className="scroll-cue relative block h-10 w-px overflow-hidden bg-border" />
          </a>
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight, Copy, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { LINKS } from "@/lib/portfolio-data";
import { Reveal, SectionLabel } from "./Reveal";

export function Contact() {
  const [copyError, setCopyError] = useState(false);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      setCopyError(false);
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopyError(true);
    }
  };
  return (
    <section id="contact" className="relative overflow-hidden border-t border-hairline">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-28 md:px-10 md:py-40">
        <Reveal>
          <SectionLabel n="06">Contact</SectionLabel>
        </Reveal>
        <Reveal as="h2" className="display mt-10 text-5xl md:text-7xl lg:text-8xl">
          Curious about what
          <br />
          we can <em className="text-primary">build?</em>
        </Reveal>
        <div className="mt-14 grid gap-10 md:grid-cols-12">
          <Reveal className="text-lg leading-relaxed text-muted-foreground md:col-span-5">
            I’m exploring the intersection of computer science fundamentals, thoughtful prompting, and practical software
            development. Let’s connect.
          </Reveal>
          <div className="md:col-span-6 md:col-start-7">
            <Reveal className="flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${LINKS.email}`}
                className="display link-underline break-all text-2xl lg:text-4xl"
              >
                {LINKS.email}
              </a>
              <Button variant="ghost" size="icon"
                onClick={copy}
                aria-label="Copy email address"
                className="grid h-10 w-10 place-items-center rounded-full border border-border hover:border-foreground"
              >
                {copied ? <Check className="h-4 w-4 text-signal" /> : <Copy className="h-4 w-4" />}
              </Button>
            </Reveal>
            <p role="status" className="mt-2 text-sm text-muted-foreground">{copied ? "Email copied." : copyError ? "Copy unavailable — use the email link." : ""}</p>
            <Reveal delay={100} className="mt-10 grid border-t border-border">
              {[
                ["GitHub", LINKS.github, "github.com/TusharMital"],
                ["LinkedIn", LINKS.linkedin, "in/tushar-mittal"],
              ].map(([k, href, v]) => (
                <a
                  key={k}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border-b border-border py-5"
                >
                  <span className="label-mono text-muted-foreground">{k}</span>
                  <span className="flex items-center gap-3 text-lg">
                    {v}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </span>
                </a>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
      <footer className="relative border-t border-hairline">
        <div className="label-mono mx-auto flex max-w-[1400px] flex-col gap-3 px-5 py-8 text-muted-foreground md:flex-row md:items-center md:justify-between md:px-10">
          <span>© {new Date().getFullYear()} Tushar Mittal</span>
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" /> compiled with curiosity · JECRC University
          </span>
          <span className="flex gap-5">
            <a href={LINKS.github} target="_blank" rel="noreferrer" className="hover:text-foreground">GitHub</a>
            <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="hover:text-foreground">LinkedIn</a>
            <a href={`mailto:${LINKS.email}`} className="hover:text-foreground">Email</a>
          </span>
        </div>
      </footer>
    </section>
  );
}

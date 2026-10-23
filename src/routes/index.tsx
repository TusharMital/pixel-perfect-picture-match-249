import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Work } from "@/components/portfolio/Work";
import { Process } from "@/components/portfolio/Process";
import { Skills, Milestones } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";
import { ChatAssistant } from "@/components/portfolio/ChatAssistant";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tushar Mittal — CS Undergraduate & AI-Assisted Developer" },
      {
        name: "description",
        content:
          "Portfolio of Tushar Mittal, CS undergraduate at JECRC University: Prompt Engineering coursework projects, process, skills and systems interests.",
      },
      { property: "og:title", content: "Tushar Mittal — CS Undergraduate & AI-Assisted Developer" },
      {
        property: "og:description",
        content: "Coursework projects, AI-assisted development process and computer science interests of Tushar Mittal.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className="grain">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground">
        Skip to content
      </a>
      <Nav onOpenChat={() => setChatOpen(true)} />
      <main id="main">
        <Hero />
        <About />
        <Work />
        <Process />
        <Skills />
        <Milestones />
        <Contact />
      </main>
      <ChatAssistant open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
}

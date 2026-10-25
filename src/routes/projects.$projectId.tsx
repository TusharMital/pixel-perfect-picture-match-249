import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import { PROJECTS, DEBUGGING_EXAMPLE } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/portfolio/Nav";
import { ProjectVisual } from "@/components/portfolio/ProjectVisual";
import { ChatAssistant } from "@/components/portfolio/ChatAssistant";

export const Route = createFileRoute("/projects/$projectId")({
  loader: ({ params }) => {
    const project = PROJECTS.find((p) => p.id === params.projectId);
    if (!project) throw notFound();
    return project;
  },
  head: ({ loaderData }) => {
    const title = loaderData
      ? `${loaderData.title} — Tushar Mittal`
      : "Project unavailable — Tushar Mittal";
    const description = loaderData?.description ?? "This portfolio project is unavailable.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: ProjectPage,
});
function ProjectPage() {
  const project = Route.useLoaderData();
  const [chatOpen, setChatOpen] = useState(false);
  return (
    <div className="grain">
      <Nav detail onOpenChat={() => setChatOpen(true)} />
      <main className="mx-auto max-w-[1400px] px-5 pb-28 pt-32 md:px-10">
        <Button asChild variant="link" className="px-0">
          <Link to="/" hash="work">
            <ArrowLeft />
            All projects
          </Link>
        </Button>
        <p className="label-mono mt-12 text-primary">
          Project {project.index} ·{" "}
          {project.repo ? "Learning project · source available" : "Learning example"}
        </p>
        <h1 className="display mt-6 max-w-5xl text-5xl md:text-7xl">{project.title}</h1>
        <p className="mt-8 max-w-3xl text-lg leading-relaxed text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          {project.repo && (
            <Button asChild variant="outline">
              <a href={project.repo} target="_blank" rel="noreferrer">
                <Github />
                View source
              </a>
            </Button>
          )}
          {project.live && (
            <Button asChild>
              <a href={project.live} target="_blank" rel="noreferrer">
                Live demo
                <ArrowUpRight />
              </a>
            </Button>
          )}
        </div>
        <div className="mt-16 grid gap-12 border-t border-border pt-12 lg:grid-cols-[1fr_1.2fr]">
          <div>
            <div
              className="aspect-[4/3] overflow-hidden rounded-md border border-border bg-card"
              role="img"
              aria-label={`Illustrative representation of ${project.title}`}
            >
              <ProjectVisual id={project.id} />
            </div>
            <h2 className="label-mono mt-8 text-primary">Technology & tools</h2>
            <ul className="mt-4 flex flex-wrap gap-3">
              {project.tech.map((t) => (
                <li key={t} className="border-b border-border pb-2 text-sm">
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-10">
            {[
              ["Overview", project.description],
              ["Objective", project.caseStudy.objective],
              ["Implementation", project.caseStudy.implementation],
              ["Lessons & documented result", project.caseStudy.outcome],
            ].map(([title, content]) => (
              <section key={title}>
                <h2 className="display text-3xl">{title}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{content}</p>
              </section>
            ))}
            {project.id === "cursor-debugging" && (
              <section>
                <h2 className="display text-3xl">Check the correction</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  Assignment replaces the total with each next value. Addition preserves the
                  accumulated values.
                </p>
                <p className="mt-6 font-mono text-lg">
                  {DEBUGGING_EXAMPLE.values.join(" + ")} = {DEBUGGING_EXAMPLE.total}
                </p>
              </section>
            )}
          </div>
        </div>
        <Button asChild variant="outline" className="mt-16">
          <Link to="/" hash="work">
            <ArrowLeft />
            Back to projects
          </Link>
        </Button>
      </main>
      <ChatAssistant open={chatOpen} onOpenChange={setChatOpen} />
    </div>
  );
}

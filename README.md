# Tushar Mittal — Professional Developer Portfolio

A student-first editorial portfolio for a second-year Computer Science undergraduate at JECRC University. Built within the existing Lovable project; no separate application or publishing step is required by these changes.

## Features
- Dark default, persistent light/dark choice, keyboard-accessible navigation and reduced-motion support.
- About, categorized current learning, learning journey, quantum course details and five-stage prompt-engineering workflow.
- Five projects, text/category filtering, empty/reset states and separate case-study URLs with browser-history support.
- Verified repository/demo actions; the Cursor AI learning example intentionally has neither.
- Server-only, streaming Lovable AI assistant grounded in shared portfolio data, with suggestions, loading, safe errors, retry for transient failures and conversation reset.
- Email link/copy feedback, GitHub and LinkedIn; no pretend contact form.
- Page-specific metadata, semantic headings and descriptive illustration labels. Project visuals are illustrations, not screenshots.

## Stack & structure
React 19, TypeScript, TanStack Start/Router, Vite, Tailwind CSS v4, existing shadcn/Radix controls, AI SDK and Vitest.

```text
src/lib/portfolio-data.ts          shared verified facts and assistant knowledge
src/lib/project-filter.ts          search/category matching
src/lib/chat.server.ts             server-only Lovable AI handler
src/routes/index.tsx               long scrolling portfolio
src/routes/projects.$projectId.tsx  project case studies
src/routes/api/chat.ts             assistant endpoint
src/components/portfolio/          portfolio sections and controls
src/styles.css                     semantic dark/light design tokens
src/test/                          filter, factual constraint and route tests
```

No new application database tables or authentication are needed for this public portfolio. Existing Lovable Cloud integration is preserved.

## Local development
```bash
bun install
bun run dev
bun run test
bun run lint
bun run build
```
The development preview uses port 8080 in Lovable. Lovable automatically checks types and builds after changes; do not add a second framework or edit generated route files.

## Secure AI configuration
Set `LOVABLE_API_KEY` only in server secrets (or export it into the local development process). `.env.example` documents its name without a credential. Never expose it through `VITE_*`, client code, logs or source control. Missing configuration returns HTTP 503 and a visible “not configured” message. Existing browser/backend generated configuration must not be overwritten.

The assistant calls Lovable AI from `POST /api/chat`, not directly from the browser. It validates incoming messages, retains a bounded context window and reads the same portfolio facts as the UI. Messages are held in browser memory, not saved to a new database. AI output is not a guarantee of correctness. Provider access/configuration errors are surfaced rather than silently retried; credit and availability restrictions can prevent replies.

## Deployment
Keep the existing Lovable build/runtime configuration. Publish only with the owner's explicit approval using Lovable's publishing action. Case studies are real TanStack routes and support direct requests/refresh; this is not a static SPA requiring a catch-all rewrite. An alternative host needs a compatible TanStack Start server adapter and server secret configuration; a Vercel migration has not been validated.

## Verification
Automated tests cover search/category combinations, fifth-project discovery, route matching, supplied demo addresses, absence of invented Cursor links, the exact course details and the 150-total example. Browser checks exercise theme persistence, filters, direct case-study refresh, navigation/history, contact and assistant states across desktop/mobile. Mocked provider failures validate interface handling but do not establish production provider availability. Lovable runs build/type validation automatically; deployment is unchanged and has not been published by this work.

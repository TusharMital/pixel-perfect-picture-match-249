# Tushar Mittal — Portfolio

Built with TanStack Start, Tailwind v4 and Lovable Cloud.

## Develop
```bash
bun install
bun run dev      # http://localhost:8080
bunx vitest run  # project search/filter tests
```

## AI assistant ("Ask Tushar's Portfolio")
Server route: `POST /api/chat`. It needs the server-only env var `LOVABLE_API_KEY`
(provisioned automatically on Lovable). Without it the chat shows a "not configured" error.
Never expose it as a `VITE_*` variable or commit it.

## Deploy
Publish from Lovable. For other hosts (e.g. Vercel), set `LOVABLE_API_KEY` in the host's environment variables.
Edit portfolio content in `src/lib/portfolio-data.ts`.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Commands

- Use npm and the committed `package-lock.json`: `npm install`.
- Develop with `npm run dev` at `http://localhost:3000`.
- Verify changes with `npm run lint` followed by `npm run build`; there is no test or standalone typecheck script.
- Serve a successful production build with `npm run start`.

## Project-specific layout

- This is one Next.js App Router app. The main route is `src/app/page.tsx`; root metadata, font, and layout are in `src/app/layout.tsx`.
- Import `src` code through the `@/*` alias (for example, `@/components` and `@/lib`).
- Tailwind 4 and shadcn styles are defined in `src/app/globals.css`; shadcn settings are in `components.json`, and reusable UI primitives live in `src/components/ui`.
- Put browser-served static files in `public` and reference them from `/` paths; project images are in `public/images`.
- Preserve the non-default options in `next.config.ts` (`cacheComponents`, `partialPrefetching`, React Compiler, and the Tailwind Turbopack CSS rule) unless intentionally changing the toolchain.

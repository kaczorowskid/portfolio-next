# Portfolio — Damian Kaczorowski

Personal portfolio website built with Next.js, showcasing my work as a Software Developer specializing in Java, React, Next.js and TypeScript.

## Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- **Runtime:** React 19
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com)
- **UI Primitives:** [Radix UI](https://www.radix-ui.com)
- **Forms:** [React Hook Form](https://react-hook-form.com) + [Zod](https://zod.dev)
- **Content:** Markdown via `gray-matter` and `remark`
- **Analytics:** [Umami](https://umami.is)
- **Tooling:** [Biome](https://biomejs.dev) for linting and formatting
- **Fonts:** Geist Sans & Geist Mono via `next/font`

## Getting Started

Install dependencies and run the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the development server with Turbopack |
| `npm run build` | Build the production bundle |
| `npm run start` | Start the production server |
| `npm run lint` | Run Biome checks |
| `npm run format` | Format the codebase with Biome |

## Project Structure

```
src/
├── app/            # Next.js App Router entry (layout, page, sitemap, robots)
├── assets/         # Static assets
├── components/     # Shared components (layout, UI, scripts)
├── constants/      # Site-wide constants (SEO config, etc.)
├── lib/            # Data loaders (e.g. markdown posts)
├── utils/          # Utility helpers
└── views/          # Page-level views composed of sections
    └── home/       # Hero, About, Experience, Projects, Skills
```

## SEO & Metadata

Site metadata, Open Graph and Twitter cards are configured in `src/app/layout.tsx` and driven by constants in `src/constants/seo.ts`. Structured data is injected via `JsonLdScript`, and a sitemap and `robots.txt` are generated from `src/app/sitemap.ts` and `src/app/robots.ts`.

## Deployment

The project is optimized for deployment on [Vercel](https://vercel.com). Any platform with Node.js support will also work — run `npm run build` followed by `npm run start`.

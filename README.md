# Ankur Bakre — Security Portfolio

Single-page portfolio for a penetration tester / security researcher. Built with Vite + React + TypeScript + Tailwind CSS, animated with Framer Motion. Dark, terminal-accented theme. Fully static — deploys anywhere.

## Quick start

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks then outputs static site to dist/
npm run preview  # serve the production build locally
```

## Editing content

Everything lives in one file: [`src/data/resume.ts`](src/data/resume.ts). Change text, add
projects, CVEs, awards, or links there — no component edits needed. Search for `TODO` to find
the links to fill in:

- `socials.github` / `socials.twitter` / `socials.website`
- `certifications[].link` — verification URLs (TCM Academy / Credly / EC-Council)
- `hallOfFame[].link` — optional proof links per org
- `recognitions[].link` — MSRC / NCIIPC proof links

CVE cards auto-link to the National Vulnerability Database via
[`src/lib/cve.ts`](src/lib/cve.ts) — no manual URLs required.

To replace the downloadable resume, drop a new PDF at `public/Ankur_Bakre_Resume.pdf`
(path is set by `resume.resumeFile`).

## Project structure

```text
src/
  data/resume.ts        # single source of truth for all content
  lib/cve.ts            # CVE id -> NVD / MITRE url helpers
  components/           # Navbar, Hero, sections, Footer, shared bits
  App.tsx               # section composition
  index.css             # Tailwind layers + Dark Elegance base styles
```

## Deploy (Vercel)

1. Push this folder to a Git repo.
2. Import the repo in Vercel — it auto-detects Vite (`vercel.json` is included).
3. Build command `npm run build`, output directory `dist`. Done.

Alternatively, from the CLI:

```bash
npm i -g vercel
vercel        # preview
vercel --prod # production
```

## Stack

React 19 · Vite · TypeScript · Tailwind CSS 3 · Framer Motion · lucide-react

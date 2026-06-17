# Rudra Patel — Portfolio

An immersive, dark-mode-first personal portfolio built with **Next.js (App
Router)**, **TypeScript**, **Tailwind CSS v4**, **GSAP** (ScrollTrigger, Flip,
SplitText, CustomEase) and **Lenis** smooth scrolling.

## Highlights

- **Fluid smooth scrolling** — Lenis synced to the GSAP ticker so every
  ScrollTrigger pins and morphs without stutter.
- **Magnetic custom cursor** — a global cursor that morphs/scales on interactive
  elements and pulls magnetic targets (`CustomCursor.tsx`).
- **Split-text hero** — headline characters rise from masked lines with a custom
  fluid ease, over an interactive cursor-reactive grid mesh (`Hero.tsx`,
  `GridMesh.tsx`).
- **Cinematic horizontal showcase** — a vertically-pinned section that scrolls
  projects horizontally; each panel reveals its specs as it crosses the viewport
  midline, with a liquid cursor-follow effect on the media
  (`ProjectShowcase.tsx`, `ProjectPanel.tsx`).
- **Bento-grid detail morph** — clicking a project FLIP-morphs its media into a
  full-screen asymmetric bento layout with masked meta reveals
  (`ProjectDetail.tsx`).

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

## Editing content

- **Projects** live in `src/data/projects.ts` — copy, tech, bullets, metrics,
  accent colors, and links. **Update the placeholder `links` hrefs** (GitHub,
  Kaggle, Chrome Web Store) with your real URLs.
- **Media** goes in `public/projects/` — see `public/projects/README.md` for the
  two walkthrough videos you still need to drop in.
- **Résumé** is served from `public/resume/Resume.pdf`.

## Tech

Next.js 16 · React 19 · Tailwind CSS v4 · GSAP 3 · Lenis · lucide-react

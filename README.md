# Netanel Marchum — Portfolio

Personal portfolio built as a modern single-page app.
Live: https://netanelMarchum.github.io

## Stack
- **React 18** + **Vite** — fast dev + optimized static build
- **Framer Motion** — scroll reveals, springs, gestures, parallax
- Design language inspired by Anthropic / Claude: warm ivory + clay, editorial serif (Fraunces) display, Inter for UI.

## Local development
```bash
npm install      # first time only
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build -> dist/
npm run preview  # preview the production build locally
```

## Editing content
All text/links live in [`src/data.js`](src/data.js) — update there, no component edits needed.
PDFs and the profile photo live in [`public/`](public/).

## Deployment (GitHub Pages via Actions)
Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes `dist/`.

> **One-time setup:** In the repo on GitHub → **Settings → Pages → Build and deployment → Source → "GitHub Actions"**.
> After that, every push to `main` deploys automatically.

# erscoder.com

Personal site of Enrique Rubio, the online version of the CV.

Static site built with Next.js 14 (`output: 'export'`). Cloudflare Pages deploys `main` on every push.

## Commands

```bash
npm install
npm run dev     # local development
npm run build   # static export to out/
npx serve out   # preview the export
```

## Layout

- `content/cv.ts`: all copy and figures. The CV is the single source of truth.
- `app/page.tsx`: the page, server-rendered into static HTML.
- `app/globals.css`: the whole design system (tokens, dark and light themes).
- `components/KineticName.tsx`: hero name, each letter driven on the font width axis.
- `components/ContourField.tsx`: WebGL2 contour shader, initialised when the browser is idle.
- `components/Header.tsx`: navigation, mobile menu and theme toggle.

Motion is disabled under `prefers-reduced-motion`. The phone number and the CV PDF are never published.

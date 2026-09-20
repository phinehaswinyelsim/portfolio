# Phinehas Winyelsim — Portfolio

Dark-premium + light-mode portfolio built with Next.js 14, React 18 and Tailwind CSS.

## Quick start

```bash
cd portfolio_website
npm install
npm run dev
```

Open http://localhost:3000

## Other commands

```bash
npm run build   # production build
npm start       # serve the production build
npm run lint    # Next.js lint
```

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repo.
2. Go to https://vercel.com/new and import the repo.
3. Vercel auto-detects Next.js — keep the defaults and hit **Deploy**.

Or via CLI:

```bash
npm i -g vercel
vercel
```

After deploying, update the site URL in these files:

- `app/layout.tsx` (`SITE_URL`)
- `app/sitemap.ts`
- `app/robots.ts`

## Customize

- Name / email: `app/page.tsx` (`NAME`, `EMAIL` constants at the top)
- Projects / services / pricing / testimonials: arrays at the top of `app/page.tsx`
- Theme: sun/moon toggle in the nav, persisted to `localStorage` (`pw-theme`)
- Colors: `tailwind.config.ts` (`ink`, `gold`) + `app/globals.css`

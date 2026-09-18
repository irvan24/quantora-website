# Quantora — marketing site

Landing page for Quantora: learn how investing works, research a company with a clear
process, and write down the reason behind every investment.

Built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4. The whole
page is statically prerendered.

## Getting started

```bash
nvm use            # Node 20.19+ (see .nvmrc)
npm install
cp .env.example .env.local
npm run dev
```

## Scripts

| Script                 | What it does                                  |
| ---------------------- | --------------------------------------------- |
| `npm run dev`          | Dev server                                    |
| `npm run build`        | Production build                              |
| `npm start`            | Serve the production build                    |
| `npm run check`        | Typecheck + lint + format check (same as CI)  |
| `npm run lint:fix`     | Autofix lint issues                           |
| `npm run format`       | Format with Prettier                          |

## Environment

| Variable               | Purpose                                                                 |
| ---------------------- | ----------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, used by metadata, sitemap and robots                   |
| `NEXT_PUBLIC_APP_URL`  | Destination of every CTA. Empty falls back to the on-page `#start` anchor |

## Structure

```
src/
  app/               Routes, metadata, sitemap, robots, OG image
  components/
    layout/          Header, footer, mobile navigation
    sections/        One file per landing section
    seo/             JSON-LD structured data
    ui/              Design-system primitives (Card, CtaLink, Pill, …)
  config/site.ts     Name, URL, navigation, CTA destinations
  lib/utils.ts       `cn()` class merger
```

Design tokens (colours, typography scales) live in `src/app/globals.css` under `@theme`.
Change them there rather than hard-coding hex values in components.

## Before going live

- Point `NEXT_PUBLIC_APP_URL` at the real product, otherwise every CTA stays on the page.
- Add Privacy and Terms pages and link them in the footer.
- Plug in analytics and track clicks on the primary CTA — it is the only conversion event
  on the page today.

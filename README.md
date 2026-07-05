# CutCoach Premium

Premium marketing site for [CutCoach](https://www.cutcoachai.com) — AI barber training & coaching.

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new).
3. Set the root directory to `cutcoach-premium` if the repo contains multiple projects.
4. Deploy — no environment variables required.

Or deploy from CLI:

```bash
npx vercel --prod
```

### Custom domain (cutcoachai.com)

1. In Vercel project **Settings → Domains**, add `cutcoachai.com` and `www.cutcoachai.com`.
2. Update DNS at your registrar to Vercel's records.
3. Confirm SSL is active.

## Project structure

- `app/` — routes, layout, SEO (sitemap, robots)
- `components/sections/` — page sections
- `components/hero/` — hero (phones composition)
- `lib/data/content.ts` — all copy and config
- `public/images/` — local assets (logo, App Store badge)

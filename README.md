# Still Forms

A refined, understated photography portfolio built with Next.js and the shadcn/ui project conventions.

## Run locally

```bash
npm install
npm run dev -- --port 3010
```

Visit [http://localhost:3010](http://localhost:3010).

## Replace placeholder photography

All placeholder images are defined at the top of `app/page.tsx`:

- `heroPhoto`: replace with the photographer's signature opening image.
- `photos[0]`: replace with a wedding or editorial story.
- `photos[1]`: replace with an interiors commission.
- `photos[2]`: replace with a landscape from the archive.
- `photos[3]`: replace with a representative portrait.

Update each `src`, `alt`, label, and replacement note together. Unsplash is configured in `next.config.mjs` for local development.

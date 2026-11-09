# Knockbox Studios

The landing site for Knockbox Studios’ smart event photo booth. It's built with [Astro](https://astro.build) as a fully static site and deployed on Cloudflare.

## Develop

Requires Node 22.23.4 or newer (`.node-version` pins Node 24 for Cloudflare builds).

```sh
npm install
npm run dev       # http://localhost:4321
npm run build     # static output in dist/
npm run preview   # serve dist/ locally
npm run check     # type-check .astro and .ts files
```

## Structure

```
src/
  data/events.ts          ← all event content, photos, alt text, contact details
  styles/global.css       ← design tokens (type scale, colour, space) + base styles
  layouts/Layout.astro    ← <head>, fonts, SEO/OG tags, header + footer, scroll reveals
  components/
    Header, Footer, Logo, Icon, Swash, EventCard, Contact
    home/                 ← homepage sections, in page order
  pages/
    index.astro           ← Hero → How it works → The booth → Events → FAQ → Contact
    events/[slug].astro   ← one gallery page per event, with a lightbox
    404.astro
  assets/photos/<event>/  ← source photos; Astro generates responsive WebP at build time
public/
  favicon.svg, brand-mark.svg, _redirects, _headers
docs/brand/               ← the bar-and-bowl logo concept board (not served)
```

### Adding an event

1. Put the photos in `src/assets/photos/<event-slug>/`.
2. Import them at the top of `src/data/events.ts` and add an entry to `events`, with a `title`, `kind`, `summary`, `cover`, `photos` (each with alt text) and, optionally, `setup` for behind-the-scenes shots.

That's all. The homepage cards, the “Recently at” chips, the footer links and the `/events/<slug>/` gallery page are all generated from that entry.

## Design system

Everything visual comes from the tokens at the top of `src/styles/global.css`:

- **Type:** Archivo (variable) for everything, with Instrument Serif italic as the accent voice for one or two words per heading. There are only six sizes (`--text-xs` … `--text-2xl`), all fluid between 360px and 1280px wide.
- **Colour:** warm paper (`--paper`) with brand green (`--green`, taken from the logo), a deep green for dark bands, and one warm accent (`--clay`) for swashes and dots. `--sun` is used sparingly for highlights.
- **Space and shape:** a fluid `--gutter` and `--section` rhythm, with radii scaling from `--radius-sm` up to `--radius-lg`.
- **Motion:** gentle reveal-on-scroll and a hand-drawn swash under the hero word. Everything respects `prefers-reduced-motion`, and content stays visible without JavaScript. Photos never auto-scroll.

The header logo is an inline SVG redrawn from the bar-and-bowl concept, so it stays crisp at every size. A final vector master is still to come.

## Deploy (Cloudflare)

The site is plain static files in `dist/`.

**Cloudflare Pages:** in the project's *Settings → Builds*, set:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | `npm run build` |
| Build output directory | `dist` |
| Root directory | *(repository root)* |

Pages reads `.node-version` to pick Node 24. `public/_redirects` sends the old `/photo-booth/` URL to the homepage, and `public/_headers` sets long-lived caching on hashed assets.

**Workers Builds / preview URLs:** `wrangler.jsonc` points static assets at `./dist` and serves `404.html` for unknown paths. Set the build command to `npm run build`. Non-production branches then publish a Preview URL via `npx wrangler preview`.

No Functions, secrets or environment variables are needed.

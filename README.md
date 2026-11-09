# Knockbox Studios

A buildless site with a homepage and dedicated Photo Booth page at /photo-booth/. Plain HTML and CSS with a small JavaScript photo carousel; no runtime dependencies. The primary action opens an email to info@knockbox.nz in the visitor's email application. The footer links to Instagram at @knockboxstudio. Google Fonts supplies Archivo for the wordmark and Asap for page text and labels, with local fallbacks.

## Preview

From the repository root:

```sh
python -m http.server 4173 --bind 127.0.0.1 --directory public
```

Visit http://127.0.0.1:4173.

## Cloudflare Pages

Import this repository into a Cloudflare Pages project:

- Framework preset: None
- Production branch: your production branch
- Build command: `exit 0`
- Build output directory: `public`
- Root directory: repository root

For a direct upload, upload the contents of `public`, with index.html at the deployment root. No Functions, Worker, secrets or environment variables are needed.

Reference: https://developers.cloudflare.com/pages/framework-guides/deploy-anything/

## Design status

This is a first design direction for the studio's event photobooth and videography services. The header pairs the Archivo wordmark with the selected Bar and bowl lens-study concept. The raster concept is framed with CSS to show its symbol; a final vector master remains to be developed. Colour hex values are proposed interpretations of the named tokens, not supplied brand values.

Edit copy in `public/index.html` and design tokens in `public/styles.css`. Keep only one contact action. The SVG favicon uses a simplified Bar and bowl mark for clarity at small sizes.

## Photo Booth

The homepage features one service section with a carousel of past events: the NZIA 2026 Awards and Cheree and Jackson’s Wedding. Each labelled event card links directly to its gallery on /photo-booth/. A draggable slider, touch scrolling and keyboard controls let visitors browse at their own pace. The Photo Booth navigation and section title also link to /photo-booth/, which explains gesture controls, real-time uploads, the live guest gallery and easy downloads/sharing.

The Photo Booth page includes all nine supplied NZIA guest photos, three web-optimised setup photos and five web-optimised wedding photos. Gallery images link to their standalone image files in public/assets/photo-booth/. Setup and wedding photos are resized, orientation-corrected versions of the supplied originals. These are showcase pages, not the live guest portal itself. Edit copy in public/index.html and public/photo-booth/index.html.

# Knockbox Studios

A single-page, buildless site. Plain HTML and CSS; no JavaScript or runtime dependencies. The only action opens an email to info@knockbox.nz in the visitor's email application. Google Fonts supplies Archivo for the wordmark and Asap for page text and labels, with local fallbacks.

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

Edit copy in `public/index.html` and design tokens in `public/styles.css`. Keep only one contact action. The favicon uses the interim green brand dot.

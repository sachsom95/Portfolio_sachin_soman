# Sachin Soman — The Illustrated Folio

The personal portfolio at [sachinsoman.com](https://www.sachinsoman.com). An illustrated introduction to Sachin, selected personal projects, a working signal experiment, a sample engineering lesson, and selected writing.

## Development

Use Node 22 (`.nvmrc`).

```sh
npm ci
npm run dev -- --host 127.0.0.1 --port 4175
```

## Build and verify

```sh
npm test
npm run build
npm run preview
```

The build creates static HTML for the homepage, About, both project stories, the lab, the lesson preview, and the engineering note. React hydrates the interactive controls. It also generates an RSS feed, sitemap, page metadata, and a 404 page. A shared content file prevents homepage, reading page, and feed copy from drifting.

## Deployment

The existing Netlify project is `sachinsoman` (site ID `24cb60c1-3f8e-4233-9e8e-a3b8bb248518`). Production deploys automatically from `master`; pull requests get Deploy Previews. `netlify.toml` specifies Node 22, `npm run build`, and the `dist/client` publish directory. The Netlify dashboard may display the repository's former name, `sachsom95/portfolio`; GitHub redirects this to `sachsom95/Portfolio_sachin_soman`.

The previous site is retained in Git history at `cea8404646a879707b7dae12c9a36617348678dc`. Netlify also retains the prior published deployment for rollback.

## Content and design

- Edit curated content in `src/content/site.js`. Add page metadata there when adding a new story.
- The monochrome light theme and `#1A1717` dark theme share `src/styles.css`. See `DESIGN_SYSTEM.md` for extension rules.
- The product section is explicitly a sample in development. There is no checkout or paid access yet.
- Contact links to Sachin's public LinkedIn profile. No contact form, tracking, or email capture is installed.
- Theme preference is stored only in the visitor's browser.
- See `docs/content-sources.md` for source provenance, and `design-qa.md` for verification.

## Assets

AI-generated illustration masters and WebP delivery assets are in `public/art`. The approved visual references are in `docs/references`. Fraunces and Inter are self-hosted through Fontsource (SIL Open Font License); icons use Phosphor (MIT); charts use Recharts (MIT).

The original scaffold's optional Sites worker remains intact. `npm run test:sites` validates that adapter; Netlify serves the static `dist/client` output directly.

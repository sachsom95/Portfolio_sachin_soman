# Portfolio Instructions

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.

## Portfolio decisions

- The user's selected source is `docs/references/selected-layout.png`: The Illustrated Folio. Preserve its hierarchy, serif headings, fine dividers, project columns, pencil illustrations, and calm editorial layout.
- Personal portfolio and selected work lead; Labs follow; digital products/tools/courses are a future shelf. Do not turn the homepage into a storefront or consulting pitch.
- Light mode is strictly black and white: white paper, black typography, grayscale graphite illustrations and controls. The user explicitly corrected pastel accents on 2026-10-12; the latest attached monochrome reference is authoritative. Dark ink mode is the alternate theme. Generated illustration assets are explicitly approved.
- Keep text, navigation and interactive charts as real interface elements. Do not flatten the page into an image.
- Keep site content in `src/content/site.js`, theme and spacing tokens in `src/styles.css`, and reusable interactions in `src/components`.
- Existing deployment remains Netlify. The user authorized committing the MVP to `sachsom95/Portfolio_sachin_soman` and deploying to the existing Netlify site on 2026-10-12. Production branch: `master`.

- Dark mode follows `docs/references/dark-green-gold.png` (user selection, 2026-10-12): deep green charcoal, warm ivory type, sage chart points, gold links and details. Preserve monochrome light mode. Use dedicated warm dark artwork, not a global inversion of light paper.

- Latest dark refinement (2026-10-12): the user requested a blacker page, specifically `#1A1717`. This replaces the green charcoal background; gold, ivory, and subtle sage details remain.

- Editorial direction (2026-10-12): curate like a marketing team; include only what helps a visitor understand Sachin. Do not dump the CV, every project, or the full LinkedIn profile. Lead with Founding Engineer at Protex AI (confirmed on the signed-in profile), then selected personal work.

- Default theme (2026-10-12): first-time visitors start in light mode, regardless of system appearance. Persist an explicitly selected light or dark theme; do not automatically follow OS theme changes.

- Approved dark palette correction (2026-10-12): retain `#1A1717`, use neutral off-white type and warm-gray secondary text/dividers. Reserve muted gold for actions and sage for small illustration/chart details. Project artwork should share the hero's soft shaded pencil texture, without bright yellow-green contours. This supersedes the earlier cream/green-tinted neutral tokens.

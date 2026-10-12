# The Illustrated Folio

A personal portfolio with room to grow into a lab and a shelf of useful products.

## Source of truth

- Layout: `docs/references/selected-layout.png` (the user's selected illustrated folio).
- Light: **black and white**, explicitly confirmed on 12 October 2026. White paper, black typography, graphite artwork; no pastel accents.
- Dark: `docs/references/dark-green-gold.png`, supplied on 12 October 2026. The user subsequently refined the page background to warm near-black `#1A1717`, then approved neutral off-white text and gray dividers, with muted sage and gold reserved for accents.
- First-time visitors start in light mode. Remember an explicit theme choice; do not follow system appearance.
- These are two themes of one site. Navigation, order, proportions, and content stay the same.

## Hierarchy

1. Name, identity, and a plain statement of what Sachin does.
2. Selected work: two strong project stories, with custom illustrations.
3. One experiment you can actually change and understand.
4. A restrained product preview. Clearly identify work in progress.
5. A few useful notes and contact links.

A new section should help someone understand the work, try an idea, or take away something useful. Do not add a block just to fill the page.

## Visual language

Use Fraunces for display headings and Inter for reading and controls, both self-hosted. Headings carry the personality; supporting copy stays calm. One serif and one sans-serif are enough.

Use a centered page frame, fine rules, open space, and editorial columns. Avoid a grid of floating rounded cards, shadows, ornamental gradients, or unrelated background fills. The page should feel like a well-kept notebook.

Light tokens: white `#ffffff`, ink `#191919`, secondary copy `#626262`, rule `#777777`. Every visible image is grayscale in light mode.

Dark tokens: near-black `#1a1717`, off-white `#eeebe6`, secondary copy `#b9b4ae`, rule `#6c6560`, gold `#d7af6f`, sage chart points `#93a38b`. Supporting surfaces use neutral warm gray `#252120`. Gold guides actions and highlights; sage belongs in small illustrative and chart details. Keep text and structural rules free of a green or yellow cast.

All tokens live in `src/styles.css`. Change a theme at that boundary, not in individual components.

## Artwork

Generate illustrations as separate raster assets. Preserve generous transparent margins, natural graphite strokes, readable silhouettes, and a consistent pencil hand. Use the same scene in both themes; use dedicated dark variants when a simple tonal adjustment would make paper look like a negative.

Dark project illustrations use broken pencil contours and hand shading, consistent with the hero. Avoid bright, uniform cream outlines or a neon blueprint effect. The October palette refinement's prompts and source assets are documented in `docs/dark-art-refinement.md`.

The text, page layout, navigation, and chart remain real UI. Do not bake them into a page-sized image. Small handwritten labels that are part of the drawing may stay inside the artwork.

Keep the PNG masters in `public/art` and use optimized WebP files for delivery. `scripts/optimize-art.mjs` regenerates those copies with sharp. The app uses `Artwork` to select theme variants. For a new illustration, deliver both theme files at the same aspect ratio.

## Components and content

- `src/content/site.js`: project and note content.
- `src/components/Artwork.jsx`: shared theme-aware art.
- `src/components/SignalLab.jsx`: functioning signal exploration.
- `src/components/ArticleContent.jsx`: shared content for permanent story, note, lab, and lesson URLs.
- `src/lib/signal.js`: reproducible experiment data and causal moving average.
- `src/App.jsx`: homepage composition and global theme.

Add a project through the content module. Keep a short question, explanation, stack, source link, and image pair together. Promote a maximum of two projects to the homepage; grow the archive separately when there is enough work to justify it.

Add an experiment only with an understandable input, an observable result, and a short explanation of the trade-off. An illustration is not a working experiment.

Add a product only when its status is clear: idea, preview, or available. A real product later needs its own explanation, sample, audience, pricing, purchase and delivery path. Do not imply something is purchasable before it is.

## Interaction and accessibility

Prefer links that say what opens. Use real document links for navigation and native buttons, ranges, and checkboxes for controls. Motion respects reduced-motion preferences. All artwork has descriptive alternative text; the chart has a textual explanation and keyboard-operable inputs.

On narrow screens, keep the same reading order, stack projects, move artwork below the introduction, and keep section navigation visible. Check at 320, 390, 700, 971, and 1440 pixels after structural changes. Check light and dark.

## Expansion

The React/Vite build prerenders permanent document URLs from the shared content module. Add a route and metadata to `pages` when adding content; the build regenerates HTML, the sitemap, and the RSS feed. Keep the homepage curated even as the archive grows. A larger archive can later adopt Markdown or MDX without changing this visual system.

Current biography and selected work are grounded in the public sources listed in `docs/content-sources.md`. Reconfirm new professional claims when editing. Keep products explicitly in development until purchase and delivery are implemented.

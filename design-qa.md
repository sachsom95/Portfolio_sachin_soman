# MVP design and functional verification

## Dark palette refinement — 12 October 2026

**Final result: passed.** Focused local visual check at `http://127.0.0.1:4187/`, using the built production output.

- Source: approved Illustrated Folio composition and the user's subsequent `#1A1717` override. Before: `docs/qa/palette-dark-before.png` (live homepage, 1280 × 1957). After: `docs/qa/palette-dark-desktop.png` (1280 × 1957). Reviewed both images together; this is a palette/art-treatment change, not a pixel-identical recreation of the earlier green-background reference.
- Preserved typography, spacing, component geometry, hierarchy, copy, and interactions. Replaced yellowish text with neutral off-white, green-tinted rules with warm gray, and bright yellow-green project contours with shaded pencil strokes. The hero is the artwork style reference.
- First pass used `#625c57` rules. Raised these to `#6c6560` because the same token draws slider tracks; calculated contrast against the page is now 3.11:1. Off-white type is 14.98:1, secondary type 8.65:1, and gold links 8.70:1. These are token contrast checks, not a claim of a full accessibility audit.
- Both project PNG masters have genuine transparent alpha and matching 1536 × 1024 dimensions; optimized WebP copies load successfully. No opaque rectangular backdrops or visible edge halos on the page.
- Desktop 1280px and mobile 390px in both themes: no horizontal overflow, readable headings, clear links and chart controls. Dark state survives reload. Fresh local page opened in light; the theme toggle correctly selects the appropriate four artwork files. Light tokens, assets, layout and default-theme logic are unchanged.
- `npm run build` passes. Browser error/warning log is empty for this verification. No outstanding visual defects found in the scoped change.

Evidence: `docs/qa/palette-dark-desktop.png`, `docs/qa/palette-dark-mobile.png`, `docs/qa/palette-light-desktop.png`, `docs/qa/palette-light-mobile.png`. Prompts and asset paths: `docs/dark-art-refinement.md`.

## Original MVP verification

Date: 12 October 2026. Local production build at `http://127.0.0.1:4176/`.

**Local result: passed.** Deployment is checked separately after publishing.

## Reference and editorial choices

The approved Illustrated Folio remains the layout reference. Light mode is monochrome. Dark mode uses the final requested `#1A1717` paper, ivory type, gold actions, and sage details. The homepage adds a compact, verified Protex role and keeps only two personal projects. The About page contains three paragraphs, with a link to Sachin's existing public reflection.

## Verified

- Production build completes on Node 22.23.1; a clean `npm ci` succeeds.
- All three signal tests pass: exact zero-noise identity, causal averaging, and deterministic noise scaling.
- Seven public routes and one 404 document contain actual static HTML, one H1 each, and canonical metadata. Every internal page and asset reference resolves. Sitemap and RSS parse as XML.
- Browser checks: homepage, About, PoseMan story, signal lab, and writing route. No console warnings or errors in those checks.
- Light and dark artwork loads. Theme survives page navigation and uses `rgb(26, 23, 23)` for dark paper.
- Desktop layout at 971px; large desktop at 1920px; 320px homepage and story; 390px lab. No horizontal overflow after the mobile heading correction.
- Noise and smoothing controls respond to keyboard input, signal reveal works, and reset restores 40% noise, a five-sample window, and hidden underlying signal.
- Updated text and link placement visually checked on the lower desktop page.

## Correction made during MVP QA

The prototype's mobile `h1` no-wrap rule overflowed on the new full lab page. Scoped it to the homepage hero; reading-page headings now wrap naturally.

## Evidence

- `docs/qa/mvp-light.png`
- `docs/qa/mvp-dark.png`
- `docs/qa/mvp-dark-lower.png`
- `docs/qa/mvp-mobile-home.png`
- `docs/qa/mvp-mobile-lab.png`

## Explicit MVP boundaries

Products are a free preview in development, with no checkout or paid access. The source-linked personal projects are historical work; their original demos are not presented as maintained live services. Contact opens LinkedIn. No tracking, account system, or email capture is installed.

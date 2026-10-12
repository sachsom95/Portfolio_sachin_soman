# MVP design and functional verification

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

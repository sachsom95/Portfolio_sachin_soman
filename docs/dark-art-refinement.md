# Dark artwork refinement

12 October 2026. Mode: built-in image generation, style-transfer edits with transparent backgrounds. User approved softer project artwork to match the existing hero.

Only the dark PoseMan and Dublin Bikes variants were replaced. Light artwork and the hero/books scenes remain unchanged. PNG masters retain generated alpha; WebP delivery copies use 1400px maximum width, quality 88, alpha quality 100.

## poseman-dark

Saved master: `public/art/poseman-dark.png`

Delivery: `public/art/poseman-dark.webp`

Input 1: previous version of the same dark PNG at commit 2474d4b. Input 2: `public/art/hero-dark.png`, used only for style.

Final prompt:

> Use case: style-transfer. Asset: transparent illustration for a dark personal portfolio. Image 1 is the edit target. Image 2 is a STYLE reference only: match its soft hand-shaded pencil texture and restrained, tactile colors. Preserve target subject, positions, framing, scale, aspect ratio and transparent background. Change only illustration treatment and palette. The website behind this asset is #1A1717 (do not paint that background). Use soft neutral ivory-gray #C4BFB6 for principal pencil strokes, graphite shadow #34312F, restrained antique gold #D7AF6F for small highlights and muted sage #879583 for a few secondary details. Lower brightness of the existing near-white outlines; avoid green-yellow tinted whites. Natural broken pencil marks, subtle pressure variation and cross-hatching, never crisp neon blueprint lines. Background must be genuine transparency, no opaque backdrop, no glow or halo, no added captions or border. Keep exactly the three overlapping software windows, the jointed pose skeleton, two sliders and small graph. Retain thin legible skeleton connections and gold joint points. The windows have a dark graphite fill with a faint green undertone and hand-shaded surface, like the cube in image 2. Do not include the cube, pencil or text from image 2.

## bikes-dark

Saved master: `public/art/bikes-dark.png`

Delivery: `public/art/bikes-dark.webp`

Input 1: previous version of the same dark PNG at commit 2474d4b. Input 2: `public/art/hero-dark.png`, used only for style.

Final prompt:

> Use case: style-transfer. Asset: transparent illustration for a dark personal portfolio. Image 1 is the edit target. Image 2 is a STYLE reference only: match its soft hand-shaded pencil texture and restrained, tactile colors. Preserve target subject, positions, framing, scale, aspect ratio and transparent background. Change only illustration treatment and palette. The website behind this asset is #1A1717 (do not paint that background). Use soft neutral ivory-gray #C4BFB6 for principal pencil strokes, graphite shadow #34312F, restrained antique gold #D7AF6F for small highlights and muted sage #879583 for a few secondary details. Lower brightness of the existing near-white outlines; avoid green-yellow tinted whites. Natural broken pencil marks, subtle pressure variation and cross-hatching, never crisp neon blueprint lines. Background must be genuine transparency, no opaque backdrop, no glow or halo, no added captions or border. Keep exactly the bicycle, street map behind it, three gold map pins and the small checklist in the upper right. Soften the bicycle's bright white contours into shaded neutral-gray/ivory pencil, with darker gray form shading. Reduce the map's green brightness; it should be a faint desaturated sage supporting layer. Checklist paper should be softly shaded pale gray, not bright yellow-white. Do not include the cube, pencil or text from image 2.


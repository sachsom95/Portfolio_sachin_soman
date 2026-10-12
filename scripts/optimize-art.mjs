// Usage: node scripts/optimize-art.mjs
// Optional development dependency: npm install --no-save sharp
// Originals remain available; only WebP delivery copies are generated.
import { createRequire } from 'node:module';
import { readdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const require = createRequire(import.meta.url);
const sharp = process.env.SHARP_PATH ? require(process.env.SHARP_PATH) : require('sharp');
const dir = resolve('public/art');
for (const name of await readdir(dir)) {
  if (!name.endsWith('.png')) continue;
  await sharp(resolve(dir, name)).resize({ width: 1400, withoutEnlargement: true }).webp({ quality: 88, alphaQuality: 100 }).toFile(resolve(dir, name.replace(/\.png$/, '.webp')));
}

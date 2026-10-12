import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
import { pages, notes, articlePath } from '../src/content/site.js';

const origin = 'https://www.sachinsoman.com';
const escape = value => String(value).replace(/[&<>"']/g, character => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&apos;' })[character]);
const template = await readFile('dist/client/index.html', 'utf8');
const server = await createServer({ configFile: false, plugins: [react()], server: { middlewareMode: true, hmr: false, ws: false }, optimizeDeps: { noDiscovery: true, include: [] }, appType: 'custom' });
try {
  const { render } = await server.ssrLoadModule('/src/render.jsx');
  for (const page of [...pages, { path: '/404/', title: 'Page not found — Sachin Soman', description: 'Find your way back to the workbench.' }]) {
    const metadata = `
    <link rel="canonical" href="${origin}${page.path}" />
    <meta property="og:type" content="${page.id ? 'article' : 'website'}" />
    <meta property="og:title" content="${escape(page.title)}" />
    <meta property="og:description" content="${escape(page.description)}" />
    <meta property="og:url" content="${origin}${page.path}" />
    <meta property="og:image" content="${origin}/art/hero.png" />
    <meta property="og:image:alt" content="A pencil sketch of a code cube, a pencil, and a question mark." />
    <meta name="twitter:card" content="summary" />
    ${page.path === '/404/' ? '<meta name="robots" content="noindex" />' : ''}
    ${page.path === '/' ? '<script type="application/ld+json">'+JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Sachin Soman', url: origin, jobTitle: 'Founding Engineer', worksFor: { '@type': 'Organization', name: 'Protex AI', url: 'https://www.protex.ai/' }, sameAs: ['https://github.com/sachsom95', 'https://www.linkedin.com/in/sachin-soman/'] })+'</script>' : ''}
    `;
    const html = template
      .replace(/<title>.*?<\/title>/, `<title>${escape(page.title)}</title>`)
      .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escape(page.description)}" />`)
      .replace('</head>', `${metadata}</head>`)
      .replace('<div id="root"></div>', `<div id="root">${render(page.path)}</div>`);
    const directory = `dist/client${page.path}`;
    await mkdir(directory, { recursive: true });
    await writeFile(page.path === '/404/' ? 'dist/client/404.html' : `${directory}index.html`, html);
  }
} finally { await server.close(); }
await writeFile('dist/client/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${pages.map(page => `<url><loc>${origin}${page.path}</loc></url>`).join('')}</urlset>`);
await writeFile('dist/client/feed.xml', `<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Sachin Soman — Notes from the workbench</title><link>${origin}/</link><description>Engineering notes and reflections on building.</description><language>en</language>${notes.map(note => `<item><title>${escape(note.title)}</title><link>${escape(note.url || origin + articlePath(note.id))}</link><guid isPermaLink="true">${escape(note.url || origin + articlePath(note.id))}</guid><description>${escape(note.description)}</description></item>`).join('')}</channel></rss>`);
console.log(`Prerendered ${pages.length} pages, a 404 page, sitemap, and RSS feed.`);

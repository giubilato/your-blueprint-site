/**
 * Post-build: generate per-route HTML snapshots with per-page meta tags.
 *
 * Why: the site is a SPA. Vite builds a single dist/index.html with the
 * homepage's static meta tags. Every route falls back to that index.html via
 * Cloudflare Pages' SPA rewrite. As a result, crawlers (and `curl`) see the
 * same title/description for every URL — even though react-helmet-async
 * updates them client-side after React hydrates.
 *
 * This script fixes that by writing `dist/<route>/index.html` for each known
 * route, with the right `<title>`, `<meta name="description">`, canonical,
 * Open Graph and Twitter Card values. Cloudflare Pages serves static files
 * first, so a request for `/sample` will get the per-route HTML. Unknown
 * paths still fall through to the SPA rewrite as before.
 *
 * Article routes are discovered by parsing src/data/posts.jsx with a regex
 * that matches our entry shape (slug, title, excerpt). When the entry shape
 * changes, update the regex.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DIST = path.join(ROOT, 'dist');
const POSTS_FILE = path.join(ROOT, 'src/data/posts.jsx');
const ORIGIN = 'https://yourblueprint.co';

if (!fs.existsSync(DIST)) {
  console.error(`✗ ${DIST} not found — run "vite build" first.`);
  process.exit(1);
}

// ---- 1. Read the freshly-built dist/index.html as the template ----
const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf8');

// ---- 2. Extract article slugs, titles and excerpts from posts.jsx ----
const postsSrc = fs.readFileSync(POSTS_FILE, 'utf8');
const postRegex = /slug:\s*"([^"]+)",\s*title:\s*"([^"]+)",\s*excerpt:\s*"([^"]+)"/g;
const posts = [...postsSrc.matchAll(postRegex)].map(([, slug, title, excerpt]) => ({
  slug,
  title,
  excerpt,
}));

if (!posts.length) {
  console.warn('⚠ no posts matched — check the regex against posts.jsx entry shape.');
}

// ---- 3. Define the routes to pre-render ----
const staticRoutes = [
  {
    path: '/sample',
    title: 'Free sample — Your Blueprint planner for reMarkable',
    description:
      'A 41-page sample from the full Your Blueprint system. Year overview, monthly planner, weekly spreads, 31 daily pages — hyperlinked end-to-end. Drop your email and download instantly.',
  },
  {
    path: '/setup',
    title: 'How to install Your Blueprint on your reMarkable — Setup guide',
    description:
      'Step-by-step guide to install the Your Blueprint planner on your reMarkable 2 or Paper Pro via my.remarkable.com. Plus how to start using it: weekly review, daily intention, hyperlink navigation.',
  },
  {
    path: '/articles',
    title: 'Articles — Your Blueprint',
    description:
      'Thoughts on planning, weekly reviews, and using the reMarkable as a long-term thinking tool. Guides, system breakdowns, and behind-the-design notes from the Your Blueprint studio.',
  },
  {
    path: '/privacy',
    title: 'Privacy Policy — Your Blueprint',
    description:
      'How Your Blueprint handles your data — waitlist, GDPR rights, and data processors.',
    noindex: true,
  },
];

const articleRoutes = posts.map((p) => ({
  path: `/articles/${p.slug}`,
  title: `${p.title} — Your Blueprint`,
  description: p.excerpt,
  ogType: 'article',
}));

const routes = [...staticRoutes, ...articleRoutes];

// ---- 4. Inject per-route meta into a copy of base index.html ----
const encodeAttr = (s) =>
  s
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

function injectMeta(html, route) {
  const title = encodeAttr(route.title);
  const description = encodeAttr(route.description);
  const canonical = `${ORIGIN}${route.path}`;
  const ogType = route.ogType || 'website';

  let out = html;

  // Title
  out = out.replace(/<title>[^<]*<\/title>/, `<title>${title}</title>`);

  // Standard meta description
  out = out.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${description}" />`
  );

  // Canonical
  out = out.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${canonical}" />`
  );

  // Open Graph
  out = out.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${title}" />`
  );
  out = out.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${description}" />`
  );
  out = out.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${canonical}" />`
  );
  out = out.replace(
    /<meta property="og:type" content="[^"]*"\s*\/?>/,
    `<meta property="og:type" content="${ogType}" />`
  );

  // Twitter
  out = out.replace(
    /<meta name="twitter:title" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:title" content="${title}" />`
  );
  out = out.replace(
    /<meta name="twitter:description" content="[^"]*"\s*\/?>/,
    `<meta name="twitter:description" content="${description}" />`
  );

  // Robots — for noindex routes
  if (route.noindex) {
    out = out.replace(
      /<meta name="robots" content="[^"]*"\s*\/?>/,
      '<meta name="robots" content="noindex, follow" />'
    );
  }

  return out;
}

// ---- 5. Write dist/<route>.html for each route ----
// We write .html files (not directories with index.html) so Cloudflare Pages
// serves them directly without a 308 trailing-slash redirect, keeping the
// canonical URL clean (`/setup` not `/setup/`).
let written = 0;
for (const route of routes) {
  const html = injectMeta(baseHtml, route);
  // strip leading slash and append .html
  const relPath = `${route.path.replace(/^\//, '')}.html`;
  const targetFile = path.join(DIST, relPath);
  fs.mkdirSync(path.dirname(targetFile), { recursive: true });
  fs.writeFileSync(targetFile, html);
  written += 1;
  console.log(`  ✓ ${relPath}  ${route.noindex ? '[noindex]' : ''}`);
}

console.log(`\n✓ Pre-rendered ${written} route(s) with per-page meta.`);

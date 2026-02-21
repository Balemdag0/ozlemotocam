// scripts/generate-media-data.mjs
// Run with: node scripts/generate-media-data.mjs
// Reads the ozlemotocamtrabzon folder and outputs data/media.json

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MEDIA_DIR = path.join(__dirname, '..', '..', 'ozlemotocamtrabzon');
const OUT_FILE = path.join(__dirname, '..', 'data', 'media.json');

// Keywords → category mapping
const CATEGORY_RULES = [
  { cat: 'cam-degisimi', keywords: ['değişim', 'değiştir', 'ön cam', 'arka cam', 'yan cam', 'camdeğişim', 'camı değ', 'camdeğişimi', 'windshield'] },
  { cat: 'cam-filmi',    keywords: ['filmi', 'film', 'klormatik', '3m', 'camfilmi', 'güneş', 'solar'] },
  { cat: 'tamir',        keywords: ['tamir', 'çatlak', 'kırık', 'onar', 'repair', 'tamiri'] },
  { cat: 'kaput-koruma', keywords: ['kaput', 'koruma', 'ppf', 'kaputkoruma', 'kaputkaplama'] },
];

function classify(caption) {
  const lower = caption.toLowerCase();
  for (const rule of CATEGORY_RULES) {
    if (rule.keywords.some(k => lower.includes(k))) {
      return rule.cat;
    }
  }
  return 'diger';
}

function extractTimestamp(filename) {
  // e.g. 2021-10-31_13-59-12_UTC_1.jpg  → 2021-10-31_13-59-12_UTC
  const match = filename.match(/^(\d{4}-\d{2}-\d{2}_\d{2}-\d{2}-\d{2}_UTC)/);
  return match ? match[1] : null;
}

const allFiles = fs.readdirSync(MEDIA_DIR);

// Group files by timestamp prefix
const groups = {};
for (const file of allFiles) {
  const ts = extractTimestamp(file);
  if (!ts) continue;
  if (!groups[ts]) groups[ts] = { jpgs: [], mp4s: [], txt: null };
  const ext = path.extname(file).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') groups[ts].jpgs.push(file);
  else if (ext === '.mp4') groups[ts].mp4s.push(file);
  else if (ext === '.txt') groups[ts].txt = file;
}

// Sort timestamps newest first
const sortedTs = Object.keys(groups).sort().reverse();

// Build media items (skip groups without any jpg or mp4)
const items = [];
for (const ts of sortedTs) {
  const g = groups[ts];
  // Need at least one visual media file
  if (g.jpgs.length === 0 && g.mp4s.length === 0) continue;

  const caption = g.txt
    ? fs.readFileSync(path.join(MEDIA_DIR, g.txt), 'utf-8').trim()
    : '';

  // Prefer jpgs as thumbnail; fall back to mp4 thumbnail jpg if available
  const thumbnail = g.jpgs.length > 0 ? g.jpgs[0] : null;
  const video = g.mp4s.length > 0 ? g.mp4s[0] : null;

  // Only include if we have a thumbnail jpg (skip video-only entries)
  if (!thumbnail) continue;

  const category = classify(caption);

  // Parse date from timestamp (2021-10-31_13-59-12_UTC → 2021-10-31)
  const datePart = ts.slice(0, 10); // "2021-10-31"

  items.push({
    id: ts,
    thumbnail: `/media/${thumbnail}`,
    video: video ? `/media/${video}` : null,
    caption,
    category,
    date: datePart,
  });
}

// Ensure output dir exists
fs.mkdirSync(path.dirname(OUT_FILE), { recursive: true });
fs.writeFileSync(OUT_FILE, JSON.stringify(items, null, 2), 'utf-8');

console.log(`✅  Generated ${items.length} media items → ${OUT_FILE}`);

// Category breakdown
const cats = {};
for (const item of items) {
  cats[item.category] = (cats[item.category] || 0) + 1;
}
console.log('   Category breakdown:', cats);

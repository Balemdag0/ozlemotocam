import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_MEDIA = path.join(ROOT_DIR, 'public', 'media');
const MEDIA_JSON_PATH = path.join(ROOT_DIR, 'data', 'media.json');

// 1. Files hardcoded in components
const REQUIRED_FILES = new Set([
    '2022-04-20_07-58-58_UTC.jpg',
    'cam-degisimi-trimmed.mp4',
    '2022-04-20_07-58-58_UTC.mp4',
    'kaput-koruma-trimmed.mp4',
    '2022-02-07_10-50-57_UTC.jpg',
    '2021-12-18_08-57-32_UTC.mp4',
    '2021-12-18_08-57-32_UTC.jpg',
    'logo.png'
]);

// 2. Determine exact files used by GallerySection (up to 5 per category + newest fallback)
const FILTERS = [
    'cam-degisimi',
    'cam-filmi',
    'tamir',
    'kaput-koruma',
    'diger'
];

if (!fs.existsSync(MEDIA_JSON_PATH)) {
    console.error('media.json not found');
    process.exit(1);
}

const allItems = JSON.parse(fs.readFileSync(MEDIA_JSON_PATH, 'utf-8'));
// We only care about the top 80 items logically loaded in GallerySection
const baseItems = allItems.slice(0, 80);

const finalKeptItems = new Set();

// Logic from GallerySection.tsx: It takes up to 5 per category
for (const cat of FILTERS) {
    const catItems = baseItems.filter(item => item.category === cat).slice(0, 5);
    catItems.forEach(item => finalKeptItems.add(item));
}

// "All" tab logic: 1 from each category, then fill with newest up to 5
let allTabItems = [];
for (const cat of FILTERS) {
    const item = baseItems.find(i => i.category === cat);
    if (item && allTabItems.length < 5) allTabItems.push(item);
}
const remaining = baseItems.filter(i => !allTabItems.includes(i));
allTabItems = [...allTabItems, ...remaining].slice(0, 5);
allTabItems.forEach(item => finalKeptItems.add(item));

// Extract filenames and add to required set
Array.from(finalKeptItems).forEach(item => {
    if (item.thumbnail) REQUIRED_FILES.add(item.thumbnail.replace('/media/', ''));
    if (item.video) REQUIRED_FILES.add(item.video.replace('/media/', ''));
});

// 3. Delete unneeded files from public/media
let deletedCount = 0;
let keptCount = 0;
const actualFiles = fs.readdirSync(PUBLIC_MEDIA);

for (const file of actualFiles) {
    if (!REQUIRED_FILES.has(file)) {
        fs.unlinkSync(path.join(PUBLIC_MEDIA, file));
        deletedCount++;
    } else {
        keptCount++;
    }
}

// 4. Update data/media.json to only contain the strictly kept items
const cleanMediaJson = Array.from(finalKeptItems).sort((a, b) => b.id.localeCompare(a.id));
fs.writeFileSync(MEDIA_JSON_PATH, JSON.stringify(cleanMediaJson, null, 2));

console.log(`Kept ${keptCount} files. Deleted ${deletedCount} unused files from public/media`);
console.log(`Updated media.json down to ${cleanMediaJson.length} exact items used in the Gallery`);

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.join(__dirname, '..');
const PUBLIC_MEDIA = path.join(ROOT_DIR, 'public', 'media');
const OLD_MEDIA_SOURCE = path.join(ROOT_DIR, '..', 'ozlemotocamtrabzon');
const MEDIA_JSON_PATH = path.join(ROOT_DIR, 'data', 'media.json');

// Explicitly used files in React Components
const REQUIRED_FILES = new Set([
    '2022-04-20_07-58-58_UTC.jpg',
    'cam-degisimi-trimmed.mp4',
    '2022-04-20_07-58-58_UTC.mp4',
    'kaput-koruma-trimmed.mp4',
    '2022-02-07_10-50-57_UTC.jpg',
    '2021-12-18_08-57-32_UTC.mp4',
    '2021-12-18_08-57-32_UTC.jpg',
    'logo.png', // just in case
]);

// 1. Read media.json and get top 80 items
if (!fs.existsSync(MEDIA_JSON_PATH)) {
    console.error('media.json not found');
    process.exit(1);
}

const allItems = JSON.parse(fs.readFileSync(MEDIA_JSON_PATH, 'utf-8'));
const usedItems = allItems.slice(0, 80);

// Add files from json to required set
usedItems.forEach(item => {
    if (item.thumbnail) REQUIRED_FILES.add(item.thumbnail.replace('/media/', ''));
    if (item.video) REQUIRED_FILES.add(item.video.replace('/media/', ''));
});

// 2. Prepare destination
const NEW_MEDIA_DIR = path.join(ROOT_DIR, 'public', 'media_new');
if (!fs.existsSync(NEW_MEDIA_DIR)) {
    fs.mkdirSync(NEW_MEDIA_DIR, { recursive: true });
}

// 3. Copy required files from the source to new destination
let copiedCount = 0;
let missingCount = 0;

for (const file of REQUIRED_FILES) {
    const src = path.join(OLD_MEDIA_SOURCE, file);
    const dest = path.join(NEW_MEDIA_DIR, file);

    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        copiedCount++;
    } else {
        console.warn(`Missing required file in source: ${file}`);
        missingCount++;
    }
}

// 4. Update data.json to only contain used items
fs.writeFileSync(MEDIA_JSON_PATH, JSON.stringify(usedItems, null, 2));
console.log(`Updated media.json to ${usedItems.length} items`);

// 5. Replace symlink
if (fs.existsSync(PUBLIC_MEDIA)) {
    fs.unlinkSync(PUBLIC_MEDIA);
}
fs.renameSync(NEW_MEDIA_DIR, PUBLIC_MEDIA);

console.log(`Copied ${copiedCount} files to static public/media folder.`);
console.log(`Skipped missing files: ${missingCount}`);
console.log('Cleanup successful!');

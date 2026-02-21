import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_MEDIA = path.join(__dirname, '..', 'public', 'media');

const files = fs.readdirSync(PUBLIC_MEDIA).filter(f => f.endsWith('.mp4'));

console.log(`Found ${files.length} MP4 files to compress...`);

let totalOriginalSize = 0;
let totalNewSize = 0;

for (const file of files) {
    const inputPath = path.join(PUBLIC_MEDIA, file);
    const tempOutput = path.join(PUBLIC_MEDIA, `temp_${file}`);

    const originalStats = fs.statSync(inputPath);
    totalOriginalSize += originalStats.size;

    console.log(`Compressing ${file} (${(originalStats.size / 1024 / 1024).toFixed(2)} MB)...`);

    try {
        // Compress video:
        // -vcodec libx264: H.264 codec widely supported
        // -crf 28: Good compression vs quality ratio (lower is better quality, higher is more compressed. 23 is default, 28 is usually good for web bg)
        // -preset fast: Balance between speed and compression
        // -vf allow downscaling to 720p maximum width if it's larger, preserving aspect ratio
        const cmd = `ffmpeg -y -i "${inputPath}" -vcodec libx264 -crf 28 -preset fast -vf "scale='min(1280,iw)':-2" -acodec aac -b:a 128k "${tempOutput}"`;

        execSync(cmd, { stdio: 'ignore' });

        const newStats = fs.statSync(tempOutput);
        totalNewSize += newStats.size;

        console.log(` -> Done: ${(newStats.size / 1024 / 1024).toFixed(2)} MB`);

        // Replace original with compressed
        fs.unlinkSync(inputPath);
        fs.renameSync(tempOutput, inputPath);
    } catch (err) {
        console.error(`Failed to compress ${file}:`, err.message);
        if (fs.existsSync(tempOutput)) {
            fs.unlinkSync(tempOutput);
        }
    }
}

console.log('\nCompression Summary:');
console.log(`Original total size: ${(totalOriginalSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`New total size: ${(totalNewSize / 1024 / 1024).toFixed(2)} MB`);
console.log(`Saved: ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)} MB`);

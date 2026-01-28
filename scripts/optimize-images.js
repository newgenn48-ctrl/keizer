/**
 * Image Optimization Script for Keizer Logistics
 *
 * This script optimizes images in the public/images folder:
 * - Converts PNG/JPG to WebP format
 * - Compresses images to reduce file size
 * - Creates optimized versions while keeping originals
 *
 * Run with: node scripts/optimize-images.js
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function optimizeImage(inputPath, filename) {
  const ext = path.extname(filename).toLowerCase();
  const name = path.basename(filename, ext);

  // Skip if already optimized or is video
  if (ext === '.mp4' || ext === '.webp' || ext === '.avif') {
    console.log(`Skipping ${filename} (not an image or already optimized)`);
    return;
  }

  // Skip directories
  if (!fs.statSync(inputPath).isFile()) {
    return;
  }

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    console.log(`Processing ${filename}...`);
    console.log(`  Original: ${metadata.width}x${metadata.height}, ${(fs.statSync(inputPath).size / 1024).toFixed(0)}KB`);

    // Create WebP version
    const webpOutput = path.join(OUTPUT_DIR, `${name}.webp`);
    await image
      .webp({ quality: 80, effort: 6 })
      .toFile(webpOutput);

    const webpSize = (fs.statSync(webpOutput).size / 1024).toFixed(0);
    console.log(`  WebP: ${webpSize}KB`);

    // Create compressed original format version
    if (ext === '.png') {
      const pngOutput = path.join(OUTPUT_DIR, `${name}.png`);
      await sharp(inputPath)
        .png({ quality: 80, compressionLevel: 9 })
        .toFile(pngOutput);
      console.log(`  PNG compressed: ${(fs.statSync(pngOutput).size / 1024).toFixed(0)}KB`);
    } else if (ext === '.jpg' || ext === '.jpeg') {
      const jpgOutput = path.join(OUTPUT_DIR, `${name}.jpg`);
      await sharp(inputPath)
        .jpeg({ quality: 80, mozjpeg: true })
        .toFile(jpgOutput);
      console.log(`  JPG compressed: ${(fs.statSync(jpgOutput).size / 1024).toFixed(0)}KB`);
    }

    console.log(`  ✓ Done`);
  } catch (error) {
    console.error(`  ✗ Error processing ${filename}:`, error.message);
  }
}

async function main() {
  console.log('='.repeat(50));
  console.log('Keizer Logistics - Image Optimization');
  console.log('='.repeat(50));
  console.log('');

  const files = fs.readdirSync(IMAGES_DIR);

  for (const file of files) {
    const filePath = path.join(IMAGES_DIR, file);
    await optimizeImage(filePath, file);
  }

  console.log('');
  console.log('='.repeat(50));
  console.log('Optimization complete!');
  console.log(`Optimized images saved to: ${OUTPUT_DIR}`);
  console.log('');
  console.log('To use optimized images:');
  console.log('1. Replace original images with optimized versions');
  console.log('2. Or update image paths to use /images/optimized/');
  console.log('='.repeat(50));
}

main().catch(console.error);

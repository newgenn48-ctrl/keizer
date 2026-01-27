const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/images/Keizer.png');
const outputPath = path.join(__dirname, '../public/images/keizer-hero.jpg');

sharp(inputPath)
  .resize(1920, null, {
    withoutEnlargement: true,
    fit: 'inside'
  })
  .jpeg({
    quality: 80,
    progressive: true
  })
  .toFile(outputPath)
  .then(info => {
    console.log('Image optimized successfully!');
    console.log(`New size: ${Math.round(info.size / 1024)} KB`);
    console.log(`Dimensions: ${info.width}x${info.height}`);
  })
  .catch(err => {
    console.error('Error optimizing image:', err);
  });

const fs = require('fs');
const path = require('path');

function getAllFiles(dirPath, arrayOfFiles = []) {
  if (!fs.existsSync(dirPath)) return arrayOfFiles;
  const files = fs.readdirSync(dirPath);
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });
  return arrayOfFiles;
}

const publicDir = path.join(__dirname, '../public');
const targetDir1 = path.join(publicDir, 'images/images of construction/new 29 image');
const targetDir2 = path.join(publicDir, 'images/images of construction');

// 1. Collect new 29 images
const new29Files = getAllFiles(targetDir1)
  .filter(f => !path.basename(f).toLowerCase().includes('desktop.ini'))
  .map(f => '/' + path.relative(publicDir, f).replace(/\\/g, '/'));

// Sort new 29 images numerically (1.jpeg, 2.jpeg, ..., 29.jpeg)
new29Files.sort((a, b) => {
  const numA = parseInt(path.basename(a).match(/\d+/)?.[0] || '0', 10);
  const numB = parseInt(path.basename(b).match(/\d+/)?.[0] || '0', 10);
  return numA - numB;
});

// 2. Collect all other images in images of construction (excluding new 29 image folder)
const otherFiles = fs.readdirSync(targetDir2)
  .filter(f => {
    const fullPath = path.join(targetDir2, f);
    if (fs.statSync(fullPath).isDirectory()) return false;
    return !f.toLowerCase().includes('desktop.ini');
  })
  .map(f => '/images/images of construction/' + f);

console.log(`New 29 images count: ${new29Files.length}`);
console.log(`Other images count: ${otherFiles.length}`);
console.log(`Total images count: ${new29Files.length + otherFiles.length}`);

// Combine with new 29 images FIRST, then other images
const orderedImages = [...new29Files, ...otherFiles];

// Write array to src/data/constructionImages.ts
const content = `export const constructionImages: string[] = [\n` +
  orderedImages.map(p => `  ${JSON.stringify(p)},`).join('\n') +
  `\n];\n`;

fs.writeFileSync(path.join(__dirname, '../src/data/constructionImages.ts'), content, 'utf8');
console.log('Successfully reordered src/data/constructionImages.ts! The 29 new images are now placed FIRST.');

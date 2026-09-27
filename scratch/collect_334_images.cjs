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
const targetDir = path.join(publicDir, 'images/images of construction');

const allFiles = getAllFiles(targetDir);

// Filter out desktop.ini
const imageFiles = allFiles.filter(f => !path.basename(f).toLowerCase().includes('desktop.ini'));

console.log(`Total image files found: ${imageFiles.length}`);

// Convert to web relative paths starting with /images/images of construction/
const relativePaths = imageFiles.map(f => {
  return '/' + path.relative(publicDir, f).replace(/\\/g, '/');
});

// Check if any path has special characters or encoding issues
console.log('Sample 10 paths:');
relativePaths.slice(0, 10).forEach(p => console.log(p));

// Write all 334 relative paths directly into src/data/constructionImages.ts
const content = `export const constructionImages: string[] = [\n` +
  relativePaths.map(p => `  ${JSON.stringify(p)},`).join('\n') +
  `\n];\n`;

fs.writeFileSync(path.join(__dirname, '../src/data/constructionImages.ts'), content, 'utf8');
console.log('Successfully written all', relativePaths.length, 'images to src/data/constructionImages.ts!');

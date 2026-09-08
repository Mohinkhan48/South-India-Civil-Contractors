const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'images of construction');
const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpeg|jpg|png)$/i));

// Generate clean paths for images in /images/images of construction/
const paths = files.map(f => `/images/images of construction/${f}`);

const target = path.join(__dirname, '..', 'src', 'data', 'constructionImages.ts');
fs.writeFileSync(target, `export const constructionImages: string[] = ${JSON.stringify(paths, null, 2)};\n`);

console.log(`Successfully generated ${paths.length} image paths into constructionImages.ts`);

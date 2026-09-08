const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'public', 'images', 'images of construction');
const files = fs.readdirSync(dir).filter(f => f.match(/\.(jpeg|jpg|png)$/i));

// Encode URI components so space and special characters like () in filenames work properly in browser
const paths = files.map(f => `/images/images%20of%20construction/${encodeURIComponent(f)}`);

const target = path.join(__dirname, '..', 'src', 'data', 'constructionImages.ts');
fs.writeFileSync(target, `export const constructionImages: string[] = ${JSON.stringify(paths, null, 2)};\n`);

console.log(`Successfully generated ${paths.length} image paths into constructionImages.ts`);

const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '../src/components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') || f.endsWith('.ts'));

files.forEach(file => {
  const content = fs.readFileSync(path.join(dir, file), 'utf8');
  const imgMatches = content.match(/\/images\/[^\s'"`\)\>\}]+/g);
  if (imgMatches) {
    const seen = new Set();
    const dups = [];
    imgMatches.forEach(img => {
      const cleaned = img.replace(/[,;]+$/, '');
      if (seen.has(cleaned)) dups.push(cleaned);
      else seen.add(cleaned);
    });
    if (dups.length > 0) {
      console.log(`Duplicate image paths in component [${file}]:`, dups);
    }
  }
});

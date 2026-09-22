const fs = require('fs');
const path = require('path');

// Let's check files in public/images
const dir = path.join(__dirname, '..', 'public', 'images');
const files = fs.readdirSync(dir).filter(f => !f.endsWith('.ini'));
console.log('Total files:', files.length);
files.forEach(f => {
  const stat = fs.statSync(path.join(dir, f));
  if (!stat.isDirectory()) {
    console.log(f, (stat.size / 1024).toFixed(1) + 'KB');
  }
});

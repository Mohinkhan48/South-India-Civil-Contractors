import fs from 'fs';

const filePath = 'src/components/Footer.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  '<div className="lg:col-span-4">',
  '<div className="lg:col-span-4 -ml-2 sm:-ml-4">'
);

fs.writeFileSync(filePath, content);
console.log("Successfully shifted Footer logo and brand name to the left!");

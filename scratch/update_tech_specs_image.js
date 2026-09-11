import fs from 'fs';

const filePath = 'src/components/ResourcesPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  'src="/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.10 PM.jpeg"',
  'src="/images/Technical Specs.png"'
);

fs.writeFileSync(filePath, content);
console.log("Updated Technical Specs image successfully!");

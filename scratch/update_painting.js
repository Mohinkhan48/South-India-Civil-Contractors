import fs from 'fs';
const path = 'src/components/PremiumConstructionPage.tsx';
let content = fs.readFileSync(path, 'utf8');
content = content.replace(/painting: ".*",/, 'painting: "/images/Multi-Coat Painting &.png",');
fs.writeFileSync(path, content);
console.log("Successfully updated painting image path!");

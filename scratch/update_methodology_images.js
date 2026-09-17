import fs from 'fs';

const filePath = 'src/components/ResourcesPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  {
    target: "photo: '/images/images of construction/WhatsApp Image 2026-09-05 at 12.57.09 PM.jpeg'",
    replacement: "photo: '/images/Site Survey & Planning.png'"
  },
  {
    target: "photo: '/images/images of construction/WhatsApp Image 2026-09-05 at 12.57.14 PM.jpeg'",
    replacement: "photo: '/images/Foundation Engineering.png'"
  },
  {
    target: "photo: '/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.10 PM.jpeg'",
    replacement: "photo: '/images/Structural Construction.png'"
  },
  {
    target: "photo: '/images/images of construction/WhatsApp Image 2026-09-05 at 12.57.15 PM.jpeg'",
    replacement: "photo: '/images/MEP Integration.png'"
  },
  {
    target: "photo: '/images/images of construction/WhatsApp Image 2026-09-05 at 12.48.51 PM (2).jpeg'",
    replacement: "photo: '/images/Finishing Works.png'"
  },
  {
    target: "photo: '/images/images of construction/WhatsApp Image 2026-09-05 at 12.55.30 PM.jpeg'",
    replacement: "photo: '/images/Quality Control.png'"
  }
];

for (const item of replacements) {
  if (content.includes(item.target)) {
    content = content.replace(item.target, item.replacement);
    console.log(`Replaced: ${item.target} -> ${item.replacement}`);
  } else {
    console.warn(`Target not found: ${item.target}`);
  }
}

fs.writeFileSync(filePath, content);
console.log("Updated Construction Methodology photos successfully!");

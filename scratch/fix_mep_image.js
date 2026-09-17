import fs from 'fs';

const filePath = 'src/components/ResourcesPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  "photo: '/images/MEP Integration.png'",
  "photo: '/images/MEP Conduit Routing & Plastering.png'"
);

fs.writeFileSync(filePath, content);
console.log("Updated MEP Integration image to dedicated MEP Conduit Routing photo!");

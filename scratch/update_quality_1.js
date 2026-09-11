import fs from 'fs';

const filePath = 'src/components/ResourcesPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace("image: '/images/Quality Assurance HD.jpg'", "image: '/images/Quality Assurance 1.png'");
content = content.replace("image: '/images/Structural Standards HD.jpg'", "image: '/images/Structural Standards 1.png'");
content = content.replace("image: '/images/Column & RCC Frame Casting.png'", "image: '/images/Material Quality 1.png'");
content = content.replace("image: '/images/Final Snag Audit & Handover.png'", "image: '/images/Safety Standards 1.png'");

fs.writeFileSync(filePath, content);
console.log("Updated ResourcesPage with Quality 1 images!");

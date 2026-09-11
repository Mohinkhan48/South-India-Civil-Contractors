import fs from 'fs';

const filePath = 'src/components/ResourcesPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace("image: '/images/Quality Assurance.png'", "image: '/images/Quality Assurance HD.jpg'");
content = content.replace("image: '/images/Structural Standards.png'", "image: '/images/Structural Standards HD.jpg'");
content = content.replace("image: '/images/Material Quality.png'", "image: '/images/Column & RCC Frame Casting.png'");
content = content.replace("image: '/images/Safety Standards.png'", "image: '/images/Final Snag Audit & Handover.png'");

fs.writeFileSync(filePath, content);
console.log("Updated ResourcesPage with crystal-clear HD images!");

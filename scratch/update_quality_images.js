import fs from 'fs';

const filePath = 'src/components/ResourcesPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace("image: '/images/about_craft.jpg'", "image: '/images/Quality Assurance.png'");
content = content.replace("image: '/images/project_apartment.jpg'", "image: '/images/Structural Standards.png'");
content = content.replace("image: '/images/resources_featured.jpg'", "image: '/images/Material Quality.png'");
content = content.replace("image: '/images/resources_safety.jpg'", "image: '/images/Safety Standards.png'");

fs.writeFileSync(filePath, content);
console.log("Quality Standards image paths updated successfully!");

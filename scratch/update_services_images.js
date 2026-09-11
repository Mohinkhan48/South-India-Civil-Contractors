import fs from 'fs';

const filePath = 'src/components/ServicesPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
  { target: "image: '/images/project_apartment.jpg',", replacement: "image: '/images/Apartment Project.png'," },
  { target: "image: '/images/project_commercial.jpg',", replacement: "image: '/images/Commercial Building.png'," },
  { target: "image: '/images/project_institutional.jpg',", replacement: "image: '/images/College Building.png'," },
  { target: "image: '/images/why_us_arch.jpg',", replacement: "image: '/images/High Rise Project.png'," },
  { target: "image: '/images/project_waterfront.jpg',", replacement: "image: '/images/Hospital Project.png'," },
  { target: "image: '/images/project_resort.jpg',", replacement: "image: '/images/Hotel Project.png'," },
  { target: "image: '/images/hero_residence.jpg',", replacement: "image: '/images/PG Building.png'," },
  { target: "image: '/images/project_renovation.jpg',", replacement: "image: '/images/Renovation Work.png'," },
  { target: "image: '/images/about_craft.jpg',", replacement: "image: '/images/Residential Building.png'," },
  { target: "image: '/images/project_industrial.jpg',", replacement: "image: '/images/Industrial Construction.png'," },
  { target: "image: '/images/enquiry_construction.jpg',", replacement: "image: '/images/Structural Work & Civil Contracting.png'," },
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
console.log("Services images update completed!");

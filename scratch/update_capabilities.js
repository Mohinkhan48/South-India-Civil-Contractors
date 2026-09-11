import fs from 'fs';

const filePath = 'src/components/PremiumConstructionPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Update civilCapabilities image paths
content = content.replace("image: '/images/project_apartment.jpg'", "image: '/images/Luxury Independent Villas.png'");
content = content.replace("image: '/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.16 PM.jpeg'", "image: '/images/Residential Apartments.png'");
content = content.replace("image: '/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.21 PM.jpeg'", "image: '/images/Commercial Buildings.png'");
content = content.replace("image: '/images/images of construction/WhatsApp Image 2026-09-05 at 12.48.46 PM.jpeg'", "image: '/images/Industrial Warehouses.png'");

// Also update photos object
content = content.replace('villas: "/images/project_apartment.jpg",', 'villas: "/images/Luxury Independent Villas.png",');
content = content.replace('apartments: "/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.16 PM.jpeg",', 'apartments: "/images/Residential Apartments.png",');
content = content.replace('commercial: "/images/images of construction/WhatsApp Image 2026-09-05 at 1.01.21 PM.jpeg",', 'commercial: "/images/Commercial Buildings.png",');
content = content.replace('industrial: "/images/images of construction/WhatsApp Image 2026-09-05 at 12.48.46 PM.jpeg",', 'industrial: "/images/Industrial Warehouses.png",');

fs.writeFileSync(filePath, content);
console.log("Updated 4 capability images successfully!");

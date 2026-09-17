import fs from 'fs';

const filePath = 'src/components/ResourcesPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace(
  '<section id="materials-brands" className="bg-[#F1E8DC] pt-16 pb-6 lg:pt-24 lg:pb-8 px-4 sm:px-6 lg:px-8">',
  '<section id="materials-brands" className="bg-[#F1E8DC] pt-16 pb-12 lg:pt-24 lg:pb-16 px-4 sm:px-6 lg:px-8">'
);

content = content.replace(
  '<section id="construction-methodologies" className="bg-[#EDE3D3] pt-6 pb-20 lg:pt-8 lg:pb-28 px-4 sm:px-6 lg:px-8">',
  '<section id="construction-methodologies" className="bg-[#EDE3D3] pt-12 pb-20 lg:pt-16 lg:pb-28 px-4 sm:px-6 lg:px-8">'
);

content = content.replace(
  '<div className="text-center max-w-3xl mx-auto mb-10">',
  '<div className="text-center max-w-3xl mx-auto mb-12">'
);

fs.writeFileSync(filePath, content);
console.log("Successfully balanced section vertical spacing!");

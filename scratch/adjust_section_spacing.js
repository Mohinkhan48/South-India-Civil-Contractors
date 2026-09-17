import fs from 'fs';

const filePath = 'src/components/ResourcesPage.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Reduce bottom padding of section 4
content = content.replace(
  '<section id="materials-brands" className="bg-[#F1E8DC] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">',
  '<section id="materials-brands" className="bg-[#F1E8DC] pt-16 pb-6 lg:pt-24 lg:pb-8 px-4 sm:px-6 lg:px-8">'
);

// Reduce top padding of section 5
content = content.replace(
  '<section id="construction-methodologies" className="bg-[#EDE3D3] py-20 lg:py-28 px-4 sm:px-6 lg:px-8">',
  '<section id="construction-methodologies" className="bg-[#EDE3D3] pt-6 pb-20 lg:pt-8 lg:pb-28 px-4 sm:px-6 lg:px-8">'
);

// Reduce margin-bottom of header in section 5
content = content.replace(
  '<div className="text-center max-w-3xl mx-auto mb-16">',
  '<div className="text-center max-w-3xl mx-auto mb-10">'
);

fs.writeFileSync(filePath, content);
console.log("Successfully adjusted section vertical spacing!");

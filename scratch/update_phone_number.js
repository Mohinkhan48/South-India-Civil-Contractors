import fs from 'fs';

const filePath = 'src/config/site.ts';
let content = fs.readFileSync(filePath, 'utf8');

content = content.replace('phone: "08023391256",', 'phone: "08023391255",');
content = content.replace('phoneDisplay: "080 23391256",', 'phoneDisplay: "080 23391255",');

fs.writeFileSync(filePath, content);
console.log("Updated landline phone number to 08023391255 in site.ts!");

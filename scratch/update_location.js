import fs from 'fs';

const filePath = 'src/config/site.ts';
let content = fs.readFileSync(filePath, 'utf8');

const oldHeadquarters = `  headquarters: {
    title: "Bangalore Corporate HQ",
    address: "108, Prestige Meridian, MG Road",
    city: "Bangalore",
    state: "Karnataka",
    pincode: "560001",
    latitude: 12.974955,
    longitude: 77.608383
  },`;

const newHeadquarters = `  headquarters: {
    title: "Bengaluru Corporate HQ",
    address: "1st Floor, 1st Stage, No 35, 2nd A Main Rd, 2nd Phase, Chandra Layout",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560040",
    latitude: 12.961048,
    longitude: 77.526541
  },`;

const oldEmbed = `  googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.604690333215!2d80.2618823!3d13.0608587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266107f9c8f25%3A0xb363155735f99238!2sAnna%20Salai%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"`;

const newEmbed = `  googleMapsEmbedUrl: "https://maps.google.com/maps?q=South+India+Civil+Contractor,+No+35,+2nd+A+Main+Rd,+1st+Stage,+2nd+Phase,+Chandra+Layout,+Bengaluru,+Karnataka+560040&t=&z=16&ie=UTF8&iwloc=&output=embed"`;

content = content.replace(oldHeadquarters, newHeadquarters);
content = content.replace(oldEmbed, newEmbed);

fs.writeFileSync(filePath, content);
console.log("Successfully updated location details and Google Maps embed URL!");

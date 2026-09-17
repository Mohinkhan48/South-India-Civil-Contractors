import fs from 'fs';

const filePath = 'src/components/Contact.tsx';
let content = fs.readFileSync(filePath, 'utf8');

// Update imports
content = content.replace(
  "import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2, Clock, Building } from 'lucide-react';",
  "import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2, Clock, Building, Navigation, ExternalLink } from 'lucide-react';"
);

// Add helper functions inside component
const helperFunctions = `  const getCurrentAddress = () => {
    if (activeBranch === -1) {
      return \`\${siteConfig.headquarters.address}, \${siteConfig.headquarters.city}, \${siteConfig.headquarters.state} \${siteConfig.headquarters.pincode}\`;
    }
    const branch = siteConfig.branches[activeBranch];
    return \`\${branch.address}, \${branch.city}, \${branch.state}\`;
  };

  const getMapEmbedUrl = () => {
    if (activeBranch === -1) {
      return siteConfig.googleMapsEmbedUrl;
    }
    const branch = siteConfig.branches[activeBranch];
    return \`https://maps.google.com/maps?q=\${encodeURIComponent(branch.address + ', ' + branch.city)}&t=&z=16&ie=UTF8&iwloc=&output=embed\`;
  };

  const getDirectionsUrl = () => {
    const addressStr = getCurrentAddress();
    return \`https://www.google.com/maps/dir/?api=1&destination=\${encodeURIComponent(addressStr)}\`;
  };

  const handleSubmit = (e: React.FormEvent) => {`;

content = content.replace('  const handleSubmit = (e: React.FormEvent) => {', helperFunctions);

// Replace Map JSX
const oldMapJsx = `            {/* Map */}
            <div className="relative rounded-sm overflow-hidden border border-[#131D23]/15 h-44">
              <iframe
                title="South India Civil Contractors Office Location"
                src={siteConfig.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'sepia(0.3) contrast(0.9)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>`;

const newMapJsx = `            {/* Map */}
            <div className="relative rounded-lg overflow-hidden border border-[#131D23]/15 h-48 group">
              <iframe
                title="South India Civil Contractors Office Location"
                src={getMapEmbedUrl()}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'sepia(0.2) contrast(0.95)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href={getDirectionsUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-x-3 bottom-3 bg-[#9A6048] hover:bg-[#86513B] text-[#EDE3D3] text-xs font-bold px-3 py-2 rounded-md flex items-center justify-between shadow-xl transition-all z-10 group-hover:scale-[1.02]"
              >
                <div className="flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-[#EDE3D3]" />
                  <span>Open Directions on Google Maps</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-[#EDE3D3]/80" />
              </a>
            </div>`;

content = content.replace(oldMapJsx, newMapJsx);

fs.writeFileSync(filePath, content);
console.log("Updated Contact.tsx map and direct Google Maps directions link!");

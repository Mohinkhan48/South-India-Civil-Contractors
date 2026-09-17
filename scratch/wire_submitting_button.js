import fs from 'fs';

// 1. QuoteModal.tsx
const quotePath = 'src/components/QuoteModal.tsx';
let quoteCode = fs.readFileSync(quotePath, 'utf8');

quoteCode = quoteCode.replace(
  '<span>Submit Request</span>',
  '<span>{isSubmitting ? "Sending Lead..." : "Submit Request"}</span>'
);

quoteCode = quoteCode.replace(
  'type="submit"',
  'type="submit" disabled={isSubmitting}'
);

fs.writeFileSync(quotePath, quoteCode);

// 2. Contact.tsx
const contactPath = 'src/components/Contact.tsx';
let contactCode = fs.readFileSync(contactPath, 'utf8');

contactCode = contactCode.replace(
  '<span>Submit Construction Enquiry</span>',
  '<span>{isSubmitting ? "Sending Lead..." : "Submit Construction Enquiry"}</span>'
);

contactCode = contactCode.replace(
  'type="submit"',
  'type="submit" disabled={isSubmitting}'
);

fs.writeFileSync(contactPath, contactCode);
console.log("Wired isSubmitting into submit buttons cleanly!");

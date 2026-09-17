import fs from 'fs';

// 1. QuoteModal.tsx
const quotePath = 'src/components/QuoteModal.tsx';
let quoteCode = fs.readFileSync(quotePath, 'utf8');

const oldQuotePayload = `          _subject: \`New Lead: \${formData.name} (\${formData.projectType || 'Construction Enquiry'})\`,
          _template: 'table',`;

const newQuotePayload = `          _subject: \`South India Civil Contractors Inquiry - \${formData.name}\`,
          _replyto: formData.email || 'care@southindiacivilcontractores.com',
          _captcha: 'false',
          _autoresponse: 'false',
          _template: 'table',`;

quoteCode = quoteCode.replace(oldQuotePayload, newQuotePayload);
fs.writeFileSync(quotePath, quoteCode);

// 2. Contact.tsx
const contactPath = 'src/components/Contact.tsx';
let contactCode = fs.readFileSync(contactPath, 'utf8');

const oldContactPayload = `          _subject: \`New Contact Lead: \${formData.name} (\${formData.city})\`,
          _template: 'table',`;

const newContactPayload = `          _subject: \`South India Civil Contractors Inquiry - \${formData.name} (\${formData.city})\`,
          _replyto: formData.email || 'care@southindiacivilcontractores.com',
          _captcha: 'false',
          _autoresponse: 'false',
          _template: 'table',`;

contactCode = contactCode.replace(oldContactPayload, newContactPayload);
fs.writeFileSync(contactPath, contactCode);

console.log("Successfully optimized email headers for Primary Inbox placement!");

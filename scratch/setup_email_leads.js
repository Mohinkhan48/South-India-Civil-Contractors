import fs from 'fs';

// 1. Update site.ts
const sitePath = 'src/config/site.ts';
let siteCode = fs.readFileSync(sitePath, 'utf8');
siteCode = siteCode.replace(/email: ".*",/, 'email: "care@southindiacivilcontractores.com",');
fs.writeFileSync(sitePath, siteCode);
console.log("Updated siteConfig.email to care@southindiacivilcontractores.com");

// 2. Update QuoteModal.tsx
const quotePath = 'src/components/QuoteModal.tsx';
let quoteCode = fs.readFileSync(quotePath, 'utf8');

quoteCode = quoteCode.replace(
  'const [submitted, setSubmitted] = useState(false);',
  'const [submitted, setSubmitted] = useState(false);\n  const [isSubmitting, setIsSubmitting] = useState(false);'
);

const oldQuoteSubmit = `  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };`;

const newQuoteSubmit = `  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/care@southindiacivilcontractores.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: \`New Lead: \${formData.name} (\${formData.projectType || 'Construction Enquiry'})\`,
          _template: 'table',
          'Full Name': formData.name,
          'Phone Number': formData.phone,
          'Email Address': formData.email || 'Not Provided',
          'Project Type': formData.projectType || 'General Consultation',
          'Message / Details': formData.message || 'None',
          'Submission Date': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });
    } catch (err) {
      console.error('Lead email dispatch error:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };`;

quoteCode = quoteCode.replace(oldQuoteSubmit, newQuoteSubmit);

// Update Quote button text if submitting
quoteCode = quoteCode.replace(
  '<span>Submit Request</span>',
  '<span>{isSubmitting ? "Sending Lead..." : "Submit Request"}</span>'
);

fs.writeFileSync(quotePath, quoteCode);
console.log("Updated QuoteModal.tsx form submission email handler!");

// 3. Update Contact.tsx
const contactPath = 'src/components/Contact.tsx';
let contactCode = fs.readFileSync(contactPath, 'utf8');

contactCode = contactCode.replace(
  'const [isSubmitted, setIsSubmitted] = useState(false);',
  'const [isSubmitted, setIsSubmitted] = useState(false);\n  const [isSubmitting, setIsSubmitting] = useState(false);'
);

const oldContactSubmit = `  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', projectType: 'Residential Villa', budgetRange: '₹25L - ₹75L', city: 'Chennai', message: '' });
    }, 5000);
  };`;

const newContactSubmit = `  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitting(true);

    try {
      await fetch('https://formsubmit.co/ajax/care@southindiacivilcontractores.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: \`New Contact Lead: \${formData.name} (\${formData.city})\`,
          _template: 'table',
          'Full Name': formData.name,
          'Phone Number': formData.phone,
          'Email Address': formData.email || 'Not Provided',
          'Project Type': formData.projectType,
          'Budget Range': formData.budgetRange,
          'City': formData.city,
          'Message / Requirements': formData.message || 'None',
          'Submission Date': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
        })
      });
    } catch (err) {
      console.error('Contact lead dispatch error:', err);
    } finally {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', projectType: 'Residential Villa', budgetRange: '₹25L - ₹75L', city: 'Chennai', message: '' });
      }, 5000);
    }
  };`;

contactCode = contactCode.replace(oldContactSubmit, newContactSubmit);

// Update Contact submit button text
contactCode = contactCode.replace(
  '<span>Submit Construction Enquiry</span>',
  '<span>{isSubmitting ? "Sending Lead..." : "Submit Construction Enquiry"}</span>'
);

fs.writeFileSync(contactPath, contactCode);
console.log("Updated Contact.tsx form submission email handler!");

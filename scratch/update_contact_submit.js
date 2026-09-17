import fs from 'fs';

const contactPath = 'src/components/Contact.tsx';
let contactCode = fs.readFileSync(contactPath, 'utf8');

const oldContactSubmit = `  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', projectType: 'Residential Villa', budgetRange: '₹25L - ₹75L', city: 'Chennai', message: '' });
    }, 6000);
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
      }, 6000);
    }
  };`;

if (contactCode.includes(oldContactSubmit)) {
  contactCode = contactCode.replace(oldContactSubmit, newContactSubmit);
  fs.writeFileSync(contactPath, contactCode);
  console.log("Successfully updated Contact.tsx email dispatch handler!");
} else {
  console.log("Target in Contact.tsx not found, checking exact lines...");
}

import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { X, ArrowRight, MessageSquare, CheckCircle2, HardHat, MapPin, Phone, Mail } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
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
          _subject: `South India Civil Contractors Inquiry - ${formData.name}`,
          _replyto: formData.email || 'care@southindiacivilcontractores.com',
          _captcha: 'false',
          _autoresponse: 'false',
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
  };

  const handleWhatsApp = () => {
    const text = `Hello South India Civil Contractors! I am ${formData.name || 'interested in your services'} and would like a free consultation for a ${formData.projectType || 'construction'} project. Phone: ${formData.phone}. ${formData.message ? 'Details: ' + formData.message : ''}`;
    window.open(`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const inputBase =
    'w-full bg-white border border-[#131D23]/15 rounded-lg px-4 py-2.5 text-sm text-[#131D23] placeholder-[#6F6256]/40 focus:outline-none focus:border-[#9A6048] focus:ring-2 focus:ring-[#9A6048]/10 transition-all duration-200';

  return (
    /* ── Backdrop ── */
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
      style={{ backdropFilter: 'blur(10px)', WebkitBackdropFilter: 'blur(10px)', background: 'rgba(28, 21, 16, 0.72)' }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
      aria-label="Free Construction Consultation"
    >
      {/* ── Popup Card ── */}
      <div
        className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col lg:flex-row animate-popup"
        style={{ maxHeight: '92vh' }}
      >
        {/* ── CLOSE BUTTON ── */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          onTouchEnd={(e) => {
            e.stopPropagation();
            onClose();
          }}
          aria-label="Close"
          className="absolute top-3 right-3 sm:top-4 sm:right-4 z-50 w-10 h-10 rounded-full bg-white/95 hover:bg-white text-[#131D23] border border-[#131D23]/15 flex items-center justify-center shadow-lg transition-all duration-200 active:scale-90 cursor-pointer pointer-events-auto select-none"
        >
          <X className="w-5 h-5" />
        </button>

        {/* ══════════════════════════════════════
            LEFT PANEL — Construction Image
        ══════════════════════════════════════ */}
        <div className="hidden lg:flex lg:w-[42%] relative flex-shrink-0 overflow-hidden">
          <img
            src="/images/enquiry_construction.jpg"
            alt="Premium construction project by South India Civil Contractors"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay on image */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1510]/90 via-[#1C1510]/30 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1C1510]/20" />

          {/* Image bottom content */}
          <div className="relative z-10 flex flex-col justify-end p-8 h-full">
            {/* Badge */}
            <div className="flex items-center gap-2 mb-4">
              <HardHat className="w-4 h-4 text-[#B78A55]" />
              <span className="text-[10px] font-bold tracking-[0.22em] text-[#B78A55] uppercase">
                South India Civil Contractors
              </span>
            </div>

            <h2 className="font-serif-heading text-3xl font-bold text-[#EDE3D3] leading-tight mb-3">
              Build Something<br />
              <span className="italic font-normal text-[#B78A55]">Extraordinary.</span>
            </h2>

            <p className="text-sm text-[#D4C9BC]/80 leading-relaxed mb-6">
              From foundation to finish — premium civil contracting across South India.
            </p>

            {/* Trust points */}
            <div className="space-y-2.5">
              {[
                'Free site assessment & consultation',
                'Transparent BOQ & fixed pricing',
                '10-year structural warranty',
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9A6048] flex-shrink-0" />
                  <span className="text-xs text-[#D4C9BC]">{point}</span>
                </div>
              ))}
            </div>

            {/* Contact strip */}
            <div className="mt-6 pt-4 border-t border-[#EDE3D3]/15 flex items-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-1.5 text-[11px] text-[#D4C9BC]/70 hover:text-[#B78A55] transition-colors"
              >
                <Phone className="w-3 h-3" />
                {siteConfig.phoneDisplay}
              </a>
              <span className="text-[#EDE3D3]/20 text-xs">|</span>
              <div className="flex items-center gap-1.5 text-[11px] text-[#D4C9BC]/70">
                <MapPin className="w-3 h-3" />
                Chennai & South India
              </div>
            </div>
          </div>
        </div>

        {/* ══════════════════════════════════════
            RIGHT PANEL — Form
        ══════════════════════════════════════ */}
        <div className="flex-1 flex flex-col overflow-y-auto">

          {/* Mobile-only: compact image header */}
          <div
            className="lg:hidden relative h-32 flex-shrink-0 overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #131D23 0%, #45382F 100%)' }}
          >
            <img
              src="/images/enquiry_construction.jpg"
              alt="Construction site"
              className="absolute inset-0 w-full h-full object-cover object-top opacity-40"
            />
            <div className="relative z-10 flex items-end h-full px-5 pb-4">
              <div>
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#B78A55] uppercase block mb-1">Free Consultation</span>
                <h3 className="font-serif-heading text-xl font-bold text-[#EDE3D3]">Build Your Vision</h3>
              </div>
            </div>
          </div>

          {/* Form Body */}
          <div className="flex-1 p-6 sm:p-8">
            {submitted ? (
              /* ── SUCCESS STATE ── */
              <div className="flex flex-col items-center justify-center h-full text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#9A6048]/12 border-2 border-[#9A6048] flex items-center justify-center text-[#9A6048]">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h4 className="font-serif-heading text-2xl font-bold text-[#131D23]">
                  We'll Be In Touch!
                </h4>
                <p className="text-sm text-[#6F6256] max-w-sm leading-relaxed">
                  Thank you, <strong className="text-[#131D23]">{formData.name}</strong>. Our senior project consultant will call you within <strong className="text-[#9A6048]">24 hours</strong> to schedule your free site consultation.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-xs uppercase tracking-wider py-3 px-5 rounded-full flex items-center justify-center gap-2 shadow-md transition-all"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp Us Now</span>
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full border border-[#131D23]/20 text-[#6F6256] hover:text-[#131D23] text-xs font-semibold uppercase tracking-wider py-3 px-5 rounded-full transition-all"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              /* ── FORM ── */
              <>
                {/* Desktop header (inside form panel) */}
                <div className="hidden lg:block mb-5 pr-10">
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <p className="text-[11px] font-bold tracking-[0.2em] text-[#9A6048] uppercase">
                      Free Consultation
                    </p>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="inline-flex items-center gap-1.5 bg-[#45382F]/10 hover:bg-[#9A6048]/15 border border-[#9A6048]/30 px-3 py-1 rounded-full text-xs font-bold text-[#9A6048] transition-colors"
                      title="Call direct for phone inquiries (non-WhatsApp)"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#9A6048]" />
                      <span>Call: {siteConfig.phoneDisplay}</span>
                    </a>
                  </div>
                  <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#131D23] leading-tight">
                    Build Your Vision
                  </h3>
                  <p className="text-sm text-[#6F6256] mt-1 leading-relaxed">
                    Get a free consultation for your next construction project. Leave your details or call <strong className="text-[#131D23]">{siteConfig.phoneDisplay}</strong>.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3.5">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#131D23] mb-1.5">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={inputBase}
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#131D23] mb-1.5">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Your Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputBase}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#131D23] mb-1.5">
                      Email
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9A6048]/60" />
                      <input
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputBase + ' pl-10'}
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#131D23] mb-1.5">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className={inputBase}
                    >
                      <option value="" disabled>Select project type…</option>
                      <option value="Residential Villa">Residential Villa / Bungalow</option>
                      <option value="Duplex / Independent House">Duplex / Independent House</option>
                      <option value="Commercial Building">Commercial Building</option>
                      <option value="Apartment Complex">Apartment Complex</option>
                      <option value="Turnkey Construction">Turnkey Construction</option>
                      <option value="Renovation & Interiors">Renovation & Interiors</option>
                      <option value="Civil & Structural Works">Civil & Structural Works</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#131D23] mb-1.5">
                      Message / Requirements
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your project — location, plot area, budget range, timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={inputBase + ' resize-none'}
                    />
                  </div>

                  {/* Submit + WhatsApp */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-1">
                    <button
                      type="submit" disabled={isSubmitting}
                      className="flex-1 bg-[#131D23] hover:bg-[#45382F] text-[#EDE3D3] font-bold text-sm tracking-wider uppercase py-3.5 px-6 rounded-full shadow-md transition-all duration-300 flex items-center justify-center gap-2 group active:scale-95"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </button>
                    <button
                      type="button"
                      onClick={handleWhatsApp}
                      className="sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm py-3.5 px-5 rounded-full flex items-center justify-center gap-2 transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span className="sm:hidden lg:inline">WhatsApp</span>
                    </button>
                  </div>

                  {/* Privacy note */}
                  <p className="text-[10px] text-[#6F6256]/60 text-center pt-1">
                    Your information is private and will never be shared. By submitting you agree to be contacted by our team.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

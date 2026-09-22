import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import {
  Phone,
  Mail,
  MessageSquare,
  MapPin,
  Send,
  CheckCircle2,
  Clock,
  Building2,
  Navigation,
  ExternalLink,
  Instagram,
  Facebook,
  Youtube,
  Linkedin,
  ChevronRight,
  Users,
  Award,
  Headphones,
} from 'lucide-react';

interface ContactPageProps {
  onNavigateHome: () => void;
}

const offices = [
  {
    id: 'hq',
    label: 'Bengaluru HQ',
    city: 'Bengaluru',
    state: 'Karnataka',
    address: '1st Floor, 1st Stage, No 35, 2nd A Main Rd, 2nd Phase, Chandra Layout',
    pincode: '560040',
    phone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    mapUrl: siteConfig.googleMapsEmbedUrl,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('No 35, 2nd A Main Rd, Chandra Layout, Bengaluru, Karnataka 560040')}`,
    isHQ: true,
  },
  {
    id: 'chennai',
    label: 'Chennai',
    city: 'Chennai',
    state: 'Tamil Nadu',
    address: '42, Prime Towers, Mount Road, Anna Salai',
    pincode: '600002',
    phone: '+91 98765 43210',
    email: siteConfig.email,
    mapUrl: `https://maps.google.com/maps?q=${encodeURIComponent('Mount Road, Anna Salai, Chennai, Tamil Nadu')}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('42 Prime Towers Mount Road Chennai Tamil Nadu')}`,
    isHQ: false,
  },
  {
    id: 'hyderabad',
    label: 'Hyderabad',
    city: 'Hyderabad',
    state: 'Telangana',
    address: '704, Phoenix Avance, Financial District, Hitec City',
    pincode: '500081',
    phone: '+91 98765 43212',
    email: siteConfig.email,
    mapUrl: `https://maps.google.com/maps?q=${encodeURIComponent('Financial District Hitec City Hyderabad Telangana')}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Financial District Hyderabad Telangana')}`,
    isHQ: false,
  },
  {
    id: 'kochi',
    label: 'Kochi',
    city: 'Kochi',
    state: 'Kerala',
    address: '24, Infopark Expressway, Kakkanad',
    pincode: '682042',
    phone: '+91 98765 43213',
    email: siteConfig.email,
    mapUrl: `https://maps.google.com/maps?q=${encodeURIComponent('Infopark Expressway Kakkanad Kochi Kerala')}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Infopark Expressway Kochi Kerala')}`,
    isHQ: false,
  },
  {
    id: 'coimbatore',
    label: 'Coimbatore',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    address: '56, Avinashi Road, Peelamedu',
    pincode: '641004',
    phone: '+91 98765 43214',
    email: siteConfig.email,
    mapUrl: `https://maps.google.com/maps?q=${encodeURIComponent('Avinashi Road Peelamedu Coimbatore Tamil Nadu')}&t=&z=16&ie=UTF8&iwloc=&output=embed`,
    directionsUrl: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Avinashi Road Coimbatore Tamil Nadu')}`,
    isHQ: false,
  },
];

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigateHome: _onNavigateHome }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Villa',
    budgetRange: '₹25L – ₹75L',
    city: 'Bengaluru',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeOffice, setActiveOffice] = useState(0);

  const canonicalUrl = `${siteConfig.siteUrl}/contact`;

  useEffect(() => {
    document.title = 'Contact Us | South India Civil Contractors';
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      'content',
      'Contact South India Civil Contractors for residential, commercial & civil construction quotes. Offices in Bengaluru, Chennai, Hyderabad, Kochi & Coimbatore.'
    );
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);
  }, [canonicalUrl]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || formData.phone.length !== 10) return;
    setIsSubmitting(true);
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);
    try {
      await fetch('https://formsubmit.co/ajax/care@southindiacivilcontractors.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          _subject: `SIBC Inquiry — ${formData.name} (${formData.city})`,
          _replyto: formData.email || siteConfig.email,
          _captcha: 'false',
          _template: 'table',
          'Full Name': formData.name,
          'Phone Number': formData.phone,
          'Email Address': formData.email || 'Not Provided',
          'Project Type': formData.projectType,
          'Budget Range': formData.budgetRange,
          City: formData.city,
          'Message / Requirements': formData.message || 'None',
          'Submission Date': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });
    } catch (err) {
      console.error('Contact lead dispatch error:', err);
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', phone: '', email: '', projectType: 'Residential Villa', budgetRange: '₹25L – ₹75L', city: 'Bengaluru', message: '' });
      }, 7000);
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello SIBC, I'm ${formData.name || 'a prospective client'} planning a ${formData.projectType} in ${formData.city} (Budget: ${formData.budgetRange}). ${formData.message || 'Please share consultation details.'}`;
    window.open(`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const current = offices[activeOffice];

  return (
    <main className="min-h-screen text-[#163048]" style={{ background: '#F3EFE6' }}>

      {/* ── HERO BANNER ── */}
      {/* ── HERO BANNER ── */}
      <section className="relative bg-[#163048] overflow-hidden">
        {/* Light Construction Background Image */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <img
            src="/images/Soil Excavation & Foundation.png"
            alt="Construction Site Background"
            className="w-full h-full object-cover object-center opacity-50"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(110deg, rgba(22, 48, 72, 0.72) 0%, rgba(22, 48, 72, 0.60) 50%, rgba(22, 48, 72, 0.75) 100%)',
            }}
          />
        </div>

        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#9A6048]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#B78A55]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[2px] bg-[#9A6048]" />
            <span className="text-xs font-bold tracking-[0.24em] text-[#B78A55] uppercase">Get In Touch</span>
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#EDE3D3] leading-tight mb-4">
            Let&apos;s Build Something<br />
            <span className="text-[#B78A55]">Extraordinary Together</span>
          </h1>
          <p className="text-sm sm:text-base text-[#D4C9BC] max-w-2xl mb-10 leading-relaxed">
            Reach out to our team across Bengaluru, Chennai, Hyderabad, Kochi &amp; Coimbatore for consultations, site visits, and project estimates.
          </p>
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Users, label: '435+ Happy Clients' },
              { icon: Award, label: '70+ Years Experience' },
              { icon: Headphones, label: '24hr Response Time' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2 border border-white/10 rounded-full px-4 py-2 text-xs font-semibold text-[#EDE3D3]"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <Icon className="w-3.5 h-3.5 text-[#B78A55]" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ── */}
      <section className="bg-[#122436] border-b border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            {[
              { icon: Phone, label: 'Call Us', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}`, sub: 'Mon – Sat, 8:30 AM – 7:00 PM' },
              { icon: Mail, label: 'Email Us', value: siteConfig.email, href: `mailto:${siteConfig.email}`, sub: 'We reply within 24 hours' },
            ].map(({ icon: Icon, label, value, href, sub }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 px-6 sm:px-10 py-5 hover:bg-white/5 transition-colors group justify-center sm:justify-start"
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-[#9A6048]/40 transition-colors" style={{ background: 'rgba(154,96,72,0.2)', border: '1px solid rgba(154,96,72,0.3)' }}>
                  <Icon className="w-5 h-5 text-[#B78A55]" />
                </div>
                <div>
                  <div className="text-[10px] text-[#9A8070] uppercase tracking-widest font-bold">{label}</div>
                  <div className="text-sm font-bold text-[#EDE3D3] group-hover:text-white transition-colors">{value}</div>
                  <div className="text-[10px] text-[#9A8070]">{sub}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── MAIN: FORM + OFFICE ── */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

            {/* LEFT — Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-2xl shadow-sm border border-[#E8DFC8] overflow-hidden">
                <div className="bg-[#163048] px-8 py-6">
                  <h2 className="text-lg sm:text-xl font-bold text-[#EDE3D3]">Request a Site Consultation</h2>
                  <p className="text-xs text-[#9A8070] mt-1">Fill in your details and our senior engineer will call you within 24 hours.</p>
                </div>

                <div className="px-6 sm:px-8 py-8">
                  {isSubmitted ? (
                    <div className="py-12 text-center space-y-5">
                      <div className="w-16 h-16 rounded-full bg-green-50 border-2 border-green-400 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-green-500" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-[#163048] mb-1">Consultation Request Received!</h3>
                        <p className="text-sm text-gray-500 max-w-sm mx-auto">
                          Thank you, <strong className="text-[#163048]">{formData.name}</strong>. Our team will contact you at{' '}
                          <strong>{formData.phone}</strong> within 24 hours.
                        </p>
                      </div>
                      <button
                        onClick={handleWhatsApp}
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EB659] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all shadow-sm"
                      >
                        <MessageSquare className="w-4 h-4" />
                        Continue on WhatsApp
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#163048] mb-1.5">Full Name *</label>
                          <input
                            type="text" required placeholder="Your full name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full border border-[#E0D8CC] rounded-xl px-4 py-3 text-sm text-[#163048] placeholder-gray-400 focus:outline-none focus:border-[#9A6048] focus:ring-2 transition-all"
                            style={{ background: '#F8F5F0' }}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#163048] mb-1.5">Phone / Mobile *</label>
                          <input
                            type="tel"
                            required
                            maxLength={10}
                            placeholder="10-digit mobile number"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })}
                            className="w-full border border-[#E0D8CC] rounded-xl px-4 py-3 text-sm text-[#163048] placeholder-gray-400 focus:outline-none focus:border-[#9A6048] focus:ring-2 transition-all"
                            style={{ background: '#F8F5F0' }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#163048] mb-1.5">Email Address</label>
                          <input
                            type="email" placeholder="your@email.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full border border-[#E0D8CC] rounded-xl px-4 py-3 text-sm text-[#163048] placeholder-gray-400 focus:outline-none focus:border-[#9A6048] focus:ring-2 transition-all"
                            style={{ background: '#F8F5F0' }}
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#163048] mb-1.5">Project City</label>
                          <select
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full border border-[#E0D8CC] rounded-xl px-4 py-3 text-sm text-[#163048] focus:outline-none focus:border-[#9A6048] focus:ring-2 transition-all"
                            style={{ background: '#F8F5F0' }}
                          >
                            <option>Bengaluru</option>
                            <option>Chennai</option>
                            <option>Hyderabad</option>
                            <option>Kochi</option>
                            <option>Coimbatore</option>
                            <option>Mysore</option>
                            <option>Trivandrum</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#163048] mb-1.5">Project Type</label>
                          <select
                            value={formData.projectType}
                            onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                            className="w-full border border-[#E0D8CC] rounded-xl px-4 py-3 text-sm text-[#163048] focus:outline-none focus:border-[#9A6048] focus:ring-2 transition-all"
                            style={{ background: '#F8F5F0' }}
                          >
                            <option>Residential Villa</option>
                            <option>Apartment Building</option>
                            <option>Commercial Complex</option>
                            <option>Turnkey Construction</option>
                            <option>Renovation &amp; Remodeling</option>
                            <option>Civil &amp; Structural Works</option>
                            <option>Project Management</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#163048] mb-1.5">Budget Range</label>
                          <select
                            value={formData.budgetRange}
                            onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                            className="w-full border border-[#E0D8CC] rounded-xl px-4 py-3 text-sm text-[#163048] focus:outline-none focus:border-[#9A6048] focus:ring-2 transition-all"
                            style={{ background: '#F8F5F0' }}
                          >
                            <option>Below ₹25 Lakhs</option>
                            <option>₹25L – ₹75L</option>
                            <option>₹75L – ₹1.5 Crores</option>
                            <option>₹1.5Cr – ₹5 Crores</option>
                            <option>Above ₹5 Crores</option>
                            <option>To be discussed</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#163048] mb-1.5">Project Description / Requirements</label>
                        <textarea
                          rows={4}
                          placeholder="Tell us about your plot size, construction stage, timeline, or specific requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full border border-[#E0D8CC] rounded-xl px-4 py-3 text-sm text-[#163048] placeholder-gray-400 focus:outline-none focus:border-[#9A6048] focus:ring-2 transition-all resize-none"
                          style={{ background: '#F8F5F0' }}
                        />
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-1">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="flex-1 bg-[#163048] hover:bg-[#1D3B58] disabled:opacity-60 text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                        >
                          {isSubmitting ? (
                            <span className="flex items-center gap-2">
                              <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                              </svg>
                              Sending...
                            </span>
                          ) : (
                            <>
                              <span>Request a Consultation</span>
                              <Send className="w-4 h-4" />
                            </>
                          )}
                        </button>
                        <button
                          type="button"
                          onClick={handleWhatsApp}
                          className="sm:w-auto bg-[#25D366] hover:bg-[#1EB659] text-white font-bold text-sm py-3.5 px-6 rounded-xl transition-all flex items-center justify-center gap-2 shadow-md active:scale-95"
                        >
                          <MessageSquare className="w-4 h-4" />
                          <span>WhatsApp</span>
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* RIGHT — Office Info + Map */}
            <div className="lg:col-span-5 space-y-5">

              {/* Branch Tabs + Details */}
              <div className="bg-white rounded-2xl border border-[#E8DFC8] shadow-sm overflow-hidden">
                <div className="bg-[#163048] px-6 py-4 flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#B78A55]" />
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B78A55]">Our Offices</span>
                </div>

                <div className="px-5 pt-4 pb-3 flex flex-wrap gap-2">
                  {offices.map((o, i) => (
                    <button
                      key={o.id}
                      onClick={() => setActiveOffice(i)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
                        activeOffice === i ? 'bg-[#163048] text-white shadow-sm' : 'bg-[#F3EFE6] text-[#163048] hover:bg-[#E8DFC8]'
                      }`}
                    >
                      {o.label}
                      {o.isHQ && <span className="ml-1 text-[#B78A55]">★</span>}
                    </button>
                  ))}
                </div>

                <div className="px-5 pb-5 pt-4 border-t border-[#F0EBE0] space-y-3">
                  <div>
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mb-0.5">Office</div>
                    <div className="font-bold text-[#163048] text-sm">
                      {current.city}{current.isHQ ? ' — Corporate Headquarters' : ' Regional Office'}
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-[#9A6048] mt-0.5 flex-shrink-0" />
                    <span>{current.address}, {current.city}, {current.state} — {current.pincode}</span>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Phone className="w-4 h-4 text-[#9A6048] flex-shrink-0" />
                    <a href={`tel:${current.phone.replace(/\s/g, '')}`} className="hover:text-[#9A6048] transition-colors font-medium">{current.phone}</a>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Mail className="w-4 h-4 text-[#9A6048] flex-shrink-0" />
                    <a href={`mailto:${current.email}`} className="hover:text-[#9A6048] transition-colors font-medium">{current.email}</a>
                  </div>
                  <div className="flex items-center gap-2.5 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-[#9A6048] flex-shrink-0" />
                    <span>Mon – Sat: 8:30 AM – 7:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="bg-white rounded-2xl border border-[#E8DFC8] shadow-sm overflow-hidden">
                <div className="relative h-60">
                  <iframe
                    key={current.id}
                    title={`${current.city} Office Location`}
                    src={current.mapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />
                </div>
                <div className="px-4 py-3 border-t border-[#F0EBE0]">
                  <a
                    href={current.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#9A6048] hover:bg-[#86513B] text-white text-sm font-bold py-3 px-5 rounded-xl flex items-center justify-between transition-all shadow-sm active:scale-95"
                  >
                    <div className="flex items-center gap-2">
                      <Navigation className="w-4 h-4" />
                      <span>Get Directions — {current.city}</span>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 opacity-75" />
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-2xl border border-[#E8DFC8] shadow-sm px-6 py-5">
                <div className="text-xs font-bold uppercase tracking-widest text-[#9A6048] mb-4">Follow Us</div>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: Instagram, label: 'Instagram', href: siteConfig.socialLinks.instagram, hoverClass: 'hover:text-pink-500' },
                    { icon: Facebook, label: 'Facebook', href: siteConfig.socialLinks.facebook, hoverClass: 'hover:text-blue-600' },
                    { icon: Youtube, label: 'YouTube', href: siteConfig.socialLinks.youtube, hoverClass: 'hover:text-red-500' },
                    { icon: Linkedin, label: 'LinkedIn', href: siteConfig.socialLinks.linkedin, hoverClass: 'hover:text-blue-700' },
                  ].map(({ icon: Icon, label, href, hoverClass }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className={`flex items-center gap-2.5 text-sm font-medium text-gray-600 ${hoverClass} transition-colors group`}
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#F3EFE6] flex items-center justify-center flex-shrink-0 group-hover:bg-[#E8DFC8] transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                      {label}
                      <ChevronRight className="w-3 h-3 ml-auto opacity-40" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── ALL OFFICES GRID ── */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-[#F0F2F5] border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-6 h-[2px] bg-[#9A6048]" />
            <span className="text-xs font-bold tracking-[0.24em] text-[#9A6048] uppercase">Pan South India Presence</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#163048] mb-8">Our Office Locations</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {offices.map((o, i) => {
              const isSelected = activeOffice === i;
              return (
                <button
                  key={o.id}
                  onClick={() => {
                    setActiveOffice(i);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`rounded-2xl p-5 text-left transition-all duration-300 group cursor-pointer shadow-md hover:shadow-xl ${
                    isSelected
                      ? 'bg-[#F5ECE0] border-2 border-[#4A2328] ring-2 ring-[#4A2328]/30 scale-[1.02]'
                      : 'bg-[#F9F5EE] hover:bg-[#F5ECE0] border border-[#E4D9C8] hover:border-[#4A2328]/50'
                  }`}
                >
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#4A2328]/10 border border-[#4A2328]/20">
                      <MapPin className="w-4 h-4 text-[#4A2328]" />
                    </div>
                    {o.isHQ && (
                      <span className="text-[10px] font-extrabold uppercase tracking-wider bg-[#4A2328] text-white px-2 py-0.5 rounded-full shadow-xs">
                        HQ
                      </span>
                    )}
                  </div>
                  <div className="font-extrabold text-[#163048] text-base leading-snug group-hover:text-[#4A2328] transition-colors">
                    {o.city}
                  </div>
                  <div className="text-[11.5px] font-semibold text-[#718096] mt-0.5">
                    {o.state}
                  </div>
                  <div className="text-[11.5px] text-[#475569] mt-2 leading-relaxed line-clamp-2 font-normal">
                    {o.address}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-[#9A6048]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-white/60 mb-1">Ready to Start?</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white">Get a Free Site Consultation</h3>
            <p className="text-sm text-white/70 mt-1">Our senior engineers are available across all 5 cities.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-2 bg-white text-[#9A6048] font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-orange-50 transition-all shadow-md active:scale-95"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 bg-[#25D366] text-white font-bold text-sm px-6 py-3.5 rounded-xl hover:bg-[#1EB659] transition-all shadow-md active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Us
            </button>
          </div>
        </div>
      </section>

    </main>
  );
};

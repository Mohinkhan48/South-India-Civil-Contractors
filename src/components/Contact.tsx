import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { Phone, Mail, MessageSquare, MapPin, Send, CheckCircle2, Clock, Building } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'Residential Villa',
    budgetRange: '₹25L - ₹75L',
    city: 'Chennai',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeBranch, setActiveBranch] = useState(-1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', email: '', projectType: 'Residential Villa', budgetRange: '₹25L - ₹75L', city: 'Chennai', message: '' });
    }, 6000);
  };

  const handleWhatsApp = () => {
    const text = `Hello SIBC, I'm ${formData.name || 'a prospective client'} planning a ${formData.projectType} in ${formData.city} (Budget: ${formData.budgetRange}). ${formData.message || 'Please share consultation details.'}`;
    window.open(`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#EDE3D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">

        {/* Header */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#9A6048]"></div>
            <span className="text-xs font-bold tracking-[0.22em] text-[#9A6048] uppercase">DIRECT CONSULTATION</span>
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl md:text-5xl font-bold text-[#131D23] leading-tight">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-[#6F6256] mt-3 max-w-xl">
            Reach out to discuss your upcoming project requirements with our senior engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">

          {/* LEFT: Contact Form */}
          <div className="lg:col-span-7 bg-[#F1E8DC] border border-[#131D23]/12 rounded-sm p-6 sm:p-10 shadow-editorial">
            <h3 className="font-serif-heading text-xl font-bold text-[#131D23] mb-6">
              Request A Site Consultation
            </h3>

            {isSubmitted ? (
              <div className="py-10 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-[#9A6048]/15 border border-[#9A6048] flex items-center justify-center mx-auto text-[#9A6048]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-serif-heading text-xl font-bold text-[#131D23]">Consultation Request Received</h4>
                <p className="text-sm text-[#6F6256] max-w-md mx-auto">
                  Thank you, <strong className="text-[#131D23]">{formData.name}</strong>. Our team will contact you within 24 hours at {formData.phone}.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="inline-flex items-center gap-2 text-xs font-bold text-[#EDE3D3] bg-[#9A6048] hover:bg-[#86513B] px-5 py-2.5 rounded-sm uppercase tracking-wider transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Continue on WhatsApp</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#131D23] mb-1.5">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#EDE3D3] border border-[#131D23]/20 rounded-sm px-4 py-3 text-sm text-[#131D23] placeholder-[#6F6256]/50 focus:outline-none focus:border-[#9A6048] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#131D23] mb-1.5">Phone / Mobile *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Your Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#EDE3D3] border border-[#131D23]/20 rounded-sm px-4 py-3 text-sm text-[#131D23] placeholder-[#6F6256]/50 focus:outline-none focus:border-[#9A6048] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#131D23] mb-1.5">Email Address</label>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#EDE3D3] border border-[#131D23]/20 rounded-sm px-4 py-3 text-sm text-[#131D23] placeholder-[#6F6256]/50 focus:outline-none focus:border-[#9A6048] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#131D23] mb-1.5">Project City</label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full bg-[#EDE3D3] border border-[#131D23]/20 rounded-sm px-4 py-3 text-sm text-[#131D23] focus:outline-none focus:border-[#9A6048] transition-colors"
                    >
                      <option>Chennai</option>
                      <option>Bangalore</option>
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
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#131D23] mb-1.5">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-[#EDE3D3] border border-[#131D23]/20 rounded-sm px-4 py-3 text-sm text-[#131D23] focus:outline-none focus:border-[#9A6048] transition-colors"
                    >
                      <option>Residential Villa</option>
                      <option>Commercial Complex</option>
                      <option>Turnkey Construction</option>
                      <option>Renovation & Remodeling</option>
                      <option>Civil & Structural Works</option>
                      <option>Project Management</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#131D23] mb-1.5">Budget Range</label>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full bg-[#EDE3D3] border border-[#131D23]/20 rounded-sm px-4 py-3 text-sm text-[#131D23] focus:outline-none focus:border-[#9A6048] transition-colors"
                    >
                      <option>Below ₹25 Lakhs</option>
                      <option>₹25L - ₹75L</option>
                      <option>₹75L - ₹1.5 Crores</option>
                      <option>₹1.5Cr - ₹5 Crores</option>
                      <option>Above ₹5 Crores</option>
                      <option>To be discussed</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#131D23] mb-1.5">Project Description / Requirements</label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your plot, architectural stage, timeline or specific requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#EDE3D3] border border-[#131D23]/20 rounded-sm px-4 py-3 text-sm text-[#131D23] placeholder-[#6F6256]/50 focus:outline-none focus:border-[#9A6048] transition-colors resize-none"
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 bg-[#131D23] hover:bg-[#45382F] text-[#EDE3D3] font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-sm transition-all flex items-center justify-center gap-2"
                  >
                    <span>Request A Consultation</span>
                    <Send className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="sm:w-auto bg-[#EDE3D3] hover:bg-[#DCCDBA] text-[#131D23] border border-[#131D23]/20 font-semibold text-xs uppercase tracking-wider py-3.5 px-5 rounded-sm transition-all flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-[#9A6048]" />
                    <span>WhatsApp Direct</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: Contact Info & Branches */}
          <div className="lg:col-span-5 space-y-5">

            {/* Quick Contact Cards */}
            <div className="bg-[#131D23] p-6 rounded-sm space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#B78A55] flex items-center gap-2">
                <Building className="w-4 h-4" /> Corporate Communications
              </h4>
              <div className="space-y-3">
                {[
                  { icon: Phone, label: 'Direct Calling', value: siteConfig.phoneDisplay, href: `tel:${siteConfig.phone}` },
                  { icon: Mail, label: 'Email Inquiries', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} target={href.startsWith('https') ? '_blank' : undefined} rel="noreferrer"
                    className="flex items-center gap-3 text-[#D4C9BC] hover:text-[#EDE3D3] transition-colors">
                    <div className="w-8 h-8 rounded-sm bg-[#45382F] border border-[#EDE3D3]/10 flex items-center justify-center text-[#B78A55] flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-[#D4C9BC]/50 uppercase tracking-wider">{label}</div>
                      <div className="text-xs sm:text-sm font-semibold">{value}</div>
                    </div>
                  </a>
                ))}
                <div className="flex items-center gap-3 text-[#D4C9BC]">
                  <div className="w-8 h-8 rounded-sm bg-[#45382F] border border-[#EDE3D3]/10 flex items-center justify-center text-[#B78A55] flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] text-[#D4C9BC]/50 uppercase tracking-wider">Operating Hours</div>
                    <div className="text-xs sm:text-sm font-semibold">Mon – Sat: 8:30 AM – 7:00 PM IST</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Branch Offices */}
            <div className="bg-[#F1E8DC] border border-[#131D23]/12 p-5 rounded-sm">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-[#9A6048] flex items-center gap-2 mb-3">
                <MapPin className="w-4 h-4" /> Regional Offices
              </h4>
              <div className="flex flex-wrap gap-1.5 mb-3">
                <button
                  onClick={() => setActiveBranch(-1)}
                  className={`px-3 py-1 text-xs font-bold uppercase rounded-sm transition-all ${activeBranch === -1 ? 'bg-[#9A6048] text-[#EDE3D3]' : 'bg-[#DCCDBA] text-[#131D23] hover:bg-[#9A6048]/20'}`}
                >
                  {siteConfig.headquarters.city} HQ
                </button>
                {siteConfig.branches.map((b, i) => (
                  <button
                    key={b.city}
                    onClick={() => setActiveBranch(i)}
                    className={`px-3 py-1 text-xs font-bold uppercase rounded-sm transition-all ${activeBranch === i ? 'bg-[#9A6048] text-[#EDE3D3]' : 'bg-[#DCCDBA] text-[#131D23] hover:bg-[#9A6048]/20'}`}
                  >
                    {b.city}
                  </button>
                ))}
              </div>

              <div className="text-xs text-[#6F6256] space-y-1 pt-2 border-t border-[#131D23]/10">
                {activeBranch === -1 ? (
                  <>
                    <div className="font-bold text-[#131D23] text-sm">{siteConfig.headquarters.title}</div>
                    <div>{siteConfig.headquarters.address}</div>
                    <div>{siteConfig.headquarters.city}, {siteConfig.headquarters.state} — {siteConfig.headquarters.pincode}</div>
                  </>
                ) : (
                  <>
                    <div className="font-bold text-[#131D23] text-sm">{siteConfig.branches[activeBranch].city} Regional Office</div>
                    <div>{siteConfig.branches[activeBranch].address}</div>
                    <div>{siteConfig.branches[activeBranch].city}, {siteConfig.branches[activeBranch].state}</div>
                    <div className="text-[#9A6048] font-semibold pt-1">{siteConfig.branches[activeBranch].phone}</div>
                  </>
                )}
              </div>
            </div>

            {/* Map */}
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

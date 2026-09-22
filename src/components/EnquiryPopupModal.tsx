import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

interface EnquiryPopupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EnquiryPopupModal: React.FC<EnquiryPopupModalProps> = ({ isOpen, onClose }) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || phone.length !== 10) return;

    setIsSubmitting(true);
    const targetEmail = siteConfig.email || 'care@southindiacivilcontractors.com';

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    try {
      await fetch(`https://formsubmit.co/ajax/${targetEmail}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          _subject: `New Free Consultation Lead - ${fullName}`,
          _replyto: email || targetEmail,
          _captcha: 'false',
          'Full Name': fullName,
          'Phone Number': `+91 ${phone}`,
          'Email Address': email || 'Not Provided',
          'Source': 'Build Your Vision Popup',
          'Submission Time': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });
    } catch (err) {
      console.warn('Form dispatch notice:', err);
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 animate-scaleUp">
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close"
          className="absolute top-4 right-4 z-20 p-2 text-gray-400 hover:text-gray-700 bg-white/80 hover:bg-white rounded-full transition-colors shadow-sm cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image */}
        <div className="relative hidden md:block min-h-[380px] bg-slate-100">
          <img
            src="/images/enquire image.png"
            alt="Civil Construction & Finishing"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>

        {/* Right Column: Form */}
        <div className="p-7 sm:p-9 flex flex-col justify-center relative">
          {!submitted ? (
            <>
              <div className="mb-6">
                <h2 className="text-xl sm:text-2xl font-extrabold text-[#1E293B] uppercase tracking-wide leading-tight">
                  BUILD YOUR VISION
                </h2>
                <p className="text-xs text-gray-500 font-medium leading-relaxed mt-2">
                  Get a free consultation for your next major project. Leave your details and we'll be in touch.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* NAME */}
                <div>
                  <label className="block text-[10px] font-bold text-[#1E293B] tracking-wider uppercase mb-1">
                    NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="YOUR NAME"
                    className="w-full border-b border-gray-300 py-1.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4A2328] focus:outline-none transition-colors placeholder:text-gray-300 font-medium"
                  />
                </div>

                {/* PHONE */}
                <div>
                  <label className="block text-[10px] font-bold text-[#1E293B] tracking-wider uppercase mb-1">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="10-DIGIT MOBILE NUMBER"
                    className="w-full border-b border-gray-300 py-1.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4A2328] focus:outline-none transition-colors placeholder:text-gray-300 font-medium"
                  />
                </div>

                {/* EMAIL */}
                <div>
                  <label className="block text-[10px] font-bold text-[#1E293B] tracking-wider uppercase mb-1">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="YOUR EMAIL"
                    className="w-full border-b border-gray-300 py-1.5 text-xs sm:text-sm text-[#1E293B] focus:border-[#4A2328] focus:outline-none transition-colors placeholder:text-gray-300 font-medium"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#4A2328] hover:bg-[#381a1e] text-white font-bold text-xs uppercase tracking-wider py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer disabled:opacity-70"
                  >
                    <span>{isSubmitting ? 'SENDING...' : 'GET STARTED'}</span>
                    {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-[#1E293B]">Consultation Requested!</h3>
              <p className="text-xs text-gray-500 leading-relaxed max-w-xs mx-auto">
                Thank you, {fullName}! Our civil engineering team will reach out to you within 24 hours.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-6 py-2.5 bg-[#1E293B] hover:bg-[#334155] text-white text-xs font-semibold rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

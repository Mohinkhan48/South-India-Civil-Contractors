import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { siteConfig } from '../config/site';
import { X, CheckCircle2, MessageSquare, Lock } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
}

const allBuildingTypes = [
  {
    id: 'Residential',
    label: 'Residential',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    id: 'Commercial',
    label: 'Commercial',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="9" y1="6" x2="9" y2="6.01" />
        <line x1="15" y1="6" x2="15" y2="6.01" />
        <line x1="9" y1="10" x2="9" y2="10.01" />
        <line x1="15" y1="10" x2="15" y2="10.01" />
        <line x1="9" y1="14" x2="9" y2="14.01" />
        <line x1="15" y1="14" x2="15" y2="14.01" />
        <line x1="9" y1="18" x2="15" y2="18" />
      </svg>
    ),
  },
  {
    id: 'Villa',
    label: 'Villa',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20" />
        <path d="M7 20V4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16" />
        <path d="M12 2v18" />
        <path d="M7 8h10" />
        <path d="M7 14h10" />
      </svg>
    ),
  },
  {
    id: 'Apartment',
    label: 'Apartment',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M3 15h18" />
        <path d="M9 3v18" />
        <path d="M15 3v18" />
      </svg>
    ),
  },
  {
    id: 'Hotel',
    label: 'Hotel',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8" />
        <path d="M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
        <path d="M12 4v6" />
        <line x1="2" y1="20" x2="22" y2="20" />
        <rect x="6" y="14" width="4" height="6" />
        <rect x="14" y="14" width="4" height="6" />
      </svg>
    ),
  },
  {
    id: 'Hospital',
    label: 'Hospital',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 7v10" />
        <path d="M7 12h10" />
      </svg>
    ),
  },
  {
    id: 'Educational',
    label: 'Educational',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 1.1 2.7 3 6 3s6-1.9 6-3v-5" />
      </svg>
    ),
  },
  {
    id: 'Renovation',
    label: 'Renovation',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    ),
  },
];

export const QuoteModal: React.FC<QuoteModalProps> = ({ isOpen, onClose, initialType }) => {
  const [step, setStep] = useState(1);
  const [buildingType, setBuildingType] = useState('Residential');
  const [location, setLocation] = useState('');
  const [locationError, setLocationError] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    console.log('[QuoteModal] useEffect fired:', { isOpen, initialType });
    if (isOpen) {
      setStep(1);
      setSubmitted(false);
      setLocationError('');
      const resolved = typeof initialType === 'string' && initialType ? initialType : 'Residential';
      console.log('[QuoteModal] Setting buildingType to:', resolved);
      setBuildingType(resolved);
    }
  }, [isOpen, initialType]);

  if (!isOpen) return null;

  const handleNextStep1 = () => {
    setStep(2);
  };

  const handleNextStep2 = () => {
    if (!location.trim()) {
      setLocationError('Please fill out this field.');
      return;
    }
    setLocationError('');
    setStep(3);
  };

  const handleBack = () => {
    setLocationError('');
    setStep((prev) => Math.max(1, prev - 1));
  };

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
          _subject: `New Construction Lead - ${fullName} (${buildingType})`,
          _replyto: email || targetEmail,
          _captcha: 'false',
          'Full Name': fullName,
          'Phone Number': `+91 ${phone}`,
          'Email Address': email || 'Not Provided',
          'Building Type': buildingType,
          'Project Location': location || 'Not Specified',
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

  const handleWhatsApp = () => {
    const text = `Hello South India Civil Contractors! I'm ${fullName || 'interested in a quote'} for a ${buildingType} project at ${location || 'South India'}. Phone: ${phone}. Email: ${email || 'None'}`;
    window.open(`https://wa.me/${siteConfig.whatsapp.replace('+', '')}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.68)',
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
      }}
      onClick={(e) => e.target === e.currentTarget && onClose()}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-[460px] rounded-[16px] overflow-hidden shadow-2xl animate-popup flex flex-col"
        style={{
          backgroundColor: '#F5EFE6',
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {/* Top Dark Navy Header */}
        <div className="bg-[#1C3B53] text-white px-6 py-4 flex items-center justify-between">
          <h3 className="text-[17px] font-bold tracking-tight text-white">
            Get Quote
          </h3>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 sm:p-7">
          {submitted ? (
            /* Success View */
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-[#4A2328]/10 text-[#4A2328] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#163048] mb-2">
                Thank You, {fullName}!
              </h4>
              <p className="text-[13.5px] text-[#556987] leading-relaxed mb-6">
                Your quote request for <strong>{buildingType}</strong> ({location || 'South India'}) has been sent to our project team at <strong>care@southindiapainters.com</strong>. We will get in touch with you shortly.
              </p>
              <div className="flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold py-3 px-4 rounded-[8px] flex items-center justify-center gap-2 text-sm shadow transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full bg-white border border-[#CBD5E1] text-[#334155] font-semibold py-2.5 px-4 rounded-[8px] text-sm hover:bg-gray-50 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <>
              {/* Step Indicator Pills */}
              <div className="flex items-center justify-center gap-1.5 mb-6">
                <div
                  className={`h-[4px] rounded-full transition-all duration-300 ${
                    step >= 1 ? 'w-6 bg-[#4A2328]' : 'w-2 bg-[#D8CEC0]'
                  }`}
                />
                <div
                  className={`h-[4px] rounded-full transition-all duration-300 ${
                    step >= 2 ? 'w-6 bg-[#4A2328]' : 'w-2 bg-[#D8CEC0]'
                  }`}
                />
                <div
                  className={`h-[4px] rounded-full transition-all duration-300 ${
                    step >= 3 ? 'w-6 bg-[#4A2328]' : 'w-2 bg-[#D8CEC0]'
                  }`}
                />
              </div>

              {/* ════════════ STEP 1: What are you building? ════════════ */}
              {step === 1 && (
                <div>
                  <h4 className="text-[17.5px] font-bold text-[#163048] mb-5">
                    What are you building?
                  </h4>

                  {/* All Building Type Cards */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {allBuildingTypes.map((item) => {
                      const isSelected = buildingType === item.id;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setBuildingType(item.id)}
                          className={`flex flex-col items-center justify-center p-4 rounded-[12px] transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-[#4A2328] text-white shadow-md'
                              : 'bg-white text-[#334155] border border-[#E2E8F0] hover:border-[#CBD5E1]'
                          }`}
                          style={{ height: '84px' }}
                        >
                          <div className={`mb-2 ${isSelected ? 'text-white' : 'text-[#4A2328]'}`}>
                            {item.icon}
                          </div>
                          <span className="text-[12px] font-semibold leading-tight">
                            {item.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Next Button */}
                  <button
                    type="button"
                    onClick={handleNextStep1}
                    className="w-full bg-[#4A2328] hover:bg-[#391a1e] active:scale-[0.99] text-white font-semibold py-3 px-4 rounded-[8px] text-[14px] transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Next</span>
                    <span>›</span>
                  </button>
                </div>
              )}

              {/* ════════════ STEP 2: Where's your project? ════════════ */}
              {step === 2 && (
                <div>
                  <h4 className="text-[17.5px] font-bold text-[#163048] mb-4">
                    Where's your project?
                  </h4>

                  <div className="mb-6">
                    <label className="block text-[12.5px] font-semibold text-[#334155] mb-2">
                      Project Location <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      autoFocus
                      placeholder="e.g., Whitefield, Bangalore"
                      value={location}
                      onChange={(e) => {
                        setLocation(e.target.value);
                        if (locationError && e.target.value.trim()) {
                          setLocationError('');
                        }
                      }}
                      onKeyDown={(e) => e.key === 'Enter' && handleNextStep2()}
                      className={`w-full bg-white border rounded-[8px] px-4 py-3 text-[14px] text-[#1E293B] placeholder-[#94A3B8] transition-all focus:outline-none ${
                        locationError
                          ? 'border-red-500 ring-1 ring-red-500 focus:border-red-500 focus:ring-red-500'
                          : 'border-[#CBD5E1] focus:border-[#4A2328] focus:ring-1 focus:ring-[#4A2328]'
                      }`}
                    />
                    {locationError && (
                      <p className="mt-2 text-[12.5px] text-red-600 font-medium flex items-center gap-1.5 animate-fadeIn">
                        <svg className="w-3.5 h-3.5 text-red-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="8" x2="12" y2="12"></line>
                          <line x1="12" y1="16" x2="12.01" y2="16"></line>
                        </svg>
                        <span>{locationError}</span>
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 bg-white border border-[#CBD5E1] text-[#334155] hover:bg-gray-50 font-semibold py-2.5 px-4 rounded-[8px] text-[14px] transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      onClick={handleNextStep2}
                      className="flex-1 bg-[#4A2328] hover:bg-[#391a1e] text-white font-semibold py-2.5 px-4 rounded-[8px] text-[14px] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
                    >
                      <span>Next</span>
                      <span>›</span>
                    </button>
                  </div>
                </div>
              )}

              {/* ════════════ STEP 3: How can we reach you? ════════════ */}
              {step === 3 && (
                <form onSubmit={handleSubmit}>
                  <p className="text-[11.5px] font-medium text-[#718096] mb-1">
                    Step 3 of 3
                  </p>
                  <h4 className="text-[17.5px] font-bold text-[#163048] mb-4">
                    How can we reach you?
                  </h4>

                  {/* Full Name */}
                  <div className="mb-3.5">
                    <label className="block text-[12px] font-semibold text-[#334155] mb-1.5">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Enter your name"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-white border border-[#CBD5E1] rounded-[8px] px-4 py-2.5 text-[14px] text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#4A2328] focus:ring-1 focus:ring-[#4A2328]"
                    />
                  </div>

                  {/* Phone Number */}
                  <div className="mb-3.5">
                    <label className="block text-[12px] font-semibold text-[#334155] mb-1.5">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex bg-white border border-[#CBD5E1] rounded-[8px] overflow-hidden focus-within:border-[#4A2328] focus-within:ring-1 focus-within:ring-[#4A2328]">
                      <span className="bg-[#EAE4D8] px-3 py-2.5 text-[13px] font-semibold text-[#475569] flex items-center border-r border-[#CBD5E1]">
                        +91
                      </span>
                      <input
                        type="tel"
                        required
                        maxLength={10}
                        placeholder="10-digit mobile number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                        className="w-full bg-transparent px-3.5 py-2.5 text-[14px] text-[#1E293B] placeholder-[#94A3B8] focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="mb-4">
                    <label className="block text-[12px] font-semibold text-[#334155] mb-1.5">
                      Email Address <span className="text-[#718096] font-normal">(Optional)</span>
                    </label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white border border-[#CBD5E1] rounded-[8px] px-4 py-2.5 text-[14px] text-[#1E293B] placeholder-[#94A3B8] focus:outline-none focus:border-[#4A2328] focus:ring-1 focus:ring-[#4A2328]"
                    />
                  </div>

                  {/* Privacy note */}
                  <div className="flex items-center gap-1.5 text-[12px] text-[#718096] mb-5">
                    <Lock className="w-3.5 h-3.5 text-[#718096]" />
                    <span>Your info is secure</span>
                  </div>

                  {/* Buttons */}
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex-1 bg-white border border-[#CBD5E1] text-[#334155] hover:bg-gray-50 font-semibold py-2.5 px-4 rounded-[8px] text-[14px] transition-colors cursor-pointer"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting || !fullName.trim() || phone.length !== 10}
                      className={`flex-1 font-semibold py-2.5 px-4 rounded-[8px] text-[14px] transition-all shadow-sm flex items-center justify-center active:scale-98 ${
                        !isSubmitting && fullName.trim() && phone.length === 10
                          ? 'bg-[#4A2328] hover:bg-[#391a1e] text-white cursor-pointer'
                          : 'bg-[#A39188] text-white cursor-not-allowed'
                      }`}
                    >
                      {isSubmitting ? 'Sending...' : 'Get Free Quote'}
                    </button>
                  </div>
                </form>
              )}
            </>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default QuoteModal;

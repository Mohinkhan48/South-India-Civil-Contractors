import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { X, Download, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/site';

interface DownloadPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageName?: string;
}

export const DownloadPackageModal: React.FC<DownloadPackageModalProps> = ({
  isOpen,
  onClose,
  packageName = 'Download Premium Construction Package Details',
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const isFormValid = fullName.trim().length > 0 && phone.length === 10;

  const triggerFileDownload = () => {
    const link = document.createElement('a');
    link.href = '/images/Download Package Details.png';
    link.download = 'Download Package Details.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);

    // Trigger image file download
    triggerFileDownload();

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
          _subject: `Package Download Lead - ${fullName} (${packageName})`,
          _captcha: 'false',
          'Full Name': fullName,
          'Phone Number': `+91 ${phone}`,
          'Package Requested': packageName,
          'Submission Time': new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        }),
      });
    } catch (err) {
      console.warn('Package download dispatch notice:', err);
    } finally {
      clearTimeout(timeoutId);
      setIsSubmitting(false);
      setDownloaded(true);
    }
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-fadeIn"
      style={{
        backgroundColor: 'rgba(15, 23, 42, 0.65)',
        backdropFilter: 'blur(5px)',
        WebkitBackdropFilter: 'blur(5px)',
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-md bg-[#F4EEE5] rounded-3xl shadow-2xl overflow-hidden border border-gray-200 animate-scaleUp">
        {/* Dark Navy/Slate Header */}
        <div className="bg-[#1B3644] px-6 py-5 flex items-start justify-between relative">
          <h2 className="text-white font-bold text-lg sm:text-xl leading-snug max-w-[85%]">
            {packageName}
          </h2>
          <button
            onClick={onClose}
            type="button"
            aria-label="Close"
            className="text-white/80 hover:text-white transition-colors cursor-pointer p-1 rounded-lg hover:bg-white/10"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Cream Content Body */}
        <div className="p-6 sm:p-7">
          {!downloaded ? (
            <>
              <p className="text-[#3C4E5A] text-sm font-medium mb-6">
                Please provide your details to download the package
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-bold text-[#1B3644] tracking-wide mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Enter your name"
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#1B3644] focus:border-[#1B3644] focus:outline-none transition-all placeholder:text-gray-400 font-medium shadow-xs"
                  />
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-bold text-[#1B3644] tracking-wide mb-1.5">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-white border border-[#CBD5E1] rounded-xl px-4 py-3 text-sm text-[#1B3644] focus:border-[#1B3644] focus:outline-none transition-all placeholder:text-gray-400 font-medium shadow-xs"
                  />
                </div>

                {/* Submit / Download Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full font-bold text-sm sm:text-base py-3.5 px-6 rounded-xl flex items-center justify-center gap-2.5 shadow-md transition-all duration-300 active:scale-95 cursor-pointer text-white ${
                      isFormValid
                        ? 'bg-[#3D1E24] hover:bg-[#2A1418] shadow-lg'
                        : 'bg-[#A39188] hover:bg-[#96847B]'
                    }`}
                  >
                    <Download className="w-5 h-5" />
                    <span>
                      {isSubmitting ? 'Downloading...' : 'Download Package Details'}
                    </span>
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="py-6 text-center space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-xs">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#1B3644]">Download Started!</h3>
              <p className="text-sm text-[#3C4E5A] leading-relaxed max-w-xs mx-auto">
                Thank you, {fullName}! Your package details image file is downloading.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-4 px-7 py-3 bg-[#1B3644] hover:bg-[#28485A] text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
              >
                Close Window
              </button>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};

export default DownloadPackageModal;


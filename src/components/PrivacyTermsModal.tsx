import React from 'react';
import { siteConfig } from '../config/site';
import { X, ShieldCheck } from 'lucide-react';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#2B2925] border border-[#D8B878]/40 rounded-md shadow-2xl overflow-hidden my-8 max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-[#D8B878]/25 bg-[#34312B] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-[#C99A4A]" />
            <h3 className="font-serif-heading text-xl font-bold text-[#F5F0E7]">
              {isPrivacy ? 'Privacy & Data Protection Policy' : 'Terms & Conditions of Contract'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-sm text-[#C8C0B4] hover:text-[#C99A4A] transition-colors focus:outline-none"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 text-xs sm:text-sm text-[#C8C0B4] leading-relaxed custom-scrollbar">
          {isPrivacy ? (
            <>
              <p>
                At <strong className="text-[#F5F0E7]">{siteConfig.companyName}</strong>, we respect your confidentiality and privacy. Any personal information submitted through our quotation forms, WhatsApp communication, or site feasibility surveys is collected strictly for engineering consultation, cost estimation, and contractual communication.
              </p>
              <h4 className="font-bold text-[#E8DDC9] text-sm pt-2">1. Data We Collect</h4>
              <p>We collect contact coordinates (name, telephone number, email), project plot location, architectural drawings, and budgetary guidelines necessary to provide accurate Bill of Quantities (BOQ).</p>
              <h4 className="font-bold text-[#E8DDC9] text-sm pt-2">2. Confidentiality & Non-Disclosure</h4>
              <p>Your architectural blueprints and plot details are held in strict commercial confidence and will never be shared with third-party marketing entities.</p>
              <h4 className="font-bold text-[#E8DDC9] text-sm pt-2">3. Direct Contact</h4>
              <p>For questions concerning your data or project documentation, please contact our Legal & Compliance desk at <span className="text-[#D8B878]">{siteConfig.email}</span>.</p>
            </>
          ) : (
            <>
              <p>
                Welcome to <strong className="text-[#F5F0E7]">{siteConfig.companyName}</strong>. All contracting proposals, structural executions, and turnkey assignments are governed by written master service agreements and milestone-linked payment schedules.
              </p>
              <h4 className="font-bold text-[#E8DDC9] text-sm pt-2">1. Estimation & Preliminary BOQ</h4>
              <p>Online cost estimates and preliminary BOQs are indicative engineering approximations based on standard soil conditions. Final binding quotations are established following soil test verification, structural engineer approvals, and signed contract schedules.</p>
              <h4 className="font-bold text-[#E8DDC9] text-sm pt-2">2. Structural Warranty & Guarantees</h4>
              <p>Our 10-Year Structural Guarantee applies to reinforced concrete (RCC) foundations and primary structural frames executed under our complete turnkey supervision, subject to terms stipulated in the formal handover certificate.</p>
              <h4 className="font-bold text-[#E8DDC9] text-sm pt-2">3. Statutory Clearances & Compliance</h4>
              <p>Projects are executed in accordance with the National Building Code (NBC) of India, state municipal corporation guidelines, and Bureau of Indian Standards (BIS) specifications.</p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-[#D8B878]/20 bg-[#34312B] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-[#C99A4A] hover:bg-[#D8B878] text-[#2B2925] text-xs font-bold uppercase tracking-wider rounded-sm"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
};

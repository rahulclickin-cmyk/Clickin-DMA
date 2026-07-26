import React, { useState } from 'react';
import { X, Tag, Sparkles, Check, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveNewLead } from '../lib/leadStorage';

interface DiscountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onLeadSubmitted: () => void;
}

export const DiscountModal: React.FC<DiscountModalProps> = ({
  isOpen,
  onClose,
  onLeadSubmitted
}) => {
  const [claimedDiscount, setClaimedDiscount] = useState<string>('20% OFF');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [claimed, setClaimed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      saveNewLead({
        name: name.trim(),
        phone: phone.trim(),
        message: `Claimed Special Offer: ${claimedDiscount}`,
        serviceSelected: `Discount Offer (${claimedDiscount})`
      });

      setIsSubmitting(false);
      setClaimed(true);
      onLeadSubmitted();

      try {
        confetti({
          particleCount: 100,
          spread: 90,
          origin: { y: 0.5 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-[#111111] border-2 border-amber-500 rounded-3xl max-w-md w-full p-6 md:p-8 space-y-6 relative shadow-2xl animate-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-neutral-800 text-neutral-300 hover:text-white p-2 rounded-full cursor-pointer transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center space-y-2">
          <div className="w-14 h-14 bg-amber-500/10 border border-amber-500/30 rounded-2xl flex items-center justify-center mx-auto text-amber-400">
            <Tag className="w-7 h-7" />
          </div>
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 inline-block">
            CLICKIN DIGITAL EXCLUSIVE
          </span>
          <h3 className="text-2xl font-black text-white">
            Unlock Special Discount!
          </h3>
          <p className="text-xs text-neutral-400">
            Get up to ₹2,000 extra off on Website & AI Lead Automation packages today.
          </p>
        </div>

        {/* Discount selector badges */}
        <div className="grid grid-cols-2 gap-2 text-center">
          {[
            { discount: '₹500 OFF', sub: 'Landing Page' },
            { discount: '₹1,000 OFF', sub: 'Professional' },
            { discount: '₹1,500 OFF', sub: 'Booking Website' },
            { discount: '₹2,000 OFF', sub: 'E-Commerce' }
          ].map((item, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setClaimedDiscount(item.discount)}
              className={`p-3 rounded-xl border transition-all text-xs cursor-pointer ${
                claimedDiscount === item.discount
                  ? 'bg-amber-500 text-black font-black border-amber-400 shadow-lg'
                  : 'bg-neutral-900 text-neutral-300 border-neutral-800 hover:border-neutral-700'
              }`}
            >
              <div className="text-sm font-black">{item.discount}</div>
              <div className="text-[10px] opacity-80">{item.sub}</div>
            </button>
          ))}
        </div>

        {claimed ? (
          <div className="bg-amber-500/10 border border-amber-500/50 rounded-2xl p-6 text-center space-y-3">
            <div className="w-12 h-12 bg-amber-500 text-black rounded-full flex items-center justify-center mx-auto font-black text-xl">
              <Check className="w-6 h-6 stroke-[3]" />
            </div>
            <h4 className="font-bold text-amber-400 text-base">
              Coupon Code Locked!
            </h4>
            <p className="text-xs text-neutral-300">
              Coupon <strong>{claimedDiscount}</strong> saved for <strong>{phone}</strong>. Rahul Singh will contact you to apply this discount.
            </p>
            <button
              onClick={onClose}
              className="bg-amber-500 text-black font-bold text-xs px-6 py-2.5 rounded-xl cursor-pointer"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-neutral-300 mb-1">Your Name *</label>
              <input
                type="text"
                required
                placeholder="Enter Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white text-black font-medium px-4 py-3 rounded-xl text-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-neutral-300 mb-1">Mobile Number (for WhatsApp coupon) *</label>
              <div className="relative flex items-center">
                <span className="absolute left-3 text-sm font-bold text-neutral-600 flex items-center gap-1">
                  🇮🇳 +91
                </span>
                <input
                  type="tel"
                  required
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-white text-black font-medium pl-18 pr-4 py-3 rounded-xl text-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#ffb700] hover:bg-[#e0a200] text-black font-black text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider"
            >
              {isSubmitting ? (
                <span>Locking Discount...</span>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>CLAIM {claimedDiscount} NOW</span>
                  <Send className="w-4 h-4 fill-black" />
                </>
              )}
            </button>
          </form>
        )}

      </div>
    </div>
  );
};

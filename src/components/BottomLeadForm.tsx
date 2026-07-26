import React, { useState } from 'react';
import { Send, Sparkles, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveNewLead } from '../lib/leadStorage';

interface BottomLeadFormProps {
  onLeadSubmitted: () => void;
}

export const BottomLeadForm: React.FC<BottomLeadFormProps> = ({ onLeadSubmitted }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      saveNewLead({
        name: name.trim(),
        phone: phone.trim(),
        message: message.trim() || 'Bottom lead form inquiry',
        serviceSelected: 'Heavy Discount Lead'
      });

      setIsSubmitting(false);
      setSubmitted(true);
      onLeadSubmitted();

      try {
        confetti({
          particleCount: 100,
          spread: 80,
          origin: { y: 0.8 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <section className="bg-black text-white py-16 px-4 md:px-8 border-b border-neutral-900">
      <div className="max-w-3xl mx-auto space-y-8">
        
        {/* Title */}
        <div className="text-center space-y-2">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Limited Time Special Offer</span>
          </div>
          <h2 className="text-2xl md:text-4xl font-black text-amber-400">
            Contact Us For Heavy discounts HURRY !
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm">
            Fill out the quick inquiry form below and get an instant discount code + custom proposal from Rahul Singh.
          </p>
        </div>

        {/* Form */}
        <div className="bg-[#0e0e0e] border border-amber-500/40 rounded-2xl p-6 md:p-8 shadow-2xl">
          {submitted ? (
            <div className="bg-amber-500/10 border border-amber-500/50 rounded-xl p-8 text-center space-y-4">
              <div className="w-14 h-14 bg-amber-500 text-black rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
                ✓
              </div>
              <h3 className="text-xl font-bold text-amber-400">Your Discount Claimed!</h3>
              <p className="text-xs md:text-sm text-neutral-300">
                Thank you <strong>{name}</strong>! We have locked in your heavy discount rate. Rahul Singh will reach out at <strong>{phone}</strong> shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setPhone('');
                  setMessage('');
                }}
                className="text-xs text-amber-400 underline font-semibold pt-2 cursor-pointer"
              >
                Submit another inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white text-black font-medium px-4 py-3 rounded-lg text-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">Phone Number *</label>
                <div className="relative flex items-center">
                  <span className="absolute left-3 text-sm font-bold text-neutral-600 flex items-center gap-1">
                    🇮🇳 +91
                  </span>
                  <input
                    type="tel"
                    required
                    placeholder="Phone No."
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-white text-black font-medium pl-18 pr-4 py-3 rounded-lg text-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-300 mb-1">Comment or Message</label>
                <textarea
                  rows={3}
                  placeholder="Comment or Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white text-black font-medium px-4 py-2.5 rounded-lg text-sm border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#ffb700] hover:bg-[#e0a200] text-black font-black text-base py-3.5 rounded-lg shadow-lg hover:shadow-amber-500/40 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider mt-2"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <span>SUBMIT</span>
                    <Send className="w-4 h-4 fill-black" />
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-4 pt-3 border-t border-neutral-800 text-center text-[11px] text-neutral-400 flex items-center justify-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Clickin Digital • Official Response within 15 Minutes</span>
          </div>
        </div>

      </div>
    </section>
  );
};

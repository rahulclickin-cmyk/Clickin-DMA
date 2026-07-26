import React, { useState } from 'react';
import { CheckCircle2, Tag, Send, Sparkles, ShieldCheck, PhoneCall, Award } from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveNewLead } from '../lib/leadStorage';
import { LeadInquiry } from '../types';

interface HeroProps {
  onDiscountClick: () => void;
  onLeadSubmitted: (lead: LeadInquiry) => void;
}

export const Hero: React.FC<HeroProps> = ({ onDiscountClick, onLeadSubmitted }) => {
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
      const createdLead = saveNewLead({
        name: name.trim(),
        phone: phone.trim(),
        message: message.trim() || 'Hero section lead form submission',
        serviceSelected: 'Starter/Hero Website Lead'
      });

      setIsSubmitting(false);
      setSubmitted(true);
      onLeadSubmitted(createdLead);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.error(err);
      }
    }, 600);
  };

  return (
    <section className="relative bg-gradient-to-b from-amber-50/80 via-white to-slate-50 text-slate-900 py-12 md:py-20 px-4 md:px-8 border-b border-amber-200/80 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
        
        {/* Left Hero Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-100/80 border border-amber-300 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-bold text-amber-900">
            <Award className="w-4 h-4 text-amber-600" />
            <span>Rahul Singh • Clickin DMA</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tight">
            Professional Responsive Website Designing <br className="hidden sm:inline" />
            <span className="text-amber-600">Starts from ₹3999</span>
          </h1>

          <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl font-normal">
            <strong className="text-amber-800 font-bold">Clickin Digital</strong> (Lead Generation & Marketing Automation Specialist) will help you create a beautiful, high-converting website to impress and engage new customers and scale your business online.
          </p>

          {/* Bullet List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-700">
            {[
              'Responsive Website Design',
              'Dedicated Account Manager (Rahul)',
              'Affordable & Transparent Cost',
              '24/7 Priority Support',
              '100% Satisfaction Guaranteed',
              'One Week Unlimited Revision'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                <span className="font-semibold text-slate-800">{item}</span>
              </div>
            ))}
          </div>

          {/* Discounts CTA Button */}
          <div className="pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={onDiscountClick}
              className="w-full sm:w-auto bg-gradient-to-r from-red-600 via-orange-600 to-amber-500 hover:from-red-700 hover:to-amber-600 text-white font-black text-base px-8 py-3.5 rounded-xl shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer flex items-center justify-center gap-2 border border-red-400/40 uppercase tracking-wide"
            >
              <Tag className="w-5 h-5 text-yellow-200" />
              CLICK HERE FOR DISCOUNTS
            </button>

            <a
              href="tel:+918882292448"
              className="w-full sm:w-auto bg-white hover:bg-slate-50 border border-slate-300 text-slate-900 font-bold px-6 py-3.5 rounded-xl text-sm flex items-center justify-center gap-2 transition-all shadow-sm"
            >
              <PhoneCall className="w-4 h-4 text-amber-600" />
              Direct Call: +91 88822 92448
            </a>
          </div>

          {/* Rating indicator */}
          <div className="pt-2 flex items-center gap-3 text-xs text-slate-500">
            <div className="flex text-amber-500 font-bold">
              {'★'.repeat(5)}
            </div>
            <span className="font-medium">4.9/5 Star Rated Google Certified Agency • 200+ Indian Businesses Served</span>
          </div>
        </div>

        {/* Right Lead Capture Form Card */}
        <div className="lg:col-span-5">
          <div className="bg-white/95 border-2 border-amber-300 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden backdrop-blur-md text-slate-900">
            {/* Header tag */}
            <div className="text-center space-y-1.5 mb-6">
              <span className="text-amber-800 font-extrabold text-xs uppercase tracking-widest bg-amber-100 px-3.5 py-1 rounded-full border border-amber-300">
                Avail discounts Hurry up !
              </span>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 pt-2">
                Connect with best developer & web expert near me
              </h2>
              <p className="text-xs text-slate-500 font-medium">
                Get a callback within 15 minutes from Rahul Singh
              </p>
            </div>

            {submitted ? (
              <div className="bg-amber-50 border border-amber-300 rounded-xl p-6 text-center space-y-3">
                <div className="w-12 h-12 bg-amber-500 text-slate-950 rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-amber-900">Inquiry Received Successfully!</h3>
                <p className="text-xs text-slate-700">
                  Thank you <strong>{name}</strong>! Rahul Singh will contact you at <strong>{phone}</strong> shortly with your exclusive discount offer.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setName('');
                    setPhone('');
                    setMessage('');
                  }}
                  className="text-xs text-amber-700 underline font-semibold pt-2"
                >
                  Submit another response
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 font-medium px-4 py-3 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-sm font-bold text-slate-600 flex items-center gap-1">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      required
                      placeholder="Phone No."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 text-slate-900 font-medium pl-18 pr-4 py-3 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Comment or Message</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your requirement or business type..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full bg-slate-50 text-slate-900 font-medium px-4 py-2.5 rounded-lg text-sm border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-black text-base py-3.5 rounded-lg shadow-md hover:shadow-amber-500/30 transition-all flex items-center justify-center gap-2 cursor-pointer uppercase tracking-wider mt-2"
                >
                  {isSubmitting ? (
                    <span>Submitting...</span>
                  ) : (
                    <>
                      <span>SUBMIT</span>
                      <Send className="w-4 h-4 fill-slate-950" />
                    </>
                  )}
                </button>
              </form>
            )}

            <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
              <span>100% Privacy • No Spam Guarantee</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

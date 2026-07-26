import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918882292448?text=Hi%20Rahul%20Singh%2C%20I%20am%20interested%20in%20website%20design%20and%20AI%20automation%20services."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-2xl transition-transform hover:scale-110 relative group"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-emerald-500" />
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-neutral-700">
          Chat with Rahul Singh
        </span>
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white" />
      </a>

      {/* Direct Phone Floating Button */}
      <a
        href="tel:+918882292448"
        aria-label="Call Now"
        className="w-12 h-12 bg-amber-500 hover:bg-amber-400 text-black rounded-full flex items-center justify-center shadow-xl transition-transform hover:scale-110 relative group"
      >
        <Phone className="w-5 h-5 fill-black" />
        <span className="absolute right-14 top-1/2 -translate-y-1/2 bg-black text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg border border-neutral-700">
          Call: +91 88822 92448
        </span>
      </a>
    </div>
  );
};

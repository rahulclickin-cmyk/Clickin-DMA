import React from 'react';
import { Star, ShieldCheck, Heart, TrendingUp, Users, Award, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HappyClientsProps {
  onBookCallClick: () => void;
}

export const HappyClients: React.FC<HappyClientsProps> = ({ onBookCallClick }) => {
  const happyClients = [
    {
      id: "hc-1",
      name: "Dr. Vikram Sharma",
      business: "Sharma Dental Clinic (Dwarka)",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=200&auto=format&fit=crop&q=80",
      rating: 5,
      metric: "4.2x Appointment Leads",
      quote: "Rahul Singh created a high-converting website with an automated WhatsApp booking system. Our daily patient calls doubled within 2 weeks!",
      location: "Dwarka Sector 12"
    },
    {
      id: "hc-2",
      name: "Anuj Gupta",
      business: "Gupta Sweets & Bakers",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80",
      rating: 5,
      metric: "#1 Local Google Pack",
      quote: "The Local SEO and ₹8,000 business website brought our bakery to rank #1 on Google Maps in Najafgarh. We get continuous catering orders now.",
      location: "Najafgarh Main Market"
    },
    {
      id: "hc-3",
      name: "Pooja Malhotra",
      business: "Subhash Nagar Fashion Boutique",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80",
      rating: 5,
      metric: "₹1.8 Lakh Monthly Sales",
      quote: "Our E-Commerce website with Razorpay payment setup was delivered in just 4 days. Clickin DMA is the most honest agency in West Delhi!",
      location: "Subhash Nagar"
    },
    {
      id: "hc-4",
      name: "Rajesh Varma",
      business: "Anzac Safety Solutions",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80",
      rating: 5,
      metric: "Global SEO Success",
      quote: "Extremely professional agency. Rahul handled our international website architecture & speed optimization flawlessly. Highly recommended!",
      location: "Global Client"
    }
  ];

  return (
    <section className="bg-slate-50 text-slate-900 py-20 px-4 md:px-8 border-b border-amber-200/80 relative">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 border border-amber-300 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-sm">
            <Heart className="w-4 h-4 text-amber-600 fill-amber-600" />
            <span>200+ Satisfied Business Owners</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Our <span className="text-amber-600">Happy Clients</span> & Success Stories
          </h2>

          <p className="text-slate-600 text-sm md:text-base font-medium">
            Discover how real local business owners in Najafgarh, Dwarka, Uttam Nagar, Tilak Nagar & Subhash Nagar grow their revenue with Clickin DMA.
          </p>
        </div>

        {/* 4 Stats Banners */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-amber-400 transition-colors">
            <div className="text-2xl md:text-3xl font-black text-amber-600">200+</div>
            <div className="text-xs font-bold text-slate-800">Websites Delivered</div>
            <p className="text-[11px] text-slate-500">100% On-Time Completion</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-amber-400 transition-colors">
            <div className="text-2xl md:text-3xl font-black text-emerald-600">4.9 ★</div>
            <div className="text-xs font-bold text-slate-800">Google Verified Rating</div>
            <p className="text-[11px] text-slate-500">180+ Client Reviews</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-amber-400 transition-colors">
            <div className="text-2xl md:text-3xl font-black text-blue-600">3.8x</div>
            <div className="text-xs font-bold text-slate-800">Average ROAS Increase</div>
            <p className="text-[11px] text-slate-500">Google & Meta Ads</p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-5 text-center space-y-1 shadow-sm hover:border-amber-400 transition-colors">
            <div className="text-2xl md:text-3xl font-black text-amber-600">98%</div>
            <div className="text-xs font-bold text-slate-800">Client Retention</div>
            <p className="text-[11px] text-slate-500">Long-Term Growth</p>
          </div>
        </div>

        {/* Client Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {happyClients.map((client) => (
            <div
              key={client.id}
              className="bg-white border border-slate-200 hover:border-amber-400 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 relative"
            >
              <div className="space-y-4">
                {/* Header Profile */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={client.image}
                      alt={client.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-amber-400 shadow"
                    />
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm flex items-center gap-1">
                        {client.name}
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                      </h4>
                      <p className="text-xs text-amber-900 font-bold">{client.business}</p>
                      <span className="text-[10px] text-slate-500 font-medium">{client.location}</span>
                    </div>
                  </div>

                  <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px] font-black px-3 py-1 rounded-full shrink-0">
                    {client.metric}
                  </span>
                </div>

                {/* Rating & Quote */}
                <div className="space-y-2 pt-1">
                  <div className="flex text-amber-500 text-sm">
                    {Array.from({ length: client.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-slate-700 font-medium italic leading-relaxed">
                    "{client.quote}"
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-semibold">
                <span className="flex items-center gap-1 text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Project Client
                </span>
                <span className="text-slate-400">Delhi NCR Service</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 rounded-3xl p-8 text-slate-950 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-slate-950">
              Ready to Become Our Next Happy Client?
            </h3>
            <p className="text-slate-900 font-extrabold text-xs md:text-sm">
              Get a custom high-converting website + local lead setup starting at just ₹3,999.
            </p>
          </div>

          <button
            onClick={onBookCallClick}
            className="bg-slate-950 hover:bg-slate-900 text-white px-6 py-3.5 rounded-2xl font-black text-xs md:text-sm shadow-xl flex items-center gap-2 cursor-pointer transition-all hover:scale-105 shrink-0"
          >
            <span>Book Free Strategy Call</span>
            <ArrowRight className="w-4 h-4 text-amber-400" />
          </button>
        </div>

      </div>
    </section>
  );
};

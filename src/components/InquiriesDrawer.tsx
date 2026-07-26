import React from 'react';
import { LeadInquiry } from '../types';
import { X, Trash2, Download, Phone, MessageSquare, ShieldCheck, User } from 'lucide-react';

interface InquiriesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  leads: LeadInquiry[];
  onClearLeads: () => void;
}

export const InquiriesDrawer: React.FC<InquiriesDrawerProps> = ({
  isOpen,
  onClose,
  leads,
  onClearLeads
}) => {
  if (!isOpen) return null;

  const exportCSV = () => {
    if (leads.length === 0) return;
    const headers = ['ID', 'Name', 'Phone', 'Service Selected', 'Submitted At', 'Message'];
    const rows = leads.map(l => [
      l.id,
      `"${l.name}"`,
      `"${l.phone}"`,
      `"${l.serviceSelected || 'Standard Inquiry'}"`,
      `"${l.submittedAt}"`,
      `"${(l.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `clickin_digital_leads_${Date.now()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end">
      <div className="bg-[#0f0f0f] border-l border-neutral-800 w-full max-w-lg h-full overflow-y-auto p-6 space-y-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-neutral-800 pb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <div>
                <h3 className="font-extrabold text-white text-lg">Inquiries & Leads Admin</h3>
                <span className="text-xs text-neutral-400">Captured submissions for Rahul Singh</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-neutral-800 text-neutral-300 hover:text-white rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20">
              Total Inquiries: {leads.length}
            </span>

            <div className="flex items-center gap-2">
              {leads.length > 0 && (
                <>
                  <button
                    onClick={exportCSV}
                    className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-amber-400 border border-neutral-700 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    CSV
                  </button>

                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to clear all leads?')) {
                        onClearLeads();
                      }
                    }}
                    className="px-3 py-1.5 bg-red-950/80 hover:bg-red-900 text-red-300 border border-red-800 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                    Clear
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Lead List */}
        <div className="flex-1 overflow-y-auto space-y-4 pr-1">
          {leads.length === 0 ? (
            <div className="text-center py-20 text-neutral-500 space-y-2">
              <MessageSquare className="w-10 h-10 mx-auto opacity-30" />
              <p className="text-sm">No lead submissions recorded yet.</p>
              <p className="text-xs text-neutral-600">Submit any form on the page to test lead capture!</p>
            </div>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-[#141414] border border-neutral-800 rounded-xl p-4 space-y-3 shadow-md"
              >
                <div className="flex items-start justify-between gap-2 border-b border-neutral-800/80 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center font-bold text-xs">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm">{lead.name}</h4>
                      <span className="text-[10px] text-amber-400 font-semibold">{lead.serviceSelected}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-neutral-500">{lead.submittedAt}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-neutral-300">
                  <span className="font-mono bg-neutral-900 px-2 py-1 rounded border border-neutral-800 text-amber-300">
                    {lead.phone}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${lead.phone.replace(/[^0-9+]/g, '')}`}
                      className="p-1.5 bg-amber-500 text-black rounded hover:bg-amber-400 transition-colors"
                      title="Call Phone"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-500 transition-colors"
                      title="Message on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {lead.message && (
                  <p className="text-xs text-neutral-400 bg-neutral-900/80 p-2.5 rounded-lg border border-neutral-800/60 leading-relaxed italic">
                    "{lead.message}"
                  </p>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-neutral-800 text-center text-xs text-neutral-500">
          Clickin Digital Marketing Agency • Rahul Singh Lead System
        </div>

      </div>
    </div>
  );
};

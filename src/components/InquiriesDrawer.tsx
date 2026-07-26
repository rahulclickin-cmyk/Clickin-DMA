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
    <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-md flex justify-end">
      <div className="bg-white border-l border-slate-200 w-full max-w-lg h-full overflow-y-auto p-6 space-y-6 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300 text-slate-900">
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-600" />
              <div>
                <h3 className="font-black text-slate-900 text-lg">Inquiries & Leads Admin</h3>
                <span className="text-xs text-slate-500 font-medium">Captured submissions for Rahul Singh</span>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 bg-slate-100 text-slate-600 hover:text-slate-900 rounded-lg cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center justify-between gap-2">
            <span className="text-xs font-bold text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              Total Inquiries: {leads.length}
            </span>

            <div className="flex items-center gap-2">
              {leads.length > 0 && (
                <>
                  <button
                    onClick={exportCSV}
                    className="px-3 py-1.5 bg-slate-100 hover:bg-amber-50 text-amber-900 border border-slate-300 rounded-lg text-xs font-extrabold flex items-center gap-1 cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5 text-amber-600" />
                    CSV
                  </button>

                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to clear all leads?')) {
                        onClearLeads();
                      }
                    }}
                    className="px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 rounded-lg text-xs font-bold flex items-center gap-1 cursor-pointer"
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
            <div className="text-center py-20 text-slate-400 space-y-2">
              <MessageSquare className="w-10 h-10 mx-auto opacity-30" />
              <p className="text-sm font-semibold">No lead submissions recorded yet.</p>
              <p className="text-xs text-slate-500">Submit any form on the page to test lead capture!</p>
            </div>
          ) : (
            leads.map((lead) => (
              <div
                key={lead.id}
                className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-3 shadow-sm"
              >
                <div className="flex items-start justify-between gap-2 border-b border-slate-200 pb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-amber-100 border border-amber-300 text-amber-900 flex items-center justify-center font-bold text-xs">
                      <User className="w-4 h-4 text-amber-700" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-900 text-sm">{lead.name}</h4>
                      <span className="text-[10px] text-amber-800 font-bold">{lead.serviceSelected}</span>
                    </div>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium">{lead.submittedAt}</span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-700">
                  <span className="font-mono bg-white px-2 py-1 rounded border border-slate-200 text-amber-900 font-bold">
                    {lead.phone}
                  </span>

                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${lead.phone.replace(/[^0-9+]/g, '')}`}
                      className="p-1.5 bg-amber-500 text-slate-950 rounded hover:bg-amber-600 transition-colors font-bold"
                      title="Call Phone"
                    >
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/${lead.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 bg-emerald-600 text-white rounded hover:bg-emerald-700 transition-colors"
                      title="Message on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>

                {lead.message && (
                  <p className="text-xs text-slate-700 bg-white p-2.5 rounded-lg border border-slate-200 leading-relaxed italic font-medium">
                    "{lead.message}"
                  </p>
                )}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-200 text-center text-xs text-slate-500 font-medium">
          Clickin Digital Marketing Agency • Rahul Singh Lead System
        </div>

      </div>
    </div>
  );
};

import { LeadInquiry } from '../types';

const LEADS_STORAGE_KEY = 'clickin_digital_leads';

export function getStoredLeads(): LeadInquiry[] {
  try {
    const raw = localStorage.getItem(LEADS_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch (e) {
    console.error('Error reading leads:', e);
    return [];
  }
}

export function saveNewLead(lead: Omit<LeadInquiry, 'id' | 'submittedAt'>): LeadInquiry {
  const existing = getStoredLeads();
  const newLead: LeadInquiry = {
    ...lead,
    id: 'lead-' + Date.now(),
    submittedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })
  };
  const updated = [newLead, ...existing];
  try {
    localStorage.setItem(LEADS_STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving lead:', e);
  }
  return newLead;
}

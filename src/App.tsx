import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSliders } from './components/ServicesSliders';
import { SocialSidebar } from './components/SocialSidebar';
import { DiscussIdea } from './components/DiscussIdea';
import { TrustRatings } from './components/TrustRatings';
import { HowItWorks } from './components/HowItWorks';
import { StatsCounter } from './components/StatsCounter';
import { PricingPackages } from './components/PricingPackages';
import { ProjectShowcase } from './components/ProjectShowcase';
import { VideoTestimonials } from './components/VideoTestimonials';
import { SanityPosts } from './components/SanityPosts';
import { BottomLeadForm } from './components/BottomLeadForm';
import { Footer } from './components/Footer';
import { DiscountModal } from './components/DiscountModal';
import { BookCallModal } from './components/BookCallModal';
import { FloatingContact } from './components/FloatingContact';
import { InquiriesDrawer } from './components/InquiriesDrawer';
import { getStoredLeads } from './lib/leadStorage';
import { PackageItem, LeadInquiry } from './types';

export function App() {
  const [isDiscountModalOpen, setIsDiscountModalOpen] = useState(false);
  const [isBookCallModalOpen, setIsBookCallModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);
  const [isInquiriesDrawerOpen, setIsInquiriesDrawerOpen] = useState(false);
  const [leads, setLeads] = useState<LeadInquiry[]>([]);

  // Load leads on mount
  useEffect(() => {
    refreshLeads();
  }, []);

  const refreshLeads = () => {
    const data = getStoredLeads();
    setLeads(data);
  };

  const handleClearLeads = () => {
    localStorage.removeItem('clickin_digital_leads');
    setLeads([]);
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
    setIsBookCallModalOpen(true);
  };

  const handleScrollToForm = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans antialiased selection:bg-amber-500 selection:text-black">
      
      {/* Top Header */}
      <Header
        onBookCallClick={() => {
          setSelectedPackage(null);
          setIsBookCallModalOpen(true);
        }}
        onDiscountClick={() => setIsDiscountModalOpen(true)}
        onViewLeadsClick={() => setIsInquiriesDrawerOpen(true)}
        leadCount={leads.length}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onDiscountClick={() => setIsDiscountModalOpen(true)}
          onLeadSubmitted={refreshLeads}
        />

        {/* Home Page Services Sliders Section */}
        <ServicesSliders
          onExploreClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Discuss Your Idea Callout Banner */}
        <DiscussIdea
          onGetInTouchClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Trust, Google Ratings & 6 Review Cards */}
        <TrustRatings />

        {/* How It Works ? 3 Steps */}
        <HowItWorks
          onGetInTouchClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Key Stats Counter Banner */}
        <StatsCounter />

        {/* Pricing Packages (Starter, Business, E-Commerce) */}
        <PricingPackages
          onSelectPackage={handleSelectPackage}
        />

        {/* Project Showcase with Category Filter & Modal */}
        <ProjectShowcase
          onContactClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Video & Client Testimonials */}
        <VideoTestimonials />

        {/* Sanity CMS Posts Section */}
        <SanityPosts
          onReadMoreClick={() => {
            setSelectedPackage(null);
            setIsBookCallModalOpen(true);
          }}
        />

        {/* Bottom Lead Capture Form */}
        <BottomLeadForm
          onLeadSubmitted={refreshLeads}
        />
      </main>

      {/* Footer */}
      <Footer
        onGetInTouchClick={() => {
          setSelectedPackage(null);
          setIsBookCallModalOpen(true);
        }}
        onViewLeadsClick={() => setIsInquiriesDrawerOpen(true)}
      />

      {/* Modals & Overlays */}
      <DiscountModal
        isOpen={isDiscountModalOpen}
        onClose={() => setIsDiscountModalOpen(false)}
        onLeadSubmitted={refreshLeads}
      />

      <BookCallModal
        isOpen={isBookCallModalOpen}
        onClose={() => {
          setIsBookCallModalOpen(false);
          setSelectedPackage(null);
        }}
        selectedPackage={selectedPackage}
        onLeadSubmitted={refreshLeads}
      />

      <InquiriesDrawer
        isOpen={isInquiriesDrawerOpen}
        onClose={() => setIsInquiriesDrawerOpen(false)}
        leads={leads}
        onClearLeads={handleClearLeads}
      />

      {/* Fixed Social Media Sidebar */}
      <SocialSidebar />

      {/* Floating Action WhatsApp/Call Controls */}
      <FloatingContact />

    </div>
  );
}

export default App;

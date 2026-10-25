import React from 'react';
import AnnouncementBar from '@/components/AnnouncementBar';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import TechStackBar from '@/components/TechStackBar';
import AiSection from '@/components/AiSection';
import WebSection from '@/components/WebSection';
import MobileSection from '@/components/MobileSection';
import Process from '@/components/Process';
import FaqSection from '@/components/FaqSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div id="top" style={{ width: '100%', minHeight: '100vh', background: '#fff' }}>
      {/* Top Announcement Bar */}
      <AnnouncementBar />

      {/* Sticky Main Navigation Bar */}
      <Header />

      {/* Main Content Area */}
      <main>
        {/* Hero Section & 3-Service Overview Grid */}
        <Hero />

        {/* Technical Integrations & Supported Stack */}
        <TechStackBar />

        {/* 01 — AI Automation Section */}
        <AiSection />

        {/* 02 — Website Development Section */}
        <WebSection />

        {/* 03 — Mobile App Development Section */}
        <MobileSection />

        {/* Process / How We Work Section */}
        <Process />

        {/* Objection Handling / Frequently Asked Questions */}
        <FaqSection />

        {/* Contact / CTA Lead Capture Section */}
        <CtaSection />
      </main>

      {/* Site Footer */}
      <Footer />
    </div>
  );
}

import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BenefitsRibbon } from './components/BenefitsRibbon';
import { StaffSection } from './components/StaffSection';
import { AboutSection } from './components/AboutSection';
import { ReviewsSection } from './components/ReviewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileFloatingCta } from './components/MobileFloatingCta';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-subtle selection:bg-wine selection:text-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
        <BenefitsRibbon />
        <StaffSection />
        <AboutSection />
        <ReviewsSection />
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileFloatingCta />
    </div>
  );
}

export default App;

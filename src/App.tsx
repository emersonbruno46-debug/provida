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
import { FEATURES } from './config/site';

export function App() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-subtle selection:bg-wine selection:text-white pb-mobile-cta md:pb-0">
      <Header />
      <main id="conteudo" tabIndex={-1} className="flex-1 focus:outline-none">
        <Hero />
        <ServicesSection />
        <BenefitsRibbon />
        <StaffSection />
        <AboutSection />
        {/* Depoimentos ocultos até haver avaliações reais aprovadas (FEATURES.showReviews). */}
        {FEATURES.showReviews && <ReviewsSection />}
        <FaqSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileFloatingCta />
    </div>
  );
}

export default App;

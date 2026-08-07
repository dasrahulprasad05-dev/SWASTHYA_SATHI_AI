import React from 'react';
import { PublicNavbar } from '../components/layouts/PublicNavbar';
import { PublicFooter } from '../components/layouts/PublicFooter';
import { HeroSection } from './landing/HeroSection';
import { StatsBar } from './landing/StatsBar';
import { TrustedSources } from './landing/TrustedSources';
import { FeaturesGrid } from './landing/FeaturesGrid';
import { HowItWorks } from './landing/HowItWorks';
import { TestimonialsCarousel } from './landing/TestimonialsCarousel';
import { CTABanner } from './landing/CTABanner';

export const LandingPage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg)' }}>
      {/* Public Sticky Glass Navbar */}
      <PublicNavbar />

      {/* Main Landing Sections */}
      <main style={{ flex: 1 }}>
        <HeroSection />
        <StatsBar />
        <TrustedSources />
        <FeaturesGrid />
        <HowItWorks />
        <TestimonialsCarousel />
        <CTABanner />
      </main>

      {/* Footer */}
      <PublicFooter />
    </div>
  );
};

export default LandingPage;

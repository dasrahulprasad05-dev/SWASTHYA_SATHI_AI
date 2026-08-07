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
      
      {/* Panoramic Hero Wrapper */}
      <div 
        style={{
          position: 'relative',
          backgroundImage: 'url("/images/hero-bg.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Gradient Overlay for Text Readability */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.9) 35%, rgba(255,255,255,0.4) 60%, rgba(255,255,255,0) 100%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 10 }}>
          {/* Public Sticky Glass Navbar */}
          <PublicNavbar />
          
          <main>
            <HeroSection />
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto px-6 pb-12">
              <div className="lg:col-span-7">
                <StatsBar />
              </div>
              <div className="lg:col-span-5">
                <TrustedSources />
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Remaining Landing Sections */}
      <main style={{ flex: 1, backgroundColor: 'var(--bg)' }}>
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

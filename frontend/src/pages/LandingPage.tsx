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
            
            <div style={{ 
              maxWidth: '1280px', 
              margin: '0 auto', 
              padding: '0 1.5rem 3rem 1.5rem',
              display: 'flex',
              gap: '2rem',
              alignItems: 'flex-start',
              flexWrap: 'wrap',
              justifyContent: 'space-between'
            }}>
              <div style={{ flex: '1 1 600px' }}>
                <StatsBar />
              </div>
              <div style={{ flex: '1 1 400px' }}>
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

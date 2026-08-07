import React from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';

export const TestimonialsCarousel: React.FC = () => {
  const testimonials = [
    {
      name: 'Dr. Debasis Pattnaik',
      role: 'Chief Medical Officer, Bhubaneswar',
      comment: 'Swasthya Sathi AI provides remarkably accurate symptom triage. It helps rural patients understand when emergency hospital care is truly vital.',
      rating: 5,
      location: 'Bhubaneswar',
    },
    {
      name: 'Manoranjan Mohapatra',
      role: 'Farmer & Citizen',
      comment: 'ଭଏସ୍ରେ ଓଡ଼ିଆରେ କହି ସାଙ୍ଗେ ସାଙ୍ଗେ ଡେଙ୍ଗୁ ଜ୍ୱର ବିଷୟରେ ଜାଣିପାରିଲି। ନିକଟସ୍ଥ ଡାକ୍ତରଖାନା ଠିକଣା ମଧ୍ୟ ମିଳିଗଲା। (Speaking in Odia immediately gave me dengue guidance and nearby hospital info.)',
      rating: 5,
      location: 'Cuttack District',
    },
    {
      name: 'Sunita Pradhan',
      role: 'ASHA Health Worker',
      comment: 'This app is a blessing for field health workers in Odisha to quickly lookup government health schemes like BSKY and maternity benefits.',
      rating: 5,
      location: 'Puri District',
    },
  ];

  return (
    <section style={{ padding: '5rem 1.5rem', backgroundColor: 'var(--bg)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto 3.5rem auto' }}>
          <span
            style={{
              fontSize: '0.82rem',
              fontWeight: 800,
              color: 'var(--primary-dark)',
              backgroundColor: 'var(--primary-light)',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              textTransform: 'uppercase',
            }}
          >
            Community Voices
          </span>
          <h2 style={{ fontSize: '2.2rem', fontWeight: 800, marginTop: '1rem', color: 'var(--text-primary)' }}>
            Loved by Citizens & Health Workers Alike
          </h2>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem',
          }}
        >
          {testimonials.map((test) => (
            <div
              key={test.name}
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-2xl)',
                padding: '2rem',
                border: '1px solid var(--border)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: 'var(--shadow-sm)',
              }}
            >
              <div>
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1.25rem' }}>
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                  ))}
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-primary)', lineHeight: 1.7, fontStyle: 'italic' }}>
                  "{test.comment}"
                </p>
              </div>

              <div style={{ marginTop: '1.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
                <h4 style={{ fontSize: '0.95rem', fontWeight: 700, margin: 0, color: 'var(--text-primary)' }}>
                  {test.name}
                </h4>
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', margin: 0 }}>
                  {test.role} • {test.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

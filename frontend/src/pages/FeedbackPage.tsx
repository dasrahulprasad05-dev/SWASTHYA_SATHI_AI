import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquareHeart,
  Star,
  Send,
  CheckCircle2,
  HelpCircle,
  PhoneCall,
  ShieldCheck,
  Building2,
  Sparkles,
} from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import { feedbackService } from '../services/apiServices';
import { useAuth } from '../context/AuthContext';
import toast from 'react-hot-toast';

export const FeedbackPage: React.FC = () => {
  const { user } = useAuth();
  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [category, setCategory] = useState<string>('General');
  const [rating, setRating] = useState<number>(5);
  const [hoverRating, setHoverRating] = useState<number | null>(null);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const categories = [
    'General',
    'Bug Report',
    'Feature Request',
    'Hospital Services',
    'AI Accuracy',
    'Emergency 108',
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    try {
      await feedbackService.submitFeedback({
        name,
        email,
        category,
        rating,
        message,
        userId: user?.id,
      });

      setIsSuccess(true);
      toast.success('Your feedback has been received and emailed to our health officers.');
      setMessage('');
    } catch (err: any) {
      toast.error(err?.message || 'Failed to send feedback. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AppLayout
      topbarTitle="Citizen Feedback & Public Health Suggestions"
      topbarSubtitle="Help improve Swasthya Sathi AI services across all 30 districts of Odisha"
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
          {/* Left: Feedback Submission Form */}
          <div
            style={{
              backgroundColor: 'var(--surface)',
              borderRadius: 'var(--radius-2xl)',
              padding: '2rem',
              border: '1px solid var(--border)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.2)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #0d9488 0%, #0284c7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                }}
              >
                <MessageSquareHeart size={22} />
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 800 }}>Share Your Experience</h2>
                <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                  Your feedback is directly emailed to the Directorate of Public Health
                </p>
              </div>
            </div>

            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  padding: '3rem 1.5rem',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#10B981',
                    marginBottom: '1rem',
                  }}
                >
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.3rem', fontWeight: 800 }}>
                  Feedback Submitted Successfully!
                </h3>
                <p style={{ margin: '0 0 1.5rem 0', fontSize: '0.88rem', color: 'var(--text-secondary)', maxWidth: '360px', lineHeight: 1.6 }}>
                  Thank you for helping us enhance digital healthcare in Odisha. An acknowledgment receipt has been sent to your email.
                </p>
                <button
                  onClick={() => setIsSuccess(false)}
                  style={{
                    padding: '0.65rem 1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    backgroundColor: 'var(--border)',
                    color: 'var(--text-primary)',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                  }}
                >
                  Submit Another Feedback
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {/* Rating Selector */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                    Rate Your Experience
                  </label>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    {[1, 2, 3, 4, 5].map((star) => {
                      const isFilled = (hoverRating !== null ? hoverRating : rating) >= star;
                      return (
                        <button
                          key={star}
                          type="button"
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(null)}
                          onClick={() => setRating(star)}
                          style={{
                            background: 'none',
                            border: 'none',
                            padding: '0.25rem',
                            cursor: 'pointer',
                            color: isFilled ? '#F59E0B' : 'var(--text-tertiary)',
                            transition: 'transform 0.15s ease',
                          }}
                        >
                          <Star size={28} style={{ fill: isFilled ? '#F59E0B' : 'none' }} />
                        </button>
                      );
                    })}
                    <span style={{ marginLeft: '0.5rem', fontSize: '0.85rem', fontWeight: 800, color: '#F59E0B' }}>
                      {rating === 5 ? '⭐⭐⭐⭐⭐ 5/5 Excellent' : `${rating}/5 Stars`}
                    </span>
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Feedback Category *
                  </label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                    }}
                  >
                    {categories.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Rahul Mohapatra"
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--surface-raised)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      required
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--surface-raised)',
                        border: '1px solid var(--border)',
                        color: 'var(--text-primary)',
                        fontSize: '0.9rem',
                        outline: 'none',
                      }}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-secondary)', marginBottom: '0.4rem' }}>
                    Detailed Message & Suggestions *
                  </label>
                  <textarea
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your feedback, suggestion, hospital experience, or bug in detail..."
                    required
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--surface-raised)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-primary)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      resize: 'vertical',
                    }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    padding: '0.85rem 1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'linear-gradient(135deg, #0d9488 0%, #0284c7 100%)',
                    color: '#fff',
                    border: 'none',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem',
                    boxShadow: '0 4px 14px 0 rgba(13, 148, 136, 0.4)',
                    opacity: isSubmitting ? 0.7 : 1,
                  }}
                >
                  <Send size={16} />
                  <span>{isSubmitting ? 'Dispatching to Health Department...' : 'Submit Citizen Feedback'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: Info Cards & Helplines */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-2xl)',
                padding: '1.75rem',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <ShieldCheck size={20} color="#0D9488" />
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>Citizen Service Commitment</h3>
              </div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, margin: '0 0 1rem 0' }}>
                Every feedback submitted is routed directly to the public health monitoring cell. Suggestions are reviewed during state weekly healthcare audits.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--surface-raised)' }}>
                  <Building2 size={18} color="#38BDF8" />
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>Government of Odisha Health Portal</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Directorate of Public Health, Bhubaneswar</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'var(--surface-raised)' }}>
                  <PhoneCall size={18} color="#10B981" />
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700 }}>State Health Helpline (104)</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>24x7 Medical Advice & Health Schemes</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem', borderRadius: 'var(--radius-lg)', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <PhoneCall size={18} color="#EF4444" />
                  <div>
                    <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#EF4444' }}>Emergency 108 Ambulance</div>
                    <div style={{ fontSize: '0.75rem', color: '#F87171' }}>For immediate life-threatening medical response</div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQs */}
            <div
              style={{
                backgroundColor: 'var(--surface)',
                borderRadius: 'var(--radius-2xl)',
                padding: '1.75rem',
                border: '1px solid var(--border)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <HelpCircle size={20} color="#6366F1" />
                <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800 }}>Frequently Asked Questions</h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.85rem', fontWeight: 700 }}>Is my feedback confidential?</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Yes. All personal information and health feedback are kept strictly confidential as per National Digital Health Mission standards.
                  </p>
                </div>

                <div>
                  <h4 style={{ margin: '0 0 0.25rem 0', fontSize: '0.85rem', fontWeight: 700 }}>How long until my inquiry is reviewed?</h4>
                  <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    Medical administrators review urgent feedback within 24–48 hours. Emergency issues should always be phoned in to 108 or 104.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default FeedbackPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Stethoscope,
  User,
  HeartPulse,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Loader2,
  ShieldAlert,
  Phone,
  Lightbulb,
  Activity,
  Thermometer,
  Clock,
  Sparkles,
  X,
} from 'lucide-react';
import { AppLayout } from '../components/layouts/AppLayout';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { QuickActions } from '../components/common/QuickActions';
import { chatService } from '../services/apiServices';

// ── Common Symptoms Tags ──
const SYMPTOM_TAGS = [
  'Fever', 'Headache', 'Cough', 'Sore Throat', 'Body Pain',
  'Fatigue', 'Nausea', 'Vomiting', 'Diarrhea', 'Chest Pain',
  'Shortness of Breath', 'Dizziness', 'Joint Pain', 'Rash',
  'Abdominal Pain', 'Loss of Appetite', 'Cold & Runny Nose',
  'Muscle Cramps', 'Back Pain', 'Blurred Vision',
  'Swollen Lymph Nodes', 'Night Sweats', 'Weight Loss',
  'Burning Urination', 'Skin Itching',
];

const SEVERITY_LEVELS = [
  { value: 1, label: 'Mild', color: '#10B981', desc: 'Slight discomfort, manageable' },
  { value: 2, label: 'Moderate', color: '#F59E0B', desc: 'Noticeable discomfort, affects daily activities' },
  { value: 3, label: 'Severe', color: '#EF4444', desc: 'Significant pain or distress' },
  { value: 4, label: 'Critical', color: '#DC2626', desc: 'Unbearable, needs immediate attention' },
];

const DURATION_OPTIONS = [
  'Less than 1 day',
  '1-3 days',
  '4-7 days',
  '1-2 weeks',
  'More than 2 weeks',
];

type Step = 1 | 2 | 3;

interface AnalysisResult {
  content: string;
  recommendations: string[];
  warnings: string[];
  confidence: number;
}

export const SymptomCheckerPage: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  // Wizard state
  const [step, setStep] = useState<Step>(1);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [customSymptom, setCustomSymptom] = useState('');
  const [severity, setSeverity] = useState(1);
  const [duration, setDuration] = useState('1-3 days');

  // Analysis state
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const toggleSymptom = (s: string) => {
    setSelectedSymptoms((prev) =>
      prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]
    );
  };

  const addCustomSymptom = () => {
    const trimmed = customSymptom.trim();
    if (trimmed && !selectedSymptoms.includes(trimmed)) {
      setSelectedSymptoms((prev) => [...prev, trimmed]);
      setCustomSymptom('');
    }
  };

  const canProceed = () => {
    if (step === 1) return age && gender;
    if (step === 2) return selectedSymptoms.length > 0;
    return true;
  };

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    setResult(null);

    const prompt = `[SYMPTOM CHECKER MODE] Patient Profile: Age ${age}, Gender: ${gender}. Reported Symptoms: ${selectedSymptoms.join(', ')}. Severity: ${SEVERITY_LEVELS[severity - 1].label}. Duration: ${duration}. Based on this, provide: 1) A detailed analysis of possible conditions. 2) At least 4-5 specific actionable home care recommendations. 3) Red flag warning signs that require immediate hospital visit. Be medically cautious and always recommend consulting a doctor.`;

    try {
      const chatId = `symptom-${Date.now()}`;
      const lang = (i18n.language?.slice(0, 2) as 'en' | 'hi' | 'or') || 'en';
      const response = await chatService.sendMessage(chatId, prompt, lang);

      setResult({
        content: response.content || '',
        recommendations: response.metadata?.recommendations || ['Consult a healthcare professional', 'Stay hydrated', 'Rest adequately'],
        warnings: response.metadata?.warnings || ['Seek emergency help if symptoms worsen rapidly'],
        confidence: response.metadata?.confidence || 0.7,
      });
    } catch (err) {
      setResult({
        content: 'We were unable to complete the analysis at this time. Please try again or consult a healthcare professional directly.',
        recommendations: ['Please try again later', 'Contact your nearest hospital', 'Call 104 Health Helpline'],
        warnings: ['If you are experiencing a medical emergency, call 108 immediately'],
        confidence: 0.1,
      });
    } finally {
      setIsAnalyzing(false);
    }
  };

  const resetChecker = () => {
    setStep(1);
    setAge('');
    setGender('');
    setSelectedSymptoms([]);
    setCustomSymptom('');
    setSeverity(1);
    setDuration('1-3 days');
    setResult(null);
    setIsAnalyzing(false);
  };

  // ── Step Indicator ──
  const StepIndicator = () => (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
      {[1, 2, 3].map((s) => (
        <React.Fragment key={s}>
          <div
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '0.85rem',
              backgroundColor: step >= s ? 'var(--primary)' : 'var(--surface-hover)',
              color: step >= s ? '#fff' : 'var(--text-muted)',
              border: step === s ? '2px solid var(--primary-light)' : '2px solid transparent',
              transition: 'all 0.3s',
            }}
          >
            {step > s ? <CheckCircle2 size={18} /> : s}
          </div>
          {s < 3 && (
            <div
              style={{
                width: '50px',
                height: '3px',
                borderRadius: '2px',
                backgroundColor: step > s ? 'var(--primary)' : 'var(--border)',
                transition: 'all 0.3s',
              }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );

  // ── Glassmorphism Card Wrapper ──
  const GlassCard: React.FC<{ children: React.ReactNode; style?: React.CSSProperties }> = ({ children, style }) => (
    <div
      style={{
        backgroundColor: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-2xl)',
        padding: '2rem',
        boxShadow: 'var(--shadow-lg)',
        backdropFilter: 'blur(12px)',
        ...style,
      }}
    >
      {children}
    </div>
  );

  // ── Analysis Loading Animation ──
  const AnalyzingAnimation = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '4rem 2rem',
        textAlign: 'center',
      }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
        style={{ marginBottom: '1.5rem' }}
      >
        <Activity size={48} color="var(--primary)" />
      </motion.div>
      <h3 style={{ color: 'var(--text-primary)', margin: '0 0 0.5rem 0', fontSize: '1.2rem' }}>
        Analyzing Your Symptoms...
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', maxWidth: '400px' }}>
        Our AI is cross-referencing your symptoms with our medical knowledge base to provide you with the most accurate assessment.
      </p>
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1.5rem' }}>
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.2 }}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: 'var(--primary)',
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  return (
    <AppLayout
      topbarTitle="AI Symptom Checker"
      topbarSubtitle="Powered by Swasthya Sathi AI Medical Engine"
      rightPanel={
        <>
          <EmergencyCard />
          <QuickActions />
        </>
      }
    >
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '1rem 0' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            marginBottom: '1.5rem',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #0d9488, #0284c7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Stethoscope size={24} color="#fff" />
          </div>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.3rem', fontWeight: 800, color: 'var(--text-primary)' }}>
              AI Symptom Checker
            </h2>
            <p style={{ margin: 0, fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              Describe your symptoms and get AI-powered health insights
            </p>
          </div>
        </motion.div>

        {/* Main Content */}
        {isAnalyzing ? (
          <GlassCard>
            <AnalyzingAnimation />
          </GlassCard>
        ) : result ? (
          /* ── Results View ── */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            {/* Confidence Banner */}
            <GlassCard style={{ padding: '1.25rem 1.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Sparkles size={20} color="var(--primary)" />
                  <div>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>Analysis Complete</p>
                    <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                      Based on {selectedSymptoms.length} symptoms • {age}y {gender} • {SEVERITY_LEVELS[severity - 1].label} severity
                    </p>
                  </div>
                </div>
                <button
                  onClick={resetChecker}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius)',
                    backgroundColor: 'var(--surface-hover)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    cursor: 'pointer',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                  }}
                >
                  <ArrowLeft size={14} /> New Check
                </button>
              </div>
            </GlassCard>

            {/* Main Analysis */}
            <GlassCard>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                <HeartPulse size={20} color="var(--primary)" />
                <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                  AI Assessment
                </h3>
              </div>
              <p style={{
                fontSize: '0.92rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                margin: 0,
                whiteSpace: 'pre-wrap',
              }}>
                {result.content}
              </p>
            </GlassCard>

            {/* Recommendations */}
            {result.recommendations.length > 0 && (
              <GlassCard style={{ borderLeft: '4px solid #10B981' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <Lightbulb size={20} color="#10B981" />
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                    Recommended Actions
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {result.recommendations.map((rec, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        padding: '0.6rem 0.75rem',
                        backgroundColor: 'rgba(16, 185, 129, 0.06)',
                        borderRadius: 'var(--radius)',
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      <CheckCircle2 size={16} color="#10B981" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{rec}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            )}

            {/* Warnings */}
            {result.warnings.length > 0 && (
              <GlassCard style={{ borderLeft: '4px solid #EF4444' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <AlertTriangle size={20} color="#EF4444" />
                  <h3 style={{ margin: 0, fontSize: '1rem', fontWeight: 700, color: '#EF4444' }}>
                    Warning Signs to Watch
                  </h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {result.warnings.map((warn, i) => (
                    <div
                      key={i}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '0.6rem',
                        padding: '0.6rem 0.75rem',
                        backgroundColor: 'rgba(239, 68, 68, 0.06)',
                        borderRadius: 'var(--radius)',
                        fontSize: '0.88rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.5,
                      }}
                    >
                      <ShieldAlert size={16} color="#EF4444" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>{warn}</span>
                    </div>
                  ))}
                </div>

                {/* Emergency CTA */}
                {severity >= 3 && (
                  <motion.a
                    href="tel:108"
                    animate={{ scale: [1, 1.02, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.6rem',
                      marginTop: '1.25rem',
                      padding: '0.85rem',
                      borderRadius: 'var(--radius-lg)',
                      background: 'linear-gradient(135deg, #DC2626, #B91C1C)',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      textDecoration: 'none',
                      boxShadow: '0 4px 20px rgba(220, 38, 38, 0.4)',
                    }}
                  >
                    <Phone size={18} /> Call 108 Ambulance Now
                  </motion.a>
                )}
              </GlassCard>
            )}

            {/* Disclaimer */}
            <div style={{
              padding: '1rem 1.25rem',
              backgroundColor: 'rgba(245, 158, 11, 0.08)',
              border: '1px solid rgba(245, 158, 11, 0.2)',
              borderRadius: 'var(--radius-lg)',
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              textAlign: 'center',
            }}>
              ⚠️ <strong>Medical Disclaimer:</strong> This AI-powered symptom analysis is for informational purposes only and does not constitute medical diagnosis or treatment. Always consult a qualified healthcare professional for proper evaluation. In emergencies, call 108.
            </div>
          </motion.div>
        ) : (
          /* ── Wizard View ── */
          <GlassCard>
            <StepIndicator />

            <AnimatePresence mode="wait">
              {/* ── Step 1: Basic Details ── */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <User size={20} color="var(--primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Tell us about yourself
                    </h3>
                  </div>

                  {/* Age */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Age
                    </label>
                    <input
                      type="number"
                      min="1"
                      max="120"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      placeholder="Enter your age"
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border)',
                        backgroundColor: 'var(--bg)',
                        color: 'var(--text-primary)',
                        fontSize: '0.95rem',
                        outline: 'none',
                        boxSizing: 'border-box',
                      }}
                    />
                  </div>

                  {/* Gender */}
                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                      Gender
                    </label>
                    <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                      {['Male', 'Female', 'Other'].map((g) => (
                        <button
                          key={g}
                          onClick={() => setGender(g)}
                          style={{
                            padding: '0.65rem 1.5rem',
                            borderRadius: 'var(--radius-lg)',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            border: gender === g ? '2px solid var(--primary)' : '1px solid var(--border)',
                            backgroundColor: gender === g ? 'var(--primary-light)' : 'var(--surface-hover)',
                            color: gender === g ? 'var(--primary-dark)' : 'var(--text-secondary)',
                            transition: 'all 0.15s',
                          }}
                        >
                          {g}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── Step 2: Symptom Selection ── */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                    <Thermometer size={20} color="var(--primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Select your symptoms
                    </h3>
                  </div>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>
                    Tap all symptoms that apply. You can also add custom symptoms below.
                  </p>

                  {/* Tags Grid */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                    {SYMPTOM_TAGS.map((s) => {
                      const isActive = selectedSymptoms.includes(s);
                      return (
                        <button
                          key={s}
                          onClick={() => toggleSymptom(s)}
                          style={{
                            padding: '0.45rem 0.85rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            border: isActive ? '1.5px solid var(--primary)' : '1px solid var(--border)',
                            backgroundColor: isActive ? 'var(--primary-light)' : 'var(--surface-hover)',
                            color: isActive ? 'var(--primary-dark)' : 'var(--text-secondary)',
                            transition: 'all 0.12s',
                          }}
                        >
                          {isActive && '✓ '}{s}
                        </button>
                      );
                    })}
                  </div>

                  {/* Custom Symptom Input */}
                  <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <input
                      type="text"
                      value={customSymptom}
                      onChange={(e) => setCustomSymptom(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addCustomSymptom()}
                      placeholder="Add other symptom..."
                      style={{
                        flex: 1,
                        padding: '0.65rem 1rem',
                        borderRadius: 'var(--radius-lg)',
                        border: '1px solid var(--border)',
                        backgroundColor: 'var(--bg)',
                        color: 'var(--text-primary)',
                        fontSize: '0.88rem',
                        outline: 'none',
                      }}
                    />
                    <button
                      onClick={addCustomSymptom}
                      style={{
                        padding: '0.65rem 1rem',
                        borderRadius: 'var(--radius-lg)',
                        backgroundColor: 'var(--primary)',
                        color: '#fff',
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        cursor: 'pointer',
                        border: 'none',
                      }}
                    >
                      Add
                    </button>
                  </div>

                  {/* Selected Count */}
                  {selectedSymptoms.length > 0 && (
                    <p style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 600, marginTop: '1rem', marginBottom: 0 }}>
                      {selectedSymptoms.length} symptom{selectedSymptoms.length > 1 ? 's' : ''} selected
                    </p>
                  )}
                </motion.div>
              )}

              {/* ── Step 3: Severity & Duration ── */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    <Activity size={20} color="var(--primary)" />
                    <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-primary)' }}>
                      Severity & Duration
                    </h3>
                  </div>

                  {/* Severity Selector */}
                  <div style={{ marginBottom: '2rem' }}>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      How severe are your symptoms?
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {SEVERITY_LEVELS.map((s) => (
                        <button
                          key={s.value}
                          onClick={() => setSeverity(s.value)}
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1rem',
                            borderRadius: 'var(--radius-lg)',
                            border: severity === s.value ? `2px solid ${s.color}` : '1px solid var(--border)',
                            backgroundColor: severity === s.value ? `${s.color}10` : 'var(--surface-hover)',
                            cursor: 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.15s',
                          }}
                        >
                          <div
                            style={{
                              width: '12px',
                              height: '12px',
                              borderRadius: '50%',
                              backgroundColor: s.color,
                              flexShrink: 0,
                            }}
                          />
                          <div>
                            <span style={{ fontWeight: 700, fontSize: '0.88rem', color: severity === s.value ? s.color : 'var(--text-primary)' }}>
                              {s.label}
                            </span>
                            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: '0.5rem' }}>
                              — {s.desc}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Duration */}
                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                      <Clock size={15} /> How long have you had these symptoms?
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                      {DURATION_OPTIONS.map((d) => (
                        <button
                          key={d}
                          onClick={() => setDuration(d)}
                          style={{
                            padding: '0.5rem 1rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '0.82rem',
                            fontWeight: 600,
                            cursor: 'pointer',
                            border: duration === d ? '2px solid var(--primary)' : '1px solid var(--border)',
                            backgroundColor: duration === d ? 'var(--primary-light)' : 'var(--surface-hover)',
                            color: duration === d ? 'var(--primary-dark)' : 'var(--text-secondary)',
                            transition: 'all 0.15s',
                          }}
                        >
                          {d}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '2rem',
                paddingTop: '1.5rem',
                borderTop: '1px solid var(--border)',
              }}
            >
              {step > 1 ? (
                <button
                  onClick={() => setStep((s) => (s - 1) as Step)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.65rem 1.25rem',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--surface-hover)',
                    border: '1px solid var(--border)',
                    color: 'var(--text-secondary)',
                    fontWeight: 600,
                    fontSize: '0.88rem',
                    cursor: 'pointer',
                  }}
                >
                  <ArrowLeft size={16} /> Back
                </button>
              ) : (
                <div />
              )}

              {step < 3 ? (
                <button
                  onClick={() => setStep((s) => (s + 1) as Step)}
                  disabled={!canProceed()}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.65rem 1.5rem',
                    borderRadius: 'var(--radius-lg)',
                    background: canProceed() ? 'linear-gradient(135deg, #0d9488, #0284c7)' : 'var(--surface-hover)',
                    color: canProceed() ? '#fff' : 'var(--text-muted)',
                    fontWeight: 700,
                    fontSize: '0.88rem',
                    cursor: canProceed() ? 'pointer' : 'not-allowed',
                    border: 'none',
                    boxShadow: canProceed() ? '0 4px 14px rgba(13, 148, 136, 0.3)' : 'none',
                    transition: 'all 0.2s',
                  }}
                >
                  Continue <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  onClick={handleAnalyze}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: '0.75rem 2rem',
                    borderRadius: 'var(--radius-lg)',
                    background: 'linear-gradient(135deg, #0d9488, #0284c7)',
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    border: 'none',
                    boxShadow: '0 4px 18px rgba(13, 148, 136, 0.35)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Stethoscope size={18} /> Analyze Symptoms
                </button>
              )}
            </div>
          </GlassCard>
        )}
      </div>
    </AppLayout>
  );
};

export default SymptomCheckerPage;

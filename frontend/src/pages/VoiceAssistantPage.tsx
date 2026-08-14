import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Volume2, Sparkles, Square, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { AppLayout } from '../components/layouts/AppLayout';
import { chatService } from '../services/apiServices';
import { QuickActions } from '../components/common/QuickActions';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { MarkdownRenderer } from '../components/common/MarkdownRenderer';

export const VoiceAssistantPage: React.FC = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [selectedLang, setSelectedLang] = useState<'or' | 'hi' | 'en'>('or');
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const recognitionRef = useRef<any>(null);

  // Initialize Speech Recognition if supported
  useEffect(() => {
    const SpeechRecognition =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = true;
      recognition.lang = selectedLang === 'or' ? 'or-IN' : selectedLang === 'hi' ? 'hi-IN' : 'en-IN';

      recognition.onresult = (event: any) => {
        const current = event.resultIndex;
        const text = event.results[current][0].transcript;
        setTranscript(text);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.onerror = () => {
        setIsListening(false);
      };

      recognitionRef.current = recognition;
    }
  }, [selectedLang]);

  // Handle Speech Synthesis
  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = selectedLang === 'or' ? 'hi-IN' : selectedLang === 'hi' ? 'hi-IN' : 'en-IN';
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
      if (transcript) {
        processVoiceQuery(transcript);
      }
    } else {
      setTranscript('');
      setResponse('');
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch {
        // Simulated voice capture fallback for demo
        setIsListening(true);
        setTimeout(() => {
          const sampleQuery =
            selectedLang === 'or'
              ? 'ମୋତେ ୩ ଦିନ ହେଲା ପ୍ରବଳ ଜ୍ଵର ଓ ଗଣ୍ଠି ବିନ୍ଧା ହେଉଛି | କଣ କରିବି?'
              : selectedLang === 'hi'
              ? 'मुझे 3 दिन से बहुत तेज बुखार और जोड़ों में दर्द है।'
              : 'I have high fever and severe joint pain for 3 days.';
          setTranscript(sampleQuery);
          setIsListening(false);
          processVoiceQuery(sampleQuery);
        }, 3000);
      }
    }
  };

  const processVoiceQuery = async (queryText: string) => {
    setIsLoading(true);
    try {
      const aiResponse = await chatService.sendMessage('voice-session', queryText, selectedLang);
      setResponse(aiResponse.content);
      speakText(aiResponse.content);
    } catch {
      const fallbackText = 'ଆପଣଙ୍କ ଲକ୍ଷଣ ଡେଙ୍ଗୁ ବା ଭାଇରାଲ ଜ୍ଵର ହୋଇପାରେ | ଦୟାକରି ତୁରନ୍ତ ନିକଟସ୍ଥ ଡାକ୍ତରଖାନାରେ CBC ଏବଂ NS1 ପରୀକ୍ଷା କରାନ୍ତୁ |';
      setResponse(fallbackText);
      speakText(fallbackText);
    } finally {
      setIsLoading(false);
    }
  };

  const samplePrompts = [
    { text: 'ମୋ ମୁଣ୍ଡ ବିନ୍ଧୁଛି କଣ କରିବି?', lang: 'or' },
    { text: 'ଡେଙ୍ଗୁ ର ଲକ୍ଷଣ କଣ?', lang: 'or' },
    { text: 'बुखार में कौन सी दवाई लेनी चाहिए?', lang: 'hi' },
    { text: 'Find nearest 24x7 hospital', lang: 'en' },
  ];

  return (
    <AppLayout
      topbarTitle="Voice Assistant"
      topbarSubtitle="Talk naturally, get instant health guidance"
      rightPanel={
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div style={{ backgroundColor: 'white', borderRadius: '24px', padding: '1.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontSize: '1.05rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>Live Transcript</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                 <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#10B981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                   <span style={{ fontSize: '0.7rem', fontWeight: 'bold' }}>You</span>
                 </div>
                 <div>
                   <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: 600 }}>You • Now</div>
                   <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                     {transcript || (isListening ? 'Listening...' : 'Tap the mic and speak')}
                   </div>
                 </div>
              </div>

              {isLoading && (
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                   <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F8FAFC', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <img src="/logos/main-logo.jpg" alt="AI" style={{ width: '20px', height: '20px', borderRadius: '4px' }} />
                   </div>
                   <div>
                     <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: 600 }}>Swasthya Sathi AI • Now</div>
                     <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)', fontWeight: 600, marginBottom: '0.25rem' }}>
                       Just a moment, I'm thinking...
                     </div>
                     <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
                        {[1,2,3,4].map(i => (
                          <motion.div key={i} animate={{ opacity: [0.3, 1, 0.3] }} transition={{ repeat: Infinity, duration: 1, delay: i * 0.2 }} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#10B981' }} />
                        ))}
                     </div>
                   </div>
                </div>
              )}

              {response && !isLoading && (
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                   <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#F8FAFC', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                     <img src="/logos/main-logo.jpg" alt="AI" style={{ width: '20px', height: '20px', borderRadius: '4px' }} />
                   </div>
                    <div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: 600 }}>Swasthya Sathi AI • Now</div>
                      <div style={{ marginBottom: '0.5rem' }}>
                        <MarkdownRenderer content={response} />
                      </div>
                      <button
                        onClick={() => speakText(response)}
                        style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.78rem', color: 'var(--primary)', cursor: 'pointer', background: 'none', border: 'none', padding: 0, marginTop: '0.5rem' }}
                      >
                       <Volume2 size={15} />
                       <span>Replay Audio</span>
                     </button>
                   </div>
                </div>
              )}
            </div>
          </div>
          <QuickActions />
          <EmergencyCard />
        </div>
      }
    >
      <div style={{ maxWidth: '680px', margin: '0 auto', width: '100%', paddingBottom: '2rem' }}>
        {/* MAIN CARD */}
        <div style={{ backgroundColor: 'white', borderRadius: '32px', padding: '1.5rem 2rem 2rem 2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', position: 'relative', overflow: 'hidden', border: '1px solid var(--border-light)', marginBottom: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <button 
            onClick={() => { if(isListening) toggleListening(); }} 
            style={{ alignSelf: 'flex-end', display: 'flex', alignItems: 'center', gap: '0.4rem', backgroundColor: 'white', border: '1px solid var(--border)', borderRadius: '100px', padding: '0.4rem 0.8rem', fontSize: '0.75rem', fontWeight: 700, color: '#334155', cursor: 'pointer', boxShadow: '0 2px 10px rgba(0,0,0,0.03)', zIndex: 10, visibility: isListening ? 'visible' : 'hidden' }}
          >
            <div style={{ width: '8px', height: '8px', backgroundColor: '#EF4444', borderRadius: '2px' }} />
            Stop Listening
          </button>

          <div style={{ textAlign: 'center', marginTop: '1rem', marginBottom: '2.5rem' }}>
            <h2 style={{ fontSize: '2.2rem', fontWeight: 800, color: '#10B981', margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>
              {isListening ? "I'm listening..." : "Tap to start..."}
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748B', margin: 0, fontWeight: 500 }}>
              {isListening ? "Speak now" : "Ready when you are"}
            </p>
          </div>

          <div style={{ position: 'relative', width: '100%', height: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '2.5rem' }}>
            {isListening && (
              <div style={{ position: 'absolute', display: 'flex', alignItems: 'center', gap: '6px', width: '100%', justifyContent: 'center', zIndex: 0, opacity: 0.35 }}>
                 {Array.from({length: 24}).map((_, i) => (
                   <motion.div 
                     key={i} 
                     animate={{ height: [`${Math.random() * 20 + 10}px`, `${Math.random() * 70 + 50}px`, `${Math.random() * 20 + 10}px`] }}
                     transition={{ repeat: Infinity, duration: Math.random() * 0.8 + 0.4, ease: "easeInOut", delay: Math.random() * 0.5 }}
                     style={{ width: '4px', backgroundColor: '#10B981', borderRadius: '4px' }} 
                   />
                 ))}
              </div>
            )}

            <button 
              onClick={toggleListening}
              style={{ 
                width: '110px', height: '110px', borderRadius: '50%', 
                background: 'linear-gradient(135deg, #10B981 0%, #047857 100%)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'white', zIndex: 10, cursor: 'pointer', border: 'none',
                boxShadow: isListening ? '0 0 0 12px rgba(16, 185, 129, 0.15), 0 0 0 24px rgba(16, 185, 129, 0.08)' : '0 15px 35px rgba(16,185,129,0.35)',
                transition: 'all 0.3s ease'
              }}
            >
              {isListening ? <Mic size={44} strokeWidth={2.5} /> : <MicOff size={44} strokeWidth={2.5} />}
            </button>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: '#F0FDF4', color: '#047857', padding: '0.5rem 1.25rem', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '2.5rem' }}>
            <Volume2 size={16} />
            <span>Listening in {selectedLang === 'or' ? 'ଓଡ଼ିଆ (Odia)' : selectedLang === 'hi' ? 'हिंदी (Hindi)' : 'English'}</span>
          </div>

          <div style={{ width: '100%', backgroundColor: '#F8FAFC', borderRadius: '24px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '120px', background: 'linear-gradient(to top, #D1FAE5, transparent)', zIndex: 0, opacity: 0.5 }} />
            
            <div style={{ position: 'relative', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', color: '#10B981', fontWeight: 800, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                <Sparkles size={16} />
                <span>Tips</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                <div style={{ alignSelf: 'flex-start', backgroundColor: 'white', padding: '0.75rem 1.25rem', borderRadius: '14px', fontSize: '0.88rem', color: '#334155', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  ମୋତେ ଜ୍ୱର ହେଉଛି (I have fever)
                </div>
                <div style={{ alignSelf: 'flex-start', backgroundColor: 'white', padding: '0.75rem 1.25rem', borderRadius: '14px', fontSize: '0.88rem', color: '#334155', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  ନିକଟରେ ଡାକ୍ତରଖାନା କେଉଁଠି ଅଛି? (Nearby hospitals?)
                </div>
                <div style={{ alignSelf: 'flex-start', backgroundColor: 'white', padding: '0.75rem 1.25rem', borderRadius: '14px', fontSize: '0.88rem', color: '#334155', fontWeight: 600, boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
                  ମୁଣ୍ଡ ବିନ୍ଧା ପାଇଁ କ'ଣ କରିବି? (Headache relief?)
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* STATUS CARD */}
        <div style={{ backgroundColor: 'white', borderRadius: '20px', padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 4px 15px rgba(0,0,0,0.03)', border: '1px solid var(--border-light)', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '14px', backgroundColor: '#F0FDF4', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <img src="/logos/main-logo.jpg" alt="Bot" style={{ width: '32px', height: '32px', borderRadius: '8px', objectFit: 'contain' }} />
            </div>
            <div>
              <h4 style={{ margin: 0, fontSize: '0.95rem', fontWeight: 800, color: '#0F172A', marginBottom: '0.2rem' }}>
                {isListening ? 'Listening...' : 'Ready'}
              </h4>
              <p style={{ margin: 0, fontSize: '0.8rem', color: '#64748B', fontWeight: 500 }}>
                {isListening ? 'Please speak clearly' : 'Click the mic to start'}
              </p>
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            {isListening && (
              <div style={{ display: 'flex', gap: '4px', alignItems: 'center', height: '24px' }}>
                {[1,2,3,4,5,6].map(i => (
                  <motion.div 
                    key={i} 
                    animate={{ height: ['20%', '100%', '20%'] }}
                    transition={{ repeat: Infinity, duration: Math.random() * 0.4 + 0.3, ease: "easeInOut" }}
                    style={{ width: '3px', backgroundColor: '#10B981', borderRadius: '3px' }} 
                  />
                ))}
              </div>
            )}
            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#64748B', fontVariantNumeric: 'tabular-nums' }}>
              00:{isListening ? '12' : '00'}
            </div>
          </div>
        </div>

        {/* VOICE SETTINGS */}
        <div>
          <h3 style={{ fontSize: '0.9rem', fontWeight: 800, color: '#0F172A', marginBottom: '1rem', textAlign: 'left' }}>Voice Settings</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '0.75rem 1rem', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '0.25rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textAlign: 'left' }}>Voice</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Volume2 size={16} color="#10B981" />
                <select style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '0.85rem', fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
                  <option>Swasthya (Female)</option>
                  <option>Swasthya (Male)</option>
                </select>
              </div>
            </div>
            
            <div style={{ backgroundColor: 'white', borderRadius: '16px', padding: '0.75rem 1rem', border: '1px solid var(--border-light)', display: 'flex', flexDirection: 'column', gap: '0.25rem', boxShadow: '0 2px 10px rgba(0,0,0,0.02)' }}>
              <span style={{ fontSize: '0.75rem', color: '#64748B', fontWeight: 600, textAlign: 'left' }}>Speech Speed</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Settings size={16} color="#10B981" />
                <select style={{ flex: 1, border: 'none', outline: 'none', background: 'transparent', fontSize: '0.85rem', fontWeight: 700, color: '#334155', cursor: 'pointer' }}>
                  <option>Normal</option>
                  <option>Slow</option>
                  <option>Fast</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default VoiceAssistantPage;

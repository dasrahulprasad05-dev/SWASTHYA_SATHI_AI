import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Send, Mic, Paperclip, AlertCircle, Sparkles } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (text: string) => void;
  isLoading: boolean;
  onVoiceClick?: () => void;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  onSendMessage,
  isLoading,
  onVoiceClick,
}) => {
  const { t } = useTranslation();
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!input.trim() || isLoading) return;
    onSendMessage(input.trim());
    setInput('');
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value);
    e.target.style.height = 'auto';
    e.target.style.height = `${Math.min(e.target.scrollHeight, 120)}px`;
  };

  return (
    <div style={{ padding: '0.85rem 1.5rem 1.25rem 1.5rem', backgroundColor: 'var(--surface)', borderTop: '1px solid var(--border)' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        {/* Input Bar Container */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '0.6rem',
            backgroundColor: 'var(--bg)',
            borderRadius: '24px',
            padding: '0.5rem 0.85rem',
            border: '1.5px solid var(--border)',
            boxShadow: 'var(--shadow-sm)',
            transition: 'border-color 0.2s',
          }}
        >
          {/* Attachment Button */}
          <button
            type="button"
            title="Attach Medical Report / Prescription"
            style={{
              padding: '0.4rem',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '50%',
            }}
          >
            <Paperclip size={18} />
          </button>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            placeholder={t('chat.placeholder')}
            rows={1}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              resize: 'none',
              fontSize: '0.92rem',
              lineHeight: 1.5,
              color: 'var(--text-primary)',
              fontFamily: 'inherit',
              padding: '0.35rem 0',
              maxHeight: '120px',
            }}
          />

          {/* Mic Button */}
          <button
            type="button"
            onClick={onVoiceClick}
            title="Voice Input (Odia/Hindi/Eng)"
            style={{
              padding: '0.45rem',
              backgroundColor: 'var(--primary-light)',
              color: 'var(--primary-dark)',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Mic size={18} />
          </button>

          {/* Send Button */}
          <button
            type="button"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            title="Send Message"
            style={{
              padding: '0.45rem',
              backgroundColor: input.trim() && !isLoading ? 'var(--primary)' : 'var(--border)',
              color: 'white',
              borderRadius: '50%',
              cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
              display: 'flex',
              alignItems: 'center',
              boxShadow: input.trim() ? '0 2px 8px rgba(16, 185, 129, 0.3)' : 'none',
              transition: 'all 0.2s',
            }}
          >
            <Send size={18} />
          </button>
        </div>

        {/* Medical Disclaimer */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem', marginTop: '0.6rem' }}>
          <AlertCircle size={12} color="var(--text-muted)" />
          <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', margin: 0, textAlign: 'center' }}>
            {t('chat.disclaimer')}
          </p>
        </div>
      </div>
    </div>
  );
};

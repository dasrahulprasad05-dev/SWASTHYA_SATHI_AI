import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send, Mic, Paperclip, AlertCircle } from 'lucide-react';

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
  const [isFocused, setIsFocused] = useState(false);
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
    <div className="chat-input-wrapper" style={{ padding: '0.85rem 1.5rem 1.25rem 1.5rem', backgroundColor: 'transparent', position: 'relative' }}>
      <div style={{ maxWidth: '840px', margin: '0 auto' }}>
        {/* Input Bar Container */}
        <motion.div
          animate={{
            borderColor: isFocused ? 'var(--primary-300)' : 'rgba(255, 255, 255, 0.4)',
            boxShadow: isFocused ? '0 8px 32px rgba(16, 185, 129, 0.15)' : '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
          }}
          className="glass-panel"
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            gap: '0.6rem',
            borderRadius: '24px',
            padding: '0.5rem 0.85rem',
            border: '1.5px solid rgba(255, 255, 255, 0.4)',
            transition: 'border-color 0.2s',
          }}
        >
          {/* Attachment Button */}
          <motion.button
            whileHover={{ scale: 1.1, backgroundColor: 'var(--surface-hover)' }}
            whileTap={{ scale: 0.9 }}
            type="button"
            title="Attach Medical Report / Prescription"
            style={{
              padding: '0.4rem',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              borderRadius: '50%',
              border: 'none',
              background: 'transparent',
            }}
          >
            <Paperclip size={18} />
          </motion.button>

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            value={input}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
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
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
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
              border: 'none',
            }}
          >
            <Mic size={18} />
          </motion.button>

          {/* Send Button */}
          <motion.button
            whileHover={input.trim() && !isLoading ? { scale: 1.05 } : {}}
            whileTap={input.trim() && !isLoading ? { scale: 0.95 } : {}}
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
              border: 'none',
              boxShadow: input.trim() ? '0 2px 8px rgba(16, 185, 129, 0.3)' : 'none',
            }}
          >
            <Send size={18} />
          </motion.button>
        </motion.div>

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

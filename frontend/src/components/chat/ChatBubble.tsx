import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  HeartPulse,
  CheckCircle2,
  AlertTriangle,
  Copy,
  Check,
  ThumbsUp,
  ThumbsDown,
  ShieldCheck,
  Stethoscope,
  Sparkles,
} from 'lucide-react';
import type { Message } from '../../types';
import { formatDate } from '../../lib/utils';

interface ChatBubbleProps {
  message: Message;
  onSendFollowUp?: (text: string) => void;
}

export const ChatBubble: React.FC<ChatBubbleProps> = ({ message, onSendFollowUp }) => {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState<boolean | null>(null);

  const isUser = message.role === 'user';

  const handleCopy = () => {
    navigator.clipboard.writeText(message.content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const bubbleVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: 'spring', stiffness: 200, damping: 20 }
    }
  };

  if (isUser) {
    return (
      <motion.div
        variants={bubbleVariants}
        initial="hidden"
        animate="visible"
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          marginBottom: '1.25rem',
        }}
      >
        <div
          style={{
            maxWidth: '75%',
            backgroundColor: 'var(--navy)',
            color: '#FFFFFF',
            borderRadius: '16px 16px 4px 16px',
            padding: '1rem 1.25rem',
            boxShadow: 'var(--shadow-md)',
          }}
        >
          <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: 1.6, color: '#FFFFFF' }}>
            {message.content}
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '0.35rem',
              fontSize: '0.7rem',
              color: '#94A3B8',
            }}
          >
            {formatDate(message.timestamp, 'short')}
          </div>
        </div>
      </motion.div>
    );
  }

  // Assistant Message
  return (
    <motion.div
      variants={bubbleVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.85rem',
        marginBottom: '1.5rem',
      }}
    >
      {/* Doctor / AI Avatar */}
      <div
        style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 10px rgba(16, 185, 129, 0.25)',
          flexShrink: 0,
          marginTop: '4px',
        }}
      >
        <Stethoscope size={20} />
      </div>

      {/* Bubble Body */}
      <div
        style={{
          maxWidth: '80%',
          backgroundColor: 'var(--surface)',
          border: '1px solid var(--border)',
          borderRadius: '16px 16px 16px 4px',
          padding: '1.25rem',
          boxShadow: 'var(--shadow)',
        }}
      >
        {/* Header with Title & Confidence */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--primary-dark)' }}>
              Swasthya Sathi AI
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary-dark)',
                padding: '0.1rem 0.4rem',
                borderRadius: '4px',
                fontWeight: 700,
              }}
            >
              Verified
            </span>
          </div>
          {message.metadata?.confidence !== undefined && (
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontWeight: 600 }}>
              Confidence: {Math.round(message.metadata.confidence * 100)}%
            </span>
          )}
        </div>

        {/* Content Body */}
        <div
          style={{
            fontSize: '0.92rem',
            lineHeight: 1.7,
            color: 'var(--text-primary)',
            whiteSpace: 'pre-line',
            marginBottom: '1rem',
          }}
        >
          {message.content}
        </div>

        {/* Recommendations Section */}
        {message.metadata?.recommendations && message.metadata.recommendations.length > 0 && (
          <div
            style={{
              backgroundColor: 'var(--bg-warm)',
              border: '1px solid #A7F3D0',
              borderRadius: 'var(--radius-lg)',
              padding: '0.85rem 1rem',
              marginBottom: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#047857', marginBottom: '0.4rem' }}>
              <CheckCircle2 size={16} />
              <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>Recommended Actions</span>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: 0, padding: 0 }}>
              {message.metadata.recommendations.map((rec, idx) => (
                <li key={idx} style={{ fontSize: '0.8rem', color: '#065F46', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 800 }}>•</span>
                  <span>{rec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Warnings Alert Box */}
        {message.metadata?.warnings && message.metadata.warnings.length > 0 && (
          <div
            style={{
              backgroundColor: '#FEF2F2',
              border: '1px solid #FCA5A5',
              borderRadius: 'var(--radius-lg)',
              padding: '0.85rem 1rem',
              marginBottom: '0.85rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#DC2626', marginBottom: '0.4rem' }}>
              <AlertTriangle size={16} />
              <span style={{ fontSize: '0.82rem', fontWeight: 700 }}>Warning Signs & Red Flags</span>
            </div>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: 0, padding: 0 }}>
              {message.metadata.warnings.map((warn, idx) => (
                <li key={idx} style={{ fontSize: '0.8rem', color: '#991B1B', display: 'flex', alignItems: 'flex-start', gap: '0.4rem' }}>
                  <span style={{ color: '#DC2626', fontWeight: 800 }}>!</span>
                  <span>{warn}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Follow-up Prompt Chip */}
        {message.metadata?.followUp && onSendFollowUp && (
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} style={{ display: 'inline-block', marginBottom: '0.85rem' }}>
            <button
              onClick={() => onSendFollowUp(message.metadata?.followUp || '')}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                backgroundColor: 'var(--primary-light)',
                color: 'var(--primary-dark)',
                border: '1px dashed var(--primary)',
                padding: '0.4rem 0.85rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
            >
              <Sparkles size={14} />
              <span>{message.metadata.followUp}</span>
            </button>
          </motion.div>
        )}

        {/* Footer Actions & Sources */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingTop: '0.65rem',
            borderTop: '1px solid var(--border-light)',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          {/* Sources */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            <ShieldCheck size={14} color="var(--primary)" />
            <span>
              Sources:{' '}
              {message.metadata?.sources?.join(', ') || 'Odisha Health Portal, WHO Guidelines'}
            </span>
          </div>

          {/* Copy and Feedback Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleCopy}
              title="Copy answer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
                fontSize: '0.75rem',
                color: copied ? 'var(--primary-dark)' : 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.2rem 0.4rem',
                borderRadius: '4px',
              }}
            >
              {copied ? <Check size={14} /> : <Copy size={14} />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setLiked(true)}
              title="Helpful"
              style={{
                color: liked === true ? 'var(--primary)' : 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.2rem',
              }}
            >
              <ThumbsUp size={14} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              onClick={() => setLiked(false)}
              title="Not helpful"
              style={{
                color: liked === false ? '#EF4444' : 'var(--text-muted)',
                cursor: 'pointer',
                padding: '0.2rem',
              }}
            >
              <ThumbsDown size={14} />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

import React from 'react';
import { AlertCircle, CheckCircle2, ShieldAlert, Sparkles, Stethoscope, ChevronRight } from 'lucide-react';

interface MarkdownRendererProps {
  content: string;
  className?: string;
  isDarkTheme?: boolean;
}

/**
 * Formats inline markdown strings (e.g. **bold**, *italic*, `code`) into React nodes.
 */
export function formatInlineText(text: string): React.ReactNode[] {
  if (!text) return [];

  // Match **bold**, *italic*, _italic_, `code`
  const regex = /(\*\*([^*]+)\*\*|\*([^*]+)\*|_([^_]+)_|`([^`]+)`)/g;
  const elements: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    const matchIndex = match.index;
    if (matchIndex > lastIndex) {
      elements.push(text.substring(lastIndex, matchIndex));
    }

    if (match[2]) {
      // **bold**
      elements.push(
        <strong key={`b-${matchIndex}`} style={{ fontWeight: 700, color: 'var(--text-primary)' }}>
          {match[2]}
        </strong>
      );
    } else if (match[3] || match[4]) {
      // *italic* or _italic_
      elements.push(
        <em key={`i-${matchIndex}`} style={{ fontStyle: 'italic', color: 'var(--text-secondary)' }}>
          {match[3] || match[4]}
        </em>
      );
    } else if (match[5]) {
      // `code`
      elements.push(
        <code
          key={`c-${matchIndex}`}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            padding: '0.15rem 0.4rem',
            borderRadius: '4px',
            fontFamily: 'monospace',
            fontSize: '0.85em',
          }}
        >
          {match[5]}
        </code>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements;
}

export const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content, className = '' }) => {
  if (!content) return null;

  const lines = content.split('\n');
  const renderedElements: React.ReactNode[] = [];

  let currentList: { type: 'ordered' | 'unordered'; items: string[] } | null = null;

  const flushList = (keyPrefix: string) => {
    if (!currentList) return;

    if (currentList.type === 'ordered') {
      renderedElements.push(
        <div key={`${keyPrefix}-ol`} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', margin: '0.75rem 0 1.25rem 0' }}>
          {currentList.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.75rem',
                backgroundColor: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid var(--border-light)',
                borderRadius: 'var(--radius-lg)',
                padding: '0.75rem 1rem',
                fontSize: '0.92rem',
                lineHeight: 1.6,
                color: 'var(--text-primary)',
              }}
            >
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid rgba(16, 185, 129, 0.35)',
                  color: '#10B981',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  flexShrink: 0,
                  marginTop: '2px',
                }}
              >
                {idx + 1}
              </div>
              <div style={{ flex: 1 }}>{formatInlineText(item)}</div>
            </div>
          ))}
        </div>
      );
    } else {
      renderedElements.push(
        <div key={`${keyPrefix}-ul`} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '0.75rem 0 1.25rem 0' }}>
          {currentList.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.65rem',
                padding: '0.4rem 0.5rem',
                fontSize: '0.9rem',
                lineHeight: 1.55,
                color: 'var(--text-secondary)',
              }}
            >
              <ChevronRight size={16} color="#38BDF8" style={{ flexShrink: 0, marginTop: '3px' }} />
              <div style={{ flex: 1 }}>{formatInlineText(item)}</div>
            </div>
          ))}
        </div>
      );
    }
    currentList = null;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    if (!trimmed) {
      flushList(`flush-${index}`);
      return;
    }

    // 1. Heading check: ### Header or ## Header or # Header
    const headingMatch = trimmed.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      flushList(`h-${index}`);
      const level = headingMatch[1].length;
      const headingText = headingMatch[2].replace(/\*\*/g, '');

      renderedElements.push(
        <div
          key={`heading-${index}`}
          style={{
            marginTop: index === 0 ? '0' : '1.25rem',
            marginBottom: '0.6rem',
            fontSize: level <= 2 ? '1.15rem' : '1.02rem',
            fontWeight: 800,
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.45rem',
          }}
        >
          <Sparkles size={16} color="var(--primary)" />
          <span>{headingText}</span>
        </div>
      );
      return;
    }

    // 2. Standalone bold header line like `**Home care tips you can try now**` or `**Red-flag warning signs...**`
    const boldHeaderMatch = trimmed.match(/^\*\*([^*]+)\*\*$/);
    if (boldHeaderMatch) {
      flushList(`bh-${index}`);
      const title = boldHeaderMatch[1];
      const isRedFlag = title.toLowerCase().includes('red-flag') || title.toLowerCase().includes('warning') || title.toLowerCase().includes('emergency');
      const isHomeCare = title.toLowerCase().includes('home care') || title.toLowerCase().includes('tips') || title.toLowerCase().includes('action');

      renderedElements.push(
        <div
          key={`section-header-${index}`}
          style={{
            marginTop: index === 0 ? '0.5rem' : '1.5rem',
            marginBottom: '0.75rem',
            padding: '0.6rem 0.85rem',
            borderRadius: 'var(--radius-lg)',
            backgroundColor: isRedFlag ? 'rgba(239, 68, 68, 0.12)' : isHomeCare ? 'rgba(16, 185, 129, 0.12)' : 'rgba(56, 189, 248, 0.1)',
            border: isRedFlag ? '1px solid rgba(239, 68, 68, 0.25)' : isHomeCare ? '1px solid rgba(16, 185, 129, 0.25)' : '1px solid rgba(56, 189, 248, 0.2)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {isRedFlag ? (
            <ShieldAlert size={18} color="#EF4444" />
          ) : isHomeCare ? (
            <Stethoscope size={18} color="#10B981" />
          ) : (
            <AlertCircle size={18} color="#38BDF8" />
          )}
          <span
            style={{
              fontWeight: 800,
              fontSize: '0.95rem',
              color: isRedFlag ? '#F87171' : isHomeCare ? '#34D399' : 'var(--text-primary)',
            }}
          >
            {title}
          </span>
        </div>
      );
      return;
    }

    // 3. Ordered List Item: e.g. `1. **Rest and limit activity** – Description`
    const orderedMatch = trimmed.match(/^(\d+)\.\s+(.+)$/);
    if (orderedMatch) {
      if (!currentList || currentList.type !== 'ordered') {
        flushList(`switch-ol-${index}`);
        currentList = { type: 'ordered', items: [] };
      }
      currentList.items.push(orderedMatch[2]);
      return;
    }

    // 4. Unordered List Item: e.g. `- Item` or `* Item`
    const unorderedMatch = trimmed.match(/^[-*•]\s+(.+)$/);
    if (unorderedMatch) {
      if (!currentList || currentList.type !== 'unordered') {
        flushList(`switch-ul-${index}`);
        currentList = { type: 'unordered', items: [] };
      }
      currentList.items.push(unorderedMatch[1]);
      return;
    }

    // 5. Standard paragraph
    flushList(`p-${index}`);
    renderedElements.push(
      <p
        key={`p-${index}`}
        style={{
          fontSize: '0.92rem',
          lineHeight: 1.75,
          color: 'var(--text-secondary)',
          margin: '0 0 0.85rem 0',
        }}
      >
        {formatInlineText(trimmed)}
      </p>
    );
  });

  flushList('final-flush');

  return <div className={`markdown-content ${className}`}>{renderedElements}</div>;
};

export default MarkdownRenderer;

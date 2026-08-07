import React from 'react';
import { MessageSquare, Pin, Trash2, Plus, Clock } from 'lucide-react';
import type { Chat } from '../../types';
import { getChatGroupLabel } from '../../lib/utils';

interface ChatSidebarProps {
  chats: Chat[];
  activeChatId: string;
  onSelectChat: (id: string) => void;
  onNewChat: () => void;
  onDeleteChat: (id: string, e: React.MouseEvent) => void;
}

export const ChatSidebar: React.FC<ChatSidebarProps> = ({
  chats,
  activeChatId,
  onSelectChat,
  onNewChat,
  onDeleteChat,
}) => {
  // Group chats by timeline
  const groupedChats = chats.reduce<Record<string, Chat[]>>((acc, chat) => {
    const group = getChatGroupLabel(chat.timestamp);
    if (!acc[group]) acc[group] = [];
    acc[group].push(chat);
    return acc;
  }, {});

  return (
    <div
      style={{
        width: '240px',
        backgroundColor: 'var(--surface)',
        borderRight: '1px solid var(--border)',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        flexShrink: 0,
      }}
    >
      {/* Top Action */}
      <div style={{ padding: '1rem', borderBottom: '1px solid var(--border-light)' }}>
        <button
          onClick={onNewChat}
          style={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            backgroundColor: 'var(--primary-light)',
            color: 'var(--primary-dark)',
            padding: '0.6rem 0.85rem',
            borderRadius: 'var(--radius-lg)',
            fontSize: '0.85rem',
            fontWeight: 700,
            cursor: 'pointer',
          }}
        >
          <Plus size={16} />
          <span>New Health Query</span>
        </button>
      </div>

      {/* History List */}
      <div style={{ flex: 1, overflowY: 'auto', padding: '0.75rem' }}>
        {Object.entries(groupedChats).map(([group, groupChats]) => (
          <div key={group} style={{ marginBottom: '1.25rem' }}>
            <p
              style={{
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                paddingLeft: '0.5rem',
                marginBottom: '0.4rem',
              }}
            >
              {group}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
              {groupChats.map((chat) => {
                const isActive = chat.id === activeChatId;
                return (
                  <div
                    key={chat.id}
                    onClick={() => onSelectChat(chat.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.6rem 0.65rem',
                      borderRadius: 'var(--radius)',
                      backgroundColor: isActive ? 'var(--primary-light)' : 'transparent',
                      color: isActive ? 'var(--primary-dark)' : 'var(--text-primary)',
                      cursor: 'pointer',
                      fontSize: '0.82rem',
                      fontWeight: isActive ? 700 : 500,
                      transition: 'background-color 0.15s',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', overflow: 'hidden' }}>
                      <MessageSquare
                        size={15}
                        style={{
                          color: isActive ? 'var(--primary-dark)' : 'var(--text-muted)',
                          flexShrink: 0,
                        }}
                      />
                      <span className="truncate" style={{ maxWidth: '140px' }}>
                        {chat.title}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                      {chat.isPinned && <Pin size={12} color="var(--primary)" />}
                      <button
                        onClick={(e) => onDeleteChat(chat.id, e)}
                        title="Delete chat"
                        style={{
                          color: 'var(--text-muted)',
                          padding: '0.15rem',
                          cursor: 'pointer',
                          display: 'flex',
                        }}
                      >
                        <Trash2 size={12} />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

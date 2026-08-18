import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { AppLayout } from '../components/layouts/AppLayout';
import { ChatSidebar } from '../components/chat/ChatSidebar';
import { ChatBubble } from '../components/chat/ChatBubble';
import { ChatInput } from '../components/chat/ChatInput';
import { AIWelcome } from '../components/chat/AIWelcome';
import { TypingIndicator } from '../components/chat/TypingIndicator';
import { EmergencyCard } from '../components/common/EmergencyCard';
import { HealthTipCarousel } from '../components/common/HealthTipCarousel';
import { QuickActions } from '../components/common/QuickActions';
import { TrustedSourcesPanel } from '../components/common/TrustedSourcesPanel';
import { chatService } from '../services/apiServices';
import type { Chat, Message } from '../types';
import { useNavigate } from 'react-router-dom';

export const ChatPage: React.FC = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const [chats, setChats] = useState<Chat[]>([]);
  const [activeChatId, setActiveChatId] = useState<string>('1');
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load chats on mount
  useEffect(() => {
    const loadChats = async () => {
      const data = await chatService.getChats();
      setChats(data);
      if (data.length > 0) {
        setActiveChatId(data[0].id);
        const initialMsgs = await chatService.getChatMessages(data[0].id);
        setMessages(initialMsgs);
      }
    };
    loadChats();
  }, []);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  const handleSelectChat = async (id: string) => {
    setActiveChatId(id);
    const msgs = await chatService.getChatMessages(id);
    setMessages(msgs);
  };

  const handleNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: 'New Health Query',
      timestamp: new Date().toISOString(),
      preview: 'Start a new conversation...',
      messageCount: 0,
      language: (i18n.language as 'en' | 'hi' | 'or') || 'en',
    };
    setChats([newChat, ...chats]);
    setActiveChatId(newChat.id);
    setMessages([]);
  };

  const handleDeleteChat = async (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    await chatService.deleteChat(id);
    const remaining = chats.filter((c) => c.id !== id);
    setChats(remaining);
    if (activeChatId === id && remaining.length > 0) {
      handleSelectChat(remaining[0].id);
    } else if (remaining.length === 0) {
      handleNewChat();
    }
  };

  const handleSendMessage = async (text: string) => {
    if (!text.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      chatId: activeChatId,
      content: text,
      role: 'user',
      timestamp: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    try {
      const lang = (i18n.language?.slice(0, 2) as 'en' | 'hi' | 'or') || 'en';
      const response = await chatService.sendMessage(activeChatId, text, lang);
      setMessages((prev) => [...prev, response]);

      // Update chat preview in sidebar
      setChats((prev) =>
        prev.map((c) =>
          c.id === activeChatId
            ? { ...c, preview: text.slice(0, 40) + '...', title: c.messageCount === 0 ? text.slice(0, 30) : c.title, messageCount: c.messageCount + 2 }
            : c
        )
      );
    } catch {
      // fallback
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AppLayout
      topbarTitle={t('chat.title')}
      topbarSubtitle={t('chat.subtitle')}
      rightPanel={
        <>
          <EmergencyCard />
          <QuickActions />
          <HealthTipCarousel />
          <TrustedSourcesPanel />
        </>
      }
    >
      <div
        className="chat-container app-chat-main"
        style={{
          display: 'flex',
          height: 'calc(100vh - var(--topbar-height) - 3rem)',
          backgroundColor: 'var(--surface)',
          borderRadius: 'var(--radius-2xl)',
          border: '1px solid var(--border)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-sm)',
        }}
      >
        {/* Left: Chat history panel */}
        <div className="chat-sidebar-panel">
          <ChatSidebar
            chats={chats}
            activeChatId={activeChatId}
            onSelectChat={handleSelectChat}
            onNewChat={handleNewChat}
            onDeleteChat={handleDeleteChat}
          />
        </div>

        {/* Right: Messages conversation area */}
        <div className="chat-content-area" style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, height: '100%' }}>
          {/* Scrollable messages */}
          <div className="chat-messages-area" style={{ flex: 1, overflowY: 'auto', padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
            {messages.length === 0 ? (
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <AIWelcome onSelectPrompt={handleSendMessage} />
              </div>
            ) : (
              <>
                {messages.map((msg) => (
                  <ChatBubble
                    key={msg.id}
                    message={msg}
                    onSendFollowUp={handleSendMessage}
                  />
                ))}
                {isLoading && (
                  <div style={{ marginBottom: '1.5rem' }}>
                    <TypingIndicator />
                  </div>
                )}
                <div ref={messagesEndRef} />
              </>
            )}
          </div>

          {/* Chat input footer */}
          <div className="chat-input-wrapper" style={{ marginTop: 'auto' }}>
            <ChatInput
              onSendMessage={handleSendMessage}
              isLoading={isLoading}
              onVoiceClick={() => navigate('/voice')}
            />
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default ChatPage;

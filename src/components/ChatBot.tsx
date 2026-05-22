'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { findBestMatch, getFallbackResponse, getSuggestions, type FaqItem, type ChatMessage } from '@/lib/chatbot';
import Link from 'next/link';

let messageIdCounter = 0;

function generateId(): string {
  messageIdCounter += 1;
  return `msg-${messageIdCounter}-${Math.random().toString(36).slice(2, 8)}`;
}

function parseMarkdownLinks(text: string): React.ReactNode {
  const parts = text.split(/(\[.*?\]\(.*?\))/g);
  return parts.map((part, i) => {
    const match = part.match(/\[(.*?)\]\((.*?)\)/);
    if (match) {
      return (
        <Link key={i} href={match[2]} className="text-accent underline hover:text-yellow-400 transition-colors">
          {match[1]}
        </Link>
      );
    }
    return <span key={i}>{part}</span>;
  });
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const hasLoadedRef = useRef(false);

  const loadFaqs = useCallback(() => {
    if (hasLoadedRef.current) return;
    hasLoadedRef.current = true;
    setIsLoading(true);
    fetch('/api/faqs')
      .then((res) => res.json())
      .then((data) => {
        setFaqs(data.faqs || []);
      })
      .catch(() => {
        setFaqs([]);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    loadFaqs();
  }, [loadFaqs]);

  const handleClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const addBotMessage = useCallback((content: string) => {
    const botMsg: ChatMessage = {
      id: generateId(),
      role: 'bot',
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, botMsg]);
  }, []);

  const processMessage = useCallback((userInput: string) => {
    const userMsg: ChatMessage = {
      id: generateId(),
      role: 'user',
      content: userInput,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);

    setTimeout(() => {
      const match = findBestMatch(userInput, faqs);
      if (match) {
        addBotMessage(match.answer);
      } else {
        addBotMessage(getFallbackResponse());
      }
    }, 400);
  }, [faqs, addBotMessage]);

  const handleSend = useCallback(() => {
    if (!input.trim() || isLoading) return;
    const userInput = input.trim();
    setInput('');
    processMessage(userInput);
  }, [input, isLoading, processMessage]);

  const handleSuggestion = useCallback((suggestion: string) => {
    setInput('');
    processMessage(suggestion);
  }, [processMessage]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }, [handleSend]);

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
            className="fixed bottom-24 right-6 w-[380px] max-w-[calc(100vw-2rem)] bg-white border border-border z-[9999] overflow-hidden"
            style={{ boxShadow: '0 20px 60px rgba(0, 33, 71, 0.2)' }}
          >
            <div className="bg-primary px-5 py-4 flex items-center justify-between">
              <div>
                <h3 className="font-serif text-lg text-white tracking-tight">Ask AIIT Clubs</h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-white/50">Keyword-based assistant</p>
              </div>
              <button
                onClick={handleClose}
                className="text-white/60 hover:text-white transition-colors text-xl font-light"
                aria-label="Close chat"
              >
                &times;
              </button>
            </div>

            <div className="h-[360px] overflow-y-auto px-5 py-4 bg-surface">
              {messages.length === 0 && !isLoading && (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-12 h-12 bg-primary flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <p className="font-serif text-base text-primary mb-2">How can I help?</p>
                  <p className="font-sans text-xs text-primary/50 mb-6">Ask about clubs, events, committee, or how to apply.</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {getSuggestions().map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => handleSuggestion(suggestion)}
                        className="font-sans text-[10px] uppercase tracking-wider text-primary/70 border border-border px-3 py-1.5 hover:border-accent hover:text-accent transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isLoading && (
                <div className="flex items-center justify-center h-full">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}

              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`mb-4 ${msg.role === 'user' ? 'flex justify-end' : 'flex justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-3 font-sans text-sm leading-relaxed ${
                      msg.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-white border border-border text-primary/80'
                    }`}
                  >
                    {msg.role === 'bot' ? parseMarkdownLinks(msg.content) : msg.content}
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="border-t border-border px-4 py-3 bg-white flex items-center gap-2">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                className="flex-1 font-sans text-sm text-primary placeholder:text-primary/30 bg-transparent outline-none"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-8 h-8 bg-accent flex items-center justify-center hover:bg-yellow-400 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={isOpen ? handleClose : handleOpen}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary flex items-center justify-center z-[9998] hover:bg-primary/90 transition-colors"
        style={{ boxShadow: '0 8px 32px rgba(0, 33, 71, 0.3)' }}
        aria-label="Open chat"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-white text-2xl font-light"
            >
              &times;
            </motion.span>
          ) : (
            <motion.svg
              key="chat"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="w-6 h-6 text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </motion.svg>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default ChatBot;

'use client';

import React, { useState, useEffect } from 'react';
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from 'framer-motion';

interface FaqItem {
  _id: string;
  question: string;
  answer: string;
  keywords: string[];
  category: string;
  order: number;
  clubName?: string;
}

const fallbackFaqs: FaqItem[] = [
  {
    _id: 'fallback-1',
    question: "How do I apply for a Core Technical Division?",
    answer: "Applications for the Core Technical Divisions (Cascade, Programming, Networking) open at the start of each academic semester. Students must submit their technical portfolio followed by a two-stage interview process consisting of a technical assessment and a peer-review panel.",
    keywords: ['apply', 'join', 'signup', 'registration', 'admission'],
    category: 'applications',
    order: 0,
  },
  {
    _id: 'fallback-2',
    question: "What is the role of the Student Committee?",
    answer: "The Student Committee acts as the executive governing body for all technical activities within AIIT. They are responsible for division oversight, event architecture, institutional coordination, and ensuring that all club operations meet university standards.",
    keywords: ['committee', 'council', 'role', 'student committee', 'what does'],
    category: 'committee',
    order: 1,
  },
  {
    _id: 'fallback-3',
    question: "Can I be a member of multiple clubs simultaneously?",
    answer: "While students are encouraged to participate in diverse events, 'Division Membership' is limited to one primary division to ensure focused technical development and meeting the rigorous execution standards required for core projects.",
    keywords: ['multiple', 'clubs', 'member', 'join', 'simultaneously', 'more than one'],
    category: 'clubs',
    order: 2,
  },
  {
    _id: 'fallback-4',
    question: "How are the division leaders selected?",
    answer: "Division leaders (Coordinators) are selected based on a combination of technical merit, past project execution performance, and leadership potential. The final appointment is made by the Faculty Leadership in consultation with the outgoing Student Committee.",
    keywords: ['leader', 'coordinator', 'selected', 'chosen', 'appointment', 'how'],
    category: 'committee',
    order: 3,
  },
  {
    _id: 'fallback-5',
    question: "Who can I contact for flagship event sponsorship?",
    answer: "All corporate engagement and sponsorship inquiries should be directed to the Student Committee's Outreach wing or the Chief Coordinator via the official institutional email address provided in the footer.",
    keywords: ['contact', 'sponsorship', 'sponsor', 'corporate', 'event', 'reach'],
    category: 'contact',
    order: 4,
  },
];

const categories = [
  { label: 'All', value: 'all' },
  { label: 'General', value: 'general' },
  { label: 'Committee', value: 'committee' },
  { label: 'Clubs', value: 'clubs' },
  { label: 'Events', value: 'events' },
  { label: 'Contact', value: 'contact' },
  { label: 'Applications', value: 'applications' },
];

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState('all');
  const [faqs, setFaqs] = useState<FaqItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/api/faqs')
      .then((res) => res.json())
      .then((data) => {
        const fetchedFaqs = data.faqs || [];
        if (fetchedFaqs.length > 0) {
          setFaqs(fetchedFaqs);
        } else {
          setFaqs(fallbackFaqs);
        }
      })
      .catch(() => {
        setFaqs(fallbackFaqs);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const filteredFaqs = activeCategory === 'all'
    ? faqs
    : faqs.filter((faq) => faq.category === activeCategory);

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 border-b border-rule overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1a2e5a 1px, transparent 1px),
              linear-gradient(to bottom, #1a2e5a 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-accent font-bold">Institutional Support</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl text-primary tracking-tight leading-none mb-8">
            Frequently Asked <br />
            <span className="italic text-primary/40">Inquiries.</span>
          </h1>
          <p className="font-sans text-sm text-primary/60 max-w-xl leading-[1.8]">
            Clarifying the protocols, hierarchies, and operational standards of the Amity AIIT technical ecosystem.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-b border-rule bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => {
                  setActiveCategory(cat.value);
                  setOpenIndex(null);
                }}
                className={`font-sans text-[10px] uppercase tracking-widest px-4 py-2 border transition-colors ${
                  activeCategory === cat.value
                    ? 'bg-primary text-white border-primary'
                    : 'border-border text-primary/60 hover:border-accent hover:text-accent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-accent animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-2 h-2 bg-accent animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-2 h-2 bg-accent animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          ) : filteredFaqs.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-xl text-primary/40">No FAQs in this category yet.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div
                  key={faq._id}
                  className="border border-rule bg-white overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex items-center justify-between p-8 text-left group"
                  >
                    <div className="flex items-start space-x-6">
                      <span className="font-serif text-xl text-accent opacity-40 group-hover:opacity-100 transition-opacity">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="flex flex-col">
                        <h3 className="font-serif text-xl md:text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                          {faq.question}
                        </h3>
                        {faq.clubName && (
                          <span className="font-sans text-[10px] uppercase tracking-widest text-primary/40 mt-1">
                            {faq.clubName}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className={`text-2xl text-primary/20 transform transition-transform duration-500 ${openIndex === index ? 'rotate-45' : 'rotate-0'}`}>
                      +
                    </span>
                  </button>

                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      >
                        <div className="px-8 pb-10 pt-0 ml-12">
                          <div className="h-px w-12 bg-accent/30 mb-6" />
                          <p className="font-sans text-sm md:text-base text-primary/70 leading-[1.9] max-w-2xl">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          )}

          {/* Further Inquiry CTA */}
          <div className="mt-20 p-12 border-t-2 border-primary flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="font-serif text-2xl text-primary mb-2">Still require clarification?</h4>
              <p className="font-sans text-sm text-primary/60">Contact the Student Committee for direct institutional support.</p>
            </div>
            <Link
              href="/contact"
              className="px-10 py-4 bg-primary text-white font-sans text-xs uppercase tracking-widest hover:bg-accent hover:text-primary transition-all duration-300 flex-shrink-0"
            >
              Reach Out &rarr;
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default FAQPage;

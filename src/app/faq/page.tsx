'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from 'framer-motion';

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I apply for a Core Technical Division?",
      answer: "Applications for the Core Technical Divisions (Cascade, Programming, Networking) open at the start of each academic semester. Students must submit their technical portfolio followed by a two-stage interview process consisting of a technical assessment and a peer-review panel."
    },
    {
      question: "What is the role of the Student Committee?",
      answer: "The Student Committee acts as the executive governing body for all technical activities within AIIT. They are responsible for division oversight, event architecture, institutional coordination, and ensuring that all club operations meet university standards."
    },
    {
      question: "Can I be a member of multiple clubs simultaneously?",
      answer: "While students are encouraged to participate in diverse events, 'Division Membership' is limited to one primary division to ensure focused technical development and meeting the rigorous execution standards required for core projects."
    },
    {
      question: "How are the division leaders selected?",
      answer: "Division leaders (Coordinators) are selected based on a combination of technical merit, past project execution performance, and leadership potential. The final appointment is made by the Faculty Leadership in consultation with the outgoing Student Committee."
    },
    {
      question: "Who can I contact for flagship event sponsorship?",
      answer: "All corporate engagement and sponsorship inquiries should be directed to the Student Committee's Outreach wing or the Chief Coordinator via the official institutional email address provided in the footer."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Header */}
      <section className="relative pt-40 pb-20 border-b border-rule overflow-hidden">
        {/* Engineering Grid Background */}
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

      {/* FAQ Accordion Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
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
                    <h3 className="font-serif text-xl md:text-2xl text-primary group-hover:text-accent transition-colors duration-300">
                      {faq.question}
                    </h3>
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

          {/* Further Inquiry CTA */}
          <div className="mt-20 p-12 border-t-2 border-primary flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h4 className="font-serif text-2xl text-primary mb-2">Still require clarification?</h4>
              <p className="font-sans text-sm text-primary/60">Contact the Student Committee for direct institutional support.</p>
            </div>
            <Link 
              href="/reach-out"
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

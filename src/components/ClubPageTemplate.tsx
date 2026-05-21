'use client';

import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";
import SanityImage from "./SanityImage";

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

export interface Leader {
  _id?: string;
  id?: string;
  role: string;
  name: string;
  message?: string;
  portrait?: any;
  twitterUrl?: string;
  linkedinUrl?: string;
}

export interface Activity {
  _id?: string;
  title: string;
  date: string;
  desc: string;
  description?: string;
}

export interface Faq {
  _id?: string;
  q?: string;
  question?: string;
  a?: string;
  answer?: string;
}

export interface GalleryImage {
  _id: string;
  title: string;
  year: string;
  photo: any;
  gridClass: string;
  order: number;
}

export interface ClubPageData {
  name: string;
  tagline: string;
  instagramUrl: string;
  applyLabel: string;
  about: { headline: string; body1: string; body2: string; stats: { label: string; value: string }[] };
  activities: { past: Activity[]; upcoming: Activity[]; extra: Activity[] };
  leadership: Leader[];
  faqs: Faq[];
  hero: React.ReactNode;
  gallery?: GalleryImage[];
}

interface Props {
  data: ClubPageData;
}

const ClubPageTemplate = ({ data }: Props) => {
  const [galleryExpanded, setGalleryExpanded] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const SocialIcons = ({ twitterUrl, linkedinUrl, size = 16 }: { twitterUrl?: string; linkedinUrl?: string; size?: number }) => (
    <div className="flex items-center space-x-4">
      {twitterUrl && (
        <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="text-primary/30 hover:text-accent transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
        </a>
      )}
      {linkedinUrl && (
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-primary/30 hover:text-accent transition-colors duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
      )}
    </div>
  );

  const getDesc = (activity: Activity) => activity.desc || activity.description || '';
  const getQ = (faq: Faq) => faq.q || faq.question || '';
  const getA = (faq: Faq) => faq.a || faq.answer || '';

  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {data.hero}

      <section className="py-32 bg-surface border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center space-x-4 mb-16">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">About the Club</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div>
              <h2 className="font-serif text-5xl text-primary tracking-tight leading-tight mb-8"
                dangerouslySetInnerHTML={{ __html: data.about.headline }} />
              <p className="font-sans text-base text-primary/70 leading-[1.9] mb-8">{data.about.body1}</p>
              <p className="font-sans text-base text-primary/70 leading-[1.9]">{data.about.body2}</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {data.about.stats.map((stat, i) => (
                <div key={i} className="border border-rule p-10 bg-white group hover:border-accent transition-colors">
                  <span className="font-serif text-5xl text-accent block mb-3">{stat.value}</span>
                  <span className="font-sans text-[10px] uppercase tracking-widest text-primary/50">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-white border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">Activity Log</span>
          </div>
          <h2 className="font-serif text-5xl text-primary tracking-tight mb-16">What We Do</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-widest text-primary/40 font-bold mb-8 pb-4 border-b border-rule">Past Activities</h3>
              {data.activities.past.map((event, i) => (
                <div key={event._id || i} className="py-8 border-b border-rule group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-serif text-xl text-primary group-hover:text-accent transition-colors">{event.title}</h4>
                    <span className="font-sans text-[9px] uppercase tracking-widest text-primary/30 flex-shrink-0 ml-4">{event.date}</span>
                  </div>
                  <p className="font-sans text-sm text-primary/60 leading-relaxed">{getDesc(event)}</p>
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-sans text-[10px] uppercase tracking-widest text-accent font-bold mb-8 pb-4 border-b border-accent">Upcoming Activities</h3>
              {data.activities.upcoming.map((event, i) => (
                <div key={event._id || i} className="py-8 border-b border-rule group">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-serif text-xl text-primary group-hover:text-accent transition-colors">{event.title}</h4>
                    <span className="font-sans text-[9px] uppercase tracking-widest text-accent flex-shrink-0 ml-4 font-bold">{event.date}</span>
                  </div>
                  <p className="font-sans text-sm text-primary/60 leading-relaxed">{getDesc(event)}</p>
                </div>
              ))}
            </div>
          </div>

          <AnimatePresence>
            {galleryExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12 pt-4">
                  {data.activities.extra.map((event, i) => (
                    <div key={event._id || i} className="border border-rule p-8 group hover:border-accent transition-colors">
                      <h4 className="font-serif text-xl text-primary group-hover:text-accent transition-colors mb-2">{event.title}</h4>
                      <span className="font-sans text-[9px] uppercase tracking-widest text-primary/30 block mb-4">{event.date}</span>
                      <p className="font-sans text-sm text-primary/60 leading-relaxed">{getDesc(event)}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <button
            onClick={() => setGalleryExpanded(!galleryExpanded)}
            className="flex items-center space-x-3 font-sans text-xs uppercase tracking-widest text-primary/50 hover:text-accent transition-colors font-bold"
          >
            {galleryExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
            <span>{galleryExpanded ? "Collapse Event Log" : "View Full Event Archive"}</span>
          </button>
        </div>
      </section>

      {data.gallery && data.gallery.length > 0 && (
        <section className="py-32 bg-primary border-b border-white/10 overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
            <div className="flex items-center justify-between mb-20">
              <div>
                <div className="flex items-center space-x-4 mb-4">
                  <span className="w-12 h-[2px] bg-accent" />
                  <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">Visual Archive</span>
                </div>
                <h2 className="font-serif text-5xl text-white tracking-tight">Event <span className="italic text-white/30">Gallery.</span></h2>
              </div>
              <span className="font-sans text-[9px] uppercase tracking-widest text-white/30 hidden md:block">Captured Moments</span>
            </div>

            <div className="grid grid-cols-12 grid-rows-2 gap-4 h-[720px]">
              {data.gallery.map((img, index) => (
                <div key={img._id} className={`${img.gridClass} relative group overflow-hidden bg-white/5 border border-white/10 hover:border-accent transition-colors duration-500`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent z-10" />
                  {img.photo ? (
                    <SanityImage source={img.photo} alt={img.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                  ) : (
                    <div className="w-full h-full bg-primary/30" style={{ backgroundImage: 'repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0px, rgba(255,255,255,0.02) 1px, transparent 1px, transparent 12px)' }} />
                  )}
                  <div className="absolute bottom-0 left-0 p-8 z-20">
                    <span className="font-serif text-6xl text-white/10 block">{String(index + 1).padStart(2, '0')}</span>
                    <h3 className="font-serif text-2xl text-white mt-2">{img.title}</h3>
                    {img.year && <p className="font-sans text-[10px] uppercase tracking-widest text-accent mt-2">{img.year}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-32 bg-surface border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">The Team</span>
          </div>
          <h2 className="font-serif text-5xl text-primary tracking-tight mb-4">Council &amp; Leadership</h2>
          <div className="w-full h-px bg-rule mb-16" />

          <div className="space-y-0 mb-16">
            {data.leadership.filter(l => l.message).map((leader) => (
              <div key={leader._id || leader.id} className="py-12 border-b border-rule grid grid-cols-1 md:grid-cols-12 gap-12 items-start group">
                <div className="md:col-span-3">
                  <div className="aspect-[3/4] border border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700 relative overflow-hidden">
                    {leader.portrait ? (
                      <SanityImage source={leader.portrait} alt={leader.name} fill className="object-cover" />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center text-primary/20 font-serif text-xs uppercase tracking-widest">Portrait</div>
                    )}
                  </div>
                </div>
                <div className="md:col-span-9">
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-bold block mb-3">{leader.role}</span>
                  <h3 className="font-serif text-3xl text-primary mb-6">{leader.name}</h3>
                  <blockquote className="font-serif text-xl text-primary/60 italic leading-relaxed border-l-4 border-accent pl-6 mb-8">
                    {leader.message}
                  </blockquote>
                  <SocialIcons twitterUrl={leader.twitterUrl} linkedinUrl={leader.linkedinUrl} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            {data.leadership.filter(l => !l.message).slice(0, 2).map((leader) => (
              <div key={leader._id || leader.id} className="flex items-center space-x-8 group">
                <div className="w-32 md:w-40 aspect-[3/4] border border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700 relative overflow-hidden flex-shrink-0">
                  {leader.portrait ? (
                    <SanityImage source={leader.portrait} alt={leader.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-primary/20 font-serif text-[10px] uppercase tracking-widest">Portrait</div>
                  )}
                </div>
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-bold block mb-3">{leader.role}</span>
                  <h3 className="font-serif text-3xl text-primary leading-tight mb-6">{leader.name}</h3>
                  <SocialIcons twitterUrl={leader.twitterUrl} linkedinUrl={leader.linkedinUrl} size={14} />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {data.leadership.filter(l => !l.message).slice(2).map((leader) => (
              <div key={leader._id || leader.id} className="flex items-center space-x-8 group">
                <div className="w-32 md:w-40 aspect-[3/4] border border-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700 relative overflow-hidden flex-shrink-0">
                  {leader.portrait ? (
                    <SanityImage source={leader.portrait} alt={leader.name} fill className="object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gray-200 flex items-center justify-center text-primary/20 font-serif text-[10px] uppercase tracking-widest">Portrait</div>
                  )}
                </div>
                <div>
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-bold block mb-3">{leader.role}</span>
                  <h3 className="font-serif text-3xl text-primary leading-tight mb-6">{leader.name}</h3>
                  <SocialIcons twitterUrl={leader.twitterUrl} linkedinUrl={leader.linkedinUrl} size={14} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 bg-white border-b border-rule">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
          <div className="flex items-center space-x-4 mb-4">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-accent font-bold">Common Questions</span>
          </div>
          <h2 className="font-serif text-5xl text-primary tracking-tight mb-4">F.A.Q</h2>
          <div className="w-full h-px bg-rule mb-16" />

          <div className="max-w-4xl">
            {data.faqs.map((faq, i) => (
              <div key={faq._id || i} className="border-b border-rule">
                <button
                  className="w-full flex justify-between items-center py-8 text-left group"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span className="font-serif text-xl text-primary group-hover:text-accent transition-colors pr-8">{getQ(faq)}</span>
                  <span className="text-accent font-bold font-sans text-xl flex-shrink-0">{openFaq === i ? '−' : '+'}</span>
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-base text-primary/60 leading-[1.8] pb-8 pl-6 border-l-2 border-accent">{getA(faq)}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ClubPageTemplate;

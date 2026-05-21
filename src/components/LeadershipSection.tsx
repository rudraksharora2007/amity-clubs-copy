'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SanityImage from './SanityImage';

interface Leader {
  _id: string;
  name: string;
  role: string;
  description: string;
  department?: string;
  portrait?: any;
  twitterUrl?: string;
  linkedinUrl?: string;
  order: number;
}

const LeadershipSection = ({ leaders }: { leaders: Leader[] }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  if (!leaders || leaders.length === 0) return null;
  const director = leaders[0];
  if (!director) return null;

  const chief = leaders[1];
  const studentLeads = leaders.slice(2, 4);

  const SocialIcons = ({ twitterUrl, linkedinUrl, size = 16 }: { twitterUrl?: string; linkedinUrl?: string; size?: number }) => (
    <div className="flex items-center space-x-3">
      <a href={twitterUrl || '#'} target="_blank" rel="noopener noreferrer" className={`transition-all duration-300 ${twitterUrl ? 'text-primary/30 hover:text-accent' : 'text-primary/10 cursor-not-allowed'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      </a>
      <a href={linkedinUrl || '#'} target="_blank" rel="noopener noreferrer" className={`transition-all duration-300 ${linkedinUrl ? 'text-primary/30 hover:text-accent' : 'text-primary/10 cursor-not-allowed'}`}>
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
        </svg>
      </a>
    </div>
  );

  const LeaderCard = ({ leader, hoverSide }: { leader: Leader; hoverSide?: 'left' | 'right' }) => {
    return (
      <div className={`person-wrap ${hoverSide === 'left' ? 'hover-left' : ''}`} style={{ display: 'block' }}>
        <div
          onClick={() => setSelectedLeader(leader)}
          className="relative cursor-pointer group max-w-[260px] w-full mx-auto"
          onMouseEnter={() => setHoveredCard(leader._id)}
          onMouseLeave={() => setHoveredCard(null)}
        >
          <motion.div
            className="relative overflow-hidden border border-[#E5E7EB] bg-white transition-all duration-300"
            style={{ borderRadius: 16 }}
            whileHover={{ y: -8, scale: 1.02, boxShadow: "0 20px 40px rgba(0,33,71,0.15)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          >
            {/* Top Section */}
            <div className="bg-primary p-6 pb-5 flex flex-col items-center border-b-[3px] border-accent">
              <div className="relative w-[72px] h-[72px] mb-3.5 rounded-full overflow-hidden border-3 border-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex items-center justify-center">
                {leader.portrait ? (
                  <SanityImage source={leader.portrait} alt={leader.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center">
                    <span className="font-serif text-2xl text-primary font-bold">{leader.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <p className="font-sans text-[9px] uppercase tracking-widest text-white/60 font-bold mb-1">{leader.role}</p>
              <h3 className="font-serif text-base text-white font-bold text-center leading-tight">{leader.name}</h3>
            </div>

            {/* Bottom Section */}
            <div className="bg-white p-5 pt-4 flex flex-col items-center">
              {leader.department ? (
                <div className="font-sans text-xs text-center leading-relaxed mb-3 min-h-[36px] flex flex-col justify-center">
                  {leader.department.includes(' / ') ? (
                    <>
                      <div className="font-semibold text-slate-700">{leader.department.split(' / ')[0]}</div>
                      <div className="text-slate-400 text-[10px] mt-0.5">{leader.department.split(' / ')[1]}</div>
                    </>
                  ) : (
                    <div className="text-slate-500">{leader.department}</div>
                  )}
                </div>
              ) : (
                <div className="font-sans text-xs text-center leading-relaxed mb-3 min-h-[36px] flex flex-col justify-center">
                  <div className="font-semibold text-slate-700">Amity University</div>
                  <div className="text-slate-400 text-[10px] mt-0.5">Noida Campus</div>
                </div>
              )}

              <div className="flex items-center space-x-2">
                <a 
                  href={leader.linkedinUrl || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  className={`w-[26px] h-[26px] flex items-center justify-center border border-[#E5E7EB] rounded-[4px] font-sans text-[11px] font-semibold transition-all duration-180 hover:border-accent hover:text-accent ${leader.linkedinUrl ? 'text-[#64748B]' : 'text-slate-300 cursor-not-allowed'}`}
                >
                  in
                </a>
                <a 
                  href={leader.twitterUrl || '#'} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  onClick={(e) => e.stopPropagation()}
                  className={`w-[26px] h-[26px] flex items-center justify-center border border-[#E5E7EB] rounded-[4px] font-sans text-[11px] font-semibold transition-all duration-180 hover:border-accent hover:text-accent ${leader.twitterUrl ? 'text-[#64748B]' : 'text-slate-300 cursor-not-allowed'}`}
                >
                  𝕏
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="hover-card" onClick={() => setSelectedLeader(leader)}>
          <div className="hc-top">
            <div className="hc-av overflow-hidden flex items-center justify-center bg-slate-200 relative border-2 border-accent">
              {leader.portrait ? (
                <SanityImage source={leader.portrait} alt={leader.name} fill className="object-cover" />
              ) : (
                <span className="font-serif text-sm font-bold text-primary">{leader.name.charAt(0)}</span>
              )}
            </div>
            <div>
              <div className="hc-name">{leader.name}</div>
              <div className="hc-role-lbl">{leader.role}</div>
            </div>
          </div>
          <div className="hc-dept">
            {leader.department || 'Amity University, Noida'}
          </div>
          <div className="hc-actions">
            <a 
              className="hc-btn hc-btn-li" 
              href={leader.linkedinUrl || '#'} 
              onClick={(e) => e.stopPropagation()} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              in LinkedIn
            </a>
            <a 
              className="hc-btn hc-btn-tw" 
              href={leader.twitterUrl || '#'} 
              onClick={(e) => e.stopPropagation()} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              𝕏 Twitter
            </a>
            <button 
              className="hc-btn hc-btn-msg hc-msg-btn" 
              onClick={(e) => { e.stopPropagation(); setSelectedLeader(leader); }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
              Read Message
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="relative py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 mb-2">
              <span className="w-8 h-1 bg-accent" />
              <span className="font-sans text-xs tracking-[0.3em] uppercase text-accent font-bold">The Team</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl text-primary tracking-tight">Institutional Leadership</h2>
          </div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="font-sans text-xs uppercase tracking-widest text-primary border-2 border-primary px-6 py-3 hover:bg-primary hover:text-white transition-all duration-300 font-bold"
          >
            {isExpanded ? 'Show Less' : 'Expand All'}
          </button>
        </div>

        <div className="w-full h-px bg-primary/10 mb-12" />

        <div className="space-y-6">
          <div className="flex justify-center">
            <LeaderCard leader={director} />
          </div>

          {chief && (
            <>
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-accent/20" />
              </div>
              <div className="flex justify-center">
                <LeaderCard leader={chief} />
              </div>
            </>
          )}

          {studentLeads.length > 0 && (
            <>
              <div className="flex justify-center">
                <div className="w-px h-8 bg-gradient-to-b from-accent/50 to-accent/20" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[42rem] mx-auto">
                {studentLeads.map((leader, index) => (
                  <LeaderCard 
                    key={leader._id} 
                    leader={leader} 
                    hoverSide={index === 0 ? 'left' : 'right'} 
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedLeader && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedLeader(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-64">
                {selectedLeader.portrait ? (
                  <SanityImage source={selectedLeader.portrait} alt={selectedLeader.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center">
                    <span className="font-serif text-6xl text-slate-300">{selectedLeader.name.charAt(0)}</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="font-serif text-3xl text-white font-bold">{selectedLeader.name}</h3>
                  <p className="font-sans text-sm uppercase tracking-widest text-accent font-bold">{selectedLeader.role}</p>
                </div>
              </div>

              <div className="p-8">
                <p className="font-sans text-base text-primary/70 leading-relaxed mb-6">{selectedLeader.description}</p>
                <SocialIcons twitterUrl={selectedLeader.twitterUrl} linkedinUrl={selectedLeader.linkedinUrl} size={18} />
              </div>

              <button
                onClick={() => setSelectedLeader(null)}
                className="w-full py-4 bg-surface font-sans text-xs uppercase tracking-widest text-primary/50 hover:text-primary border-t border-primary/10 transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default LeadershipSection;
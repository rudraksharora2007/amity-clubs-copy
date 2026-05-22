'use client';

import React, { useState } from 'react';

interface Leader {
  name: string;
  role: string;
  bio: string;
  image?: string;
}

interface PersonCardProps {
  leader: Leader;
  id: string;
  cardClass: string;
  topClass: string;
  avatarClass: string;
  initials: string;
  dept: string;
  chip: string;
  messageHeader: string;
  hoverSide?: 'left' | 'right';
  isOpen: boolean;
  onToggle: (id: string) => void;
}

const PersonCard = ({ leader, id, cardClass, topClass, avatarClass, initials, dept, chip, messageHeader, hoverSide, isOpen, onToggle }: PersonCardProps) => {
  return (
    <div className={`person-wrap ${hoverSide === 'left' ? 'hover-left' : ''}`} style={{ display: 'block' }}>
      <div
        className={`person-card ${cardClass} ${isOpen ? 'open' : ''}`}
        id={`msg-${id}`}
        onClick={() => onToggle(id)}
      >
        <div className="card-collapsed">
          <div className={`pc-top ${topClass}`}>
            <div className={`avatar ${avatarClass} overflow-hidden flex items-center justify-center`}>
              {leader.image ? (
                <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
              ) : (
                initials
              )}
            </div>
            <div className="pc-role">{leader.role}</div>
            <div className="pc-name">{leader.name}</div>
          </div>
          <div className="pc-body">
            <div className="pc-dept">
              {dept.includes(' / ') ? (
                <>
                  <div className="font-semibold text-gray-700 dark:text-gray-300">{dept.split(' / ')[0]}</div>
                  <div className="text-gray-400 text-[10px] mt-0.5">{dept.split(' / ')[1]}</div>
                </>
              ) : (
                dept
              )}
            </div>
            <div className="pc-socials">
              <span className="soc-sm">in</span>
              <span className="soc-sm">𝕏</span>
            </div>
          </div>
        </div>

        <div className="card-expanded">
          <div className="mp-inner">
            <div className="mp-left">
              <div className={`mp-avatar ${avatarClass} overflow-hidden flex items-center justify-center`}>
                {leader.image ? (
                  <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
                ) : (
                  initials
                )}
              </div>
              <div className="mp-id-name">{leader.name}</div>
              <div className="mp-id-role">{leader.role}</div>
              <div className="mp-id-dept">{dept}</div>
              <div className="mp-chip">{chip}</div>
              <div className="mp-socials">
                <a className="mp-soc" href="#" onClick={(e) => e.stopPropagation()} target="_blank">in</a>
                <a className="mp-soc" href="#" onClick={(e) => e.stopPropagation()} target="_blank">𝕏</a>
              </div>
            </div>
            <div className="mp-right">
              <div className="mp-eyebrow">{messageHeader}</div>
              <div className="mp-bar" />
              <div className="mp-qmark">"</div>
              <div className="mp-quote">
                {leader.bio}
              </div>
              <div className="mp-footer">
                <div className="mp-attr">— {leader.name}</div>
                <button
                  className="mp-close"
                  onClick={(e) => { e.stopPropagation(); onToggle(id); }}
                >
                  ← Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hover-card" onClick={() => onToggle(id)}>
        <div className="hc-top">
          <div className={`hc-av ${avatarClass} overflow-hidden flex items-center justify-center`}>
            {leader.image ? (
              <img src={leader.image} alt={leader.name} className="w-full h-full object-cover" />
            ) : (
              initials
            )}
          </div>
          <div>
            <div className="hc-name">{leader.name}</div>
            <div className="hc-role-lbl">{leader.role}</div>
          </div>
        </div>
        <div className="hc-dept">{dept}</div>
        <div className="hc-actions">
          <button className="hc-btn hc-btn-li" onClick={(e) => e.stopPropagation()}>in LinkedIn</button>
          <button className="hc-btn hc-btn-tw" onClick={(e) => e.stopPropagation()}>𝕏 Twitter</button>
          <button className="hc-btn hc-btn-msg hc-msg-btn" onClick={(e) => e.stopPropagation()}>
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

export default function CommitteeLeadership({ coreLeadership }: { coreLeadership: Leader[] }) {
  const [openCard, setOpenCard] = useState<string | null>(null);

  const handleToggle = (id: string) => {
    setOpenCard(prev => prev === id ? null : id);
  };

  if (!coreLeadership || coreLeadership.length < 5) return null;

  return (
    <section className="py-32 bg-surface relative z-20 -mt-10 border-t-4 border-accent">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="sec-head mb-16">
          <div className="sec-eyebrow">LEADERSHIP STRUCTURE</div>
          <h2 className="sec-title">The Hierarchy</h2>
          <p className="sec-sub">
            A structured leadership model that connects faculty guidance with student leadership, ensuring coordination, accountability, execution, and growth across all committees and clubs.
          </p>
        </div>
        <div className="w-full h-px bg-rule mb-20" />

        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Row 1: Faculty Coordinator */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PersonCard
              leader={coreLeadership[0]}
              id="director"
              cardClass="director"
              topClass=""
              avatarClass="av-peach"
              initials="RA"
              dept="Director, AIIT / Amity University, Noida"
              chip="Ph.D. Computer Science"
              messageHeader="Message from the Faculty Coordinator"
              isOpen={openCard === 'director'}
              onToggle={handleToggle}
            />
          </div>

          {/* Branch to Advisors (desktop only) */}
          <div className="hidden md:flex hier-branch">
            <div className="hier-branch-stem" />
            <div className="hier-branch-bar-wrap">
              <div className="hier-branch-bar advisor-bar" />
            </div>
          </div>

          {/* Row 2: Advisors (Side-by-Side Flexbox responsive) */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-[200px] mt-6">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PersonCard
                leader={coreLeadership[1]}
                id="advisor1"
                cardClass="coord"
                topClass=""
                avatarClass="av-orange"
                initials="A1"
                dept="Strategic Advisor / Amity University, Noida"
                chip="Industry Guidance"
                messageHeader="Message from the Advisor"
                hoverSide="left"
                isOpen={openCard === 'advisor1'}
                onToggle={handleToggle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PersonCard
                leader={coreLeadership[2]}
                id="advisor2"
                cardClass="coord"
                topClass=""
                avatarClass="av-orange"
                initials="A2"
                dept="Strategic Advisor / Amity University, Noida"
                chip="Academic Rigor"
                messageHeader="Message from the Advisor"
                isOpen={openCard === 'advisor2'}
                onToggle={handleToggle}
              />
            </div>
          </div>

          {/* Mobile vertical connector */}
          <div className="flex md:hidden hier-connector mt-6">
            <div className="hier-connector-line" />
          </div>

          {/* Branch to Chiefs (desktop only) */}
          <div className="hidden md:flex hier-branch mt-6">
            <div className="hier-branch-stem" />
            <div className="hier-branch-bar-wrap">
              <div className="hier-branch-bar advisor-bar" />
            </div>
          </div>

          {/* Row 3: Student Chief & Co-Chief (Side-by-Side Flexbox responsive) */}
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-[200px] mt-6">
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PersonCard
                leader={coreLeadership[3]}
                id="chief"
                cardClass="coord"
                topClass=""
                avatarClass="av-blue"
                initials="PS"
                dept="Student Chief Coordinator / Amity University, Noida"
                chip="Student Leadership"
                messageHeader="Message from Student Chief Coordinator"
                hoverSide="left"
                isOpen={openCard === 'chief'}
                onToggle={handleToggle}
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <PersonCard
                leader={coreLeadership[4]}
                id="cochief"
                cardClass="coord"
                topClass=""
                avatarClass="av-green"
                initials="DV"
                dept="Student Co-Chief Coordinator / Amity University, Noida"
                chip="Technical Infrastructure"
                messageHeader="Message from Student Co-Chief Coordinator"
                isOpen={openCard === 'cochief'}
                onToggle={handleToggle}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

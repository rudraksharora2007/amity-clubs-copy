'use client';

import React, { useState } from 'react';
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

const PersonCard = ({
  leader,
  id,
  cardClass,
  topClass,
  avatarClass,
  initials,
  dept,
  chip,
  messageHeader,
  hoverSide,
  isOpen,
  onToggle,
}: PersonCardProps) => {
  return (
    <div className={`person-wrap ${hoverSide === 'left' ? 'hover-left' : ''}`} style={{ display: 'block' }}>
      <div
        className={`person-card ${cardClass} ${isOpen ? 'open' : ''}`}
        id={`msg-${id}`}
        onClick={() => onToggle(id)}
      >
        {/* Collapsed Card */}
        <div className="card-collapsed">
          <div className={`pc-top ${topClass}`}>
            <div className={`avatar ${avatarClass} overflow-hidden flex items-center justify-center relative`}>
              {leader.portrait ? (
                <SanityImage source={leader.portrait} alt={leader.name} fill className="object-cover" />
              ) : (
                <span className="font-serif text-2xl font-bold">{initials}</span>
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
              <a
                className={`soc-sm ${!leader.linkedinUrl ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''}`}
                href={leader.linkedinUrl || '#'}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                in
              </a>
              <a
                className={`soc-sm ${!leader.twitterUrl ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''}`}
                href={leader.twitterUrl || '#'}
                onClick={(e) => e.stopPropagation()}
                target="_blank"
                rel="noopener noreferrer"
              >
                𝕏
              </a>
            </div>
          </div>
        </div>

        {/* Expanded Message Panel */}
        <div className="card-expanded">
          <div className="mp-inner">
            <div className="mp-left">
              <div className={`mp-avatar ${avatarClass} overflow-hidden flex items-center justify-center relative`}>
                {leader.portrait ? (
                  <SanityImage source={leader.portrait} alt={leader.name} fill className="object-cover" />
                ) : (
                  <span className="font-serif text-2xl font-bold">{initials}</span>
                )}
              </div>
              <div className="mp-id-name">{leader.name}</div>
              <div className="mp-id-role">{leader.role}</div>
              <div className="mp-id-dept">{dept}</div>
              <div className="mp-chip">{chip}</div>
              <div className="mp-socials">
                <a
                  className={`mp-soc ${!leader.linkedinUrl ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''}`}
                  href={leader.linkedinUrl || '#'}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  in
                </a>
                <a
                  className={`mp-soc ${!leader.twitterUrl ? 'opacity-30 cursor-not-allowed pointer-events-none' : ''}`}
                  href={leader.twitterUrl || '#'}
                  onClick={(e) => e.stopPropagation()}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  𝕏
                </a>
              </div>
            </div>
            <div className="mp-right">
              <div className="mp-eyebrow">{messageHeader}</div>
              <div className="mp-bar" />
              <div className="mp-qmark">“</div>
              <div className="mp-quote">
                {leader.description}
              </div>
              <div className="mp-footer">
                <div className="mp-attr">— {leader.name}</div>
                <button
                  className="mp-close"
                  onClick={(e) => {
                    e.stopPropagation();
                    onToggle(id);
                  }}
                >
                  ← Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Side Hover Preview Card */}
      <div className="hover-card" onClick={() => onToggle(id)}>
        <div className="hc-top">
          <div className={`hc-av ${avatarClass} overflow-hidden flex items-center justify-center relative`}>
            {leader.portrait ? (
              <SanityImage source={leader.portrait} alt={leader.name} fill className="object-cover" />
            ) : (
              <span className="font-serif text-sm font-bold">{initials}</span>
            )}
          </div>
          <div>
            <div className="hc-name">{leader.name}</div>
            <div className="hc-role-lbl">{leader.role}</div>
          </div>
        </div>
        <div className="hc-dept">{dept}</div>
        <div className="hc-actions">
          <a
            className={`hc-btn hc-btn-li ${!leader.linkedinUrl ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
            href={leader.linkedinUrl || '#'}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
          >
            in LinkedIn
          </a>
          <a
            className={`hc-btn hc-btn-tw ${!leader.twitterUrl ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
            href={leader.twitterUrl || '#'}
            onClick={(e) => e.stopPropagation()}
            target="_blank"
            rel="noopener noreferrer"
          >
            𝕏 Twitter
          </a>
          <button
            className="hc-btn hc-btn-msg hc-msg-btn"
            onClick={(e) => e.stopPropagation()}
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

const LeadershipSection = ({ leaders }: { leaders: Leader[] }) => {
  const [openCard, setOpenCard] = useState<string | null>(null);

  if (!leaders || leaders.length === 0) return null;

  const director = leaders[0];
  if (!director) return null;

  const chief = leaders[1];
  const studentLeads = leaders.slice(2, 4);

  const handleToggle = (id: string) => {
    setOpenCard((prev) => (prev === id ? null : id));
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter((part) => !part.includes('.') && !part.includes('(')) // Skip abbreviations/titles
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase() || name.slice(0, 2).toUpperCase();
  };

  return (
    <section className="py-32 bg-white relative z-20 border-t-4 border-accent">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        {/* Section Header */}
        <div className="sec-head mb-16">
          <div className="sec-eyebrow">LEADERSHIP STRUCTURE</div>
          <h2 className="sec-title">The Hierarchy</h2>
          <p className="sec-sub">
            A structured leadership model that connects faculty guidance with student leadership, ensuring coordination, accountability, execution, and growth across all committees and clubs.
          </p>
        </div>

        <div className="w-full h-px bg-primary/10 mb-20" />

        {/* Hierarchy Tree */}
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          {/* Row 1: Director */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <PersonCard
              leader={director}
              id="director"
              cardClass="director"
              topClass=""
              avatarClass="av-peach"
              initials={getInitials(director.name)}
              dept={director.department || "Director, AIIT / Amity University, Noida"}
              chip="Academic Leadership"
              messageHeader="Message from the Director"
              isOpen={openCard === 'director'}
              onToggle={handleToggle}
            />
          </div>

          {chief && (
            <>
              {/* Connector from Director to Chief */}
              <div className="hier-connector mt-6 mb-6">
                <div className="hier-connector-line" />
              </div>

              {/* Row 2: Chief Coordinator */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <PersonCard
                  leader={chief}
                  id="chief-coordinator"
                  cardClass="coord"
                  topClass=""
                  avatarClass="av-orange"
                  initials={getInitials(chief.name)}
                  dept={chief.department || "Chief Coordinator, AIIT / Amity University, Noida"}
                  chip="Operational Leadership"
                  messageHeader="Message from the Chief Coordinator"
                  isOpen={openCard === 'chief-coordinator'}
                  onToggle={handleToggle}
                />
              </div>
            </>
          )}

          {studentLeads.length > 0 && (
            <>
              {/* Branch to Student Leads (desktop only) */}
              <div className="hidden md:flex hier-branch mt-6">
                <div className="hier-branch-stem" />
                <div className="hier-branch-bar-wrap">
                  <div className="hier-branch-bar" style={{ width: 440 }} />
                </div>
              </div>

              {/* Mobile vertical connector */}
              <div className="flex md:hidden hier-connector mt-6">
                <div className="hier-connector-line" />
              </div>

              {/* Row 3: Student Leads (Side-by-Side Flexbox responsive) */}
              <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-[160px] mt-6">
                {studentLeads[0] && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <PersonCard
                      leader={studentLeads[0]}
                      id="student-chief"
                      cardClass="coord"
                      topClass=""
                      avatarClass="av-blue"
                      initials={getInitials(studentLeads[0].name)}
                      dept={studentLeads[0].department || "Student Chief Coordinator / Amity University, Noida"}
                      chip="Student Leadership"
                      messageHeader="Message from the Student Chief Coordinator"
                      hoverSide="left"
                      isOpen={openCard === 'student-chief'}
                      onToggle={handleToggle}
                    />
                  </div>
                )}

                {studentLeads[1] && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <PersonCard
                      leader={studentLeads[1]}
                      id="student-cochief"
                      cardClass="coord"
                      topClass=""
                      avatarClass="av-green"
                      initials={getInitials(studentLeads[1].name)}
                      dept={studentLeads[1].department || "Student Co-Chief Coordinator / Amity University, Noida"}
                      chip="Technical Infrastructure"
                      messageHeader="Message from the Student Co-Chief Coordinator"
                      isOpen={openCard === 'student-cochief'}
                      onToggle={handleToggle}
                    />
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LeadershipSection;
'use client';

import React, { useState } from 'react';

const departmentsData = [
  {
    name: "Computer Science",
    shortName: "Comp. Sci.",
    abbr: "CS",
    president: {
      name: "Arjun Sharma",
      initials: "AS",
      msg: "Leading CS department with focus on innovation and technical excellence."
    },
    vp: {
      name: "Bhavna Tripathi",
      initials: "BT"
    }
  },
  {
    name: "Information Technology",
    shortName: "Info. Tech.",
    abbr: "IT",
    president: {
      name: "Priya Rastogi",
      initials: "PR",
      msg: "Bridging technology and administration for seamless student experiences."
    },
    vp: {
      name: "Qasim Ahmed",
      initials: "QA"
    }
  },
  {
    name: "Electronics",
    shortName: "Electronics",
    abbr: "ECE",
    president: {
      name: "Karan Mishra",
      initials: "KM",
      msg: "Advancing electronics research through hands-on lab experiments."
    },
    vp: {
      name: "Lavanya Nambiar",
      initials: "LN"
    }
  },
  {
    name: "Mathematics",
    shortName: "Mathematics",
    abbr: "MA",
    president: {
      name: "Vandana Dubey",
      initials: "VD",
      msg: "Making mathematics approachable through collaborative problem solving."
    },
    vp: {
      name: "Om Dikshit",
      initials: "OD"
    }
  },
  {
    name: "Physics",
    shortName: "Physics",
    abbr: "PH",
    president: {
      name: "Rahul Singh",
      initials: "RS",
      msg: "Exploring the physical world through modern experimental methods."
    },
    vp: {
      name: "Uma Farooq",
      initials: "UF"
    }
  },
  {
    name: "Business Administration",
    shortName: "Business",
    abbr: "BA",
    president: {
      name: "Ananya Kapoor",
      initials: "AK",
      msg: "Connecting business acumen with emerging technology trends."
    },
    vp: {
      name: "Yash Hemant",
      initials: "YH"
    }
  },
  {
    name: "English & Comm.",
    shortName: "English",
    abbr: "EN",
    president: {
      name: "Tejas Nair",
      initials: "TN",
      msg: "Fostering clear communication in a diverse academic community."
    },
    vp: {
      name: "Zara Joshi",
      initials: "ZJ"
    }
  },
  {
    name: "Biotechnology",
    shortName: "Biotech",
    abbr: "BT",
    president: {
      name: "Mira Pillai",
      initials: "MP",
      msg: "Pioneering biotech research for a healthier future."
    },
    vp: {
      name: "Waris Khan",
      initials: "WK"
    }
  },
  {
    name: "Law",
    shortName: "Law",
    abbr: "LW",
    president: {
      name: "Saurabh Lal",
      initials: "SL",
      msg: "Advocating for student rights and legal literacy on campus."
    },
    vp: {
      name: "Xena Lal",
      initials: "XL"
    }
  },
  {
    name: "Architecture",
    shortName: "Architecture",
    abbr: "AR",
    president: {
      name: "Geeta Rajan",
      initials: "GR",
      msg: "Designing spaces that inspire creativity and functionality."
    },
    vp: {
      name: "Vimal Mehta",
      initials: "VM"
    }
  },
  {
    name: "Civil Engineering",
    shortName: "Civil Eng.",
    abbr: "CE",
    president: {
      name: "Harsh Dev",
      initials: "HD",
      msg: "Building sustainable infrastructure for tomorrow's challenges."
    },
    vp: {
      name: "Uma Nair",
      initials: "UN"
    }
  }
];

export default function CommitteeDepartments({ departments }: { departments?: any[] }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isMsgOpen, setIsMsgOpen] = useState(false);

  const activeDept = departmentsData[activeIdx];

  const handleNext = () => {
    setIsMsgOpen(false);
    setActiveIdx((prev) => (prev + 1) % departmentsData.length);
  };

  const handlePrev = () => {
    setIsMsgOpen(false);
    setActiveIdx((prev) => (prev === 0 ? departmentsData.length - 1 : prev - 1));
  };

  const handleSelectDept = (idx: number) => {
    setIsMsgOpen(false);
    setActiveIdx(idx);
  };

  return (
    <section className="sec sec-white py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="sec-head">
          <div className="sec-eyebrow">Departments</div>
          <h2 className="sec-title">Active Departments</h2>
          <p className="sec-sub">Click a department to view its team. Only one department is shown at a time.</p>
        </div>

        {/* Tab system */}
        <div className="dept-grid">
          {departmentsData.map((d, i) => (
            <button
              key={i}
              className={`dept-btn ${i === activeIdx ? 'active' : ''}`}
              onClick={() => handleSelectDept(i)}
            >
              {d.shortName}
            </button>
          ))}
        </div>

        {/* Content Panel */}
        <div
          style={{
            border: '1px solid var(--border)',
            borderRadius: '12px',
            overflow: 'hidden',
            marginTop: '8px',
            boxShadow: '0 4px 20px rgba(255, 192, 0, 0.06)',
            background: '#ffffff'
          }}
        >
          <div className="p-6 md:p-12" style={{ background: '#ffffff' }}>
            
            {/* Department Header */}
            <div style={{ paddingBottom: '16px', borderBottom: '1.5px solid var(--border)', marginBottom: '32px' }}>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  marginBottom: '8px'
                }}
              >
                {activeDept.abbr} — DEPARTMENT
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-primary leading-tight m-0 font-normal">
                {activeDept.name}
              </h3>
            </div>

            {/* Team Hierarchy Tree (Horizontal on desktop, vertical on mobile) */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-8 relative w-full max-w-4xl mx-auto">
              
              {/* President Section */}
              <div className="flex flex-col items-center">
                {/* President Header */}
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    textAlign: 'center'
                  }}
                >
                  President
                </div>

                {/* President Card Wrap */}
                <div className="person-wrap block mx-auto relative group">
                  <div
                    className={`person-card coord ${isMsgOpen ? 'open' : ''}`}
                    onClick={() => setIsMsgOpen(prev => !prev)}
                  >
                    {/* Collapsed View */}
                    <div className="card-collapsed">
                      <div className="pc-top" style={{ background: 'linear-gradient(135deg,#1A4D7C,#0f2e52)' }}>
                        <div className="avatar av-blue">{activeDept.president.initials}</div>
                        <div className="pc-role">President</div>
                        <div className="pc-name">{activeDept.president.name}</div>
                      </div>
                      <div className="pc-body">
                        <div className="pc-dept">{activeDept.name} Department</div>
                        <div className="pc-socials">
                          <span className="soc-sm">in</span>
                          <span className="soc-sm">𝕏</span>
                        </div>
                      </div>
                    </div>

                    {/* Expanded View */}
                    <div className="card-expanded">
                      <div className="mp-inner">
                        <div className="mp-left">
                          <div className="mp-avatar av-blue">{activeDept.president.initials}</div>
                          <div className="mp-id-name">{activeDept.president.name}</div>
                          <div className="mp-id-role">President</div>
                          <div className="mp-id-dept">{activeDept.name} Department</div>
                          <div className="mp-chip">Leadership</div>
                          <div className="mp-socials">
                            <a className="mp-soc" href="#" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">in</a>
                            <a className="mp-soc" href="#" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">𝕏</a>
                          </div>
                        </div>
                        <div className="mp-right">
                          <div className="mp-eyebrow">Message from President</div>
                          <div className="mp-bar" />
                          <div className="mp-qmark">“</div>
                          <div className="mp-quote">
                            {activeDept.president.msg}
                          </div>
                          <div className="mp-footer">
                            <div className="mp-attr">— {activeDept.president.name}</div>
                            <button
                              className="mp-close"
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsMsgOpen(false);
                              }}
                            >
                              ← Close
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Hover Card (Desktop Only) */}
                  <div className="hover-card" onClick={() => setIsMsgOpen(prev => !prev)}>
                    <div className="hc-top">
                      <div className="hc-av av-blue">{activeDept.president.initials}</div>
                      <div className="text-left">
                        <div className="hc-name">{activeDept.president.name}</div>
                        <div className="hc-role-lbl">President</div>
                      </div>
                    </div>
                    <div className="hc-dept">{activeDept.name} Department</div>
                    <div className="hc-actions">
                      <button
                        className="hc-btn hc-btn-li"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('#', '_blank');
                        }}
                      >
                        in LinkedIn
                      </button>
                      <button
                        className="hc-btn hc-btn-tw"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('#', '_blank');
                        }}
                      >
                        𝕏 Twitter
                      </button>
                      <button
                        className="hc-btn hc-btn-msg hc-msg-btn flex items-center justify-center gap-1.5"
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMsgOpen(prev => !prev);
                        }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                        </svg>
                        Read Message
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Simple Vertical Yellow Line Divider */}
              <div className="w-0.5 h-12 bg-accent opacity-80" />

              {/* Vice President Section */}
              <div className="flex flex-col items-center">
                {/* Vice President Header */}
                <div
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    color: 'var(--accent)',
                    textTransform: 'uppercase',
                    marginBottom: '12px',
                    textAlign: 'center'
                  }}
                >
                  Vice President
                </div>

                {/* Vice President Card Wrap */}
                <div className="person-wrap hover-left block mx-auto relative group">
                  <div
                    className="person-card coord"
                    style={{
                      cursor: 'default',
                      margin: '0 auto',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                    }}
                  >
                    <div className="pc-top" style={{ background: 'linear-gradient(135deg,#155A38,#0b3b25)' }}>
                      <div className="avatar av-green">{activeDept.vp.initials}</div>
                      <div className="pc-role">Vice President</div>
                      <div className="pc-name">{activeDept.vp.name}</div>
                    </div>
                    <div className="pc-body">
                      <div className="pc-dept">{activeDept.name} Department</div>
                      <div className="pc-socials">
                        <span
                          className="soc-sm cursor-pointer"
                          onClick={() => window.open('#', '_blank')}
                        >
                          in
                        </span>
                        <span
                          className="soc-sm cursor-pointer"
                          onClick={() => window.open('#', '_blank')}
                        >
                          𝕏
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Hover Card (Desktop Only) */}
                  <div className="hover-card" style={{ cursor: 'default' }}>
                    <div className="hc-top">
                      <div className="hc-av av-green">{activeDept.vp.initials}</div>
                      <div className="text-left">
                        <div className="hc-name">{activeDept.vp.name}</div>
                        <div className="hc-role-lbl">Vice President</div>
                      </div>
                    </div>
                    <div className="hc-dept">{activeDept.name} Department</div>
                    <div className="hc-actions">
                      <button
                        className="hc-btn hc-btn-li"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('#', '_blank');
                        }}
                      >
                        in LinkedIn
                      </button>
                      <button
                        className="hc-btn hc-btn-tw"
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open('#', '_blank');
                        }}
                      >
                        𝕏 Twitter
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* MESSAGE ACCORDION PANEL (Centers beautifully below cards) */}
            <div className={`msg-panel mx-auto ${isMsgOpen ? 'open' : ''}`} style={{ marginTop: '24px', width: '100%' }}>
              <div className="mp-inner">
                <div className="mp-left">
                  <div className="mp-avatar av-blue">{activeDept.president.initials}</div>
                  <div className="mp-id-name">{activeDept.president.name}</div>
                  <div className="mp-id-role">President</div>
                  <div className="mp-id-dept">{activeDept.name} Department</div>
                  <div className="mp-chip">Leadership</div>
                  <div className="mp-socials">
                    <a className="mp-soc" href="#" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">in</a>
                    <a className="mp-soc" href="#" onClick={(e) => e.stopPropagation()} target="_blank" rel="noopener noreferrer">𝕏</a>
                  </div>
                </div>
                <div className="mp-right">
                  <div className="mp-eyebrow">Message from President</div>
                  <div className="mp-bar" />
                  <div className="mp-qmark">“</div>
                  <div className="mp-quote">
                    "{activeDept.president.msg}"
                  </div>
                  <div className="mp-footer">
                    <div className="mp-attr">— {activeDept.president.name}</div>
                    <button
                      className="mp-close"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMsgOpen(false);
                      }}
                    >
                      ← Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Row with navigation buttons */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '24px',
                borderTop: '1.5px solid var(--border)',
                marginTop: '32px',
                flexWrap: 'wrap',
                gap: '16px'
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: '#64748B',
                  textTransform: 'uppercase'
                }}
              >
                AIIT · AMITY UNIVERSITY
              </div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button
                  className="hc-btn"
                  style={{
                    border: '1.5px solid var(--border)',
                    background: '#ffffff',
                    color: 'var(--primary)',
                    fontWeight: 700,
                    padding: '8px 20px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    transition: 'all 0.2s'
                  }}
                  onClick={handlePrev}
                >
                  Previous
                </button>
                <button
                  className="hc-btn"
                  style={{
                    border: '1.5px solid var(--border)',
                    background: '#ffffff',
                    color: 'var(--primary)',
                    fontWeight: 700,
                    padding: '8px 20px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    transition: 'all 0.2s'
                  }}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

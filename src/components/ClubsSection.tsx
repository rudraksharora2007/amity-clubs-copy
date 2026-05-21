'use client';

import React from 'react';
import Link from 'next/link';
import SanityImage from './SanityImage';

interface Division {
  _id: string;
  name: string;
  slug: string;
  subtitle: string;
  divisionId: string;
  coverImage?: any;
  stats: { value: string; label: string }[];
  order: number;
}

const divisionIcons: Record<string, React.ReactNode> = {
  '01': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  '02': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  '03': (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12">
      <circle cx="12" cy="5" r="3" />
      <circle cx="5" cy="19" r="3" />
      <circle cx="19" cy="19" r="3" />
      <line x1="12" y1="8" x2="5.5" y2="16.5" />
      <line x1="12" y1="8" x2="18.5" y2="16.5" />
    </svg>
  ),
};

const divisionColors: Record<string, { top: string; bottom: string }> = {
  '01': { top: 'from-blue-800 to-blue-950', bottom: 'from-blue-900 to-blue-950' },
  '02': { top: 'from-red-800 to-red-950', bottom: 'from-red-900 to-red-950' },
  '03': { top: 'from-green-800 to-green-950', bottom: 'from-green-900 to-green-950' },
};

const ClubsSection = ({ divisions }: { divisions: Division[] }) => {
  if (!divisions || divisions.length === 0) {
    return null;
  }

  return (
    <section id="divisions" className="relative bg-surface z-10">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 py-32">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-accent" />
            <span className="font-sans text-xs tracking-[0.2em] uppercase text-primary font-bold opacity-80">Our Clubs</span>
            <span className="w-8 h-px bg-accent" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl text-primary tracking-tight mb-4">Choose Your Path</h2>
          <p className="font-sans text-sm text-primary/60 max-w-xl mx-auto leading-relaxed">
            Every club is built to complement your academics with hands-on, industry-aligned skills taught by peers and guided by faculty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {divisions.map((div) => {
            const colors = divisionColors[div.divisionId] || divisionColors['01'];
            const icon = divisionIcons[div.divisionId] || divisionIcons['01'];

            return (
              <Link
                key={div._id}
                href={`/clubs/${div.slug}`}
                className="group relative overflow-hidden rounded-[28px] h-[520px] flex flex-col border border-white/10 transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl"
              >
                <div className={`absolute inset-0 bg-gradient-to-b ${colors.bottom}`} />

                {div.coverImage && (
                  <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
                    <SanityImage source={div.coverImage} alt={div.name} fill className="object-cover" />
                  </div>
                )}

                <div className={`relative h-[42%] bg-gradient-to-b ${colors.top} flex flex-col items-center justify-center px-8`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.1)_0%,transparent_40%)]" />
                  <div className="relative z-10 mb-3 text-white/90 drop-shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3">
                    {icon}
                  </div>
                  <span className="relative z-10 font-sans text-[11px] uppercase tracking-[0.2em] font-bold text-white/80">
                    {div.subtitle}
                  </span>
                </div>

                <div className="relative flex-1 flex flex-col items-center justify-between px-8 py-8">
                  <div className="text-center">
                    <h3 className="font-serif text-2xl font-bold text-white mb-3 leading-tight">{div.name}</h3>
                    <p className="font-sans text-sm text-white/60 leading-relaxed">
                      {div.stats[0]?.label || 'Explore our division'}
                    </p>
                  </div>

                  <div className="w-full flex items-center justify-center gap-8 pt-6 border-t border-white/10">
                    {div.stats.slice(0, 2).map((stat, i) => (
                      <div key={i} className="text-center">
                        <span className="font-serif text-xl font-bold text-accent block">{stat.value}</span>
                        <span className="font-sans text-[10px] uppercase tracking-[0.1em] text-white/45 font-bold mt-1 block">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClubsSection;

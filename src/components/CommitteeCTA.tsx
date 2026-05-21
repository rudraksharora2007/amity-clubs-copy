import React from 'react';
import Link from 'next/link';

const CommitteeCTA = () => {
  return (
    <section className="relative bg-primary overflow-hidden border-y border-rule py-24 lg:py-32 z-10">
      {/* Signature AIIT Grid Watermark - Light variant for dark bg */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-accent font-bold">Operational Integrity</span>
          </div>
          <h2 className="font-serif text-5xl md:text-6xl text-white leading-[1.1] tracking-tight">
            The Student <span className="text-white/60 italic">Committee.</span>
          </h2>
          <p className="font-sans text-sm text-white/70 mt-6 max-w-lg leading-[1.9]">
            Beyond institutional leadership, the core technical divisions are architected and driven by a dedicated tier of peer-elected student coordinators. They ensure flawless execution, strict accountability, and uncompromising standards across all club operations.
          </p>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          <Link 
            href="/committee"
            className="group relative flex items-center justify-center px-10 py-5 font-sans text-xs uppercase tracking-widest text-primary bg-accent hover:bg-white transition-colors w-full md:w-auto"
          >
            <span className="font-bold relative z-10">Review Committee Roll</span>
            <span className="ml-3 transition-transform duration-300 group-hover:translate-x-2 relative z-10">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CommitteeCTA;

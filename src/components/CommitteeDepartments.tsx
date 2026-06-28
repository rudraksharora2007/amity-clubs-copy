'use client';

import { useMemo, useState } from 'react';
import type { SanityDepartment } from '@/lib/sanity/types';

const themeClasses: Record<NonNullable<SanityDepartment['theme']>, string> = {
  blue: 'border-blue-200 bg-blue-50/40',
  green: 'border-emerald-200 bg-emerald-50/40',
  red: 'border-rose-200 bg-rose-50/40',
  teal: 'border-cyan-200 bg-cyan-50/40',
  gold: 'border-amber-200 bg-amber-50/40',
};

function initials(name: string): string {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('');
}

export default function CommitteeDepartments({ departments }: { departments: SanityDepartment[] }) {
  const [openId, setOpenId] = useState<string | null>(null);

  const sorted = useMemo(
    () => [...departments].sort((a, b) => a.order - b.order),
    [departments]
  );

  if (sorted.length === 0) return null;

  return (
    <section className="py-28 bg-white border-t border-rule">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="sec-head mb-12">
          <div className="sec-eyebrow">Hierarchy of Command</div>
          <h2 className="sec-title">Department Structure</h2>
          <p className="sec-sub">Each department is led by a designated head and aligned with committee-wide execution standards.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {sorted.map((dept) => {
            const isOpen = openId === dept._id;
            const theme = themeClasses[dept.theme ?? 'blue'];

            return (
              <article key={dept._id} className={`border ${theme} transition-colors`}>
                <button
                  onClick={() => setOpenId(isOpen ? null : dept._id)}
                  className="w-full text-left p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.22em] text-primary/45 mb-1">
                        Department {dept.departmentId}
                      </p>
                      <h3 className="font-serif text-2xl text-primary leading-tight">{dept.name}</h3>
                    </div>
                    <span className="font-sans text-xs text-primary/40">{isOpen ? '−' : '+'}</span>
                  </div>

                  <div className="mt-4 border-t border-primary/10 pt-4 flex items-center gap-3">
                    <div className="w-10 h-10 border border-primary/20 flex items-center justify-center font-sans text-xs font-bold text-primary/70">
                      {initials(dept.departmentHead)}
                    </div>
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-widest text-primary/45">
                        {dept.headRole || 'Department Head'}
                      </p>
                      <p className="font-sans text-sm text-primary/80">{dept.departmentHead}</p>
                    </div>
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5">
                    {dept.headMessage && (
                      <p className="font-sans text-sm leading-7 text-primary/70 border-t border-primary/10 pt-4">
                        {dept.headMessage}
                      </p>
                    )}

                    {dept.coHeads && dept.coHeads.length > 0 && (
                      <div className="mt-4 border-t border-primary/10 pt-4">
                        <p className="font-sans text-[10px] uppercase tracking-widest text-primary/45 mb-2">Co-Heads</p>
                        <p className="font-sans text-sm text-primary/75">{dept.coHeads.join(' • ')}</p>
                      </div>
                    )}

                    {(dept.headLinkedinUrl || dept.headTwitterUrl) && (
                      <div className="mt-4 flex gap-2">
                        {dept.headLinkedinUrl && (
                          <a className="font-sans text-xs px-3 py-1 border border-primary/20 text-primary/70 hover:text-primary" href={dept.headLinkedinUrl} target="_blank" rel="noreferrer">
                            LinkedIn
                          </a>
                        )}
                        {dept.headTwitterUrl && (
                          <a className="font-sans text-xs px-3 py-1 border border-primary/20 text-primary/70 hover:text-primary" href={dept.headTwitterUrl} target="_blank" rel="noreferrer">
                            X
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

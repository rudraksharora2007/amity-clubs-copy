'use client';

import { motion } from 'framer-motion';

interface Department {
  _id: string;
  name: string;
  departmentId: string;
  departmentHead: string;
  coHeads: string[];
  order: number;
}

export default function CommitteeDepartments({ departments }: { departments: Department[] }) {
  if (!departments || departments.length === 0) {
    return null;
  }

  return (
    <section className="py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex items-center space-x-6 mb-12">
          <span className="w-12 h-[1px] bg-primary" />
          <h2 className="font-serif text-5xl text-primary tracking-tight m-0">Institutional <span className="italic text-primary/30">Registry.</span></h2>
        </div>
        <div className="w-full h-px bg-rule mb-20" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {departments.map((dept) => (
            <motion.div
              key={dept._id}
              whileHover={{ scale: 0.99, y: -5 }}
              className="p-10 border border-rule group relative overflow-hidden flex flex-col justify-between h-[480px] transition-all duration-500 hover:bg-primary bg-white hover:shadow-2xl"
            >
              <span className="font-serif text-8xl text-primary/5 absolute -right-4 -top-8 transition-colors group-hover:text-white/10">{dept.departmentId}</span>

              <div className="relative z-10">
                <h3 className="font-serif text-3xl text-primary group-hover:text-white transition-colors mb-4">{dept.name}</h3>
                <div className="w-8 h-[2px] bg-accent group-hover:w-16 transition-all duration-500" />
              </div>

              <div className="relative z-10">
                <div className="mb-10">
                  <span className="font-sans text-[9px] uppercase tracking-[0.3em] text-accent font-bold block mb-4">Department Head</span>
                  <p className="font-serif text-2xl text-primary group-hover:text-white transition-colors leading-tight">{dept.departmentHead}</p>
                </div>

                <div className="space-y-6">
                  {dept.coHeads?.map((cl, i) => (
                    <div key={i} className="border-l-2 border-rule pl-4 group-hover:border-accent transition-colors">
                      <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-primary/40 group-hover:text-white/40 block mb-1">Co - Head</span>
                      <p className="font-sans text-[11px] font-bold text-primary group-hover:text-accent transition-colors uppercase tracking-widest">{cl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

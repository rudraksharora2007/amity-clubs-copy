'use client';

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import Link from "next/link";

const InstagramIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
  </svg>
);

export default function ClubHero({ name, tagline, instagramUrl, applyLabel }: { name: string; tagline: string; instagramUrl: string; applyLabel: string }) {
  return (
    <section className="relative pt-40 pb-24 overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white rounded-full blur-[120px] -mr-64 -mt-64" />
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center space-x-2 px-3 py-1 bg-white/10 rounded-full mb-6 border border-white/20">
              <Zap size={14} className="text-accent" />
              <span className="text-xs font-bold uppercase tracking-wider">{tagline}</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-6xl md:text-7xl font-extrabold mb-8">
              {name} <br /><span className="text-accent italic">Club</span>
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="text-xl text-white/70 leading-relaxed mb-10">
              From pixel-perfect frontends to powerful backends — {name} turns curious students into developers who build real, deployable products.
            </motion.p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
              className="flex flex-wrap gap-4">
              <Link href="/apply" className="bg-accent text-black px-8 py-4 font-bold hover:bg-white transition-all font-sans text-xs uppercase tracking-widest">
                {applyLabel}
              </Link>
              {instagramUrl && (
                <a href={instagramUrl} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-8 py-4 border border-white/20 hover:bg-white/10 transition-all font-sans text-xs uppercase tracking-widest">
                  <InstagramIcon /><span>Instagram</span>
                </a>
              )}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4 }}
            className="relative hidden md:block">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 p-8 shadow-2xl">
              <div className="flex space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full" /><div className="w-3 h-3 bg-yellow-400 rounded-full" /><div className="w-3 h-3 bg-green-400 rounded-full" />
              </div>
              <div className="space-y-4 font-mono text-sm text-white/50">
                <p className="text-accent">const club = &quot;{name}&quot;;</p>
                <p>const mission = &quot;Build real products&quot;;</p>
                <p className="text-blue-400">async function ship() &#123;</p>
                <p className="pl-4">await learn();</p>
                <p className="pl-4">await build();</p>
                <p className="pl-4">return &quot;Deployed to Vercel&quot;;</p>
                <p className="text-blue-400">&#125;</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

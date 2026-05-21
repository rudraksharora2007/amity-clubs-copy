'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Clubs', href: '/#divisions' },
    { name: 'Reach Out', href: '/contact' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary border-b border-white/20 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16 flex items-center justify-between h-20 relative">

        {/* Subtle top accent line */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-white/10">
          <div className="w-1/4 h-full bg-accent" />
        </div>

        {/* Institutional Moniker with Logo */}
        <Link href="/" className="flex items-center gap-3 group mt-1">
          <img
            src="/amity-shield.png"
            alt="Amity University Logo"
            className="h-12 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="font-serif text-xl tracking-tight font-bold text-white">AMITY UNIVERSITY</span>
            <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-white/70">Institute of Information Technology</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center space-x-12">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href.includes('#') && pathname === '/');
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-sans text-xs uppercase tracking-widest transition-colors relative group ${isActive ? 'text-white font-bold' : 'text-white/70 hover:text-white'
                  }`}
              >
                {link.name}
                <span className={`absolute -bottom-2 left-0 h-[1px] bg-accent transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`} />
              </Link>
            );
          })}
          <Link
            href="/committee"
            className="font-sans text-xs font-bold uppercase tracking-widest text-white border border-white px-5 py-2 hover:bg-white hover:text-primary transition-colors relative overflow-hidden group"
          >
            <span className="relative z-10 transition-colors">View Committee</span>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white font-sans text-xs uppercase tracking-widest border border-white/20 px-4 py-1"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Strict Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-primary border-b border-white/20 flex flex-col">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-sans text-sm uppercase tracking-widest text-white py-5 px-6 border-t border-white/10 hover:bg-white/5 flex items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="w-1.5 h-1.5 bg-accent mr-3 hidden" />
              {link.name}
            </Link>
          ))}
          <Link
            href="/committee"
            className="font-sans text-sm font-bold uppercase tracking-widest text-primary py-5 px-6 border-t border-white/10 bg-white text-center hover:bg-white/90 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            View Committee
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;

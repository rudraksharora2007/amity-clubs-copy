import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-primary relative border-t-[3px] border-accent">
      {/* Top Section */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-12 py-11 pb-7 border-b border-white/10">
          
          {/* Brand Column */}
          <div className="lg:flex-[1.4]">
            <div className="font-sans text-[1.1rem] font-bold text-white">
              Amity University
            </div>
            <p className="text-[0.75rem] text-accent mb-3 font-bold">
              Amity University of Information Technology (AIIT)
            </p>
            <p className="text-[0.78rem] text-white/40 leading-[1.75] max-w-[260px] mt-2.5">
              A student-led initiative by the Cascade Club at Amity Institute of Information Technology, Amity University, Noida.
            </p>
          </div>

          {/* Clubs Column */}
          <div>
            <h4 className="text-[0.67rem] uppercase tracking-[0.15em] text-accent font-semibold mb-3.5 font-sans">Clubs</h4>
            <Link href="/clubs/cascade" className="block text-[0.79rem] text-white/40 mb-2 transition-all duration-200 hover:text-white/85 hover:pl-1 cursor-pointer">
              Cascade Club
            </Link>
            <Link href="/clubs/programming" className="block text-[0.79rem] text-white/40 mb-2 transition-all duration-200 hover:text-white/85 hover:pl-1 cursor-pointer">
              Programming Club
            </Link>
            <Link href="/clubs/networking" className="block text-[0.79rem] text-white/40 mb-2 transition-all duration-200 hover:text-white/85 hover:pl-1 cursor-pointer">
              Networking Club
            </Link>
          </div>

          {/* About Us Column */}
          <div>
            <h4 className="text-[0.67rem] uppercase tracking-[0.15em] text-accent font-semibold mb-3.5 font-sans">About Us</h4>
            <Link href="/team" className="block text-[0.79rem] text-white/40 mb-2 transition-all duration-200 hover:text-white/85 hover:pl-1 cursor-pointer">
              Our Team
            </Link>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="text-[0.67rem] uppercase tracking-[0.15em] text-accent font-semibold mb-3.5 font-sans">Quick Links</h4>
            <Link href="/contact" className="block text-[0.79rem] text-white/40 mb-2 transition-all duration-200 hover:text-white/85 hover:pl-1 cursor-pointer">
              Contact Us
            </Link>
            <Link href="/" className="block text-[0.79rem] text-white/40 mb-2 transition-all duration-200 hover:text-white/85 hover:pl-1 cursor-pointer">
              Home
            </Link>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between py-4.5">
          <p className="text-[0.72rem] text-white/30">
            © 2024 Amity Institute of Information Technology. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

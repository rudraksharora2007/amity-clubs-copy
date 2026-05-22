import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const ContactPage = () => {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Header */}
      <section className="relative pt-40 pb-20 border-b border-rule overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1a2e5a 1px, transparent 1px),
              linear-gradient(to bottom, #1a2e5a 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-16 relative z-10">
          <div className="flex items-center space-x-4 mb-6">
            <span className="w-12 h-[2px] bg-accent" />
            <span className="font-sans text-[10px] tracking-[0.25em] uppercase text-accent font-bold">Direct Inquiry</span>
          </div>
          <h1 className="font-serif text-6xl md:text-7xl text-primary tracking-tight leading-none mb-8">
            Reach Out.
          </h1>
          <p className="font-sans text-sm text-primary/60 max-w-xl leading-[1.8]">
            Connect with the AIIT Student Committee for inquiries, partnerships, or technical division applications.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-24 bg-surface">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Email */}
            <div className="border border-rule bg-white p-10">
              <div className="flex items-start space-x-6">
                <span className="font-serif text-3xl text-accent opacity-60">01</span>
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-2">Email</h3>
                  <p className="font-sans text-sm text-primary/50 mb-4">For general inquiries and official correspondence.</p>
                  <a
                    href="mailto:aiitclubs@amity.edu"
                    className="font-sans text-sm text-accent hover:text-primary transition-colors underline underline-offset-4"
                  >
                    aiitclubs@amity.edu
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="border border-rule bg-white p-10">
              <div className="flex items-start space-x-6">
                <span className="font-serif text-3xl text-accent opacity-60">02</span>
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-2">Location</h3>
                  <p className="font-sans text-sm text-primary/50 mb-4">Amity Institute of Information Technology</p>
                  <p className="font-sans text-sm text-primary/70">
                    Amity University, Sector 125<br />
                    Noida, Uttar Pradesh 201313
                  </p>
                </div>
              </div>
            </div>

            {/* Student Committee */}
            <div className="border border-rule bg-white p-10">
              <div className="flex items-start space-x-6">
                <span className="font-serif text-3xl text-accent opacity-60">03</span>
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-2">Student Committee</h3>
                  <p className="font-sans text-sm text-primary/50 mb-4">For technical division applications and event inquiries.</p>
                  <Link
                    href="/committee"
                    className="font-sans text-xs uppercase tracking-widest text-primary border border-primary px-5 py-2 hover:bg-primary hover:text-white transition-colors"
                  >
                    View Committee &rarr;
                  </Link>
                </div>
              </div>
            </div>

            {/* Social */}
            <div className="border border-rule bg-white p-10">
              <div className="flex items-start space-x-6">
                <span className="font-serif text-3xl text-accent opacity-60">04</span>
                <div>
                  <h3 className="font-serif text-2xl text-primary mb-2">Social</h3>
                  <p className="font-sans text-sm text-primary/50 mb-4">Follow us for updates, events, and announcements.</p>
                  <div className="flex items-center gap-4">
                    <a href="#" target="_blank" className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-primary/60" aria-label="Instagram">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                      </svg>
                    </a>
                    <a href="#" target="_blank" className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-primary/60" aria-label="LinkedIn">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                    <a href="#" target="_blank" className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-primary/60" aria-label="X (Twitter)">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.742l7.722-8.823L1.547 2.25H8.07l4.261 5.635 5.913-5.635Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </a>
                    <a href="#" target="_blank" className="w-10 h-10 border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-colors text-primary/60" aria-label="YouTube">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chatbot CTA */}
          <div className="border-t-2 border-primary pt-16 text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">
              Have a quick question?
            </h2>
            <p className="font-sans text-sm text-primary/60 mb-8 max-w-md mx-auto">
              Try our keyword-based chatbot for instant answers about clubs, events, and the committee.
            </p>
            <p className="font-sans text-xs uppercase tracking-widest text-primary/40">
              Click the chat icon in the bottom-right corner to start &rarr;
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ContactPage;

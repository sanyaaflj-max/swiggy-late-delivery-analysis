import React from "react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SA</span>
              </div>
              <span className="font-bold text-lg">Sanya Aflaj N</span>
            </div>
            <p className="text-slate-400 text-sm">
              Product Management & AI Case Study
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="https://linkedin.com/in/sanya-aflaj"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span className="text-sm">LinkedIn</span>
            </a>
            <a
              href="mailto:sanya@example.com"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-sm">Email</span>
            </a>
          </div>

          {/* Right - CTA */}
          <div className="flex items-center justify-center md:justify-end gap-4">
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
              aria-label="Scroll to top"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
            <a
              href="mailto:sanya@example.com"
              className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Sanya Aflaj N. All rights reserved.
          </p>
          <p className="mt-2">
            Case Study: Swiggy Late Delivery Optimization
          </p>
        </div>
      </div>
    </footer>
  );
}
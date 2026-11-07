import React from 'react';
import { motion } from 'framer-motion';

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-base-200/80 backdrop-blur-md text-base-content border-t border-base-300 py-12 overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/5 blur-3xl rounded-full pointer-events-none -z-10" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center gap-8"
      >
        {/* Brand / Name & Tagline */}
        <motion.div variants={itemVariants} className="space-y-2">
          <h3 className="text-2xl font-extrabold tracking-tight">
            Rajib <span className="text-primary">Reza</span>
          </h3>
          <p className="text-sm text-base-content/70 max-w-md mx-auto">
            Software Engineer & Frontend Developer crafting interactive, clean, and modern web applications.
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-6 text-sm font-semibold text-base-content/80">
          <a href="#work" className="hover:text-primary transition-colors">Projects</a>
          <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </motion.div>

        {/* Social Media Icons (Clean SVG) */}
        <motion.div variants={itemVariants} className="flex gap-4">
          {/* GitHub */}
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-xl bg-base-100 hover:bg-primary/10 hover:text-primary border border-base-300 transition-all shadow-sm hover:scale-110"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-xl bg-base-100 hover:bg-primary/10 hover:text-primary border border-base-300 transition-all shadow-sm hover:scale-110"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
        </motion.div>

        {/* Divider & Copyright */}
        <motion.div variants={itemVariants} className="w-full pt-6 border-t border-base-300/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-base-content/60">
          <p>© {new Date().getFullYear()} Rajib Reza. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <span className="text-primary font-semibold">React</span>, <span className="text-secondary font-semibold">TanStack Query</span> & <span className="text-accent font-semibold">Framer Motion</span>
          </p>

          {/* Scroll To Top Button */}
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="btn btn-ghost btn-xs btn-circle hover:bg-primary/10 hover:text-primary transition-all"
          >
            <svg className="w-4 h-4 stroke-current fill-none stroke-[2.5]" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </motion.div>
      </motion.div>
    </footer>
  );
}
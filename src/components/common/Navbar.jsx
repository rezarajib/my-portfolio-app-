import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useQuery } from '@tanstack/react-query';
import ThemeToggle from './ThemeToggle';

// Mock TanStack Query Fetcher (Real-time contact notifications indicator)
const fetchNotificationStatus = async () => {
  return { hasUnread: true, count: 2 };
};

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Work', path: '/projects' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // TanStack Query for Dynamic Data Handling
  const { data: notification } = useQuery({
    queryKey: ['navbarNotification'],
    queryFn: fetchNotificationStatus,
    staleTime: 1000 * 60 * 5,
  });

  // Handle scroll visual depth
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        aria-label="Main Navigation"
        className={`flex items-center justify-between w-full max-w-5xl px-5 py-3 rounded-full transition-all duration-300 border ${
          isScrolled
            ? 'bg-[#121624]/90 border-amber-500/20 shadow-2xl shadow-amber-500/5 backdrop-blur-xl'
            : 'bg-[#1e2330]/85 border-gray-700/50 backdrop-blur-md shadow-xl'
        }`}
      >
        {/* Brand Logo */}
        <Link
          to="/"
          className="group relative flex items-center gap-1 text-2xl font-black tracking-tight text-white focus:outline-none"
        >
          <span>Reza</span>
          <span className="text-amber-400 transition-transform duration-300 group-hover:scale-150 inline-block">
            .
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-1 relative">
          {NAV_LINKS.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <li key={link.name} className="relative">
                <Link
                  to={link.path}
                  className={`relative z-10 px-4 py-2 text-sm font-medium transition-colors duration-200 block focus:outline-none ${
                    isActive ? 'text-amber-400 font-semibold' : 'text-gray-300 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>

                {/* Smooth Animated Active Background Pill */}
                {isActive && (
                  <motion.div
                    layoutId="activePill"
                    className="absolute inset-0 bg-gray-700/60 rounded-full border border-gray-600/50 shadow-inner"
                    transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* Action Controls & CTA */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* CTA Button with Glow Effect */}
          <Link
            to="/contact"
            className="relative group overflow-hidden px-5 py-2 rounded-full text-sm font-bold bg-amber-400 text-gray-950 hover:bg-amber-300 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md flex items-center gap-2"
          >
            <span>Let's Talk</span>
            {notification?.hasUnread && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
            )}
          </Link>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Animated Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-20 left-4 right-4 bg-[#1e2330]/95 border border-gray-700/60 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl md:hidden flex flex-col space-y-2"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? 'bg-amber-400/10 text-amber-400 font-semibold border border-amber-400/20'
                    : 'text-gray-300 hover:bg-gray-800/50 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../../utils/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const handleNavClick = (e, href) => {
    if (href.startsWith('/#')) {
      // If we're not on the home page, navigate first
      if (location.pathname !== '/') {
        return; // Let the Link handle navigation
      }
      e.preventDefault();
      const id = href.replace('/#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: hidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 glass-nav"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" aria-label="TechBridge Solutions Home">
              {/* SVG Logo */}
              <div className="relative w-10 h-10">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="2" y="2" width="36" height="36" rx="10" stroke="#00D4FF" strokeWidth="2" className="group-hover:stroke-accent-alt transition-colors duration-300" />
                  <path d="M10 28L20 12L30 28" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-accent-alt transition-colors duration-300" />
                  <path d="M14 22H26" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="20" cy="12" r="2" fill="#00D4FF" />
                  <circle cx="10" cy="28" r="2" fill="#7B61FF" />
                  <circle cx="30" cy="28" r="2" fill="#7B61FF" />
                </svg>
              </div>
              <div>
                <span className="font-display font-bold text-lg text-text-main tracking-tight">
                  Tech<span className="text-accent">Bridge</span>
                </span>
                <span className="hidden sm:block text-[10px] text-muted font-mono tracking-widest uppercase -mt-1">
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/contact'
                    ? location.pathname === '/contact'
                    : location.pathname === '/' && location.hash === link.href.replace('/', '');
                
                return link.href === '/contact' ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={`relative px-4 py-2 text-sm font-body font-medium transition-colors duration-300 rounded-lg ${
                      isActive ? 'text-accent' : 'text-muted hover:text-text-main'
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-4 right-4 h-0.5 bg-accent rounded-full"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative px-4 py-2 text-sm font-body font-medium transition-colors duration-300 rounded-lg ${
                      isActive ? 'text-accent' : 'text-muted hover:text-text-main'
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>

            {/* CTA + Mobile Toggle */}
            <div className="flex items-center gap-4">
              <Link
                to="/contact"
                className="hidden md:inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold bg-accent text-primary hover:bg-accent/90 transition-all duration-300 shadow-glow-cyan"
              >
                Start a Project
              </Link>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden relative w-10 h-10 flex items-center justify-center text-text-main"
                aria-label="Toggle menu"
              >
                <AnimatePresence mode="wait">
                  {isOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiX size={24} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <HiMenuAlt3 size={24} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </nav>

        {/* Scroll Progress Bar */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-accent to-accent-alt origin-left"
          style={{ scaleX }}
        />
      </motion.header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-primary border-l border-border z-50 p-8 flex flex-col"
            >
              {/* Close */}
              <button
                onClick={() => setIsOpen(false)}
                className="self-end mb-8 w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-accent transition-colors"
                aria-label="Close menu"
              >
                <HiX size={20} />
              </button>

              {/* Nav Links */}
              <div className="flex flex-col gap-2">
                {navLinks.map((link, idx) => (
                  <motion.div
                    key={link.name}
                    initial={{ x: 50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 + idx * 0.05 }}
                  >
                    {link.href === '/contact' ? (
                      <Link
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 text-lg font-display font-semibold text-muted hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                        className="block px-4 py-3 text-lg font-display font-semibold text-muted hover:text-accent hover:bg-accent/5 rounded-xl transition-all duration-300"
                      >
                        {link.name}
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-auto"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3.5 rounded-xl bg-accent text-primary font-semibold hover:bg-accent/90 transition-colors shadow-glow-cyan"
                >
                  Start a Project →
                </Link>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

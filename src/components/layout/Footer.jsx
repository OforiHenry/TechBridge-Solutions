import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SocialLinks from '../ui/SocialLinks';
import { services, navLinks, contactInfo } from '../../utils/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Portfolio', href: '/#portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative bg-secondary border-t border-border">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-3 mb-4" aria-label="TechBridge Solutions Home">
              <div className="w-9 h-9">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect x="2" y="2" width="36" height="36" rx="10" stroke="#00D4FF" strokeWidth="2" />
                  <path d="M10 28L20 12L30 28" stroke="#00D4FF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M14 22H26" stroke="#7B61FF" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="20" cy="12" r="2" fill="#00D4FF" />
                  <circle cx="10" cy="28" r="2" fill="#7B61FF" />
                  <circle cx="30" cy="28" r="2" fill="#7B61FF" />
                </svg>
              </div>
              <span className="font-display font-bold text-lg text-text-main">
                Tech<span className="text-accent">Bridge</span>
              </span>
            </Link>
            <p className="text-muted text-sm font-body leading-relaxed mb-6">
              Bridging Ideas to Digital Reality. We craft bold digital experiences that help businesses stand out and thrive.
            </p>
            <SocialLinks size="sm" />
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-text-main mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  {link.href.startsWith('/#') ? (
                    <a
                      href={link.href}
                      className="text-muted hover:text-accent text-sm font-body transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300" />
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      to={link.href}
                      className="text-muted hover:text-accent text-sm font-body transition-colors duration-300 inline-flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300" />
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-bold text-text-main mb-6 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.title}>
                  <a
                    href="/#services"
                    className="text-muted hover:text-accent text-sm font-body transition-colors duration-300 inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-accent transition-all duration-300" />
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-text-main mb-6 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">📧</span>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-muted hover:text-accent text-sm font-body transition-colors duration-300 break-all"
                >
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">📱</span>
                <a
                  href={contactInfo.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted hover:text-accent text-sm font-body transition-colors duration-300"
                >
                  {contactInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent mt-0.5">📍</span>
                <span className="text-muted text-sm font-body">
                  {contactInfo.location}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-muted text-xs font-body">
            © {currentYear} TechBridge Solutions. All rights reserved.
          </p>
          <p className="text-muted/50 text-xs font-body flex items-center gap-1.5">
            Built with <span className="text-red-400">❤️</span> by TechBridge Solutions
          </p>
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="h-1 bg-gradient-to-r from-accent via-accent-alt to-accent" />
    </footer>
  );
}

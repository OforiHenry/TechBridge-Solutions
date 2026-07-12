import {
  FaGlobe,
  FaBuilding,
  FaShoppingCart,
  FaMapMarkedAlt,
  FaUserFriends,
  FaPaintBrush,
  FaTools,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa';

/* ===== Services Data ===== */
export const services = [
  {
    icon: FaGlobe,
    title: 'Starter Website',
    description:
      'A polished five-page website built mobile-first, complete with a contact form and Google Maps embed so customers can find and reach you with ease.',
  },
  {
    icon: FaBuilding,
    title: 'Business Website',
    description:
      'A comprehensive 10+ page website with image galleries, a WhatsApp chat button, foundational SEO, and social media links — everything a growing business needs to stand out online.',
  },
  {
    icon: FaShoppingCart,
    title: 'E-Commerce Site',
    description:
      'A fully functional online store with product listings, Mobile Money and Paystack payment integration, and streamlined order management to help you sell with confidence.',
  },
  {
    icon: FaMapMarkedAlt,
    title: 'Google My Business Setup',
    description:
      'End-to-end Google Business Profile creation and verification, including photos, operating hours, and service listings — putting your business on the map where local customers are searching.',
  },
  {
    icon: FaUserFriends,
    title: 'Lead Generation System',
    description:
      'Automated lead capture powered by n8n workflows that source qualified business contacts from Google Maps, delivering actionable prospects straight to your pipeline.',
  },
  {
    icon: FaPaintBrush,
    title: 'Social Media Setup & Branding',
    description:
      'Professional Facebook and Instagram business pages with custom cover art, optimised bios, and a ready-to-post template pack to launch your social presence with impact.',
  },
  {
    icon: FaTools,
    title: 'Monthly Retainer (Maintenance)',
    description:
      'Ongoing website care including updates, security monitoring, hosting management, monthly performance reports, and one new page per month to keep your site fresh and protected.',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp Business Automation',
    description:
      'A fully configured WhatsApp Business profile with auto-replies, product catalogues, and quick replies for common enquiries — so you never miss a customer conversation.',
  },
  {
    icon: FaEnvelope,
    title: 'Business Email Setup',
    description:
      'Professional email on your own domain (e.g. name@yourbusiness.com), with up to five accounts and domain registration handled end to end.',
  },
];

/* ===== Portfolio Projects ===== */
export const projects = [
  {
    id: 1,
    title: 'Rooted Harvest',
    service: 'Starter Website',
    category: 'Website',
    description:
      'A polished five-page farm-to-table website for a premium Aburi produce brand — showcasing seasonal harvests, farm-direct offerings, order and delivery options, and a contact form so customers across Accra can shop Ghanaian staples from the Eastern Region.',
    techStack: ['5-Page Site', 'Seasonal Menu', 'Contact Form'],
    color: '#00D4FF',
    coverImage: '/portfolio/rooted-harvest-cover.png',
    url: 'https://rooted-harvest.lovable.app/',
  },
  {
    id: 2,
    title: 'ConstruMKTG',
    service: 'Business Website',
    category: 'Website',
    description:
      'A full business website for a premium construction and civil engineering firm in Accra — with project showcases, service pages, WhatsApp enquiries, and foundational SEO to help the team win serious commercial and residential contracts.',
    techStack: ['10+ Pages', 'WhatsApp Chat', 'SEO Setup'],
    color: '#7B61FF',
    coverImage: '/portfolio/construmktg-cover.png',
    url: 'https://construmktg-q8cup7lg.manus.space',
  },
  {
    id: 3,
    title: 'Adorn Boutique',
    service: 'E-Commerce Site',
    category: 'E-Commerce',
    description:
      'An online store built for Ghanaian shoppers, with product listings, Mobile Money and Paystack checkout, and a simple order management flow the owner can run day to day.',
    techStack: ['Paystack', 'Mobile Money', 'Order Management'],
    color: '#00D4FF',
  },
  {
    id: 4,
    title: 'HealWell Pharmacy',
    service: 'Google My Business Setup',
    category: 'Local Presence',
    description:
      'A verified Google Business Profile with photos, hours, and services listed — helping the pharmacy show up in local searches and on Google Maps when patients need them most.',
    techStack: ['GMB Verified', 'Google Maps', 'Local SEO'],
    color: '#7B61FF',
  },
  {
    id: 5,
    title: 'BuildRight Contractors',
    service: 'Lead Generation System',
    category: 'Automation',
    description:
      'An automated n8n workflow that pulls qualified business leads from Google Maps into a structured pipeline — saving hours of manual research every week.',
    techStack: ['n8n Automation', 'Lead Capture', 'Google Maps'],
    color: '#00D4FF',
  },
  {
    id: 6,
    title: 'Glow Beauty Studio',
    service: 'Social Media Setup & Branding',
    category: 'Branding',
    description:
      'Launch-ready Facebook and Instagram business pages with branded cover art, polished bios, and a set of post templates so the studio could start posting with confidence from day one.',
    techStack: ['Instagram', 'Facebook', 'Post Templates'],
    color: '#7B61FF',
  },
];

/* ===== Testimonials ===== */
export const testimonials = [
  {
    name: 'Ama Mensah',
    company: 'FinPay Technologies',
    role: 'CEO & Founder',
    quote: 'TechBridge transformed our vision into a stunning, functional product. Their attention to detail and technical expertise is unmatched. Our dashboard has increased user engagement by 300%.',
    rating: 5,
    initial: 'AM',
  },
  {
    name: 'David Osei',
    company: 'MedConnect Health',
    role: 'CTO',
    quote: 'Working with TechBridge was a game-changer. They delivered our telemedicine app ahead of schedule with features we didn\'t even think were possible. Highly recommend!',
    rating: 5,
    initial: 'DO',
  },
  {
    name: 'Sarah Adjei',
    company: 'Luxe Boutique',
    role: 'Creative Director',
    quote: 'The e-commerce platform TechBridge built for us is gorgeous and incredibly fast. Our online sales tripled within the first quarter of launch.',
    rating: 5,
    initial: 'SA',
  },
  {
    name: 'Kwame Asante',
    company: 'EcoTrack Ghana',
    role: 'Product Manager',
    quote: 'TechBridge\'s design team created a brand identity that perfectly captures our mission. Every touchpoint feels authentic and premium.',
    rating: 5,
    initial: 'KA',
  },
  {
    name: 'Fatima Ibrahim',
    company: 'SwiftDeliver',
    role: 'Operations Lead',
    quote: 'The delivery app exceeded all our expectations. Real-time tracking, seamless UX, and rock-solid performance — TechBridge delivered excellence.',
    rating: 5,
    initial: 'FI',
  },
];

/* ===== Stats ===== */
export const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 30, suffix: '+', label: 'Happy Clients' },
  { value: 3, suffix: '+', label: 'Years of Excellence' },
  { value: 5, suffix: '', label: 'Expert Team Members' },
];

/* ===== Navigation Links ===== */
export const navLinks = [
  { name: 'Home', href: '/#home' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Portfolio', href: '/#portfolio' },
  { name: 'Contact', href: '/contact' },
];

/* ===== Social Links ===== */
export const socialLinks = [
  {
    label: 'Email',
    href: 'mailto:hello@techbridgesolutions.com',
    color: '#EA4335',
    iconName: 'email',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/233506931328',
    color: '#25D366',
    iconName: 'whatsapp',
  },
];

/* ===== Contact Info ===== */
export const contactInfo = {
  email: 'hello@techbridgesolutions.com',
  phone: '+233 50 693 1328',
  whatsapp: 'https://wa.me/233506931328',
  location: 'Accra, Ghana',
};

/* ===== Project Types (for contact form dropdown) ===== */
export const projectTypes = [
  'Starter Website',
  'Business Website',
  'E-Commerce Site',
  'Google My Business Setup',
  'Lead Generation System',
  'Social Media Setup & Branding',
  'Monthly Retainer (Maintenance)',
  'WhatsApp Business Automation',
  'Business Email Setup',
  'Other',
];

import { motion } from 'framer-motion';
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { socialLinks } from '../../utils/constants';

const iconMap = {
  email: MdEmail,
  whatsapp: FaWhatsapp,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  linkedin: FaLinkedin,
  github: FaGithub,
  facebook: FaFacebook,
};

export default function SocialLinks({ size = 'md', className = '' }) {
  const sizes = {
    sm: 'w-10 h-10 text-lg',
    md: 'w-12 h-12 text-xl',
    lg: 'w-14 h-14 text-2xl',
  };

  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {socialLinks.map((social, idx) => {
        const Icon = iconMap[social.iconName];
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target={social.href.startsWith('mailto') ? undefined : '_blank'}
            rel="noopener noreferrer"
            aria-label={social.label}
            title={social.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{
              scale: 1.15,
              backgroundColor: `${social.color}20`,
              borderColor: social.color,
            }}
            className={`${sizes[size]} rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-white transition-all duration-300`}
            style={{
              '--hover-color': social.color,
            }}
          >
            <Icon
              className="transition-colors duration-300"
              style={{}}
            />
          </motion.a>
        );
      })}
    </div>
  );
}

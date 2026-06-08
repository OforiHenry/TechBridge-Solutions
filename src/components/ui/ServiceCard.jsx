import { motion } from 'framer-motion';

export default function ServiceCard({ service, index }) {
  const { icon: Icon, title, description } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, y: -6 }}
      className="group glass-card p-8 rounded-2xl relative overflow-hidden cursor-pointer"
    >
      {/* Hover glow effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 to-accent-alt/5" />
      <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/5 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
          <Icon className="text-2xl text-accent" />
        </div>

        {/* Title */}
        <h3 className="font-display text-xl font-bold text-text-main mb-3 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted font-body text-sm leading-relaxed">
          {description}
        </p>

        {/* Bottom accent line */}
        <div className="mt-6 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-accent to-accent-alt transition-all duration-500 rounded-full" />
      </div>
    </motion.div>
  );
}

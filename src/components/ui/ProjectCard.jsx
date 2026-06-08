import { motion } from 'framer-motion';

export default function ProjectCard({ project, index }) {
  const { title, service, category, description, techStack, color } = project;

  // Generate a gradient background based on project
  const gradients = [
    'from-accent/20 to-accent-alt/10',
    'from-accent-alt/20 to-accent/10',
    'from-cyan-900/30 to-indigo-900/20',
    'from-violet-900/30 to-cyan-900/20',
    'from-accent/15 to-violet-900/20',
    'from-indigo-900/20 to-accent/15',
  ];

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -8 }}
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Project Thumbnail */}
      <div
        className={`relative h-52 bg-gradient-to-br ${gradients[index % gradients.length]} flex items-center justify-center overflow-hidden`}
      >
        {/* Abstract graphic */}
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl"
            style={{ backgroundColor: `${color}20` }}
          />
          <div
            className="absolute top-1/4 left-1/4 w-20 h-20 rounded-xl rotate-45 blur-xl"
            style={{ backgroundColor: `${color}15` }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-16 h-16 rounded-full blur-lg"
            style={{ backgroundColor: `${color}10` }}
          />
        </div>

        {/* Project icon / mockup placeholder */}
        <div className="relative z-10 text-center">
          <div
            className="w-16 h-16 rounded-2xl mx-auto mb-2 flex items-center justify-center text-2xl font-display font-bold"
            style={{
              backgroundColor: `${color}25`,
              color: color,
              border: `1px solid ${color}40`,
            }}
          >
            {title.charAt(0)}
          </div>
          <p
            className="font-mono text-xs tracking-wider"
            style={{ color: `${color}CC` }}
          >
            {category.toUpperCase()}
          </p>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
          <motion.span
            initial={{ y: 10, opacity: 0 }}
            whileHover={{ y: 0, opacity: 1 }}
            className="px-6 py-2.5 rounded-xl bg-accent text-primary font-semibold text-sm"
          >
            View Details →
          </motion.span>
        </div>

        {/* Category tag */}
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-mono font-medium bg-primary/60 backdrop-blur-sm border border-border/50 text-muted">
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        {service && (
          <span className="inline-block px-2.5 py-1 rounded-lg text-xs font-mono bg-accent/10 text-accent border border-accent/20 mb-3">
            {service}
          </span>
        )}
        <h3 className="font-display text-lg font-bold text-text-main mb-2 group-hover:text-accent transition-colors duration-300">
          {title}
        </h3>
        <p className="text-muted text-sm font-body leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Deliverables */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-lg text-xs font-mono bg-accent/5 text-accent/80 border border-accent/10"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

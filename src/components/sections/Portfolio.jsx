import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../utils/constants';

const categories = ['All', 'Website', 'E-Commerce', 'Local Presence', 'Automation', 'Branding'];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[min(100vw,600px)] h-[min(100vw,600px)] rounded-full bg-accent/3 blur-[150px] pointer-events-none" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-mono text-sm tracking-widest uppercase mb-4"
          >
            Our Work
          </motion.span>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-main">
              Services in <span className="gradient-text">Action</span>
            </h2>
            <span className="px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-mono">
              {projects.length}
            </span>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-muted font-body mt-4 max-w-2xl mx-auto"
          >
            Real client deliverables across our core services — from first websites and online stores
            to local visibility and automated lead generation.
          </motion.p>
        </div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2.5 rounded-xl text-sm font-body font-medium transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-accent text-primary shadow-glow-cyan'
                  : 'bg-card border border-border text-muted hover:text-text-main hover:border-accent/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

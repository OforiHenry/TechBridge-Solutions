import { motion } from 'framer-motion';
import { useScrollAnimation, useCountUp } from '../../hooks/useScrollAnimation';
import { stats } from '../../utils/constants';
import { HiLightningBolt, HiUserGroup, HiGlobe } from 'react-icons/hi';

function StatItem({ stat }) {
  const [ref, isVisible] = useScrollAnimation(0.3);
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-display font-extrabold gradient-text mb-1">
        {count}{stat.suffix}
      </div>
      <p className="text-muted text-sm font-body">{stat.label}</p>
    </motion.div>
  );
}

export default function About() {
  const values = [
    {
      icon: HiLightningBolt,
      title: 'Innovation',
      desc: 'Pushing boundaries with cutting-edge technology',
    },
    {
      icon: HiUserGroup,
      title: 'Collaboration',
      desc: 'Working closely with clients at every step',
    },
    {
      icon: HiGlobe,
      title: 'Impact',
      desc: 'Creating digital solutions that drive real results',
    },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-20 -right-20 w-64 h-64 rounded-full bg-accent/3 blur-[100px]" />
      <div className="absolute bottom-20 -left-20 w-48 h-48 rounded-full bg-accent-alt/3 blur-[80px]" />

      <div className="section-container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-mono text-sm tracking-widest uppercase mb-4"
          >
            About Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-main"
          >
            We Build What{' '}
            <span className="gradient-text">Matters</span>
          </motion.h2>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left - Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Abstract graphic */}
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-3xl border border-border rotate-6" />
              <div className="absolute inset-4 rounded-3xl border border-accent/20 -rotate-3" />

              {/* Main card */}
              <div className="absolute inset-8 rounded-2xl bg-card border border-border overflow-hidden">
                {/* Code-like visual */}
                <div className="p-6 h-full flex flex-col gap-3">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="text-accent-alt font-mono text-xs">const</span>
                    <span className="text-accent font-mono text-xs">mission</span>
                    <span className="text-muted font-mono text-xs">=</span>
                  </div>
                  <div className="pl-4 text-muted font-mono text-xs leading-relaxed">
                    <span className="text-accent">{`{`}</span><br />
                    <span className="pl-4 text-accent-alt">goal</span><span className="text-muted">:</span> <span className="text-green-400">"excellence"</span><span className="text-muted">,</span><br />
                    <span className="pl-4 text-accent-alt">approach</span><span className="text-muted">:</span> <span className="text-green-400">"innovation"</span><span className="text-muted">,</span><br />
                    <span className="pl-4 text-accent-alt">passion</span><span className="text-muted">:</span> <span className="text-yellow-400">Infinity</span><br />
                    <span className="text-accent">{`}`}</span>
                  </div>
                  <div className="mt-auto flex gap-2">
                    <div className="h-1.5 rounded-full bg-accent/30 flex-[3]" />
                    <div className="h-1.5 rounded-full bg-accent-alt/20 flex-[2]" />
                    <div className="h-1.5 rounded-full bg-accent/20 flex-1" />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center animate-float">
                <span className="text-accent text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-14 h-14 rounded-xl bg-accent-alt/10 border border-accent-alt/20 flex items-center justify-center animate-float-delayed">
                <span className="text-accent-alt text-xl">🚀</span>
              </div>
            </div>
          </motion.div>

          {/* Right - Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-text-main mb-6">
              Turning Vision Into
              <br />
              <span className="gradient-text">Digital Excellence</span>
            </h3>
            <p className="text-muted font-body leading-relaxed mb-6">
              At TechBridge Solutions, we're more than just developers — we're your
              digital partners. Founded with a passion for innovation, we've spent
              years perfecting the art of building digital experiences that don't
              just function, but truly inspire.
            </p>
            <p className="text-muted font-body leading-relaxed mb-8">
              Our team of expert designers, developers, and strategists work together
              to transform complex ideas into elegant, user-focused solutions.
              Whether it's a sleek website, a powerful mobile app, or a complete brand
              overhaul, we bring the same level of dedication and creativity to every
              project.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {values.map((value, idx) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + idx * 0.1 }}
                  className="p-4 rounded-xl bg-card/50 border border-border/50 text-center"
                >
                  <value.icon className="text-accent text-2xl mx-auto mb-2" />
                  <h4 className="font-display font-bold text-text-main text-sm mb-1">
                    {value.title}
                  </h4>
                  <p className="text-muted text-xs font-body">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 p-8 md:p-12 rounded-2xl glass-card">
          {stats.map((stat) => (
            <StatItem key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

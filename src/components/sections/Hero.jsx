import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import Button from '../ui/Button';

export default function Hero() {
  const words = 'Bridging Ideas to Digital Reality'.split(' ');

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mesh Background */}
      <div className="absolute inset-0 bg-hero-mesh" />

      {/* Animated orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/5 w-72 h-72 rounded-full bg-accent/5 blur-[100px] animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-accent-alt/5 blur-[120px] animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/3 blur-[150px]" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/5 border border-accent/20 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="text-accent text-sm font-mono">Available for new projects</span>
        </motion.div>

        {/* Animated Headline */}
        <div className="mb-6">
          <div className="flex flex-wrap justify-center gap-x-[0.4em]">
            {words.map((word, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.6,
                  delay: 0.3 + idx * 0.1,
                  type: 'spring',
                  damping: 20,
                }}
                className={`font-display font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block ${word === 'Digital' || word === 'Reality'
                  ? 'gradient-text'
                  : 'text-text-main'
                  }`}
              >
                {word}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-muted text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          We build bold digital experiences — websites, mobile apps, and brand
          systems for businesses that want to stand out.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >

          <Button href="/contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-muted text-xs font-mono tracking-widest uppercase">Scroll</span>
        <HiArrowDown className="text-accent text-xl animate-scroll-bounce" />
      </motion.div>
    </section>
  );
}

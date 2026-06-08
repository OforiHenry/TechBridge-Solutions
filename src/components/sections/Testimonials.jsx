import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiStar, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { testimonials } from '../../utils/constants';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-scroll
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const variants = {
    enter: (d) => ({ x: d > 0 ? 200 : -200, opacity: 0, scale: 0.95 }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (d) => ({ x: d > 0 ? -200 : 200, opacity: 0, scale: 0.95 }),
  };

  return (
    <section className="section-padding relative bg-secondary/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="section-container relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-accent font-mono text-sm tracking-widest uppercase mb-4"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-main"
          >
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden rounded-2xl min-h-[320px] flex items-center">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="glass-card p-8 md:p-12 text-center w-full"
              >
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-accent-alt flex items-center justify-center mx-auto mb-6">
                  <span className="font-display font-bold text-lg text-primary">
                    {testimonials[current].initial}
                  </span>
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 mb-6">
                  {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                    <HiStar key={i} className="text-yellow-400 text-xl" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-text-main font-body text-lg md:text-xl leading-relaxed mb-8 italic">
                  "{testimonials[current].quote}"
                </p>

                {/* Client Info */}
                <div>
                  <h4 className="font-display font-bold text-text-main text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-muted font-body text-sm">
                    {testimonials[current].role} at{' '}
                    <span className="text-accent">{testimonials[current].company}</span>
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > current ? 1 : -1);
                    setCurrent(idx);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    idx === current
                      ? 'w-8 bg-accent'
                      : 'w-2 bg-border hover:bg-muted'
                  }`}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl bg-card border border-border flex items-center justify-center text-muted hover:text-accent hover:border-accent/30 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

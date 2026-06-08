import { motion } from 'framer-motion';

export default function AnimatedText({
  text,
  className = '',
  el: Element = 'h1',
  delay = 0,
  once = true,
}) {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 30,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      className={`flex flex-wrap ${className}`}
      aria-label={text}
    >
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          variants={child}
          className="mr-[0.35em] inline-block"
        >
          <Element className="inline">{word}</Element>
        </motion.span>
      ))}
    </motion.div>
  );
}

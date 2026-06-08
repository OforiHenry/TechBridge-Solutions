import { motion } from 'framer-motion';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  icon,
  loading = false,
  ...props
}) {
  const baseClasses =
    'inline-flex items-center justify-center gap-2 font-body font-semibold rounded-xl transition-all duration-300 focus-glow cursor-pointer';

  const variants = {
    primary:
      'bg-accent text-primary hover:bg-accent/90 shadow-glow-cyan animate-pulse-glow',
    outline:
      'border-2 border-accent text-accent hover:bg-accent/10',
    ghost:
      'text-text-main hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${
    disabled || loading ? 'opacity-50 cursor-not-allowed' : ''
  } ${className}`;

  const motionProps = {
    whileHover: disabled || loading ? {} : { scale: 1.03, y: -2 },
    whileTap: disabled || loading ? {} : { scale: 0.97 },
    transition: { type: 'spring', stiffness: 400, damping: 17 },
  };

  const content = (
    <>
      {loading && (
        <svg
          className="animate-spin h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      )}
      {icon && !loading && <span className="text-lg">{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        {...motionProps}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
      {...motionProps}
      {...props}
    >
      {content}
    </motion.button>
  );
}

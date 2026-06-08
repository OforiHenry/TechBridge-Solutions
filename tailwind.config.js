/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0A0F1E',
        secondary: '#0D1B2A',
        accent: '#00D4FF',
        'accent-alt': '#7B61FF',
        card: '#111827',
        border: '#1E2D45',
        muted: '#8A9BB5',
        'text-main': '#F0F4FF',
      },
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-mesh': 'radial-gradient(ellipse at 20% 50%, #0D1B2A 0%, #0A0F1E 60%, #1a0a2e 100%)',
      },
      boxShadow: {
        'glow-cyan': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-violet': '0 0 20px rgba(123, 97, 255, 0.3)',
        card: '0 4px 32px rgba(0, 0, 0, 0.4)',
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2.5s ease-in-out infinite',
        gradient: 'gradient-shift 6s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 212, 255, 0.4)' },
          '50%': { boxShadow: '0 0 20px 8px rgba(0, 212, 255, 0.15)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};

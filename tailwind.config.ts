import type { Config } from 'tailwindcss';

export default {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--color-bg) / <alpha-value>)',
        surface: 'rgb(var(--color-surface) / <alpha-value>)',
        surface2: 'rgb(var(--color-surface-2) / <alpha-value>)',
        primary: {
          DEFAULT: 'rgb(var(--color-primary) / <alpha-value>)',
          soft: 'var(--color-primary-soft)',
        },
        secondary: {
          DEFAULT: 'rgb(var(--color-secondary) / <alpha-value>)',
          soft: 'var(--color-secondary-soft)',
        },
        accent: {
          DEFAULT: 'rgb(var(--color-accent) / <alpha-value>)',
          soft: 'var(--color-accent-soft)',
        },
        ink: 'rgb(var(--color-text) / <alpha-value>)',
        muted: 'rgb(var(--color-text-muted) / <alpha-value>)',
        border: 'var(--color-border)',
        'border-strong': 'var(--color-border-strong)',
      },
      boxShadow: {
        soft: 'var(--shadow-soft)',
        lifted: 'var(--shadow-lifted)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backgroundImage: {
        'grid-fade':
          'linear-gradient(var(--color-border) 1px, transparent 1px), linear-gradient(90deg, var(--color-border) 1px, transparent 1px)',
      },
      backgroundSize: {
        graticule: '48px 48px',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee linear infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;

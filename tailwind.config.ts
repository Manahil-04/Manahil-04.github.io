import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        ink: 'var(--color-text)',
        muted: 'var(--color-text-muted)',
        border: 'var(--color-border)',
        accent: {
          DEFAULT: 'var(--color-accent)',
          soft: 'var(--color-accent-soft)',
        },
        accent2: {
          DEFAULT: 'var(--color-accent-secondary)',
          soft: 'var(--color-accent-secondary-soft)',
        },
        glass: 'var(--color-glass)',
      },
      boxShadow: {
        brutal: '4px 4px 0 0 var(--color-text)',
        'brutal-lg': '8px 8px 0 0 var(--color-text)',
        'brutal-accent': '4px 4px 0 0 var(--color-accent)',
        'brutal-sm': '2px 2px 0 0 var(--color-text)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      backdropBlur: {
        glass: '12px',
      },
    },
  },
  plugins: [],
} satisfies Config;

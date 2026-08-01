# Manahil Mushtaq — Portfolio

Personal portfolio, live at [manahil-04.github.io](https://manahil-04.github.io/). Built with React, TypeScript, Tailwind CSS, and Framer Motion — featuring a custom cursor, tactile neubrutalist UI, and layered glassmorphism panels.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) with a fully variable-driven theme (`src/index.css`)
- [Framer Motion](https://www.framer.com/motion/) for scroll reveals, the custom cursor, and micro-interactions
- [Web3Forms](https://web3forms.com/) for the contact form

## Development

```bash
npm install
cp .env.example .env   # then fill in your Web3Forms access key
npm run dev
```

## Theming

Every color in the site is a CSS custom property defined in `src/index.css`. Edit the `:root` block to re-theme the entire site — no component changes needed.

## Deployment

Pushes to `main` deploy automatically to GitHub Pages via `.github/workflows/deploy.yml`. The `VITE_WEB3FORMS_KEY` secret must be set under the repo's Settings → Secrets → Actions. The same `dist/` build output also deploys unchanged to Vercel if needed.

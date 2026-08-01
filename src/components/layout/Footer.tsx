import { socialLinks } from '../../data/social';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t-2 border-ink bg-bg">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between gap-4 px-6 py-8">
        <p className="font-mono text-xs text-muted">
          © {year} Manahil Mushtaq. Built with React, TypeScript &amp; Tailwind.
        </p>
        <div className="flex gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="font-mono text-xs uppercase tracking-wide text-ink hover:text-accent transition-colors"
              data-cursor="link"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

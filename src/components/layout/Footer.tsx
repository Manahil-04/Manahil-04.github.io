import { socialLinks } from '../../data/social';

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between gap-4 px-6 py-8">
        <p className="font-mono text-xs text-muted">
          Manahil Mushtaq 
        </p>
        <div className="flex gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
              className="text-xs uppercase tracking-wide text-muted hover:text-accent transition-colors"
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

import { useState } from 'react';
import clsx from 'clsx';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToSection } from '../../lib/scrollTo';

const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Resume' },
  { id: 'contact', label: 'Contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const activeId = useActiveSection(NAV_ITEMS.map((item) => item.id));

  const handleNavigate = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b-2 border-ink bg-bg/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <button
          className="font-display text-lg font-bold text-ink"
          onClick={() => handleNavigate('home')}
          data-cursor="button"
        >
          MM<span className="text-accent">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wide">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigate(item.id)}
                data-cursor="link"
                className={clsx(
                  'rounded-md px-3 py-2 transition-colors',
                  activeId === item.id ? 'bg-accent text-surface' : 'text-ink hover:bg-accent-soft',
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden border-2 border-ink rounded-md px-3 py-1.5 font-mono text-xs"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          data-cursor="button"
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col border-t-2 border-ink bg-bg font-mono text-sm uppercase tracking-wide">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigate(item.id)}
                className={clsx(
                  'w-full px-6 py-3 text-left border-b border-border/40',
                  activeId === item.id ? 'bg-accent text-surface' : 'text-ink',
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { useActiveSection } from '../../hooks/useActiveSection';
import { scrollToSection } from '../../lib/scrollTo';
import { CompassMark } from '../ui/CompassMark';
import { ThemeToggle } from '../ui/ThemeToggle';

const ALL_SECTION_IDS = [
  'home',
  'about',
  'experience',
  'projects',
  'skills',
  'research',
  'education',
  'achievements',
  'contact',
];

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
];

// Research, Education, and Achievements don't have their own nav link — while scrolled
// through them, keep the nearest preceding nav item (Skills) highlighted instead of
// leaving no nav item marked active at all.
const SECTION_TO_NAV_ID: Record<string, string> = {
  research: 'skills',
  education: 'skills',
  achievements: 'skills',
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const rawActiveId = useActiveSection(ALL_SECTION_IDS);
  const activeId = SECTION_TO_NAV_ID[rawActiveId] ?? rawActiveId;

  const handleNavigate = (id: string) => {
    setIsOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3.5">
        <button
          onClick={() => handleNavigate('home')}
          className="flex items-center gap-2 text-ink"
          aria-label="Home"
          data-cursor="button"
        >
          <CompassMark size={26} />
          <span className="font-display text-base font-semibold">Manahil Mushtaq</span>
        </button>

        <ul className="hidden md:flex items-center gap-1 text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigate(item.id)}
                data-cursor="button"
                className={clsx(
                  'rounded-full px-4 py-2 transition-colors duration-200',
                  activeId === item.id ? 'bg-secondary-soft text-secondary' : 'text-muted hover:text-ink',
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full border border-border text-ink"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            data-cursor="button"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col border-t border-border bg-bg text-sm">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNavigate(item.id)}
                className={clsx(
                  'w-full px-6 py-3 text-left border-b border-border/60',
                  activeId === item.id ? 'text-secondary' : 'text-ink',
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

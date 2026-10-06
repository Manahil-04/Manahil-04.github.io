import type { ReactNode } from 'react';

interface MarqueeProps {
  children: ReactNode;
  duration?: number;
  className?: string;
}

/**
 * A continuously scrolling row (right to left) that loops seamlessly.
 * Content is duplicated once so the track can translate by -50% forever
 * without a visible seam.
 */
export function Marquee({ children, duration = 40, className }: MarqueeProps) {
  return (
    <div
      className={`marquee-row relative overflow-hidden py-2 ${className ?? ''}`}
      style={{
        WebkitMaskImage:
          'linear-gradient(90deg, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)',
        maskImage:
          'linear-gradient(90deg, transparent 0, #000 64px, #000 calc(100% - 64px), transparent 100%)',
      }}
    >
      <div
        className="marquee-track flex w-max items-center animate-marquee"
        style={{ animationDuration: `${duration}s` }}
      >
        {/* Two identical copies, directly abutting (spacing lives on each
            item via margin, not a parent `gap`) so translateX(-50%) lands
            exactly on the seam between copies with no visible jump. */}
        <div className="flex items-center" aria-hidden={false}>
          {children}
        </div>
        <div className="flex items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

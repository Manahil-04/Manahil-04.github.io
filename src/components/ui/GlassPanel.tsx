import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface GlassPanelProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function GlassPanel({ children, className, ...rest }: GlassPanelProps) {
  return (
    <div
      className={clsx(
        'bg-glass backdrop-blur-glass border border-white/40 shadow-lg rounded-xl',
        '[-webkit-backdrop-filter:blur(12px)]',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

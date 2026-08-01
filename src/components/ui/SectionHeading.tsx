import type { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
}

export function SectionHeading({ eyebrow, title, description, className }: SectionHeadingProps) {
  return (
    <div className={clsx('max-w-2xl', className)}>
      <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</span>
      <h2 className="mt-2 font-display text-3xl md:text-4xl font-semibold text-ink">{title}</h2>
      {description && <p className="mt-3 text-muted leading-relaxed">{description}</p>}
    </div>
  );
}

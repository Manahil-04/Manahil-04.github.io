import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import clsx from 'clsx';

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={clsx('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <div
        className={clsx(
          'flex items-center gap-3 font-mono text-xs tracking-[0.2em] text-muted',
          align === 'center' && 'justify-center',
        )}
      >
        <span className="text-accent">{index}</span>
        <motion.span
          className="h-px bg-secondary"
          initial={{ width: 0 }}
          whileInView={{ width: 32 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          aria-hidden
        />
        <span className="uppercase">{eyebrow}</span>
      </div>
      <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-ink leading-[1.1]">
        {title}
      </h2>
      {description && <p className="mt-4 text-muted leading-relaxed">{description}</p>}
    </div>
  );
}

import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  hoverable?: boolean;
}

export function Card({ children, className, hoverable = true, ...rest }: CardProps) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-border bg-surface shadow-soft',
        hoverable &&
          'transition-all duration-300 ease-out hover:-translate-y-1 hover:border-border-strong hover:shadow-lifted',
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
}

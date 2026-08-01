import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

type Variant = 'primary' | 'outline' | 'ghost';

const base =
  'inline-flex items-center gap-2 border-2 border-ink font-mono text-sm uppercase tracking-wide ' +
  'px-5 py-3 rounded-lg transition-all duration-150 ease-out ' +
  'hover:-translate-y-0.5 active:translate-x-[2px] active:translate-y-[2px] active:shadow-none ' +
  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

const variants: Record<Variant, string> = {
  primary: 'bg-accent text-surface shadow-brutal hover:shadow-brutal-lg',
  outline: 'bg-surface text-ink shadow-brutal hover:shadow-brutal-lg',
  ghost: 'bg-transparent text-ink shadow-brutal-sm hover:shadow-brutal',
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({ variant = 'primary', children, className, ...rest }: ButtonProps) {
  const classes = clsx(base, variants[variant], className);

  if ('href' in rest && rest.href) {
    return (
      <a
        className={classes}
        data-cursor="button"
        {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={classes}
      data-cursor="button"
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
}

import clsx from 'clsx';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost';

export function buttonClasses(variant: ButtonVariant = 'primary', className?: string) {
  const base =
    'relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 ' +
    'font-medium text-sm transition-colors duration-200 ease-out ' +
    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-accent text-bg shadow-soft hover:shadow-lifted',
    secondary: 'bg-surface text-secondary border border-secondary/40 shadow-soft hover:border-secondary hover:bg-secondary-soft',
    ghost: 'text-ink hover:text-accent',
  };

  return clsx(base, variants[variant], className);
}

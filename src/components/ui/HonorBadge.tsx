import { Award } from 'lucide-react';

/** A distinctions/honors pill — deliberately louder than the neutral `Badge`
 * used for skills, since these are meant to stand out on the page. */
export function HonorBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md border border-accent/40 bg-accent-soft px-3 py-1.5
        text-xs font-medium text-accent transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:border-accent hover:shadow-soft"
    >
      <Award size={13} strokeWidth={2.25} aria-hidden />
      {label}
    </span>
  );
}

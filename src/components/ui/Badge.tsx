export function Badge({ label }: { label: string }) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface px-3 py-1.5
        text-xs text-ink transition-all duration-200 ease-out
        hover:-translate-y-0.5 hover:border-accent hover:text-accent hover:shadow-soft"
    >
      <span className="h-1 w-1 rounded-full bg-secondary" aria-hidden />
      {label}
    </span>
  );
}

export function SkillBadge({ label }: { label: string }) {
  return (
    <span
      className="inline-block rounded-md border border-border bg-surface px-3 py-1.5 font-mono text-xs
        text-ink shadow-brutal-sm transition-transform duration-150 ease-out
        hover:-translate-y-0.5 hover:shadow-brutal-sm hover:border-accent"
      data-cursor="text"
    >
      {label}
    </span>
  );
}

import clsx from 'clsx';
import type { TimelineEntry } from '../../data/experience';
import { Card } from './Card';

interface TimelineItemProps {
  entry: TimelineEntry;
  align?: 'left' | 'right';
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <Card className="p-6">
      <span className="font-mono text-xs uppercase tracking-wide text-accent">{entry.period}</span>
      <h3 className="mt-2 font-display text-lg font-semibold text-ink">{entry.role}</h3>
      <p className="mt-0.5 text-sm text-muted">
        {entry.organization} · {entry.location}
      </p>
      <p className="mt-3 text-sm text-ink/85 leading-relaxed">{entry.description}</p>
    </Card>
  );
}

export function TimelineItem({ entry, align = 'left' }: TimelineItemProps) {
  return (
    <div className="relative mb-10 last:mb-0 md:grid md:grid-cols-2 md:gap-12">
      <div className={clsx('hidden md:block', align === 'left' ? 'order-1' : 'order-2')}>
        <TimelineCard entry={entry} />
      </div>
      <div className={clsx('hidden md:block', align === 'left' ? 'order-2' : 'order-1')} />
      <div className="md:hidden pl-8">
        <TimelineCard entry={entry} />
      </div>
      <span
        className={clsx(
          'absolute h-2.5 w-2.5 rounded-full ring-4 ring-bg',
          align === 'left' ? 'bg-accent' : 'bg-secondary',
          'left-1 top-7 md:left-1/2 md:-translate-x-1/2',
        )}
      />
    </div>
  );
}

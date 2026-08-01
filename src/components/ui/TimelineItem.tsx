import clsx from 'clsx';
import type { TimelineEntry } from '../../data/experience';
import { GlassPanel } from './GlassPanel';

interface TimelineItemProps {
  entry: TimelineEntry;
  align?: 'left' | 'right';
}

function TimelineCard({ entry }: { entry: TimelineEntry }) {
  return (
    <GlassPanel className="p-5 shadow-brutal hover:-translate-y-1 transition-transform duration-150 ease-out">
      <span className="font-mono text-xs uppercase tracking-wide text-accent2">{entry.period}</span>
      <h3 className="mt-1 font-display text-lg font-semibold text-ink">{entry.role}</h3>
      <p className="font-mono text-xs text-muted mt-0.5">
        {entry.organization} · {entry.location}
      </p>
      <p className="mt-3 text-sm text-ink/90 leading-relaxed">{entry.description}</p>
    </GlassPanel>
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
          'absolute w-3 h-3 rounded-full bg-accent border-2 border-ink',
          'left-1 top-6 md:left-1/2 md:-translate-x-1/2',
        )}
      />
    </div>
  );
}

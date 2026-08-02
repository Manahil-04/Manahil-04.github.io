import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { research } from '../../data/research';

const TOPICS = ['HPC Clusters', 'RISC-V Architecture', 'Federated Learning', 'Parallel Computing'];

export function Research() {
  return (
    <section id="research" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            index="05"
            eyebrow="Research"
            title="Systems research"
            description="Hands-on work at the intersection of hardware and distributed AI."
          />
        </Reveal>

        <div className="mt-12 space-y-6">
          {research.map((entry) => (
            <Reveal key={entry.role}>
              <Card hoverable={false} className="p-8">
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {entry.period}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{entry.role}</h3>
                <p className="mt-0.5 text-sm text-muted">
                  {entry.organization} · {entry.location}
                </p>
                <p className="mt-4 max-w-3xl text-ink/85 leading-relaxed">{entry.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {TOPICS.map((topic) => (
                    <Badge key={topic} label={topic} />
                  ))}
                </div>
                {entry.paperLink && (
                  <a
                    href={entry.paperLink}
                    data-cursor="link"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent
                      transition-transform duration-200 hover:translate-x-0.5"
                  >
                    Read paper
                    <ArrowUpRight size={15} />
                  </a>
                )}
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { education } from '../../data/education';

export function Education() {
  return (
    <section id="education" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading index="06" eyebrow="Education" title="Foundations" />
        </Reveal>

        <div className="mt-12 space-y-6">
          {education.map((entry) => (
            <Reveal key={entry.degree}>
              <Card hoverable={false} className="p-8">
                <span className="font-mono text-xs uppercase tracking-wide text-accent">
                  {entry.period}
                </span>
                <h3 className="mt-2 font-display text-xl font-semibold text-ink">{entry.degree}</h3>
                <p className="mt-0.5 text-sm text-muted">{entry.institution}</p>
                <p className="mt-4 max-w-3xl text-ink/85 leading-relaxed">{entry.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { impactStats, achievements } from '../../data/achievements';

export function Achievements() {
  return (
    <section id="achievements" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading index="07" eyebrow="Achievements" title="Measurable impact" />
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {impactStats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 0.05} className="h-full">
              <Card hoverable={false} className="flex h-full flex-col p-8">
                <span className="font-display text-4xl md:text-5xl font-semibold text-accent">
                  {stat.value}
                </span>
                <p className="mt-2 font-medium text-ink">{stat.label}</p>
                <p className="mt-1 font-mono text-xs text-muted">{stat.context}</p>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {achievements.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05} className="h-full">
              <Card className="flex h-full flex-col p-6">
                <span className="font-mono text-xs uppercase tracking-wide text-secondary">
                  {item.period}
                </span>
                <h3 className="mt-2 font-display text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-0.5 text-sm text-muted">{item.organization}</p>
                <p className="mt-3 text-sm text-ink/85 leading-relaxed">{item.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { TimelineItem } from '../ui/TimelineItem';
import { GlassPanel } from '../ui/GlassPanel';
import { workExperience, researchAndLeadership, education } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="Resume" title="Where I've worked" />
        </Reveal>

        <div className="relative mt-16 pl-8 md:pl-0 before:absolute before:left-1 before:top-2 before:bottom-2 before:w-0.5 before:bg-border md:before:left-1/2 md:before:-translate-x-1/2">
          {workExperience.map((entry, index) => (
            <Reveal key={entry.role} delay={index * 0.05}>
              <TimelineItem entry={entry} align={index % 2 === 0 ? 'left' : 'right'} />
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          <Reveal>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent2 mb-4">
                Research &amp; Leadership
              </h3>
              <div className="space-y-4">
                {researchAndLeadership.map((entry) => (
                  <GlassPanel key={entry.role} className="p-5">
                    <span className="font-mono text-xs text-accent2">{entry.period}</span>
                    <h4 className="mt-1 font-display font-semibold text-ink">{entry.role}</h4>
                    <p className="font-mono text-xs text-muted">{entry.organization}</p>
                    <p className="mt-2 text-sm text-ink/90 leading-relaxed">{entry.description}</p>
                  </GlassPanel>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent2 mb-4">
                Education
              </h3>
              <div className="space-y-4">
                {education.map((entry) => (
                  <GlassPanel key={entry.degree} className="p-5">
                    <span className="font-mono text-xs text-accent2">{entry.period}</span>
                    <h4 className="mt-1 font-display font-semibold text-ink">{entry.degree}</h4>
                    <p className="font-mono text-xs text-muted">{entry.institution}</p>
                    <p className="mt-2 text-sm text-ink/90 leading-relaxed">{entry.description}</p>
                  </GlassPanel>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

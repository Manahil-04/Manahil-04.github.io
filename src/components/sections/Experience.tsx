import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { TimelineItem } from '../ui/TimelineItem';
import { workExperience } from '../../data/experience';

export function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading
            index="02"
            eyebrow="Experience"
            title="Where I've worked"
            description="A route through the roles that shaped how I build."
          />
        </Reveal>

        <div className="relative mt-16 pl-8 md:pl-0 before:absolute before:left-1 before:top-2 before:bottom-2 before:border-l before:border-dashed before:border-border-strong md:before:left-1/2 md:before:-translate-x-1/2">
          {workExperience.map((entry, index) => (
            <Reveal key={entry.role} delay={index * 0.05}>
              <TimelineItem entry={entry} align={index % 2 === 0 ? 'left' : 'right'} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { SkillBadge } from '../ui/SkillBadge';
import { skillGroups } from '../../data/skills';

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="My Skills" title="Tools of the trade" />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.category} delay={index * 0.05}>
              <div className="rounded-xl border-2 border-ink bg-surface p-6 shadow-brutal-sm">
                <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent2">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

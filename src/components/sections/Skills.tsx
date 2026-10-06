import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Marquee } from '../ui/Marquee';
import { skillGroups } from '../../data/skills';

// Flatten every category into one pool, then deal the skills round-robin
// into three rows so each lane mixes languages, frameworks and tools.
const allSkills = skillGroups.flatMap((group) =>
  group.skills.map((skill) => ({ skill, category: group.category })),
);

const rows: (typeof allSkills)[] = [[], [], []];
allSkills.forEach((entry, index) => rows[index % 3].push(entry));

const ROW_DURATIONS = [38, 46, 42];

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading index="04" eyebrow="Technical Skills" title="Tools of the trade" />
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 flex flex-col">
            {rows.map((row, index) => (
              <Marquee key={index} duration={ROW_DURATIONS[index]}>
                {row.map(({ skill, category }) => (
                  <span
                    key={skill}
                    title={category}
                    className="mr-3 inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-xl
                      border border-border bg-surface px-4 py-2.5 text-sm text-ink shadow-soft
                      transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-accent
                      hover:text-accent hover:shadow-lifted"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" aria-hidden />
                    {skill}
                  </span>
                ))}
              </Marquee>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

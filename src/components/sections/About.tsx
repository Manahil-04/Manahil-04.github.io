import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { GlassPanel } from '../ui/GlassPanel';
import { Button } from '../ui/Button';

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading eyebrow="About Me" title="Who I am" />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.05}>
            <div className="rounded-2xl border-2 border-ink bg-surface p-8 shadow-brutal">
              <p className="text-ink/90 leading-relaxed">
                I'm a software engineer and designer who enjoys building things that work as well
                as they look. Lately, a lot of my focus has been on exploring agentic AI, not just
                as a tool, but as a collaborator in the process of writing code, shaping systems,
                and creating better experiences.
              </p>
              <p className="mt-4 text-ink/90 leading-relaxed">
                I care about clean engineering, thoughtful design, and the way AI can extend what
                we're able to build. Whether it's starting fresh or refining details, I like
                projects that let me mix creativity, engineering, and intelligent systems.
              </p>
              <p className="mt-4 font-display text-lg font-semibold text-ink">
                Let's connect and create something cool together.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <GlassPanel className="p-6 h-full flex flex-col justify-between">
              <div className="space-y-4 font-mono text-sm">
                <div>
                  <p className="text-muted text-xs uppercase tracking-wide">Name</p>
                  <p className="text-ink">Manahil Mushtaq</p>
                </div>
                <div>
                  <p className="text-muted text-xs uppercase tracking-wide">Email</p>
                  <p className="text-ink break-all">manahilmushtaq004@gmail.com</p>
                </div>
              </div>
              <Button href="/resume.pdf" target="_blank" rel="noreferrer" className="mt-6 w-full justify-center">
                Download CV
              </Button>
            </GlassPanel>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

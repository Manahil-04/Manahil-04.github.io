import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const FOCUS_AREAS = ['AI Systems', 'Distributed Infrastructure', 'Full-Stack Engineering'];

export function About() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionHeading index="01" eyebrow="About" title="Who I am" />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <Reveal delay={0.05}>
            <Card hoverable={false} className="flex h-full flex-col p-8">
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

              <blockquote className="mt-6 border-l-2 border-accent pl-5">
                <p className="font-display text-xl md:text-2xl text-ink italic leading-snug">
                  Let's connect and create something cool together.
                </p>
              </blockquote>

              <div className="mt-auto pt-6 flex flex-wrap gap-2">
                {FOCUS_AREAS.map((area) => (
                  <Badge key={area} label={area} />
                ))}
              </div>
            </Card>
          </Reveal>

          <Reveal delay={0.1}>
            <Card className="relative flex h-full flex-col justify-between overflow-hidden p-6">
              <span className="absolute right-4 top-4 h-2 w-2 rounded-full border border-accent" aria-hidden />
              <dl className="space-y-5 text-sm">
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">Name</dt>
                  <dd className="mt-1 font-display text-lg text-ink">Manahil Mushtaq</dd>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">Email</dt>
                  <dd className="mt-1 text-ink break-all">manahilmushtaq004@gmail.com</dd>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <dt className="font-mono text-[11px] uppercase tracking-wide text-muted">Currently</dt>
                  <dd className="mt-1 text-ink">Software Development Engineer @ Sych Inc</dd>
                </div>
              </dl>
              <Button
                href="https://drive.google.com/file/d/1PQlD7B6iy5J0U-Fe6WuljNhoHPylPywv/view"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 w-full justify-center"
              >
                Download CV
              </Button>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from '../ui/Reveal';
import { Button } from '../ui/Button';
import { scrollToSection } from '../../lib/scrollTo';

export function OpenToOpportunities() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border-2 border-ink bg-ink px-8 py-14 text-center shadow-brutal-lg">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Status</p>
            <h2 className="mt-3 font-display text-2xl md:text-4xl font-semibold text-bg">
              Open to new opportunities &amp; collaboration
            </h2>
            <p className="mt-4 text-bg/70">
              Reach me at{' '}
              <a
                href="mailto:manahilmushtaq004@gmail.com"
                className="text-accent underline underline-offset-4"
                data-cursor="link"
              >
                manahilmushtaq004@gmail.com
              </a>
            </p>
            <div className="mt-8 flex justify-center">
              <Button onClick={() => scrollToSection('contact')}>Get in touch</Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

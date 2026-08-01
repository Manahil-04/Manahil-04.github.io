import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '../ui/Button';
import { GlassPanel } from '../ui/GlassPanel';
import { socialLinks } from '../../data/social';
import { scrollToSection } from '../../lib/scrollTo';

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Hello World!
          </span>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-bold leading-[1.05] text-ink">
            I'm Manahil Mushtaq
            <br />
            An <span className="text-accent">AI &amp; Software</span> Engineer
          </h1>
          <p className="mt-6 max-w-lg text-muted leading-relaxed">
            Crafting impactful solutions byte by byte — building systems, interfaces, and
            intelligent agents that work as well as they look.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button onClick={() => scrollToSection('contact')}>Contact Me</Button>
            <Button
              variant="outline"
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              My Resume
            </Button>
          </div>

          <div className="mt-10 flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                className="font-mono text-xs uppercase tracking-wide text-ink border-b-2 border-transparent hover:border-accent transition-colors"
                data-cursor="link"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <motion.div
            style={{ y: portraitY }}
            className="rounded-2xl border-2 border-ink bg-surface shadow-brutal-lg p-6"
          >
            <img src="/images/hero-portrait.svg" alt="Manahil Mushtaq" className="w-full" />
          </motion.div>
          <GlassPanel className="absolute -bottom-6 -left-6 px-4 py-3 hidden sm:block">
            <p className="font-mono text-xs text-ink">
              <span className="text-accent2">$</span> currently building{' '}
              <span className="text-accent">Wrift AI</span>
            </p>
          </GlassPanel>
        </div>
      </div>
    </section>
  );
}

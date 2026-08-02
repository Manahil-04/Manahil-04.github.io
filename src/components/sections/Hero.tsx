import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';
import { GithubIcon, LinkedinIcon, BehanceIcon } from '../ui/BrandIcons';
import { socialLinks } from '../../data/social';
import { scrollToSection } from '../../lib/scrollTo';
import { useTilt } from '../../hooks/useTilt';

const ICONS = { linkedin: LinkedinIcon, github: GithubIcon, email: Mail, behance: BehanceIcon };

function mapClamped(value: number, inMin: number, inMax: number, outMin: number, outMax: number) {
  const t = Math.min(Math.max((value - inMin) / (inMax - inMin), 0), 1);
  return outMin + t * (outMax - outMin);
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });

  // Plain mapping functions instead of useTransform's array-range shorthand: the shorthand
  // opts a shared scroll value into Framer's native scroll-accelerated fast path, which was
  // observed reverting opacity to 1 outside its active range instead of holding the clamped
  // value (confirmed via direct scrollYProgress inspection) — function transformers skip that path.
  const contentOpacity = useTransform(scrollYProgress, (v) => mapClamped(v, 0.35, 0.9, 1, 0));
  const contentScale = useTransform(scrollYProgress, (v) => mapClamped(v, 0, 1, 1, 0.82));
  const textY = useTransform(scrollYProgress, (v) => mapClamped(v, 0, 1, 0, -220));
  const portraitY = useTransform(scrollYProgress, (v) => mapClamped(v, 0, 1, 0, 240));
  const portraitRotate = useTransform(scrollYProgress, (v) => mapClamped(v, 0, 1, 0, -6));
  const gridY = useTransform(scrollYProgress, (v) => mapClamped(v, 0, 1, 0, -120));

  const { ref: tiltRef, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(12);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
    >
      <motion.div
        aria-hidden
        style={{ y: gridY }}
        className="absolute inset-0
          bg-[linear-gradient(var(--color-border)_1px,transparent_1px),linear-gradient(90deg,var(--color-border)_1px,transparent_1px)]
          bg-[length:56px_56px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]"
      />
      <motion.div
        style={{ opacity: contentOpacity, scale: contentScale }}
        className="relative mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1.15fr_0.85fr] md:items-center"
      >
        <Reveal>
          <motion.div style={{ y: textY }}>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Software Engineer &middot; AI &amp; Distributed Systems
            </span>
            <h1 className="mt-4 font-display text-4xl md:text-6xl font-semibold leading-[1.08] text-ink">
              Manahil Mushtaq
            </h1>
            <p className="mt-6 max-w-lg text-muted leading-relaxed">
              I build agentic AI systems and the scalable infrastructure that carries them into
              production, from real-time inference pipelines to the interfaces people actually use.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Button onClick={() => scrollToSection('projects')}>View Projects</Button>
              <Button variant="secondary" onClick={() => scrollToSection('contact')}>
                Get in Touch
              </Button>
            </div>

            <div className="mt-10 flex gap-5">
              {socialLinks.map((link) => {
                const Icon = ICONS[link.icon];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                    aria-label={link.label}
                    data-cursor="link"
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-border
                      text-muted transition-colors duration-200 hover:border-accent hover:text-accent"
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </Reveal>

        <Reveal delay={0.1}>
          <motion.div style={{ y: portraitY, rotate: portraitRotate }} className="relative mx-auto w-full max-w-sm">
            <div className="absolute inset-0 rounded-full border border-secondary/40 scale-110" />
            <div className="absolute inset-0 rounded-full border border-dashed border-secondary/25 scale-125" />
            <motion.div
              ref={tiltRef as never}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ rotateX, rotateY, transformPerspective: 800 }}
              className="overflow-hidden rounded-full border-2 border-primary/30 bg-surface shadow-lifted p-3"
            >
              <img
                src="/images/hero-portrait.svg"
                alt="Manahil Mushtaq"
                className="w-full rounded-full"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </Reveal>
      </motion.div>
    </section>
  );
}

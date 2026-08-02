import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../data/projects';
import { Card } from './Card';
import { useTilt } from '../../hooks/useTilt';

export function ProjectCard({ project }: { project: Project }) {
  const { ref, rotateX, rotateY, handleMouseMove, handleMouseLeave } = useTilt(6);

  return (
    <motion.div
      ref={ref as never}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 24 }}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="h-full"
    >
      <Card
        hoverable={false}
        data-cursor="link"
        className="group flex h-full flex-col overflow-hidden transition-shadow duration-300
          hover:shadow-lifted hover:border-border-strong"
      >
        <div className="relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/20 via-transparent to-transparent" />
        </div>

        <div className="flex flex-1 flex-col p-6">
          <span className="font-mono text-[11px] uppercase tracking-wide text-secondary">
            {project.category}
          </span>
          <h3 className="mt-2 font-display text-lg font-semibold text-ink leading-snug">
            {project.title}
          </h3>
          <p className="mt-2 text-sm text-ink/80 leading-relaxed">{project.description}</p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded border border-border bg-bg/60 px-2 py-0.5 font-mono text-[10px] text-muted"
              >
                {tech}
              </span>
            ))}
            {project.tech.length > 4 && (
              <span className="rounded border border-border bg-bg/60 px-2 py-0.5 font-mono text-[10px] text-muted">
                +{project.tech.length - 4}
              </span>
            )}
          </div>

          <a
            href={project.link}
            data-cursor="link"
            className="mt-auto inline-flex items-center gap-1.5 pt-5 text-sm font-medium text-accent
              transition-transform duration-200 group-hover:translate-x-0.5"
          >
            View project
            <ArrowUpRight size={15} />
          </a>
        </div>
      </Card>
    </motion.div>
  );
}

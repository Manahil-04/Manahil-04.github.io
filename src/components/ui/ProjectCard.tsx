import type { Project } from '../../data/projects';
import { GlassPanel } from './GlassPanel';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.link}
      className="group relative block pb-10"
      data-cursor="project"
      data-cursor-label="View project"
    >
      <div
        className="overflow-hidden rounded-xl border-2 border-ink shadow-brutal transition-all duration-200 ease-out
          group-hover:-translate-y-1 group-hover:rotate-[-1deg] group-hover:shadow-brutal-lg"
      >
        <img
          src={project.image}
          alt={project.title}
          className="h-56 w-full object-cover"
          loading="lazy"
        />
      </div>

      <GlassPanel className="absolute -bottom-2 left-4 right-4 p-4">
        <span className="font-mono text-[11px] uppercase tracking-wide text-accent2">
          {project.category}
        </span>
        <h3 className="mt-1 font-display text-base font-semibold text-ink leading-snug">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-ink/80 leading-relaxed line-clamp-3">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded border border-border/60 bg-surface/70 px-2 py-0.5 font-mono text-[10px] text-muted"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 4 && (
            <span className="rounded border border-border/60 bg-surface/70 px-2 py-0.5 font-mono text-[10px] text-muted">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </GlassPanel>
    </a>
  );
}

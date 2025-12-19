import type { PersonalProject } from "@/types";
import { TechBadge } from "@/components/ui/TechBadge";

export function PersonalProjectCard({
  project,
  onOpen,
}: {
  project: PersonalProject;
  onOpen: () => void;
}) {
  const maxTech = 4; // Reduced from 6 to 4
  const visible = project.technologies.slice(0, maxTech);
  const remaining = project.technologies.length - visible.length;

  return (
    <article
      onClick={onOpen}
      className="group cursor-pointer rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/50 h-full flex flex-col"
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="h-14 w-14 flex-shrink-0 rounded-xl bg-zinc-100 dark:bg-zinc-800 p-2 overflow-hidden">
          <img
            src={project.logo}
            alt={project.name}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-3 mb-2">
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors line-clamp-1">
              {project.name}
            </h3>
            <span className="text-xs rounded-full bg-zinc-100 dark:bg-zinc-800 px-2.5 py-1 text-zinc-700 dark:text-zinc-300 flex-shrink-0">
              {project.year}
            </span>
          </div>
        </div>
      </div>

      {/* Description with fixed height */}
      <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 leading-relaxed h-[4.5rem] mb-4">
        {project.description}
      </p>

      {/* Technologies - Always at bottom */}
      <div className="flex flex-wrap gap-2 mt-auto">
        {visible.map((t) => (
          <TechBadge key={t} techId={t} variant="accent" />
        ))}
        {remaining > 0 && (
          <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800">
            +{remaining} more
          </span>
        )}
      </div>
    </article>
  );
}

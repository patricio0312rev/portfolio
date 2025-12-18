import { MapPin, Calendar, ExternalLink } from "lucide-react";
import type { Job } from "@/types";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/Button";
import { getDateRange, calculateDuration } from "@/utils/date";
import { MAX_VISIBLE_TECH } from "@/constants";

interface JobCardProps {
  job: Job;
  onViewDetails: (job: Job) => void;
}

export function JobCard({ job, onViewDetails }: JobCardProps) {
  const visibleTechs = job.technologies.slice(0, MAX_VISIBLE_TECH);
  const remainingCount = job.technologies.length - MAX_VISIBLE_TECH;
  const projectPreviews = job.projects.slice(0, 2);
  const remainingProjects = job.projects.length - projectPreviews.length;

  const previewImages = (() => {
    if (job.images?.length) return job.images;
    const projectImages = job.projects.flatMap((p) => p.images ?? []);
    return projectImages;
  })();

  return (
    <article
      className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10 hover:border-sky-500/50 cursor-pointer"
      onClick={() => onViewDetails(job)}
    >
      {/* Featured Badge */}
      {job.featured && (
        <div className="absolute -top-3 right-6">
          <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 px-3 py-1 text-xs font-medium text-white">
            ⭐ Featured
          </span>
        </div>
      )}

      <div className="flex flex-col gap-4 lg:flex-row lg:gap-6">
        {/* Company Logo */}
        <div className="flex-shrink-0">
          <div className="h-16 w-16 rounded-xl bg-zinc-100 dark:bg-zinc-800 p-3 overflow-hidden">
            <img
              src={job.companyLogo}
              alt={job.company}
              className="h-full w-full object-contain"
              loading="lazy"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          {/* Header */}
          <div className="mb-3">
            <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1 group-hover:text-sky-500 transition-colors">
              {job.title}
            </h3>
            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
              <span className="font-semibold">{job.company}</span>
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {job.location}
              </span>
              <span className="inline-flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {getDateRange(job.startDate, job.endDate)}
              </span>
              <span className="text-xs bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                {calculateDuration(job.startDate, job.endDate)}
              </span>
            </div>
          </div>

          {/* Description */}
          <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
            {job.description}
          </p>

          {/* Projects Overview */}
          {job.projects.length > 0 && (
            <div className="space-y-3 mb-4">
              {projectPreviews.map((project) => (
                <div
                  key={project.id}
                  className="rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 p-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                        {project.name}
                      </p>
                      {project.summary && (
                        <p className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-2">
                          {project.summary}
                        </p>
                      )}
                    </div>
                    <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400">
                      {project.bullets.length} bullet
                      {project.bullets.length === 1 ? "" : "s"}
                    </span>
                  </div>

                  <ul className="mt-2 space-y-1">
                    {project.bullets.slice(0, 2).map((bullet, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2"
                      >
                        <span className="text-sky-500 mt-1">•</span>
                        <span className="line-clamp-1">{bullet}</span>
                      </li>
                    ))}
                    {project.bullets.length > 2 && (
                      <li className="text-xs text-zinc-500 dark:text-zinc-500 italic">
                        +{project.bullets.length - 2} more
                      </li>
                    )}
                  </ul>
                </div>
              ))}

              {remainingProjects > 0 && (
                <p className="text-xs text-zinc-500 dark:text-zinc-500">
                  +{remainingProjects} more project
                  {remainingProjects === 1 ? "" : "s"} in details
                </p>
              )}
            </div>
          )}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {visibleTechs.map((tech) => (
              <TechBadge key={tech} techId={tech} variant="accent" />
            ))}
            {remainingCount > 0 && (
              <span className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium text-zinc-600 dark:text-zinc-400">
                +{remainingCount} more
              </span>
            )}
          </div>

          {/* Image Previews (job images OR project images) */}
          {previewImages.length > 0 && (
            <div className="flex gap-2 mb-4 overflow-hidden">
              {previewImages.slice(0, 3).map((image, idx) => (
                <div
                  key={idx}
                  className="h-20 w-20 flex-shrink-0 rounded-lg overflow-hidden bg-zinc-100 dark:bg-zinc-800"
                >
                  <img
                    src={image}
                    alt={`${job.company} screenshot ${idx + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
              {previewImages.length > 3 && (
                <div className="h-20 w-20 flex-shrink-0 rounded-lg bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
                  +{previewImages.length - 3}
                </div>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onViewDetails(job);
              }}
            >
              View Details
            </Button>

            {job.website && (
              <Button
                variant="ghost"
                size="sm"
                href={job.website}
                onClick={(e: React.MouseEvent) => {
                  e.stopPropagation();
                  window.open(job.website!, "_blank", "noopener,noreferrer");
                }}
              >
                <ExternalLink className="h-4 w-4" />
                Visit Website
              </Button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

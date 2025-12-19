import { useMemo, useState } from "react";
import type { Job } from "@/types";

import { JobCard } from "@/components/sections/JobCard";
import { JobModal } from "@/components/sections/JobModal";
import { TechBadge } from "@/components/ui/TechBadge";
import { Button } from "@/components/ui/Button";

function getJobAllTech(job: Job): string[] {
  const jobTech = job.technologies ?? [];
  const projectTech = (job.projects ?? []).flatMap((p) => p.technologies ?? []);
  return Array.from(new Set([...jobTech, ...projectTech]));
}

export function Experience({ jobs }: { jobs: Job[] }) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const [selectedTech, setSelectedTech] = useState<Set<string>>(new Set());
  const [onlyFeatured, setOnlyFeatured] = useState(false);

  const allTechs = useMemo(() => {
    const set = new Set<string>();
    for (const job of jobs) {
      for (const t of getJobAllTech(job)) set.add(t);
    }
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [jobs]);

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      if (onlyFeatured && !job.featured) return false;

      if (selectedTech.size === 0) return true;

      const jobTech = new Set(getJobAllTech(job));
      // AND semantics (must match all selected tech)
      for (const t of selectedTech) {
        if (!jobTech.has(t)) return false;
      }
      return true;
    });
  }, [jobs, onlyFeatured, selectedTech]);

  const toggleTech = (techId: string) => {
    setSelectedTech((prev) => {
      const next = new Set(prev);
      if (next.has(techId)) next.delete(techId);
      else next.add(techId);
      return next;
    });
  };

  const clearFilters = () => {
    setSelectedTech(new Set());
    setOnlyFeatured(false);
  };

  const hasActiveFilters = selectedTech.size > 0 || onlyFeatured;

  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
                Experience
              </h2>
              <p className="mt-2 text-zinc-600 dark:text-zinc-400">
                Selected roles and projects I've worked on.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={onlyFeatured ? "primary" : "ghost"}
                onClick={() => setOnlyFeatured((v) => !v)}
              >
                {onlyFeatured ? "Featured: On" : "Featured: Off"}
              </Button>

              <Button
                size="sm"
                variant="ghost"
                onClick={clearFilters}
                disabled={!hasActiveFilters}
              >
                Clear filters
              </Button>
            </div>
          </div>

          {/* ✅ Filters panel */}
          <div className="mt-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                Filter by tech
              </p>
              <p className="text-xs text-zinc-600 dark:text-zinc-400">
                Showing{" "}
                <span className="font-semibold text-zinc-900 dark:text-zinc-100">
                  {filteredJobs.length}
                </span>{" "}
                / {jobs.length}
              </p>
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {allTechs.map((techId) => {
                const selected = selectedTech.has(techId);

                return (
                  <button
                    key={techId}
                    type="button"
                    onClick={() => toggleTech(techId)}
                    aria-pressed={selected}
                    aria-label={`Toggle ${techId} filter`}
                    className={[
                      "rounded-full transition-all",
                      selected
                        ? "ring-2 ring-sky-500"
                        : "opacity-80 hover:opacity-100",
                    ].join(" ")}
                  >
                    <TechBadge
                      techId={techId}
                      variant={selected ? "accent" : "default"}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} onViewDetails={setSelectedJob} />
          ))}

          {filteredJobs.length === 0 && (
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6">
              <p className="text-zinc-600 dark:text-zinc-400">
                No roles match your filters.
              </p>
              <div className="mt-3">
                <Button variant="primary" size="sm" onClick={clearFilters}>
                  Clear filters
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Modal */}
        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      </div>
    </section>
  );
}

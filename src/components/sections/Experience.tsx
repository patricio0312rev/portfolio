import React, { useState, useMemo } from 'react';
import { Briefcase } from 'lucide-react';
import { JobCard } from './JobCard';
import { JobModal } from './JobModal';
import type { Job } from '@/types';
import { TechBadge } from '@/components/ui/TechBadge';
import { SKILLS } from '@/constants';

interface ExperienceProps {
  jobs: Job[];
}

export function Experience({ jobs }: ExperienceProps) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  // Get all unique technologies from jobs
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    jobs.forEach(job => {
      job.technologies.forEach(tech => techSet.add(tech));
    });
    return Array.from(techSet).sort((a, b) => {
      const skillA = SKILLS[a as keyof typeof SKILLS]?.name || a;
      const skillB = SKILLS[b as keyof typeof SKILLS]?.name || b;
      return skillA.localeCompare(skillB);
    });
  }, [jobs]);

  // Filter jobs by selected technology
  const filteredJobs = useMemo(() => {
    if (!selectedTech) return jobs;
    return jobs.filter(job => job.technologies.includes(selectedTech));
  }, [jobs, selectedTech]);

  return (
    <section id="experience" className="py-20 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sky-100 dark:bg-sky-900/30 px-4 py-2 text-sm font-medium text-sky-600 dark:text-sky-400">
            <Briefcase className="h-4 w-4" />
            <span>Professional Journey</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            {jobs.length}+ years of professional experience building impactful solutions
          </p>
        </div>

        {/* Technology Filter */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Filter by technology:
            </span>
            <button
              onClick={() => setSelectedTech(null)}
              className={`text-sm px-3 py-1 rounded-full transition-colors ${
                !selectedTech
                  ? 'bg-sky-500 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-700'
              }`}
            >
              All ({jobs.length})
            </button>
          </div>
          <div className="flex flex-wrap gap-2">
            {allTechnologies.map((tech) => (
              <button
                key={tech}
                onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                className={`transition-all ${
                  selectedTech === tech ? 'ring-2 ring-sky-500' : ''
                }`}
              >
                <TechBadge techId={tech} variant={selectedTech === tech ? 'accent' : 'default'} />
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        {selectedTech && (
          <div className="mb-6 text-sm text-zinc-600 dark:text-zinc-400">
            Showing {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'} with{' '}
            <span className="font-medium text-sky-500">
              {SKILLS[selectedTech as keyof typeof SKILLS]?.name || selectedTech}
            </span>
          </div>
        )}

        {/* Jobs Grid */}
        <div className="space-y-6">
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job, index) => (
              <div
                key={job.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <JobCard job={job} onViewDetails={setSelectedJob} />
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-zinc-600 dark:text-zinc-400">
                No positions found with the selected technology.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Job Modal */}
      <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
    </section>
  );
}

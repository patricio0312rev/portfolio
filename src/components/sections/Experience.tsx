import { useState } from "react";
import type { Job } from "@/types";

import { JobCard } from "@/components/sections/JobCard";
import { JobModal } from "@/components/sections/JobModal";

export function Experience({ jobs }: { jobs: Job[] }) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  return (
    <section id="experience" className="py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">
            Experience
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            Selected roles and projects I’ve worked on.
          </p>
        </div>

        <div className="space-y-6">
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              job={job}
              onViewDetails={(j) => setSelectedJob(j)}
            />
          ))}
        </div>

        <JobModal job={selectedJob} onClose={() => setSelectedJob(null)} />
      </div>
    </section>
  );
}

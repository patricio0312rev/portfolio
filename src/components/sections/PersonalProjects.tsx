import { useState } from "react";
import type { PersonalProject } from "@/types";
import { PersonalProjectCard } from "@/components/sections/PersonalProjectCard";
import { PersonalProjectModal } from "@/components/sections/PersonalProjectModal";

export function PersonalProjects({
  projects,
}: {
  projects: PersonalProject[];
}) {
  const [selected, setSelected] = useState<PersonalProject | null>(null);

  if (!projects || projects.length === 0) return null;

  return (
    <section id="projects" className="py-20 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header (match other sections) */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Personal <span className="gradient-text">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Side projects and open-source work I build outside of client/company
            roles.
          </p>
        </div>

        {/* Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, index) => (
            <div
              key={p.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <PersonalProjectCard project={p} onOpen={() => setSelected(p)} />
            </div>
          ))}
        </div>

        <PersonalProjectModal
          project={selected}
          onClose={() => setSelected(null)}
        />
      </div>
    </section>
  );
}

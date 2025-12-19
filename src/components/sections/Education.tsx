import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";
import type { Education } from "@/types";
import { EducationCard } from "./EducationCard";

interface EducationProps {
  education: Education[];
}

export function Education({ education }: EducationProps) {
  const [visibleItems, setVisibleItems] = useState<Set<string>>(new Set());
  const itemRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("data-id");
            if (id) {
              setVisibleItems((prev) => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [education]);

  return (
    <section id="education" className="py-20 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-purple-100 dark:bg-purple-900/30 px-4 py-2 text-sm font-medium text-purple-600 dark:text-purple-400">
            <GraduationCap className="h-4 w-4" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Education & <span className="gradient-text">Training</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
            Global learning experiences across {education.length} countries
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Line - Hidden on mobile, shown on desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-purple-500 to-sky-500 -translate-x-1/2" />

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((edu, index) => {
              const isLeft = index % 2 === 0;
              const isVisible = visibleItems.has(edu.id);

              return (
                <div
                  key={edu.id}
                  ref={(el) => {
                    if (el) itemRefs.current.set(edu.id, el);
                  }}
                  data-id={edu.id}
                  className={`relative transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  {/* Desktop Layout */}
                  <div className="hidden md:block">
                    <div className="relative">
                      {/* Timeline Dot */}
                      <div className="absolute left-1/2 top-8 -translate-x-1/2 z-10">
                        <div className="h-6 w-6 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 ring-4 ring-white dark:ring-zinc-900 shadow-lg" />
                      </div>

                      {/* Card positioned left or right */}
                      <div
                        className={`w-[calc(50%-2rem)] ${
                          isLeft ? "ml-0 pr-8" : "ml-auto pl-8"
                        }`}
                      >
                        <EducationCard
                          edu={edu}
                          align={isLeft ? "right" : "left"}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden pl-8 relative">
                    <div className="absolute left-0 top-8 h-6 w-6 rounded-full bg-gradient-to-r from-sky-500 to-purple-500 ring-4 ring-white dark:ring-zinc-900 -translate-x-1/2" />
                    <div className="absolute left-0 top-14 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-transparent -translate-x-1/2" />
                    <EducationCard edu={edu} align="left" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

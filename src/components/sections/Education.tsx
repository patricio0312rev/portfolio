import { useEffect, useRef, useState } from "react";
import { GraduationCap } from "lucide-react";
import type { Education } from "@/types";
import { getDateRange } from "@/utils/date";
import { Badge } from "@/components/ui/Badge";

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

interface EducationCardProps {
  edu: Education;
  align: "left" | "right";
}

function EducationCard({ edu, align }: EducationCardProps) {
  return (
    <div
      className={`rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-lg hover:shadow-xl transition-shadow`}
    >
      {/* Header with Logo and Flag */}
      <div
        className={`flex items-start gap-4 mb-4 ${
          align === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <div className="h-20 w-20 flex-shrink-0 rounded-xl bg-zinc-100 dark:bg-zinc-800 p-3 overflow-hidden">
          <img
            src={edu.institutionLogo}
            alt={edu.institution}
            className="h-full w-full object-contain"
            loading="lazy"
          />
        </div>
        <div className={`flex-1 ${align === "right" ? "text-right" : ""}`}>
          <div
            className={`flex items-center gap-2 mb-2 ${
              align === "right" ? "justify-end" : ""
            }`}
          >
            <Badge variant="accent">{edu.type}</Badge>
            <span className="text-2xl">{edu.countryFlag}</span>
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
            {edu.degree}
          </h3>
          <p className="text-sky-500 font-semibold mb-1">{edu.institution}</p>
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            {edu.location}, {edu.country}
          </p>
        </div>
      </div>

      {/* Date Range */}
      <div
        className={`mb-3 text-sm text-zinc-500 dark:text-zinc-500 ${
          align === "right" ? "text-right" : ""
        }`}
      >
        {getDateRange(edu.startDate, edu.endDate)}
      </div>

      {/* Description */}
      <p
        className={`text-zinc-600 dark:text-zinc-400 mb-4 ${
          align === "right" ? "text-right" : ""
        }`}
      >
        {edu.description}
      </p>

      {/* Achievements */}
      {edu.achievements && edu.achievements.length > 0 && (
        <ul className={`space-y-2 ${align === "right" ? "text-right" : ""}`}>
          {edu.achievements.map((achievement, idx) => (
            <li
              key={idx}
              className={`text-sm text-zinc-600 dark:text-zinc-400 flex items-start gap-2 ${
                align === "right" ? "flex-row-reverse" : ""
              }`}
            >
              <span className="text-purple-500 flex-shrink-0">✓</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

import { Code, Rocket, Users, Award } from "lucide-react";
import { CountUp } from "@/components/ui/CountUp";
import { calculateAge } from "@/utils/date";
import { PROJECT_LINKS } from "@/constants";

export function About() {
  const currentAge = calculateAge(new Date(1999, 11, 3));

  const stats = [
    { icon: Code, label: "Years of Experience", value: 10, suffix: "+" },
    { icon: Rocket, label: "Projects Completed", value: 30, suffix: "+" },
    { icon: Users, label: "Open Source Projects", value: 5, suffix: "" },
    { icon: Award, label: "Scientific Publications", value: 4, suffix: "" },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="prose prose-zinc dark:prose-invert text-lg text-zinc-600 dark:text-zinc-400 text-justify">
              <p className="mb-4">
                I'm a <strong>Senior Full-Stack Software Developer</strong>{" "}
                based in Lima, Peru 🇵🇪, specializing in AI-powered applications
                and scalable web systems. Over the past 10 years, I've worked
                across the full stack — React, Node.js, Python, blockchain, AI —
                building production systems for both startups and big companies.
              </p>

              <p className="mb-4">
                I earned my <strong>Bachelor's in Software Engineering</strong>{" "}
                from San Marcos Major National University (top 3 in my class)
                and I'm completing my{" "}
                <strong>Master's in Artificial Intelligence</strong> at Georgia
                Tech, where I've focused on AI, machine learning and
                conversational agents. I have also been recognized as a{" "}
                <strong>Student Leader for the 21st Century</strong> and have
                graduated with honors from University.
              </p>

              <p className="">
                These days, I'm working as an AI Engineer, buiding projects for
                companies like{" "}
                <a
                  href={PROJECT_LINKS.amap}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Neo Sophia's AMAP</strong>
                </a>{" "}
                or{" "}
                <a
                  href={PROJECT_LINKS.formation}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Venturekit's Formation</strong>
                </a>
                . Also, I'm building open source tools like my{" "}
                <a
                  href={PROJECT_LINKS.toonTools}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>TOON Tools</strong>
                </a>{" "}
                VS Code & Cursor extension or maintaining my{" "}
                <a
                  href={PROJECT_LINKS.developerBlog}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <strong>Developer Blog</strong>
                </a>
                . Always looking for new challenges and opportunities to grow as
                a developer.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map(({ icon: Icon, label, value, suffix }, index) => (
              <div
                key={label}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6 text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-purple-500 p-3">
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">
                  <CountUp end={value} suffix={suffix} />
                </div>
                <div className="text-sm text-zinc-600 dark:text-zinc-400">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

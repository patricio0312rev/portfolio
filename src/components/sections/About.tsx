import { Code, Rocket, Users, Award } from 'lucide-react';
import { CountUp } from '@/components/ui/CountUp';

export function About() {
  const stats = [
    { icon: Code, label: 'Years of Experience', value: 7, suffix: '+' },
    { icon: Rocket, label: 'Projects Completed', value: 50, suffix: '+' },
    { icon: Users, label: 'Teachers Trained', value: 10000, suffix: '+' },
    { icon: Award, label: 'Countries Reached', value: 6, suffix: '' },
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
            <div className="prose prose-zinc dark:prose-invert">
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
                I'm a 22-year-old <strong>Senior Software Developer</strong> and <strong>Data Scientist</strong> based in Lima, Peru 🇵🇪. 
                With over 7 years of experience in software development, I specialize in building scalable web applications, 
                implementing AI solutions, and leading technical teams.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-4">
                I graduated from San Marcos Major National University as a <strong>Top 3 student</strong> in Software Engineering. 
                My journey has taken me across the globe, from Harvard University to Huawei University in China, 
                where I was recognized as a Student Leader for the 21st Century.
              </p>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                I founded <strong>Anqarapp</strong>, an edtech startup that reached 6 Latin American countries and trained 
                over 10,000 teachers during the pandemic. Currently, I work as a Senior Software Developer at Turn Technologies, 
                developing solutions for top companies like Amazon.
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
                <div className="text-sm text-zinc-600 dark:text-zinc-400">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

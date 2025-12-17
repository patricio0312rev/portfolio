import { useEffect, useState } from 'react';
import { ArrowRight, Mail, Calendar, Download, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/constants';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const roles = ['Software Developer', 'Data Scientist', 'Tech Leader', 'Problem Solver'];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < currentRole.length) {
            setDisplayedText(currentRole.slice(0, displayedText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 gradient-animated opacity-50" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Greeting */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm px-4 py-2 text-sm font-medium animate-fade-in">
            <span className="animate-pulse">👋</span>
            <span>Hey there, I'm Patricio</span>
          </div>

          {/* Main Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl animate-slide-up">
            <span className="block text-zinc-900 dark:text-zinc-100">
              Senior Software Developer
            </span>
            <span className="block mt-2">
              <span className="gradient-text">& {displayedText}</span>
              <span className="animate-pulse">|</span>
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400 mb-8 animate-slide-up" style={{ animationDelay: '0.1s' }}>
            {SITE_CONFIG.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <Button variant="primary" size="lg" href="#experience">
              View My Work
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="secondary" size="lg" href={SOCIAL_LINKS.calendly}>
              <Calendar className="h-5 w-5" />
              Schedule a Call
            </Button>
            <Button variant="ghost" size="lg" href={SOCIAL_LINKS.email}>
              <Mail className="h-5 w-5" />
              Send Email
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={SOCIAL_LINKS.resume}
              download
              className="rounded-lg p-3 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
              aria-label="Download CV"
            >
              <Download className="h-6 w-6" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-20 animate-bounce">
            <a href="#about" className="inline-block">
              <div className="h-8 w-5 rounded-full border-2 border-zinc-400 dark:border-zinc-600 p-1">
                <div className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-600 animate-pulse" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

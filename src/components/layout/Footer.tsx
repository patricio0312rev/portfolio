import React from 'react';
import { Github, Linkedin, Twitter, Instagram, Mail, Calendar } from 'lucide-react';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/constants';

export function Footer() {
  const socialIcons = [
    { href: SOCIAL_LINKS.github, icon: Github, label: 'GitHub' },
    { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.twitter, icon: Twitter, label: 'Twitter' },
    { href: SOCIAL_LINKS.instagram, icon: Instagram, label: 'Instagram' },
  ];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold gradient-text mb-4">
              {SITE_CONFIG.shortName}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {SITE_CONFIG.role}
            </p>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
              {SITE_CONFIG.location}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a
                href={SOCIAL_LINKS.resume}
                download
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors"
              >
                Download CV
              </a>
              <a
                href={SOCIAL_LINKS.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors inline-flex items-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Schedule a Call
              </a>
              <a
                href={SOCIAL_LINKS.email}
                className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" />
                Send Email
              </a>
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialIcons.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-zinc-200 dark:border-zinc-800 pt-8 text-center">
          <p className="text-sm text-zinc-600 dark:text-zinc-400">
            © {new Date().getFullYear()} {SITE_CONFIG.name}. Built with ☕ and 💜 from Lima, Peru
          </p>
        </div>
      </div>
    </footer>
  );
}

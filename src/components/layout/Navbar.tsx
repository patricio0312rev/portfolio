import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Calendar, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import * as SimpleIcons from 'simple-icons';
import { NAV_LINKS, SITE_CONFIG, SOCIAL_LINKS } from '@/constants';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Button } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = NAV_LINKS.map(link => link.href.replace('#', ''));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
  };

  const socialIcons = [
    { href: SOCIAL_LINKS.github, Icon: Github, label: 'GitHub' },
    { href: SOCIAL_LINKS.linkedin, Icon: Linkedin, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.twitter, Icon: Twitter, label: 'Twitter' },
    { href: SOCIAL_LINKS.instagram, Icon: Instagram, label: 'Instagram' },
  ];

  // Get Dev.to icon from simple-icons
  const devToIcon = (SimpleIcons as any).siDevdotto;

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isOpen
          ? 'bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with Profile Picture */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={() => handleClick('#home')}
          >
            <div className="relative h-10 w-10 rounded-full overflow-hidden ring-2 ring-sky-500/20 group-hover:ring-sky-500/50 transition-all">
              <img
                src={SITE_CONFIG.profileImage}
                alt={SITE_CONFIG.shortName}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-base font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent leading-tight">
                Patricio
              </span>
              <span className="text-base font-bold bg-gradient-to-r from-sky-500 to-purple-500 bg-clip-text text-transparent leading-tight">
                Marroquin
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 xl:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-sky-500',
                  activeSection === link.href.replace('#', '')
                    ? 'text-sky-500'
                    : 'text-zinc-600 dark:text-zinc-400'
                )}
              >
                {link.label}
              </a>
            ))}

            {/* Social Icons */}
            <div className="flex items-center gap-1 border-l border-zinc-200 dark:border-zinc-700 pl-4">
              {socialIcons.map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
              {/* Dev.to Icon */}
              <a
                href={SOCIAL_LINKS.devto}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg p-2 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
                aria-label="Dev.to"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="h-4 w-4 fill-current"
                  dangerouslySetInnerHTML={{ __html: devToIcon.svg }}
                />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm" href={SOCIAL_LINKS.resume} target="_blank">
                <Download className="h-4 w-4" />
                CV
              </Button>
              <Button variant="primary" size="sm" href={SOCIAL_LINKS.calendly} target="_blank">
                <Calendar className="h-4 w-4" />
                Schedule
              </Button>
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 xl:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'xl:hidden overflow-hidden transition-all duration-300 ease-in-out',
            isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="border-t border-zinc-200 dark:border-zinc-800 py-4">
            <div className="flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleClick(link.href)}
                  className={cn(
                    'text-base font-medium transition-colors hover:text-sky-500',
                    activeSection === link.href.replace('#', '')
                      ? 'text-sky-500'
                      : 'text-zinc-600 dark:text-zinc-400'
                  )}
                >
                  {link.label}
                </a>
              ))}
              
              {/* Mobile Social Icons */}
              <div className="flex gap-2 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                {socialIcons.map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                    aria-label={label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
                <a
                  href={SOCIAL_LINKS.devto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                  aria-label="Dev.to"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                    dangerouslySetInnerHTML={{ __html: devToIcon.svg }}
                  />
                </a>
              </div>

              {/* Mobile Action Buttons */}
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" size="md" href={SOCIAL_LINKS.resume} target="_blank" className="w-full">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
                <Button variant="primary" size="md" href={SOCIAL_LINKS.calendly} target="_blank" className="w-full">
                  <Calendar className="h-4 w-4" />
                  Schedule a Call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

import React from 'react';
import { Mail, Calendar, Download, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { SITE_CONFIG, SOCIAL_LINKS } from '@/constants';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-zinc-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid gap-6 md:grid-cols-2 mb-12">
            {/* Email Card */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-sky-100 dark:bg-sky-900/30 p-3">
                <Mail className="h-6 w-6 text-sky-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Me</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Send me an email and I'll get back to you within 24 hours.
              </p>
              <Button variant="secondary" size="sm" href={SOCIAL_LINKS.email} className="w-full">
                <Mail className="h-4 w-4" />
                {SITE_CONFIG.email}
              </Button>
            </div>

            {/* Schedule Card */}
            <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 p-6">
              <div className="mb-4 inline-flex items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30 p-3">
                <Calendar className="h-6 w-6 text-purple-500" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Schedule a Call</h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                Book a 30-minute call to discuss your project or opportunity.
              </p>
              <Button variant="secondary" size="sm" href={SOCIAL_LINKS.calendly} className="w-full">
                <Calendar className="h-4 w-4" />
                Book a Meeting
              </Button>
            </div>
          </div>

          {/* Info Grid */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br from-sky-50 to-purple-50 dark:from-sky-950/20 dark:to-purple-950/20 p-8">
            <div className="grid gap-6 md:grid-cols-2 mb-8">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-sky-500 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {SITE_CONFIG.location}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-purple-500 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a
                    href={SOCIAL_LINKS.email}
                    className="text-sm text-zinc-600 dark:text-zinc-400 hover:text-sky-500 transition-colors"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Download CV */}
            <div className="flex justify-center">
              <Button variant="primary" size="lg" href={SOCIAL_LINKS.resume}>
                <Download className="h-5 w-5" />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Availability Notice */}
          <div className="mt-8 text-center">
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              💼 Currently <span className="text-green-500 font-medium">available</span> for freelance projects and consulting opportunities
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

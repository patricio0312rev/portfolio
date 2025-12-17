import React from 'react';
import { cn } from '@/utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  asChild?: boolean;
  href?: string;
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
  );

  const variants = {
    primary: 'bg-gradient-to-r from-sky-500 to-purple-500 text-white hover:shadow-lg hover:shadow-sky-500/50',
    secondary: 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-200 dark:hover:bg-zinc-700',
    ghost: 'hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

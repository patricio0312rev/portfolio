import React from 'react';
import * as SimpleIcons from 'simple-icons';
import { SKILLS } from '@/constants';
import { Badge } from './Badge';

interface TechBadgeProps {
  techId: string;
  variant?: 'default' | 'accent' | 'outline';
}

export function TechBadge({ techId, variant = 'default' }: TechBadgeProps) {
  const skill = SKILLS[techId as keyof typeof SKILLS];
  
  if (!skill) return null;

  // Get icon from simple-icons with proper casing
  const iconKey = `si${skill.icon.charAt(0).toUpperCase()}${skill.icon.slice(1)}`;
  const icon = (SimpleIcons as any)[iconKey];

  return (
    <Badge variant={variant}>
      {icon ? (
        <svg
          role="img"
          viewBox="0 0 24 24"
          className="h-3 w-3 flex-shrink-0"
          fill="currentColor"
          dangerouslySetInnerHTML={{ __html: icon.svg }}
        />
      ) : (
        <span className="h-3 w-3 rounded-full bg-current flex-shrink-0" />
      )}
      <span>{skill.name}</span>
    </Badge>
  );
}

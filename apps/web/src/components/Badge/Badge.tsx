import React from 'react';

import clsxm from '@/lib/clsxm';

import { BadgeVariant } from '@/types/badge.types';

interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
  className?: string;
}

type Styles = 'bgColor' | 'textColor' | 'border' | 'gradient';

type Variants = {
  [key in BadgeVariant]: {
    [key in Styles]?: string;
  };
};

const variants: Variants = {
  ready: { bgColor: 'bg-green', textColor: 'text-darkSecondary' },
  warning: { bgColor: 'bg-yellow', textColor: 'text-darkSecondary' },
  error: { bgColor: 'bg-red', textColor: 'text-white' },
  dashed: {
    textColor: 'text-white',
    border: 'outline-2 outline-dashed outline-white',
  },
  default: { bgColor: 'bg-white', textColor: 'text-darkSecondary' },
  info: { bgColor: 'bg-blue', textColor: 'text-white' },
  highlight: {
    textColor: 'text-white',
    gradient: 'bg-gradient-to-r from-purple to-cyan',
  },
};

export default function Badge({
  children,
  variant,
  className = '',
}: BadgeProps) {
  return (
    <div
      className={clsxm(
        'flex w-fit items-center justify-center rounded-md px-3 py-1',
        variants[variant].bgColor ?? '',
        variants[variant].border ?? '',
        variants[variant].gradient ?? '',
        className
      )}
    >
      <span
        className={`inline-block font-accent text-xs font-extrabold uppercase leading-none ${
          variants[variant].textColor ?? 'text-darkSecondary'
        }`}
      >
        {children}
      </span>
    </div>
  );
}

import React from 'react';

import clsxm from '@/lib/clsxm';

interface BadgeProps {
  children: React.ReactNode;
  variant: BadgeVariant;
}

type BadgeVariant =
  | 'ready'
  | 'warning'
  | 'error'
  | 'dashed'
  | 'default'
  | 'info'
  | 'highlight';

type Styles = 'bgColor' | 'textColor' | 'border' | 'gradient';

type UpdatedData = {
  [key in BadgeVariant]: {
    [key in Styles]?: string;
  };
};

const variants: UpdatedData = {
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

export default function Badge({ children, variant }: BadgeProps) {
  return (
    <div
      className={clsxm(
        'w-fit rounded-lg px-4 py-0.5',
        variants[variant].bgColor ?? '',
        variants[variant].border ?? '',
        variants[variant].gradient ?? ''
      )}
    >
      <span
        className={`font-accent font-bold uppercase ${
          variants[variant].textColor ?? 'text-darkSecondary'
        }`}
      >
        {children}
      </span>
    </div>
  );
}

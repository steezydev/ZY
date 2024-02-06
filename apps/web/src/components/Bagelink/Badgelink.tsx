import Link from 'next/link';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { BadgelinkProps } from '@/types/props/BadgelinkProps';

//TODO: Make Unstyled Badgelink and fill and outline variants

export default function Badgelink({
  ariaLabel,
  children,
  href,
  fill = true,
  outline = false,
  className,
}: BadgelinkProps) {
  return (
    <Link
      aria-label={ariaLabel}
      href={href}
      target='_blank'
      className={clsxm(
        'group block w-fit cursor-pointer rounded-lg border-2 border-solid  px-3 py-0.5 font-medium leading-none backdrop-blur-sm transition-all ',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple',
        fill && 'border-white bg-white hover:bg-darkSecondary',
        outline && 'border-white bg-transparent hover:bg-white',
        className
      )}
    >
      <span
        className={clsxm(
          'font-accent text-sm font-medium   transition-all ',
          fill && 'text-dark group-hover:text-white',
          outline && 'text-white group-hover:text-dark'
        )}
      >
        {children}
      </span>
    </Link>
  );
}

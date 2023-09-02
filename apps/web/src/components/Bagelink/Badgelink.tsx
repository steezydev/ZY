import Link from 'next/link';
import React from 'react';

import clsxm from '@/lib/clsxm';

interface BadgelinkProps {
  children: React.ReactNode;
  href: string;
  fill?: boolean;
  outline?: boolean;
}

export default function Badgelink({
  children,
  href,
  fill = true,
  outline = false,
}: BadgelinkProps) {
  return (
    <Link
      href={href}
      target='_blank'
      className={clsxm(
        'group block w-fit cursor-pointer rounded-lg border-2 border-solid  px-3 py-0.5 font-medium leading-none backdrop-blur-sm transition-all ',
        fill && 'border-white bg-white hover:bg-darkSecondary',
        outline && 'border-white bg-transparent hover:bg-white'
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

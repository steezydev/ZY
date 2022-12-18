import Link from 'next/link';
import React from 'react';

import clsxm from '@/lib/clsxm';

export interface LinkProps {
  href: string;
  as?: string;
  newTab?: boolean;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactElement;
  className?: string;
}

const CustomLink = ({
  href,
  as,
  newTab = false,
  children,
  variant = 'primary',
  icon,
  className,
}: LinkProps) => {
  return (
    <Link href={href} target={newTab ? '_blank' : '_self'} as={as}>
      <div className='flex items-center'>
        {icon ? (
          <span className='flex items-center text-2xl'>{icon}</span>
        ) : null}
        <span
          className={clsxm(
            'slidingLink flex w-fit items-center gap-1 bg-gradient-to-r from-white to-white text-base',
            variant == 'primary' && 'text-white',
            variant == 'secondary' && 'text-secondary',
            className
          )}
        >
          {children}
        </span>
      </div>
    </Link>
  );
};

export default CustomLink;

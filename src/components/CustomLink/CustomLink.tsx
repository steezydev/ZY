import Link from 'next/link';
import React from 'react';

import clsxm from '@/lib/clsxm';

export interface LinkProps {
  href: string;
  as?: string;
  newTab?: boolean;
  children: React.ReactNode;
  icon?: React.ReactElement;
  className?: string;
  isActive?: boolean;
}

const CustomLink = ({
  href,
  as,
  newTab = false,
  children,
  icon,
  className,
  isActive,
}: LinkProps) => {
  return (
    <Link href={href} target={newTab ? '_blank' : '_self'} as={as}>
      <div className='flex items-center'>
        {icon ? (
          <span className='flex items-center text-2xl'>{icon}</span>
        ) : null}
        <span
          className={clsxm(
            'flex w-fit items-center gap-1 text-sm text-white/50 transition-all hover:text-white',
            isActive && 'text-white',
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

import { default as NextLink } from 'next/link';
import React from 'react';

import clsxm from '@/lib/clsxm';

import { LinkProps } from '@/types/props/LinkProps';

const Link = ({
  href,
  as,
  newTab = false,
  children,
  icon,
  className,
  isActive,
}: LinkProps) => {
  return (
    <NextLink href={href} target={newTab ? '_blank' : '_self'} as={as}>
      <div className='flex items-center'>
        {icon ? (
          <span className='flex items-center text-2xl'>{icon}</span>
        ) : null}
        <span
          className={clsxm(
            'flex w-fit items-center gap-1 text-sm font-light text-white/70 transition-all hover:text-white',
            isActive && 'text-white',
            className
          )}
        >
          {children}
        </span>
      </div>
    </NextLink>
  );
};

export default Link;

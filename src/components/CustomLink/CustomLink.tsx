import Link from 'next/link';
import React from 'react';

import clsxm from '@/lib/clsxm';

export interface LinkProps {
  href: string;
  as?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  icon?: React.ReactElement;
  className?: string;
}

const CustomLink = ({
  href,
  as,
  children,
  variant = 'primary',
  icon,
  className,
}: LinkProps) => {
  return (
    <Link href={href} as={as}>
      <span
        className={clsxm(
          'slidingLink flex w-fit items-center gap-1 bg-gradient-to-r from-white to-white pb-1',
          variant == 'primary' && 'text-white',
          variant == 'secondary' && 'text-secondary',
          className
        )}
      >
        {icon && icon}
        {children}
      </span>
    </Link>
  );
};

export default CustomLink;

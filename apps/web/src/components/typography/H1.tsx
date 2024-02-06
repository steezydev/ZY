import React from 'react';

import clsxm from '@/lib/clsxm';

import { TypographyProps } from '@/types/props/TypographyProps';

const H1 = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={clsxm(
          'font-display text-3xl font-medium md:text-5xl',
          className
        )}
      >
        {children}
      </h1>
    );
  }
);

export default H1;

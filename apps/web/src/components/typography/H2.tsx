import React from 'react';

import clsxm from '@/lib/clsxm';

import { TypographyProps } from '@/types/props/TypographyProps';

const H2 = React.forwardRef<HTMLParagraphElement, TypographyProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h2
        ref={ref}
        {...props}
        className={clsxm(
          'font-display text-3xl font-medium md:text-4xl',
          className
        )}
      >
        {children}
      </h2>
    );
  }
);

export default H2;

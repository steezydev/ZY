import React from 'react';

import clsxm from '@/lib/clsxm';

import { TechStackProps } from '@/types/props/TechStackProps';

function TechStack({ children, className }: TechStackProps) {
  return (
    <div className={clsxm('fle-row flex gap-2', className)}>{children}</div>
  );
}

export default TechStack;

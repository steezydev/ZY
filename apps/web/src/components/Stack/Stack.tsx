import React from 'react';

import clsxm from '@/lib/clsxm';

import Tooltip from '@/components/Tooltip';

interface StackItemProps {
  children: React.ReactNode;
  tooltip?: string;
}

interface StackProps {
  children: React.ReactNode;
  className?: string;
}

function StackItem({ children, tooltip }: StackItemProps) {
  return (
    <Tooltip tip={tooltip}>
      <span className='fill-white text-2xl'>{children}</span>
    </Tooltip>
  );
}

function Stack({ children, className }: StackProps) {
  return (
    <div className={clsxm('fle-row flex gap-2', className)}>{children}</div>
  );
}

Stack.Item = StackItem;

export default Stack;

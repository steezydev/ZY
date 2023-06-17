import React from 'react';

import Tooltip from '@/components/Tooltip';

interface StackItemProps {
  children: React.ReactNode;
  tooltip?: string;
}

interface StackProps {
  children: React.ReactNode;
}

function StackItem({ children, tooltip }: StackItemProps) {
  return (
    <Tooltip tip={tooltip}>
      <span className='fill-white text-2xl'>{children}</span>
    </Tooltip>
  );
}

function Stack({ children }: StackProps) {
  return <div className='fle-row flex gap-2'>{children}</div>;
}

Stack.Item = StackItem;

export default Stack;

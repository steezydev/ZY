import React from 'react';

import clsxm from '@/lib/clsxm';

import { TextareaProps } from '@/types/props/TextareaProps';

function Textarea({ className, ...props }: TextareaProps) {
  return (
    <textarea
      className={clsxm(
        'border-x-0 border-y-0 border-b-2 border-secondary bg-[#151515] px-2 py-1 font-accent font-medium focus:outline-none focus:ring-0',
        className
      )}
      {...props}
    />
  );
}

export default Textarea;

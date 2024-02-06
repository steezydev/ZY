import React from 'react';

import { TooltipProps } from '@/types/props/TooltipProps';

function Tooltip({ children, text }: TooltipProps) {
  return (
    <div className='group relative flex justify-center'>
      <span className='bg-primary inline-flex rounded text-base font-semibold text-white'>
        {children}
      </span>
      {text ? (
        <div className='absolute bottom-full left-1/2 z-20 mb-3 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-black px-4 py-[6px] text-sm font-semibold text-white group-hover:block group-hover:animate-slideTop'>
          <span className='absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black text-sm'></span>
          {text}
        </div>
      ) : null}
    </div>
  );
}

export default Tooltip;

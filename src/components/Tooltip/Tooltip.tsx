import React from 'react';

interface Tooltip {
  children: React.ReactNode;
  tip?: string;
}

export default function Tooltip({ children, tip }: Tooltip) {
  return (
    <div className='group relative inline-block'>
      <span className='bg-primary inline-flex rounded text-base font-semibold text-white'>
        {children}
      </span>
      {tip ? (
        <div className='absolute bottom-full left-1/2 z-20 mb-3 hidden -translate-x-1/2 whitespace-nowrap rounded-lg bg-black py-[6px] px-4 text-sm font-semibold text-white group-hover:block group-hover:animate-slideTop'>
          <span className='absolute bottom-[-3px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-black text-sm'></span>
          {tip}
        </div>
      ) : null}
    </div>
  );
}

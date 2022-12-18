import React from 'react';

interface HighlightProps {
  children: React.ReactNode;
  title: string;
}

export default function Highlight({ children, title }: HighlightProps) {
  return (
    <div className='flex h-32 w-32 items-center overflow-hidden text-ellipsis rounded-3xl bg-white/5 p-2'>
      <div className='flex max-w-full flex-col items-center justify-center gap-2'>
        <span className='text-3xl'>{children}</span>
        <span className='block w-full overflow-hidden text-ellipsis text-center font-accent font-medium leading-tight text-white line-clamp-3'>
          {title}
        </span>
      </div>
    </div>
  );
}

import React from 'react';

import Puzzle from '~/svg/Puzzle.svg';

interface EmptyProps {
  children: React.ReactNode;
}

export default function Empty({ children }: EmptyProps) {
  return (
    <div className='flex flex-col items-center text-2xl'>
      <span className='text-6xl'>
        <Puzzle />
      </span>
      <span className='font-accent text-white'>{children}</span>
    </div>
  );
}

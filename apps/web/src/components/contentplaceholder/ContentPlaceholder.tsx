import React from 'react';

import clsxm from '@/lib/clsxm';

import { ContentPlaceholderProps } from '@/types/props/ContentPlaceholderProps';

import Puzzle from '~/svg/Puzzle.svg';

export default function ContentPlaceholder({
  children,
  className,
}: ContentPlaceholderProps) {
  return (
    <div className={clsxm('flex flex-col items-center text-2xl', className)}>
      <span className='text-6xl'>
        <Puzzle />
      </span>
      <span className='font-accent text-white'>{children}</span>
    </div>
  );
}

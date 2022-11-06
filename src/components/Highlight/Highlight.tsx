import React from 'react';

import Config from '~/svg/Config.svg';
import Design from '~/svg/Design.svg';
import Rocket from '~/svg/Rocket.svg';

interface HighlightProps {
  children: React.ReactNode;
  variant: HighlightVariant;
}

type HighlightVariant = 'rocket' | 'design' | 'config';

type Variants = {
  [key in HighlightVariant]: React.ReactNode;
};

const variants: Variants = {
  rocket: <Rocket />,
  design: <Design />,
  config: <Config />,
};

export default function Highlight({ children, variant }: HighlightProps) {
  return (
    <div className='flex h-36 w-36 items-center rounded-3xl bg-white/5 p-2'>
      <div className='flex max-w-full flex-col items-center justify-center gap-2'>
        <span className='text-3xl'>{variants[variant]}</span>
        <span className='text-center font-accent font-medium leading-tight text-white'>
          {children}
        </span>
      </div>
    </div>
  );
}

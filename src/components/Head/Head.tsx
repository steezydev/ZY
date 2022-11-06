import React from 'react';

interface HeadProps {
  children: React.ReactNode;
  slogan: string;
}

export default function Head({ children, slogan }: HeadProps) {
  return (
    <div className='flex flex-col gap-3'>
      <h1 className='font-display text-7xl text-white'>{children}</h1>
      <h2 className='font-accent text-xl font-black uppercase text-secondary'>
        {slogan}
      </h2>
    </div>
  );
}

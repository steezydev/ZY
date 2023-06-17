import Link from 'next/link';
import React from 'react';

interface BadgelinkProps {
  children: React.ReactNode;
  href: string;
}

export default function Badgelink({ children, href }: BadgelinkProps) {
  return (
    <Link
      href={href}
      target='_blank'
      className='group block w-fit cursor-pointer rounded-lg border-2 border-solid border-white bg-white px-3 py-0.5 font-medium leading-none backdrop-blur-sm transition-all hover:bg-[#3C3C3C06]'
    >
      <span className='font-accent text-sm font-medium text-dark  transition-all group-hover:text-white'>
        {children}
      </span>
    </Link>
  );
}

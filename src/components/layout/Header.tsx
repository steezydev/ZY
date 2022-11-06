import Link from 'next/link';
import * as React from 'react';

const links = [
  { path: '/projects', name: 'Projects' },
  { path: '/blog', name: 'Blog' },
  { path: '/about', name: 'About' },
];

export default function Header() {
  return (
    <header className='absolute top-0 z-50 w-full py-2'>
      <div className='layout'>
        <div className='flex items-center gap-14'>
          <Link className='decoration' href='/'>
            <span className='text-glow font-display text-3xl font-bold text-white'>
              ZY
            </span>
          </Link>
          <div className='flex gap-5'>
            {links.map(({ path, name }) => (
              <span className='text-white' key={path}>
                <Link className='decoration' href={path}>
                  {name}
                </Link>
              </span>
            ))}
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

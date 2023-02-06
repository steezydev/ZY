import * as React from 'react';

import CustomLink from '@/components/CustomLink';
import Logo from '@/components/Logo';

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
          <Logo />
          <div className='flex gap-5'>
            {links.map(({ path, name }) => (
              <CustomLink key={path} href={path}>
                {name}
              </CustomLink>
            ))}
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

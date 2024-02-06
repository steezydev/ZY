import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

import { getCurrentYear } from '@/lib/dates';

export default function Footer() {
  return (
    <footer className='mt-auto h-full w-full py-3 md:py-5'>
      <div className='layout flex items-center justify-between font-accent text-xs font-light text-white/50'>
        <div>© {getCurrentYear()} steezy</div>
        <div className='flex gap-4 text-xl md:gap-3'>
          <Link
            aria-label='Go to Github profile'
            href='https://github.com/steezydev'
            target='_blank'
          >
            <BsGithub
              aria-hidden='true'
              className='h-6 w-6 text-white/50 transition-all hover:text-white'
            />
          </Link>
          <Link
            aria-label='Go to LinkedIn profile'
            href='https://www.linkedin.com/in/ivanilichevv/'
            target='_blank'
          >
            <BsLinkedin
              aria-hidden='true'
              className='h-6 w-6 text-white/50 transition-all hover:text-white'
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

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
          <Link href='https://github.com/steezydev' target='_blank'>
            <BsGithub className='text-white/50 transition-all hover:text-white' />
          </Link>
          <Link
            href='https://www.linkedin.com/in/ivanilichevv/'
            target='_blank'
          >
            <BsLinkedin className='text-white/50 transition-all hover:text-white' />
          </Link>
        </div>
      </div>
    </footer>
  );
}

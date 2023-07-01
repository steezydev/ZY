import Link from 'next/link';
import React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className='mt-auto h-full w-full py-3 md:py-5'>
      <div className='layout flex items-center justify-between font-accent text-xs font-light text-white/50'>
        <div>© 2023 steezy</div>
        <div className='flex gap-4 text-xl'>
          <Link href='https://github.com/steezydev' target='_blank'>
            <BsGithub className='text-white/50 transition-all hover:text-white' />
          </Link>
          <Link href='https://twitter.com/steezy_dev' target='_blank'>
            <BsTwitter className='text-white/50 transition-all hover:text-white' />
          </Link>
        </div>
      </div>
    </footer>
  );
}
import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin, BsTwitter } from 'react-icons/bs';

export default function Footer() {
  return (
    <footer className='mt-auto h-full w-full py-3 md:py-5'>
      <div className='layout flex items-center justify-between font-accent text-xs text-white/50'>
        <div>© 2023 steezy</div>
        <div className='flex gap-3 text-xl'>
          <Link href='https://github.com/steezydev' target='_blank'>
            <BsGithub className='text-white/50 transition-all hover:text-white' />
          </Link>
          <Link href='https://twitter.com/0xsteezy' target='_blank'>
            <BsTwitter className='text-white/50 transition-all hover:text-white' />
          </Link>
          <Link href='https://www.linkedin.com/in/steezy2401/' target='_blank'>
            <BsLinkedin className='text-white/50 transition-all hover:text-white' />
          </Link>
        </div>
      </div>
    </footer>
  );
}

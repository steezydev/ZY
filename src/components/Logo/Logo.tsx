import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link className='decoration' href='/'>
      <span className='font-display text-3xl font-semibold text-white md:text-5xl'>
        steezy
      </span>
    </Link>
  );
}

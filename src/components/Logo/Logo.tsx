import Link from 'next/link';
import React from 'react';

export default function Logo() {
  return (
    <Link className='decoration' href='/'>
      <span className='text-glow font-display text-3xl font-bold text-white'>
        ZY
      </span>
    </Link>
  );
}

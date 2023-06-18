import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import LogoImage from '~/images/logo.png';

export default function Logo() {
  return (
    <Link className='decoration block w-36 md:w-44' href='/'>
      <div className='relative h-10 w-full'>
        <Image src={LogoImage} className='object-contain' alt='Image' fill />
      </div>
    </Link>
  );
}

import React from 'react';

import Tooltip from '@/components/Tooltip';

import LockIcon from '~/svg/Lock.svg';
import LockUnlockedIcon from '~/svg/Lock-unlocked.svg';

interface LockProps {
  isClosed?: boolean;
}

export default function Lock({ isClosed = true }: LockProps) {
  return (
    <Tooltip tip={isClosed ? 'Private' : 'Public'}>
      <span className='flex justify-center text-2xl'>
        {isClosed ? <LockIcon /> : <LockUnlockedIcon />}
      </span>
    </Tooltip>
  );
}

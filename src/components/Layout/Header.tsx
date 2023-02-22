import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import CustomLink from '@/components/CustomLink';
import Logo from '@/components/Logo';

import Burger from '~/svg/Burger.svg';
import Github from '~/svg/Github.svg';
import Telegram from '~/svg/Telegram.svg';
import Twitter from '~/svg/Twitter.svg';

const links = [
  { path: '/projects', name: 'Projects' },
  { path: '/blog', name: 'Blog' },
  { path: '/about', name: 'About' },
];

export default function Header() {
  const mobileNavRef = React.useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = React.useState(false);
  useOnClickOutside(mobileNavRef, () => setShowNav(false));

  return (
    <header className='fixed top-0 z-30 w-full' ref={mobileNavRef}>
      <div className='relative h-full w-full'>
        <div className='absolute z-40 w-full bg-dark  pt-2'>
          <div className='layout pb-2'>
            <div className='flex items-center justify-between gap-14 md:justify-start'>
              <Logo />
              <div
                onClick={() => setShowNav((prev) => !prev)}
                className='flex items-center text-3xl md:hidden'
              >
                <Burger />
              </div>
              <div className='hidden gap-5 md:flex'>
                {links.map(({ path, name }) => (
                  <CustomLink key={path} href={path}>
                    {name}
                  </CustomLink>
                ))}
              </div>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {showNav ? (
            <motion.div
              initial={{ y: -300, opacity: 1 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -300, opacity: 1 }}
              transition={{
                type: 'spring',
                stiffness: 100,
                mass: 0.5,
              }}
              className='rounded-b-xl bg-dark'
            >
              <div className='layout pb-2 pt-12'>
                {links.map(({ path, name }, key) => (
                  <Link key={path + key} href={path}>
                    <div
                      className={clsxm(
                        'py-5',
                        'border-0 border-b border-solid border-b-[#333333]'
                      )}
                    >
                      <span className='font-display text-2xl'>{name}</span>
                    </div>
                  </Link>
                ))}
              </div>
              <div className='flex flex-row items-center justify-around gap-8 px-6 py-5 text-4xl'>
                <Link href='https://twitter.com/0xsteezy' target='_blank'>
                  <Twitter />
                </Link>
                <Link href='https://t.me/therealsteezy' target='_blank'>
                  <Telegram />
                </Link>
                <Link href='https://github.com/steezydev' target='_blank'>
                  <Github />
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </header>
  );
}

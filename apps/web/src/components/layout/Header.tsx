import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { BsGithub, BsTwitter } from 'react-icons/bs';

import clsxm from '@/lib/clsxm';
import useOnClickOutside from '@/hooks/useOnClickOutside';

import Button from '@/components/button/Button';
import CustomLink from '@/components/link/Link';
import Logo from '@/components/logo/Logo';

import Burger from '~/svg/Burger.svg';

const links = [
  { path: '/', name: 'About' },
  { path: '/projects', name: 'My works' },
  { path: '/contacts', name: 'Contacts' },
];

export default function Header() {
  const mobileNavRef = React.useRef<HTMLDivElement>(null);
  const [showNav, setShowNav] = React.useState(false);
  useOnClickOutside(mobileNavRef, () => setShowNav(false));

  React.useEffect(() => {
    document.body.style.overflow = showNav ? 'hidden' : 'auto';
  }, [showNav]);

  const router = useRouter();

  return (
    <header
      className='mb-12 w-full border-x-0 border-b border-t-0 border-solid border-white/5 md:border-none'
      ref={mobileNavRef}
    >
      <div className='layout flex justify-between md:flex-col md:justify-start md:px-0'>
        <div className='flex py-4 md:py-8'>
          <Logo />
        </div>
        <div
          onClick={() => setShowNav((prev) => !prev)}
          className='flex items-center text-3xl md:hidden'
        >
          <Burger />
        </div>
        <div className='hidden gap-12 border-x-0 border-y border-solid border-white/5 py-3 font-accent text-sm md:flex'>
          {links.map(({ path, name }) => (
            <CustomLink
              ariaLabel={`Go to ${name} page`}
              isActive={router.pathname === path}
              key={path}
              href={path}
            >
              {name}
            </CustomLink>
          ))}
        </div>
      </div>
      <AnimatePresence>
        {showNav ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='absolute z-50 h-screen w-full bg-dark'
          >
            <div className='layout pb-2 pt-8'>
              {links.map(({ path, name }, key) => (
                <Link
                  onClick={() => router.pathname === path && setShowNav(false)}
                  key={path + key}
                  href={path}
                >
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
              <Link href='https://github.com/steezydev' target='_blank'>
                <BsGithub />
              </Link>
              <Link href='https://twitter.com/steezy_dev' target='_blank'>
                <BsTwitter />
              </Link>
            </div>
            <div className='absolute bottom-28 flex w-full items-center'>
              <Button
                ariaLabel='Close mobile navigation'
                onClick={() => setShowNav(false)}
                variant='secondary'
                className='layout h-10'
              >
                Close
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

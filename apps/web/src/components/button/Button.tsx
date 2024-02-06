import React from 'react';

import clsxm from '@/lib/clsxm';

import { ButtonProps } from '@/types/props/ButtonProps';

// TODO: Make Unstyled Button and fill and outline variants

const Button = ({
  ariaLabel,
  children,
  variant = 'primary',
  isLoading = false,
  disabled = false,
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      aria-label={ariaLabel}
      className={clsxm(
        'group flex min-h-[2.3rem] cursor-pointer items-center justify-center gap-3 rounded-md border-2 border-solid border-white bg-white px-6 py-1 transition-all',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-purple',
        variant == 'primary' &&
          'bg-white backdrop-blur-sm hover:bg-[#3C3C3C06]',
        variant == 'secondary' &&
          'bg-[#3C3C3C06] backdrop-blur-sm hover:bg-white',
        (disabled || isLoading) &&
          'border-[#3C3C3C50] bg-[#3C3C3C50] hover:bg-[#3C3C3C50]',
        className
      )}
      {...props}
      disabled={isLoading || disabled}
    >
      {icon && (
        <div
          className={clsxm(
            'flex items-center text-xl transition-all',
            variant == 'primary' && 'text-dark group-hover:text-white',
            variant == 'secondary' && 'text-white group-hover:text-black',
            (disabled || isLoading) &&
              'text-[#BEBEBE90] group-hover:text-[#BEBEBE90]'
          )}
        >
          {icon}
        </div>
      )}

      <span
        className={clsxm(
          'font-base  font-accent text-sm transition-all',
          variant == 'primary' && 'text-dark group-hover:text-white',
          variant == 'secondary' && 'text-white group-hover:text-black',
          (disabled || isLoading) &&
            'text-[#BEBEBE90] group-hover:text-[#BEBEBE90]'
        )}
      >
        {isLoading ? 'Loading...' : children}
      </span>
    </button>
  );
};

export default Button;

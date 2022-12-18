import React, { ButtonHTMLAttributes } from 'react';

import clsxm from '@/lib/clsxm';

type ButtonVariant = 'outline' | 'solid';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  className?: string;
}

const Button = ({
  children,
  variant = 'solid',
  isLoading = false,
  disabled = false,
  icon,
  className = '',
  ...props
}: ButtonProps) => {
  return (
    <button
      className={clsxm(
        'group cursor-pointer rounded-xl border-2 border-solid border-white bg-white px-8 py-1.5 transition-all',
        variant == 'solid' && 'bg-white backdrop-blur-sm hover:bg-[#3C3C3C06]',
        variant == 'outline' &&
          'bg-[#3C3C3C06] backdrop-blur-sm hover:bg-white',
        (disabled || isLoading) &&
          'border-[#3C3C3C50] bg-[#3C3C3C50] hover:bg-[#3C3C3C50]',
        className
      )}
      {...props}
      disabled={isLoading || disabled}
    >
      {icon && <span>{icon}</span>}

      <span
        className={clsxm(
          'font-primary text-base font-bold transition-all',
          variant == 'solid' && 'text-black group-hover:text-white',
          variant == 'outline' && 'text-white group-hover:text-black',
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

import React from 'react';

import clsxm from '@/lib/clsxm';

type CustomInputProps = React.InputHTMLAttributes<HTMLInputElement>;

function CustomInput({ className, ...props }: CustomInputProps) {
  return (
    <input
      className={clsxm(
        `border-x-0 border-y-0 border-b-2 border-secondary bg-[#151515] px-2 py-1 font-accent font-medium focus:outline-none focus:ring-0`,
        className
      )}
      {...props}
    />
  );
}

export default CustomInput;

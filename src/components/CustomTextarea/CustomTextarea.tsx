import React from 'react';

import clsxm from '@/lib/clsxm';

type CustomTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

function CustomTextarea({ className, ...props }: CustomTextareaProps) {
  return (
    <textarea
      className={clsxm(
        'border-x-0 border-y-0 border-b-2 border-secondary bg-[#151515] px-2 py-1 font-accent focus:outline-none focus:ring-0',
        className
      )}
      {...props}
    />
  );
}

export default CustomTextarea;

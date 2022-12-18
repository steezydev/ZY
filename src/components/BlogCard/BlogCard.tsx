import React from 'react';

import clsxm from '@/lib/clsxm';

interface BlogCardModulesProps {
  children: React.ReactNode;
}

interface BlogCardProps {
  children: React.ReactNode;
  className?: string;
}

function BlogDate({ children }: BlogCardModulesProps) {
  return <span className='text-base text-secondary'>{children}</span>;
}

function BlogTitle({ children }: BlogCardModulesProps) {
  return (
    <span className='text-4xl font-black leading-none text-white md:text-4xl'>
      {children}
    </span>
  );
}

function BlogBody({ children }: BlogCardModulesProps) {
  return <span className='text-base leading-5 text-white'>{children}</span>;
}

function BlogCard({ children, className }: BlogCardProps) {
  return (
    <div className={clsxm('relative', className)}>
      <div className='flex w-full flex-col gap-6'>{children}</div>
    </div>
  );
}

BlogCard.Date = BlogDate;
BlogCard.Title = BlogTitle;
BlogCard.Body = BlogBody;

export default BlogCard;

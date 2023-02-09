import Image, { StaticImageData } from 'next/image';
import React from 'react';

import clsxm from '@/lib/clsxm';

import Badge from '@/components/Badge';

interface ProjectCardProps {
  children: React.ReactNode;
  image: string | StaticImageData;
  className?: string;
}

interface ProjectCardModulesProps {
  children: React.ReactNode;
}

function ProjectSlogan({ children }: ProjectCardModulesProps) {
  return (
    <span className='text font-accent font-semibold uppercase text-secondary'>
      {children}
    </span>
  );
}

function ProjectTitle({ children }: ProjectCardModulesProps) {
  return (
    <span className='text-4xl font-black text-white md:text-6xl'>
      {children}
    </span>
  );
}

function ProjectBody({ children }: ProjectCardModulesProps) {
  return <span className='leading-5 text-secondary'>{children}</span>;
}

function ProjectBadge({
  children,
  variant,
  className,
}: React.ComponentProps<typeof Badge>) {
  return (
    <div className={clsxm(className)}>
      <Badge variant={variant}>{children}</Badge>
    </div>
  );
}

function ProjectCard({ children, image, className }: ProjectCardProps) {
  return (
    <div
      className={clsxm(
        'relative flex flex-col gap-2 md:min-w-[700px] md:max-w-[900px] md:flex-row md:gap-16',
        className
      )}
    >
      <div className='relative mb-4 block h-32 w-full md:mb-0 md:hidden'>
        <Image src={image} className='object-contain' alt='Image' fill />
      </div>
      <div className='flex w-full flex-col gap-3 md:w-3/5 md:gap-6'>
        {children}
      </div>
      <div className='relative hidden w-2/5 md:block'>
        <Image src={image} className='object-contain' alt='Image' fill />
      </div>
    </div>
  );
}

ProjectCard.Slogan = ProjectSlogan;
ProjectCard.Title = ProjectTitle;
ProjectCard.Body = ProjectBody;
ProjectCard.Badge = ProjectBadge;

export default ProjectCard;

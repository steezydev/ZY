import React from 'react';

import clsxm from '@/lib/clsxm';

import Badge from '@/components/Badge';
import SkeletonImage from '@/components/SkeletonImage/SkeletonImage';

import ZYLoader from '~/svg/ZYLoader.svg';

interface ProjectCardProps {
  children: React.ReactNode;
  image: string;
  className?: string;
}

interface ProjectCardModulesProps {
  children: React.ReactNode;
}

function ProjectTitle({ children }: ProjectCardModulesProps) {
  return <span className='font-plain font-accent text-sm'>{children}</span>;
}

function ProjectBody({ children }: ProjectCardModulesProps) {
  return (
    <span className='font-accent text-sm font-light text-white/70'>
      {children}
    </span>
  );
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
    <div className={clsxm('flex w-full flex-row gap-5', className)}>
      <div className='relative aspect-square h-28'>
        <SkeletonImage
          src={image}
          loaderSvg={<ZYLoader height='112px' width='112px' />}
          height={112}
          width={112}
        />
        {/* <Image
          src={image}
          alt='Project Image'
          className='cursor-pointer object-contain'
          fill
        /> */}
      </div>
      <div className='flex flex-col gap-2'>{children}</div>
    </div>
  );
}

ProjectCard.Title = ProjectTitle;
ProjectCard.Body = ProjectBody;
ProjectCard.Badge = ProjectBadge;

export default ProjectCard;

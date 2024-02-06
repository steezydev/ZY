import React from 'react';

import clsxm from '@/lib/clsxm';

import SkeletonImage from '@/components/skeleton/SkeletonImage';

import { ProjectCardProps } from '@/types/props/ProjectCardProps';

import ZYLoader from '~/svg/ZYLoader.svg';

function ProjectCard({
  title,
  description,
  image,
  className,
}: ProjectCardProps) {
  return (
    <div className={clsxm('flex w-full flex-row gap-5', className)}>
      <div className='relative aspect-square h-28'>
        <SkeletonImage
          src={image}
          loaderSvg={<ZYLoader height='112px' width='112px' />}
          height={112}
          width={112}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <span className='font-plain font-accent text-base'>{title}</span>
        <span className='font-accent text-sm font-light text-white/70'>
          {description}
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;

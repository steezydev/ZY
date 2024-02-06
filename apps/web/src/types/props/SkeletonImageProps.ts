import { ReactNode } from 'react';

import { ClassNameProps } from './ClassNameProps';

export interface SkeletonImageProps extends ClassNameProps {
  src: string;
  loaderSvg: ReactNode;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

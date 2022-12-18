import { IImageSize, Image } from '@/types/image.types';

export interface TechStack {
  id: number;
  attributes: {
    tooltip: string;
    icon: Image<IImageSize>;
  };
}

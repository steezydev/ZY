import { IImageSize, Image } from '@/types/image.types';

export interface TechStack {
  id: number;
  attributes: {
    title: string;
    icon: Image<IImageSize>;
  };
}

import { IImageSize, Image } from '@/types/image.types';

export interface HighlightData {
  id: number;
  title: string;
  icon: Image<IImageSize>;
}

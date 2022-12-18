import { BadgeVariant } from '@/types/badge.types';
import { HighlightData } from '@/types/highlight.types';
import { IImageFormats, Image, ImageArray } from '@/types/image.types';
import { TechStack } from '@/types/tech.types';

export interface ProjectData {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    description: string;
    isPrivate: boolean;
    link: string;
    screenshots: { data: ImageArray<IImageFormats>[] };
    image: Image<IImageFormats>;
    highlights: HighlightData[];
    tech_stack: { data: TechStack[] };
    status: {
      id: number;
      title: string;
      value: BadgeVariant;
    };
  };
}

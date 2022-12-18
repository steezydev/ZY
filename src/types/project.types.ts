import { BadgeVariant } from '@/types/badge.types';
import { HighlightData } from '@/types/highlight.types';
import { IImageFormats, Image } from '@/types/image.types';
import { TechStack } from '@/types/tech.types';

export interface ProjectData {
  id: number;
  attributes: {
    title: string;
    subtitle: string;
    description: string;
    isPrivate: boolean;
    link: string;
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

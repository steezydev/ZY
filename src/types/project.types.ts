import { IImageFormats, Image } from '@/types/image.types';
import { LinkData } from '@/types/link.types';
import { TechStack } from '@/types/tech.types';

export interface ProjectData {
  id: number;
  attributes: {
    title: string;
    description: string;
    short_description: string;
    isPrivate: boolean;
    image: Image<IImageFormats>;
    logo: Image<IImageFormats>;
    tech_stack: { data: TechStack[] };
    links: LinkData[];
  };
}

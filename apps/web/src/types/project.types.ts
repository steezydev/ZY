import { IImageFormats, Image } from '@/types/image.types';
import { LinkData } from '@/types/link.types';
import { TechStack } from '@/types/tech.types';

export interface ProjectData {
  _id: number;
  title: string;
  description: string;
  short_description: string;
  image: any;
  logo: any;
  tech_stack: TechStack[];
  links: LinkData[];
}

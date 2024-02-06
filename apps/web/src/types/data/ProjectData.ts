import { PortableTextBlock } from '@portabletext/types';

import { LinkData } from './LinkData';
import { SlugData } from './SlugData';
import { TechStackData } from './TechStackData';

export interface ProjectData {
  title: string;
  description: string;
  short_description: string;
  body: PortableTextBlock;
  slug: SlugData;
  image: ImageData;
  logo: ImageData;
  tech_stack: TechStackData[];
  links: LinkData[];
}

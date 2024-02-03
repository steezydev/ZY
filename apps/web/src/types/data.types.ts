import { PortableTextBlock } from '@portabletext/types';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface AboutData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  aboutText: any;
  email: string;
  links: LinkData[];
  tech_stack_primary: TechStackData[];
}

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

export interface LinkData {
  label: string;
  url: string;
}

export interface TechStackData {
  title: string;
  icon: ImageData;
}

export type ImageData = SanityImageSource;

export interface SlugData {
  current: string;
}

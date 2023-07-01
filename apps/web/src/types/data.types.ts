import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export interface AboutData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  aboutText: any;
  email: string;
  links: LinkData[];
}

export interface ProjectData {
  title: string;
  description: string;
  short_description: string;
  slug: {
    current: string;
  };
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

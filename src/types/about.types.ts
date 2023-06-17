import { LinkData } from '@/types/link.types';
import { TechStack } from '@/types/tech.types';

export interface AboutData {
  id: number;
  attributes: {
    about: string;
    title: string;
    email: string;
    socials: LinkData[];
    tech_stacks: {
      data: TechStack[];
    };
  };
}

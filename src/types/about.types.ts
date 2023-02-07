import { TechStack } from '@/types/tech.types';

export interface AboutData {
  id: number;
  attributes: {
    about: string;
    title: string;
    telegram: string;
    discord: string;
    twitter: string;
    tech_stacks: {
      data: TechStack[];
    };
  };
}

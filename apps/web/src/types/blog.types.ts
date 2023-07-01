import { BadgeVariant } from '@/types/badge.types';

export interface BlogData {
  id: number;
  attributes: {
    title: string;
    date: string;
    description: string;
    text: string;
    slug: string;
    publishedAt: string;
    status: {
      id: number;
      title: string;
      value: BadgeVariant;
    };
  };
}

import { LinkData } from '@/types/link.types';
import { TechStack } from '@/types/tech.types';

export interface AboutData {
    aboutText: string;
    email: string;
    links: LinkData[];
}

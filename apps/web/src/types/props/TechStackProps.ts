import { ClassNameProps } from './ClassNameProps';
import { HasChildrenProps } from './HasChildrenProps';

export interface TechStackProps extends ClassNameProps, HasChildrenProps {
  children: React.ReactNode;
  className?: string;
}

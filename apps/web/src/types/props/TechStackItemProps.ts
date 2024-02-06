import { ClassNameProps } from './ClassNameProps';
import { HasChildrenProps } from './HasChildrenProps';

export interface TechStackItemProps extends HasChildrenProps, ClassNameProps {
  tooltip?: string;
}

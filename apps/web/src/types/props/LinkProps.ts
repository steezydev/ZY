import { ClassNameProps } from './ClassNameProps';

export interface LinkProps extends ClassNameProps {
  ariaLabel: string;
  href: string;
  children: React.ReactNode;
  as?: string;
  newTab?: boolean;
  icon?: React.ReactElement;
  isActive?: boolean;
}

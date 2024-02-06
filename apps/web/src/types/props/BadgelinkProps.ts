import { ClassNameProps } from './ClassNameProps';

export interface BadgelinkProps extends ClassNameProps {
  ariaLabel: string;
  children: React.ReactNode;
  href: string;
  fill?: boolean;
  outline?: boolean;
}

import { ClassNameProps } from './ClassNameProps';

export interface BadgelinkProps extends ClassNameProps {
  children: React.ReactNode;
  href: string;
  fill?: boolean;
  outline?: boolean;
}

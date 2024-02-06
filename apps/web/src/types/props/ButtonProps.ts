import { ButtonHTMLAttributes } from 'react';

import { ClassNameProps } from './ClassNameProps';

type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ClassNameProps {
  ariaLabel: string;
  variant?: ButtonVariant;
  isLoading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
}

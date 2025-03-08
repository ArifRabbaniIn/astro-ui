import type { CommonColor } from '../../types/color';
import type { Size } from '../../types/size';

export function getInputColorClass(color: CommonColor) {
  const classObject: Record<CommonColor, string> = {
    primary: 'input-primary',
    secondary: 'input-secondary',
    success: 'input-success',
    warning: 'input-warning',
    neutral: 'input-neutral',
    info: 'input-info',
    error: 'input-error',
    accent: 'input-accent',
  };

  return classObject[color];
}

export function getInputSizeClass(size: Size) {
  const classObject: Record<Size, string> = {
    xs: 'input-xs',
    sm: 'input-sm',
    md: 'input-md',
    lg: 'input-lg',
    xl: 'input-xl',
  };

  return classObject[size];
}

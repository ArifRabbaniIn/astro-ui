import type { CommonColor } from '../../../types/color';
import type { Size } from '../../../types/size';

export function getCheckboxColorClass(color: CommonColor) {
  const classObject: Record<CommonColor, string> = {
    primary: 'checkbox-primary',
    secondary: 'checkbox-secondary',
    success: 'checkbox-success',
    warning: 'checkbox-warning',
    neutral: 'checkbox-neutral',
    info: 'checkbox-info',
    error: 'checkbox-error',
    accent: 'checkbox-accent',
  };

  return classObject[color];
}

export function getCheckboxSizeClass(size: Size) {
  const classObject: Record<Size, string> = {
    xs: 'checkbox-xs',
    sm: 'checkbox-sm',
    md: 'checkbox-md',
    lg: 'checkbox-lg',
    xl: 'checkbox-xl',
  };

  return classObject[size];
}

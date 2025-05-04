import type { CommonColor } from '../../../types/color';
import type { Size } from '../../../types/size';

export function getTextareaColorClass(color: CommonColor) {
  const classObject: Record<CommonColor, string> = {
    primary: 'textarea-primary',
    secondary: 'textarea-secondary',
    success: 'textarea-success',
    warning: 'textarea-warning',
    neutral: 'textarea-neutral',
    info: 'textarea-info',
    error: 'textarea-error',
    accent: 'textarea-accent',
  };

  return classObject[color];
}

export function getTextareaSizeClass(size: Size) {
  const classObject: Record<Size, string> = {
    xs: 'textarea-xs',
    sm: 'textarea-sm',
    md: 'textarea-md',
    lg: 'textarea-lg',
    xl: 'textarea-xl',
  };

  return classObject[size];
}

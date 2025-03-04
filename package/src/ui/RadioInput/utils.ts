import type { Color } from '../../types/color';
import type { Size } from '../../types/size';

export function getRadioInputColorClass(color: Color) {
  const classObject: Record<Color, string> = {
    primary: 'radio-primary',
    secondary: 'radio-secondary',
    success: 'radio-success',
    warning: 'radio-warning',
    neutral: 'radio-neutral',
    info: 'radio-info',
    error: 'radio-error',
    accent: 'radio-accent',
  };

  return classObject[color];
}

export function getRadioInputSizeClass(size: Size) {
  const classObject: Record<Size, string> = {
    xs: 'radio-xs',
    sm: 'radio-sm',
    md: 'radio-md',
    lg: 'radio-lg',
    xl: 'radio-xl',
  };

  return classObject[size];
}

import type { Color } from '../type';

export function getBorderColorClass(color: Color) {
  const classObject: Record<Color, string> = {
    primary: 'border-primary',
    secondary: 'border-secondary',
    success: 'border-success',
    warning: 'border-warning',
    neutral: 'border-neutral',
    info: 'border-info',
    error: 'border-error',
    accent: 'border-accent',
    'base-100': 'border-base-100',
    'base-200': 'border-base-200',
    'base-300': 'border-base-300',
  };

  return classObject[color];
}

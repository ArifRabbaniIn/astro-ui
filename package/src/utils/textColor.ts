import type { Color } from '../types/color';

export function getTextColorClass(color: Color) {
  const classObject: Record<Color, string> = {
    primary: 'text-primary',
    secondary: 'text-secondary',
    success: 'text-success',
    warning: 'text-warning',
    neutral: 'text-neutral',
    info: 'text-info',
    error: 'text-error',
    accent: 'text-accent',
    'base-100': 'text-base-100',
    'base-200': 'text-base-200',
    'base-300': 'text-base-300',
  };

  return classObject[color];
}

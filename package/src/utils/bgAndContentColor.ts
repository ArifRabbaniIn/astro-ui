import type { Color } from '../types/color';

export function getBgAndContentColorClass(color: Color) {
  const classObject: Record<Color, string> = {
    primary: 'bg-primary text-primary-content',
    secondary: 'bg-secondary text-secondary-content',
    success: 'bg-success text-success-content',
    warning: 'bg-warning text-warning-content',
    neutral: 'bg-neutral text-neutral-content',
    info: 'bg-info text-info-content',
    error: 'bg-error text-error-content',
    accent: 'bg-accent text-accent-content',
    'base-100': 'bg-base-100 text-base-content',
    'base-200': 'bg-base-200 text-base-content',
    'base-300': 'bg-base-300 text-base-content',
  };

  return classObject[color];
}

export function getBgAndContentColorClassForFocus(color: Color) {
  const classObject: Record<Color, string> = {
    primary: 'focus:bg-primary focus:text-primary-content',
    secondary: 'focus:bg-secondary focus:text-secondary-content',
    success: 'focus:bg-success focus:text-success-content',
    warning: 'focus:bg-warning focus:text-warning-content',
    neutral: 'focus:bg-neutral focus:text-neutral-content',
    info: 'focus:bg-info focus:text-info-content',
    error: 'focus:bg-error focus:text-error-content',
    accent: 'focus:bg-accent focus:text-accent-content',
    'base-100': 'focus:bg-base-100 focus:text-base-content',
    'base-200': 'focus:bg-base-200 focus:text-base-content',
    'base-300': 'focus:bg-base-300 focus:text-base-content',
  };

  return classObject[color];
}

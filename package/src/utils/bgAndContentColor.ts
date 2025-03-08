import type { Color } from '../type';

export function getBgAndContentColorClass(color: Color) {
  const classObject: Record<Color, string> = {
    primary: 'bg-primary bg-primary-content',
    secondary: 'bg-secondary bg-secondary-content',
    success: 'bg-success bg-success-content',
    warning: 'bg-warning bg-warning-content',
    neutral: 'bg-neutral bg-neutral-content',
    info: 'bg-info bg-info-content',
    error: 'bg-error bg-error-content',
    accent: 'bg-accent bg-accent-content',
    'base-100': 'bg-base-100 bg-base-content',
    'base-200': 'bg-base-200 bg-base-content',
    'base-300': 'bg-base-300 bg-base-content',
  };

  return classObject[color];
}

export function getBgAndContentColorClassForFocus(color: Color) {
  const classObject: Record<Color, string> = {
    primary: 'focus:bg-primary focus:bg-primary-content',
    secondary: 'focus:bg-secondary focus:bg-secondary-content',
    success: 'focus:bg-success focus:bg-success-content',
    warning: 'focus:bg-warning focus:bg-warning-content',
    neutral: 'focus:bg-neutral focus:bg-neutral-content',
    info: 'focus:bg-info focus:bg-info-content',
    error: 'focus:bg-error focus:bg-error-content',
    accent: 'focus:bg-accent focus:bg-accent-content',
    'base-100': 'focus:bg-base-100 focus:bg-base-content',
    'base-200': 'focus:bg-base-200 focus:bg-base-content',
    'base-300': 'focus:bg-base-300 focus:bg-base-content',
  };

  return classObject[color];
}

import type { CommonColor } from '../../../types/color';
import type { Size } from '../../../types/size';
import type { BadgeStyle } from './types';

export function getBadgeColorClass(color: CommonColor) {
  const classObject: Record<CommonColor, string> = {
    primary: 'badge-primary',
    secondary: 'badge-secondary',
    success: 'badge-success',
    warning: 'badge-warning',
    neutral: 'badge-neutral',
    info: 'badge-info',
    error: 'badge-error',
    accent: 'badge-accent',
  };

  return classObject[color];
}

export function getBadgeSizeClass(size: Size) {
  const classObject: Record<Size, string> = {
    xs: 'badge-xs',
    sm: 'badge-sm',
    md: 'badge-md',
    lg: 'badge-lg',
    xl: 'badge-xl',
  };

  return classObject[size];
}

export function getBadgeStyleClass(style: BadgeStyle) {
  const classObject: Record<BadgeStyle, string> = {
    outline: 'badge-outline',
    dash: 'badge-dash',
    soft: 'badge-soft',
    ghost: 'badge-ghost',
  };

  return classObject[style];
}

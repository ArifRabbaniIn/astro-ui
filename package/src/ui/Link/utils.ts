import type { CommonColor } from '../../types/color';

export function getLinkColorClass(color: CommonColor) {
  const classObject: Record<CommonColor, string> = {
    primary: 'link-primary',
    secondary: 'link-secondary',
    success: 'link-success',
    warning: 'link-warning',
    neutral: 'link-neutral',
    info: 'link-info',
    error: 'link-error',
    accent: 'link-accent',
  };

  return classObject[color];
}

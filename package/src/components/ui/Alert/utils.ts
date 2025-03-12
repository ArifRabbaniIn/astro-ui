import type { Direction } from '../../../types/direction';
import type { AlertColor, AlertStyle } from './types';

export function getAlertColorClass(color: AlertColor) {
  const classObject: Record<AlertColor, string> = {
    success: 'alert-success',
    warning: 'alert-warning',
    info: 'alert-info',
    error: 'alert-error',
  };

  return classObject[color];
}

export function getAlertStyleClass(style: AlertStyle) {
  const classObject: Record<AlertStyle, string> = {
    outline: 'alert-outline',
    dash: 'alert-dash',
    soft: 'alert-soft',
  };

  return classObject[style];
}

export function getAlertDirectionClass(direction: Direction) {
  const classObject: Record<Direction, string> = {
    vertical: 'alert-vertical',
    horizontal: 'alert-horizontal',
  };

  return classObject[direction];
}

import type { Direction } from '../../../types/direction';
import type { AlertColor, AlertStyle } from './types';

export function getAlertClass(
  type?: AlertColor | undefined,
  alertStyle?: AlertStyle | undefined,
  direction?: Direction | undefined,
  providedClass?: string | undefined | null
) {
  let cssClass = 'alert';

  if (type) {
    cssClass += ` ${getAlertColorClass(type)}`;
  }

  if (alertStyle) {
    cssClass += ` ${getAlertStyleClass(alertStyle)}`;
  }

  if (direction) {
    cssClass += ` ${getAlertDirectionClass(direction)}`;
  }

  if (providedClass) {
    cssClass += ` ${providedClass}`;
  }

  return cssClass;
}

function getAlertColorClass(color: AlertColor) {
  const classObject: Record<AlertColor, string> = {
    success: 'alert-success',
    warning: 'alert-warning',
    info: 'alert-info',
    error: 'alert-error',
  };

  return classObject[color];
}

function getAlertStyleClass(style: AlertStyle) {
  const classObject: Record<AlertStyle, string> = {
    outline: 'alert-outline',
    dash: 'alert-dash',
    soft: 'alert-soft',
  };

  return classObject[style];
}

function getAlertDirectionClass(direction: Direction) {
  const classObject: Record<Direction, string> = {
    vertical: 'alert-vertical',
    horizontal: 'alert-horizontal',
  };

  return classObject[direction];
}

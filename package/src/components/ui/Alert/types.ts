import type { Direction } from '../../../types/direction';

export type AlertProps = {
  type?: AlertColor | undefined;
  alertStyle?: AlertStyle | undefined;
  direction?: Direction | undefined;
};

export type AlertColor = 'info' | 'success' | 'warning' | 'error';

export type AlertStyle = 'outline' | 'dash' | 'soft';

import type { ToastPosition } from './types';

export function getToastPositionClass(position: ToastPosition) {
  const classObject: Record<ToastPosition, string> = {
    'top-left': 'toast-top toast-start',
    'top-center': 'toast-top toast-center',
    'top-right': 'toast-top toast-end',
    'bottom-left': 'toast-bottom toast-start',
    'bottom-center': 'toast-bottom toast-center',
    'bottom-right': 'toast-bottom toast-end',
    center: 'toast-center toast-middle',
    'center-left': 'toast-middle toast-start',
    'center-right': 'toast-middle toast-end',
  };

  return classObject[position];
}

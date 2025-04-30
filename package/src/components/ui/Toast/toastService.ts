import type { AlertProps } from '../Alert/types';
import { getAlertClass } from '../Alert/utils';
import { TOAST_CONTAINER_ID } from './data';

export function showToast({
  message,
  duration = 3000,
  type = 'info',
  alertStyle,
  direction,
}: {
  message: string;
  duration?: number;
} & AlertProps) {
  const container = document.getElementById(TOAST_CONTAINER_ID);

  if (!container) return;

  const toast = document.createElement('div');
  toast.setAttribute('role', 'alert');

  const cssClass = getAlertClass(type, alertStyle, direction);

  toast.className = cssClass;

  toast.innerHTML = `<span>${message}</span>`;

  container.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, duration);
}

import type { Size } from '../../types/size';
import type { Loader } from './types';

export function getLoaderClass(loader: Loader) {
  const classObject: Record<Loader, string> = {
    ball: 'loading-ball',
    bars: 'loading-bars',
    dots: 'loading-dots',
    infinity: 'loading-infinity',
    ring: 'loading-ring',
    spinner: 'loading-spinner',
  };

  return classObject[loader];
}

export function getLoaderSizeClass(size: Size) {
  const classObject: Record<Size, string> = {
    xs: 'loading-xs',
    sm: 'loading-sm',
    md: 'loading-md',
    lg: 'loading-lg',
    xl: 'loading-xl',
  };

  return classObject[size];
}

import type { Size } from '../../../types/size';
import type { CardBorderStyle } from './types';

export function getCardSizeClass(size: Size) {
  const classObject: Record<Size, string> = {
    xs: 'card-xs',
    sm: 'card-sm',
    md: 'card-md',
    lg: 'card-lg',
    xl: 'card-xl',
  };

  return classObject[size];
}

export function getCardBorderStyleClass(borderStyle: CardBorderStyle) {
  const classObject: Record<CardBorderStyle, string> = {
    solid: 'card-border',
    dash: 'card-dash',
  };

  return classObject[borderStyle];
}

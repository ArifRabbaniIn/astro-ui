import type { CommonColor } from '../../../types/color';
import type { Size } from '../../../types/size';
import type { ButtonModifier, ButtonStyle } from './types';

export function getButtonClass(
  color?: CommonColor | undefined,
  size?: Size | undefined,
  buttonStyle?: ButtonStyle | undefined,
  modifier?: ButtonModifier | undefined,
  active?: boolean | undefined,
  providedClass?: string | undefined | null
) {
  let cssClass = 'btn';

  if (color) {
    cssClass += ` ${getButtonColorClass(color)}`;
  }

  if (size) {
    cssClass += ` ${getButtonSizeClass(size)}`;
  }

  if (buttonStyle) {
    cssClass += ` ${getButtonStyleClass(buttonStyle)}`;
  }

  if (modifier) {
    cssClass += ` ${getButtonModifierClass(modifier)}`;
  }

  if (active) {
    cssClass += ' btn-active';
  }

  if (providedClass) {
    cssClass += ` ${providedClass}`;
  }

  return cssClass;
}

function getButtonColorClass(color: CommonColor) {
  const classObject: Record<CommonColor, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    success: 'btn-success',
    warning: 'btn-warning',
    neutral: 'btn-neutral',
    info: 'btn-info',
    error: 'btn-error',
    accent: 'btn-accent',
  };

  return classObject[color];
}

function getButtonSizeClass(size: Size) {
  const classObject: Record<Size, string> = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    md: 'btn-md',
    lg: 'btn-lg',
    xl: 'btn-xl',
  };

  return classObject[size];
}

function getButtonStyleClass(style: ButtonStyle) {
  const classObject: Record<ButtonStyle, string> = {
    outline: 'btn-outline',
    dash: 'btn-dash',
    soft: 'btn-soft',
    ghost: 'btn-ghost',
    link: 'btn-link',
  };

  return classObject[style];
}

function getButtonModifierClass(modifier: ButtonModifier) {
  const classObject: Record<ButtonModifier, string> = {
    wide: 'btn-wide',
    block: 'btn-block',
    circle: 'btn-circle',
    square: 'btn-square',
  };

  return classObject[modifier];
}

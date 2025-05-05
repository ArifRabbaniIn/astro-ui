import type { DropdownPosition } from './types';

export function getDropdownClass(
  forceOpen?: boolean | undefined,
  hoverOpen?: boolean | undefined,
  dropdownPosition?: DropdownPosition | undefined,
  providedClass?: string | undefined | null
) {
  let cssClass = 'dropdown';

  if (forceOpen) {
    cssClass += ' dropdown-open';
  } else if (hoverOpen) {
    cssClass += ' dropdown-hover';
  }

  if (dropdownPosition) {
    cssClass += ` ${getDropdownPositionClass(dropdownPosition)}`;
  }

  if (providedClass) {
    cssClass += ` ${providedClass}`;
  }

  return cssClass;
}

export function getDropdownPositionClass(position: DropdownPosition) {
  const classObject: Record<DropdownPosition, string> = {
    'top-start': 'dropdown-top dropdown-start',
    'top-center': 'dropdown-top dropdown-center',
    'top-end': 'dropdown-top dropdown-end',
    'bottom-start': 'dropdown-bottom dropdown-start',
    'bottom-center': 'dropdown-bottom dropdown-center',
    'bottom-end': 'dropdown-bottom dropdown-end',
    'left-start': 'dropdown-left dropdown-start',
    'left-center': 'dropdown-left dropdown-center',
    'left-end': 'dropdown-left dropdown-end',
    'right-start': 'dropdown-right dropdown-start',
    'right-center': 'dropdown-right dropdown-center',
    'right-end': 'dropdown-right dropdown-end',
  };

  return classObject[position];
}

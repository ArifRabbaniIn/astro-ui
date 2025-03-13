import type { MaskModifier, MaskType } from './types';

export function getMaskTypeClass(type: MaskType) {
  const classObject: Record<MaskType, string> = {
    squircle: 'mask-squircle',
    heart: 'mask-heart',
    hexagon: 'mask-hexagon',
    'hexagon-2': 'mask-hexagon-2',
    decagon: 'mask-decagon',
    pentagon: 'mask-pentagon',
    diamond: 'mask-diamond',
    square: 'mask-square',
    circle: 'mask-circle',
    star: 'mask-star',
    'star-2': 'mask-star-2',
    triangle: 'mask-triangle',
    'triangle-2': 'mask-triangle-2',
    'triangle-3': 'mask-triangle-3',
    'triangle-4': 'mask-triangle-4',
  };

  return classObject[type];
}

export function getMaskModifierClass(modifier: MaskModifier) {
  const classObject: Record<MaskModifier, string> = {
    'half-1': 'mask-half-1',
    'half-2': 'mask-half-2',
  };

  return classObject[modifier];
}

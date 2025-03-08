import type { Justify } from '../types/alignment';

export function getJustifyClass(justify: Justify) {
  const classObject: Record<Justify, string> = {
    start: 'justify-start',
    end: 'justify-end',
    around: 'justify-around',
    between: 'justify-between',
    center: 'justify-center',
    evenly: 'justify-evenly',
    stretch: 'justify-stretch',
  };

  return classObject[justify];
}

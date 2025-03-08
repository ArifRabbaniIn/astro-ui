import type { ComponentProps } from 'astro/types';
import type NotFound1 from './NotFound1.astro';

export type NotFoundProps = NotFound1;

type NotFound1 = {
  variant: '1';
} & ComponentProps<typeof NotFound1>;

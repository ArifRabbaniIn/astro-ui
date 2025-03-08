import type { ComponentProps } from 'astro/types';
import type Footer1 from './Footer1.astro';

export type FooterProps = Footer1;

type Footer1 = {
  variant: '1';
} & ComponentProps<typeof Footer1>;

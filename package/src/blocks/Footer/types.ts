import type { ComponentProps } from 'astro/types';
import type Footer1 from './Footer1.astro';

export type FooterProps = Footer1Type;

type Footer1Type = {
  footerStyle: '1';
} & ComponentProps<typeof Footer1>;

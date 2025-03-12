// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc';

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      plugins: [
        starlightTypeDoc({
          entryPoints: ['../package/src/type.ts'],
          tsconfig: '../package/tsconfig.json',
          sidebar: {
            collapsed: true,
            label: 'Reference',
          },
          typeDoc: {
            disableSources: true,
          },
        }),
      ],
      title: 'My Awesome Package',
      description: 'Default description',
      lastUpdated: true,
      credits: true,
      social: {
        github: 'https://github.com/ArifRabbaniIn/astro-ui',
      },
      sidebar: [
        {
          label: 'Start Here',
          items: [{ label: 'Introduction', slug: 'introduction' }],
        },
        typeDocSidebarGroup,
      ],
    }),
  ],
});

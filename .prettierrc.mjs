/** @type {import("prettier").Config} */
export default {
  // Prettier options
  experimentalTernaries: true,
  experimentalOperatorPosition: 'end',
  printWidth: 80,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'es5',
  bracketSpacing: true,
  objectWrap: 'preserve',
  bracketSameLine: true,
  arrowParens: 'avoid',
  requirePragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'css',
  endOfLine: 'lf',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false,

  // Plugins
  plugins: ['prettier-plugin-astro'],

  overrides: [
    // prettier-plugin-astro overrides
    { files: '*.astro', options: { parser: 'astro' } },
  ],

  // prettier-plugin-astro config
  astroAllowShorthand: true,
};

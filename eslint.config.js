const globals = require('globals');
const pluginJs = require('@eslint/js');

export default [
  { languageOptions: { globals: globals.node } },
  pluginJs.configs.recommended,
];

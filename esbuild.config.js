const esbuild = require('esbuild');
const { execSync } = require('child_process');

const options = {
  entryPoints: ['zolt.js'],
  bundle: true,
  minify: true,
  sourcemap: false,
  target: ['esnext'],
  platform: 'node',
};

esbuild
  .build({
    ...options,
    outfile: 'dist/zolt.cjs.js',
    format: 'cjs',
  })
  .catch(() => process.exit(1));

esbuild
  .build({
    ...options,
    outfile: 'dist/zolt.mjs',
    format: 'esm',
  })
  .catch(() => process.exit(1));

execSync('tsc --declaration --emitDeclarationOnly --outDir dist');

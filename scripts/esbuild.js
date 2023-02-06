#!/usr/bin/env node
// Script to build CLI with esbuild.

const esbuild = require('esbuild');


const args = process.argv.slice(2);
const watch = args.includes('watch');
const options = {
  entryPoints: ['src/index.ts'],
  color: true,
  bundle: true,
  external: [
    'react',
    'react-reconciler',
    'canvas',
    'yoga-layout',
    'yoga-layout-prebuilt',
    '@remix-run/*',
    'fs',
  ],
  logLevel: 'info',
  target: 'es2015',
  minify: ! watch,
};

esbuild
  .build({
    ...options,
    outfile: 'dist/index.js',
    platform: 'neutral',
  })
  .catch(() => process.exit(1));

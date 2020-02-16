//import { createDefaultConfig } from '@open-wc/building-rollup';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

//export default createDefaultConfig({ input: './index.html' });
// import babel from 'rollup-plugin-babel'
// import minify from 'rollup-plugin-babel-minify'

import resolve from 'rollup-plugin-node-resolve'
module.exports = [

  {
    input: './components/wattle-app/wattle-app.js',
    output: {
      file: 'distr/wattle-app.js', // IIFE ONE FILE
      format: 'esm'
    },
    plugins: [resolve({})]
  }
]


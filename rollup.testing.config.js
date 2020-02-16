//import { createDefaultConfig } from '@open-wc/building-rollup';

// if you need to support IE11 use "modern-and-legacy-config" instead.
// import { createCompatibilityConfig } from '@open-wc/building-rollup';
// export default createCompatibilityConfig({ input: './index.html' });

//export default createDefaultConfig({ input: './index.html' });
// import babel from 'rollup-plugin-babel'
// import minify from 'rollup-plugin-babel-minify'

const { terser } = require('rollup-plugin-terser');

import resolve from 'rollup-plugin-node-resolve'
module.exports = [

  {
    input: './components/apps-script/apps-script.js',
    output: {
      file: '/tmp/built.js', // IIFE ONE FILE
      format: 'iife'
    },
    plugins: [resolve()]
  }
]

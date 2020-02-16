import { createDefaultConfig } from '@open-wc/building-rollup'

const config = createDefaultConfig({
  input: './components/apps-script/apps-script.js'
})

export default { ...config, output: {
    file: '/tmp/built.js', // IIFE ONE FILE
    format: 'iife'
  }
}

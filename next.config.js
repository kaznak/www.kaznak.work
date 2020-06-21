// reference: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
// const util = require('util')

const withMDX = require('@next/mdx')()

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config) => {
    // console.log(util.inspect(config, { showHidden: false, depth: null }))
    return config
  },
})

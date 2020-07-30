// reference: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
// const util = require('util')

const rehypePrism = require('@mapbox/rehype-prism')
const withMDX = require('@next/mdx')({
  options: {
    rehypePlugins: [rehypePrism],
  },
})

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config) => {
    // console.log(util.inspect(config, { showHidden: false, depth: null }))
    return config
  },
  exportTrailingSlash: true,
})

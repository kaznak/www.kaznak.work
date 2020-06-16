// reference: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
const util = require('util')

module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    // console.log(util.inspect(config, { showHidden: false, depth: null }))
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [defaultLoaders.babel, '@mdx-js/loader'],
    })
    return config
  },
}

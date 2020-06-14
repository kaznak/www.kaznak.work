// reference: https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config

module.exports = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  webpack: (config, { defaultLoaders }) => {
    config.module.rules.push({
      test: /\.mdx?$/,
      use: [defaultLoaders.babel, '@mdx-js/loader'],
    })
    return config
  },
}

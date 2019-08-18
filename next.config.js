const withSass = require('@zeit/next-sass')
const { PHASE_PRODUCTION_BUILD } = require('next-server/constants')

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    localIdentName: '[path]___[local]___[hash:base64:5]',
  },
  [PHASE_PRODUCTION_BUILD]: {
    cssLoaderOptions: {
      localIdentName: '[hash:base64:8]',
    },
  },
})

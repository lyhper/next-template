const withLess = require('@zeit/next-less') // next-less目前只支持webpack 4
module.exports = withLess({
  cssModules: true
})

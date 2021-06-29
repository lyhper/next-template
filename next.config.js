// eslint-disable-next-line @typescript-eslint/no-var-requires
const withLess = require('@zeit/next-less') // next-less目前只支持webpack 4
const isProd = process.env.NODE_ENV === 'production';

module.exports = withLess({
  cssModules: true, // css模块化
  assetPrefix: isProd ? '' : '', // 静态资源前缀
});

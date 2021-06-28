module.exports = {
  plugins: {
    // 移动端屏幕适配，px转vw
    'postcss-px-to-viewport': {
      viewportWidth: 750, // 设计稿的视口宽度
    }
  }
}
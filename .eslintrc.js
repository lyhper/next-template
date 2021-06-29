module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    node: true,
  },
  rules: {
    'prettier/prettier': 0, // 被prettier标记的地方不抛出错误信息
    'react-hooks/rules-of-hooks': 'error', // 检查hook规则
    'react-hooks/exhaustive-deps': 'warn', // 检查effect依赖
  }
};

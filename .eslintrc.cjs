module.exports = {
  root: true,
  parser: '@typescript-eslint/parser', // 使用 TypeScript 解析器
  extends: [
    'eslint:recommended', // 使用 ESLint 的推荐规则
    'plugin:@typescript-eslint/recommended', // 使用 @typescript-eslint 的推荐规则
    'plugin:prettier/recommended', // 启用 eslint-plugin-prettier 并显示 Prettier 错误作为 ESLint 错误。确保在最后一个配置。
  ],
  parserOptions: {
    ecmaVersion: 2020, // 支持最新的 ECMAScript 版本
    sourceType: 'module', // 允许使用 ES 模块
  },
  rules: {
    // 自定义规则
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 忽略以下划线开头的未使用变量
    'prettier/prettier': ['error', { endOfLine: 'auto' }], // 确保换行符符合系统默认设置
  },
  env: {
    browser: true, // 使其在浏览器环境中可用
    node: true, // 使其在 Node.js 环境中可用
    es6: true, // 支持 ES6 语法
  },
};

// @ts-check
const { defineConfig } = require('eslint-define-config');
module.exports = defineConfig({
  // 此项是用来告诉eslint找当前配置文件不能往父级查找
  root: true,
  //指定你想启用的环境
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  //设置解析器
  parser: 'vue-eslint-parser',
  //解析器选项
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  //扩展项
  extends: [
    'plugin:vue/vue3-recommended',
    "plugin:@typescript-eslint/recommended"
  ],
  //自定义规则配置
  rules: {},
});

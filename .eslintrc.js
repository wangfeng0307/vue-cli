// https://eslint.org/docs/user-guide/configuring

//CSDN 参考从零搭建前端开发环境-扩展篇
// $ npm i -D eslint-config-airbnb-base eslint@4.9.0 eslint-plugin-import@2.7.0 eslint-import-resolver-webpack
const path = require('path');

module.exports = {
  root: true,
  extends: 'airbnb-base',
  parserOptions: {
    // 想要使用的ECMAScript版本
    "ecmaVersion": 6,
    // 如果代码是ECMAScript
    "sourceType": "module",
    // 想使用的额外语言特性
    "ecmaFeatures": {
      "jsx": true
    },
    parser: 'babel-eslint'
  },
  env: {
    // 可配置多个环境 如 node, mocha等
    browser: true,
  },
  /*extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],*/
  // required to lint *.vue files
  plugins: [
    'vue',
    'html'
  ],
  'settings': {
    'import/resolver': {
      webpack: {
        config: path.resolve(__dirname, 'build/webpack.base.conf.js')
      }
    }
  },
  // add your custom rules here
  rules: {
    // allow async-await
    /*'import/no-unresolved': 0,
    -        //缩进
    -        'indent': ['error', 4],
    -        //结尾禁用逗号
    -        'comma-dangle': 0,
    -        //允许使用匿名函数
    -        'func-names': 0,
    -        //不启用强制的ES6对象简写法
    -        'object-shorthand': 0,
    -        //允许随意使用require,无需提前全局require
    -        'global-require': 0,
    -        //不强制对象属性名使用引号包裹
    -        'quote-props': 0,
    -        //允许使用console
    -        'no-console': 0,
    -        //可以使用未定义变量（import引入的会被认为未定义,所以开启）
    -        'no-undef': 0,
    -        //禁用代码块前必须保留空格
    -        'space-before-blocks': 0,
    -        //禁用键名后需要保留空格
    -        'key-spacing': 0,
    -        'no-alert': 0,
                 +    'global-require':  0,
 +    'no-param-reassign': ['error', { 'props': false }],
 +    'no-multi-assign': 0,
 +    'linebreak-style': 0,
 +    'indent': ["error", 4, { "SwitchCase": 1 }],
 +    'import/no-unresolved': 0,
 +    'no-restricted-syntax': 0,
 +    'no-plusplus': 0,
 +    'guard-for-in': 0,
     'no-param-reassign': ['error', { 'props': false }],
    'arrow-parens': ['error', 'as-needed'],
    'func-names': ['error', 'as-needed'],
    'semi': ['error', 'never'],
    'no-console': 0,
    'no-unused-expressions': 0,
    'prefer-promise-reject-errors': 0,
    'linebreak-style': ['error', 'windows'],
    'object-curly-newline': 0
    */
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    'generator-star-spacing': 'off',
    'semi': ['error', 'never'],//无分号
    'comma-dangle': 0,//无逗号
    'linebreak-style': ['error', 'windows'],//换行风格
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}

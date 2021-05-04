module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
   // '@vue/standard'
  ],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    // 'indent':'off',
    // // 关闭语句强制分号结尾
    // "semi": [0],
    // "quotes": [0] //使用双引号，关闭
  }
}

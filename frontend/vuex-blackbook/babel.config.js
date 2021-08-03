module.exports = {
  // https://github.com/vuejs/vue-cli/tree/master/packages/@vue/babel-preset-app
  presets: ['@babel/preset-env',
      [
        '@vue/cli-plugin-babel/preset',
        {
          useBuiltIns: 'entry'
        }
      ]
  ],
  env: {
    test: {
     // plugins: ["transform-require-context"]
    }
  }
}

'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: '"/api"',
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints: false
    },
  },
  mode: "development",
})

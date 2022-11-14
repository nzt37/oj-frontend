'use strict'
module.exports = {
  NODE_ENV: '"production"',
  API_ROOT: '"/api"',
  configureWebpack: {
    //关闭 webpack 的性能提示
    performance: {
      hints: false
    },
  },
  mode: "development",
}

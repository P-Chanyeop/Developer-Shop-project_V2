const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir:"../../src/main/resources/static",
  // devServer:{
  //   prot: 8081,
  //   proxy:  'http://localhost:8080',
  //   disableHostCheck: true
  // },
})

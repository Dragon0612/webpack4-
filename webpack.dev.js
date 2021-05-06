const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpack = require('webpack')
module.exports =merge(baseConfig,{
  mode: 'development', 
  plugins:[
    new webpack.DefinePlugin({
      IS_DEV:'true', // 注意：类似于eval函数 引号中当做表达式解析
    })
  ],
  devServer:{
      open:true,
      hot:true,
    //   compress:true,
      port:8090,
      // contentBase:'./src'
      proxy:{
        // /api/getUserInfo
        // 当请求 /api 地址时,会将请求转发到http://localhost:9999/api
        // 举例：客户端现在请求的是 api/getUserInfo
        // 此时会将请求转发到http://localhost:9999/api/getUserInfo
        '/api': {
          target:'http://localhost:9999',
          // 转发请求时不会携带 /api
          pathRewrite: {
            '^/api':''
          }
        }
      }
  },
  devtool:'cheap-module-eval-source-map',
})



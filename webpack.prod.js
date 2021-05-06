const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
module.exports = merge(baseConfig,{
  mode: 'production', // 默认为production, 可以手动设置为 development, 区别就是是否进行压缩混淆
  optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
  },
  plugins:[
    new webpack.DefinePlugin({
      IS_DEV:'false', // 注意：类似于eval函数 引号中当做表达式解析
    })
  ],
})
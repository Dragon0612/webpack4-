const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins:[
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'./src/index.html'
    }),
    // 插件是一个构造函数 只需new一个
    new CleanWebpackPlugin(),
    new CopyWebpackPugin([
      {
        from: path.join(__dirname, 'assets'),
        to: 'assets'
      }
    ]),
    new webpack.BannerPlugin('webpack真是太容易了'),
    new MiniCssExtractPlugin({
      // placeholders
      filename: '[name].css'
    })
  ],
  module:{
    rules:[
      {
        test:/\.css$/,
        // use:['style-loader','css-loader'] 
        use:[MiniCssExtractPlugin.loader,'css-loader','postcss-loader'] 
      },
      // { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.less$/, use: [MiniCssExtractPlugin.loader, 'css-loader','postcss-loader','less-loader'] },
      // { test: /\.s(a|c)ss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
      { test: /\.s(a|c)ss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','sass-loader'] },
      { test: /\.(jpg|jpeg|png|bmp|gif)$/, 
        use: {
          loader:'url-loader',
          options:{
            limit: 4*1024,
            outputPath: 'images',
            name: '[name]-[hash:4].[ext]'
          }
        }
      },
      { test: /\.(woff|woff2|eot|svg|ttf)$/, use: 'url-loader' },
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: ['@babel/env'],
          //   plugins: ['@babel/plugin-proposal-class-properties']
          // }
        },
        exclude: /node_modules/
      },
      {
        test: /\.(htm|html)$/i,
        loader: 'html-withimg-loader',
      }
    ]
  }
}
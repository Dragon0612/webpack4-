const express = require('express');
const webpack = require('webpack');
// 引入中间件
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');

const app = express();
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
  publicPath: '/'   //将编译的代码放在根目录
}));

app.listen(3000, function () {
  console.log('http://localhost:3000');
});
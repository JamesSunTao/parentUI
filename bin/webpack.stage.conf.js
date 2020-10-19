'use strict'
const path = require('path')
const portfinder = require('portfinder')
const webpack = require('webpack')
const merge = require('webpack-merge')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const packageConfig = require('../package.json')

const HOST = process.env.HOST
const PORT = process.env.PORT && Number(process.env.PORT)

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './examples/index.js'
  },
  output: {
    path: path.join(__dirname, '../output'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'eval-cheap-module-source-map',

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'examples/index.html',
      inject: true
    })
  ]
})

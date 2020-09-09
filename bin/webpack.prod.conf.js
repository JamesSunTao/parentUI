'use strict'
const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const glob = require('globby')
const baseWebpackConfig = require('./webpack.base.conf')

function getEntry(globPath) {
  const entries = {}
  glob.sync(globPath).forEach(entry => {
    let pathname = path.dirname(entry).split('/').slice(2).join('/')
    entries[pathname] = entry
  })
  return entries
}

const webpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  context: path.resolve(__dirname, '../'),
  entry: {
    index: './src/index.js',
    ...getEntry('./src/components/**/index.js')
  },
  output: {
    path: path.join(__dirname, '../lib'),
    publicPath: '/static/',
    filename: '[name].js',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
})

module.exports = webpackConfig

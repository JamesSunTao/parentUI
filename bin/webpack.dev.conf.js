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

function createNotifierCallback () {
  const notifier = require('node-notifier')

  return (severity, errors) => {
    if (severity !== 'error') return

    const error = errors[0]
    const filename = error.file && error.file.split('!').pop()

    notifier.notify({
      title: packageConfig.name,
      message: severity + ': ' + error.name,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png')
    })
  }
}

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './examples/index.js'
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  devtool: 'eval-cheap-module-source-map',

  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join('examples', 'index.html') },
      ],
    },
    hot: true,
    contentBase: false,
    compress: true,
    host: HOST || 'localhost',
    port: PORT || 8080,
    open: false,
    overlay: { warnings: false, errors: true },
    publicPath: '/',
    proxy: {},
    quiet: true,
    watchOptions: {
      poll: false,
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'examples/index.html',
      inject: true
    })
  ]
})

module.exports = new Promise((resolve, reject) => {
  portfinder.basePort = process.env.PORT || 8080
  portfinder.getPort((err, port) => {
    if (err) {
      reject(err)
    } else {
      process.env.PORT = port
      devWebpackConfig.devServer.port = port

      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: createNotifierCallback()
      }))

      resolve(devWebpackConfig)
    }
  })
})

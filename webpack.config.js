var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  entry: {
    // https://github.com/webpack/webpack/issues/300
    vendor: ['jquery'],
    app: './lib/app/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    publicPath: 'build/',
    filename: '[name].js',
    chunkFilename: '[id].chunk.js'
  },
  resolve: {
    alias: {
      jquery: path.join(__dirname, 'vendor/jquery-2.1.1.js')
    }
  },
  module: {
    loaders: [
      { test: /\.scss$/, loader: 'style!css!sass?outputStyle=expanded' },
      { test: /\.html$/, loader: 'mustache' }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.CommonsChunkPlugin('common.js')
  ]
};

var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  cache: true,
  entry: {
    vendor: ['jquery'], // https://github.com/webpack/webpack/issues/300
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
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader?outputStyle=expanded')
      },
      {
        test: /\.html$/,
        loader: 'mustache'
      },
      {
        test: /\.(png|jpe?g)$/,
        loader: 'url-loader?limit=8192' // inline base64 URLs for <=8k images, direct URLs for the rest
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new ExtractTextPlugin('[name].css')
  ]
};
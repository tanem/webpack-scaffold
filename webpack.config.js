var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

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
        // Inline base64 URLs for <=8k images, direct URLs for the rest.
        loader: 'url-loader?limit=8192'
      }
    ]
  },
  plugins: [
    // Remove all modules in the vendor chunk from the app chunk.
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js'),
    new webpack.optimize.CommonsChunkPlugin('common.js'),
    new ExtractTextPlugin('[name].css')
  ]
};
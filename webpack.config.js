var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: './lib/app/index.js',
  output: {
    filename: './build/bundle.js'
  },
  resolve: {
    alias: {
      jquery: path.join(__dirname, 'vendor/jquery-2.1.1.js')
    }
  }
};
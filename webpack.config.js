var webpack = require('webpack');

module.exports = {
  entry: './lib/app/index.js',
  output: {
    filename: './build/bundle.js'
  }//,
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin()
  // ],
  // devtool: '#source-map'
};

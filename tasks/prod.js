var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');
var baseWebpackConfig = require('../webpack.config.js');

var prodWebpackConfig = Object.create(baseWebpackConfig);

prodWebpackConfig.devtool = 'source-map';
prodWebpackConfig.plugins = prodWebpackConfig.plugins.concat(
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.UglifyJsPlugin()
);

var prodCompiler = webpack(prodWebpackConfig);

gulp.task('build-prod', ['clean', 'webpack:build-prod']);

gulp.task('webpack:build-prod', function(done){
  prodCompiler.run(function(err, stats){
    if (err) throw new gutil.PluginError('build-prod', err);
    gutil.log('[build-prod]', stats.toString({
      colors: true
    }));
    done();
  });
});
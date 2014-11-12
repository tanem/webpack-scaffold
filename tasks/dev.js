var gulp = require('gulp');
var webpack = require('webpack');
var gutil = require('gulp-util');
var WebpackDevServer = require('webpack-dev-server');
var baseWebpackConfig = require('../webpack.config.js');

var devWebpackConfig = Object.create(baseWebpackConfig);

devWebpackConfig.devtool = 'source-map';
devWebpackConfig.debug = true;

var devCompiler = webpack(devWebpackConfig);

// Build and watch cycle.
// Advantage: No server required, can run app from filesystem.
// Disadvantage: Requests are not blocked until bundle is available,
// can serve an old app on refresh.
gulp.task('build-dev', ['clean-build', 'webpack:build-dev'], function(){
  gulp.watch(['lib/**/*'], ['webpack:build-dev']);
});

gulp.task('webpack:build-dev', function(done){
  devCompiler.run(function(err, stats){
    if (err) throw new gutil.PluginError('webpack:build-dev', err);
    gutil.log('[webpack:build-dev]', stats.toString({
      colors: true
    }));
    done();
  });
});

// Auto-reload of page when assets change,
// Builds in memory so is usually faster than `build-dev`.
gulp.task('webpack:dev-server', function(done){
  return new WebpackDevServer(devCompiler, {
    publicPath: '/' + devWebpackConfig.output.publicPath,
    stats: {
      colors: true
    }
  }).listen(8080, 'localhost', function(err){
    if (err) throw new gutil.PluginError('webpack:dev-server', err);
    gutil.log('[webpack-dev-server]', 'http://localhost:8080/webpack-dev-server/index.html');
    done();
  });
});
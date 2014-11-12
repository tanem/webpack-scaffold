var gulp = require('gulp');
var rimraf = require('rimraf');
var requireDir = require('require-dir');

gulp.task('clean', function(done){
  rimraf('./build', done);
});

requireDir('./tasks');

gulp.task('default', ['webpack:dev-server']);
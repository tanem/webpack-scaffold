var gulp = require('gulp');
var clean = require('gulp-clean');
var requireDir = require('require-dir');

gulp.task('clean-build', function(){
  return gulp.src('build/', { read: false })
    .pipe(clean());
});

requireDir('./tasks');

gulp.task('default', ['webpack:dev-server']);
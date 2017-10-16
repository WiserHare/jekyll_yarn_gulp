var gulp = require('gulp');
var npmDist = require('gulp-npm-dist');

gulp.task('default', function() {
  // place code for your default task here
});

// Copy dependencies to ./public/libs/
gulp.task('copy:libs', function() {
  gulp.src(npmDist(), {
      base: './node_modules'
    })
    .pipe(gulp.dest('./public/libs'));
});

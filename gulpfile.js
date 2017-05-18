const gulp = require('gulp'),
      del = require('del'),
      uglify = require('gulp-uglify'),
      rename = require('gulp-rename'),
      options = {
        src:'src/nocopy.js',
        buildPath: 'dist'
      };

gulp.task('clean', () => {
  return del([
    'dist/**/*'
  ]);

});


gulp.task('build js', () => {
  gulp.src('src/nocopy.js')
  // .pipe(gulp.dest(options.buildPath))
  .pipe(uglify({
    compress:{
      // pure_funcs: ['console.log']
      drop_console:true
    }
  }))
  .pipe(rename({ extname: '.min.js'}))
  .pipe(gulp.dest(options.buildPath));

});

gulp.task('default', ['clean'], () => {
  gulp.start('build js');
  console.log('hello');
});

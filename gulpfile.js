var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
gulp.task('scripts', function(){
  gulp.src(['src/scripts/main.js'])
  .pipe(sourcemaps.init())
  .pipe(uglify())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/scripts'))
  .pipe(browserSync.stream())
})


gulp.task('styles', function(){
  gulp.src(['src/styles/**/*.css'])
  .pipe(sourcemaps.init())
  .pipe(minifyCss())
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('dist/styles'))
  .pipe(browserSync.stream());
});
gulp.task('default',function(){
  browserSync.init({
    server: './'
  });
  //gulp.watch('src/**/*', browserSync.reload);
  gulp.watch('src/styles/**/*.css', ['styles']);
  gulp.watch('*.html', browserSync.reload);
});

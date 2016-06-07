'use strict';

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

const sassOptions = {
  errLogToConsole: true,
  outputStyle: 'compressed'
};

gulp.task('styles', function () {
  return gulp.src('sass/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(''));
});


gulp.task('default', ['styles', 'watch']);
gulp.task('watch', function(){
  gulp.watch('sass/**/*.scss', ['styles']);
});

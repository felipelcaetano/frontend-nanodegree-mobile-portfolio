'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('sass', sassTask);

function sassTask() {
  return gulp.src('./sass/**/*scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
}

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('default', () =>
    gulp.src('img/*')
        .pipe(imagemin())
        .pipe(gulp.dest('img/compress'))
);
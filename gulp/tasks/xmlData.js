'use strict';

var config       = require('../config');
var gulp         = require('gulp');

gulp.task('xmlData', function () {
  gulp.src([
    'app/xmlData/**/*',
  ]).pipe(gulp.dest('build/xmlData/'));
});
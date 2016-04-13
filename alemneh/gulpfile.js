'use strict';
const gulp = require('gulp');
const mocha = require('gulp-mocha');
const eslint = require('gulp-eslint');
const webpack = require('gulp-webpack');

var files = ['gulpfile.js', 'server.js', __dirname + '/lib/**/*.js', __dirname + '/test/**/*.js',
            __dirname + '/models/**/*.js', __dirname + '/routes/**/*.js'];

//Run mocha for tests
gulp.task('mocha', function() {
  return gulp.src(__dirname +'/test/rest_test.js', {read: false})
             .pipe(mocha( {reporter: 'nyan'}));
});

//Run eslint linter tool
gulp.task('lint', function() {
  return gulp.src(files)
    .pipe(eslint({//Commented out the .eslintrc file and added option to lint task
      'rules': {
        'no-console': 0,
        'indent': [
          2,
          2
        ],
        'quotes': [
          2,
          'single'
        ],
        'linebreak-style': [
          2,
          'unix'
        ],
        'semi': [
          2,
          'always'
        ]
      },
      'env': {
        'es6': true,
        'node': true,
        'browser': true
      },
      'globals': {
        'describe': false,
        'it': false,
        'beforeEach': false,
        'afterEach': false,
        'before': false,
        'after': false
      },
      'ecmaFeatures': {
        'modules': true,
        'experimentalObjectRestSpread': true
      },
      'extends': 'eslint:recommended'
    }))
    .pipe(eslint.format());
});


gulp.task('webpack', function() {
  return gulp.src(__dirname + '/index.js')
    .pipe(webpack( require('./webpack.config.js')))
    .pipe(gulp.dest(__dirname + '/build'));
});

gulp.task('watch', function() {
  gulp.watch('./index.js', ['webpack']);
})

//Run tasks on changes to files
gulp.task('default',['mocha', 'lint']);

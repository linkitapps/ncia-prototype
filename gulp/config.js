'use strict';

module.exports = {

  'serverport': 3000,

  'styles': {
    'src' : 'app/styles/**/*.scss',
    'dest': 'build/css'
  },

  'scripts': {
    'src' : 'app/js/**/*.js',
    'dest': 'build/js'
  },

  'images': {
    'src' : 'app/images/**/*',
    'dest': 'build/images'
  },

  'xmlData': {
    'src' : 'app/xmlData/**/*',
    'dest': 'build/xmlData'
  },

  'fonts': {
    'src' : ['app/fonts/**/*'],
    'dest': 'build/fonts'
  },

  'views': {
    'watch': [
      'app/index.html'
    ],
    'src': 'app/views/**/*.html'
  },

  'gzip': {
    'src': 'build/**/*.{html,xml,json,css,js,js.map}',
    'dest': 'build/',
    'options': {}
  },

  'dist': {
    'root'  : 'build'
  },

  'browserify': {
    'entries'   : ['./app/js/main.js'],
    'bundleName': 'main.js',
    'sourcemap' : true
  },

  'test': {
    'karma': 'test/karma.conf.js',
    'protractor': 'test/protractor.conf.js'
  }

};

const webpackConfig = require('./webpack.config.js');

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'js/**/*.js'],
      options: {
        esversion: 6,
        globals: {
          jQuery: true
        }
      }
    },
    sass: {
   dist: {
     files: {
       'main.css': 'main.scss'
     }
   }
 },
    watch: {
      files: ['<%= jshint.files %>'],
      css: {
    files: ['**/*.sass','**/*.css'],
    tasks: ['sass'],
    options: {
      livereload: true,
    },
  },
      tasks: ['jshint']
    },
    webpack: {
     options: {
       stats: !process.env.NODE_ENV || process.env.NODE_ENV === 'development'
     },
     prod: webpackConfig,
     dev: Object.assign({ watch: true }, webpackConfig)
   }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.loadNpmTasks('grunt-webpack');

  grunt.registerTask('default', ['watch']);

};

module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    cancompile: {
      dist: {
        src: ['assets/views/**/*.mustache'],
        out: 'public/production/views.production.js',
        wrapper: 'define(["can/view/mustache"], function(can) { {{{content}}} });'
      }
    },
    concat: {
      dist: {
        src: [
          'assets/js/lib/require/require.js',
          'assets/js/lib/jquery/jquery.js',
          'assets/js/lib/array/lib/util.js',
          'assets/js/lib/moment/moment.js',
          'assets/js/lib/canjs/dist/amd/**/*.js',
          'assets/js/controllers/*.js',
          'assets/js/models/*.js',
          'assets/js/app.js', // You app
          '<%= cancompile.dist.out %>' // The compiled views
        ],
        dest: 'public/production/production.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'public/production/production.min.js': ['<%= concat.dist.dest %>']
        }
      }
    }
  });

  // Default task.
  grunt.registerTask('default', ['cancompile', 'concat','uglify']);

  grunt.loadNpmTasks('can-compile');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
};
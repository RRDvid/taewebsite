module.exports = function(grunt) {
  const sass = require('node-sass');
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      // Compiles sass files
      sass: {
          options: {
            implementation: sass,
            sourceMap: true,
          },
          dev: {
            files: {
              'stylesheets/css/style.css' : 'stylesheets/sass/style.scss',
            },
          },
      },

      // Autoprefixes css file based on caniuse database
      postcss: {
          options: {
            map: true,
            processors: [
                require('autoprefixer')({browsers: 'last 3 versions'})
            ],
          },
          dev: {
            src: 'stylesheets/css/style.css',
          },
      },

      // Assign FTP credentials
      // secret: grunt.file.readJSON('.vscode/sftp.json'),

      // Use FTP credentials to upload
      sftp: {

        // All
        server_upload: {
          files: {
            "./": ["stylesheets/**", "js/modules/**", "js/general-built.js"]
          },
          options: {
            path: '<%= secret.remotePath %>',
            host: '<%= secret.host %>',
            username: '<%= secret.username %>',
            password: '<%= secret.password %>',
            port: '<%= secret.port %>',
            showProgress: true
          }
        },

        // Compiled only
        files_upload: {
          files: {
            "./": ["stylesheets/css/s**", "js/general-built.js"]
          },
          options: {
            path: '<%= secret.remotePath %>',
            host: '<%= secret.host %>',
            username: '<%= secret.username %>',
            password: '<%= secret.password %>',
            port: '<%= secret.port %>',
            showProgress: true
          }
        }
      },

      // watches files and runs tasks when files change
      watch: {
        css: {
          files: ['stylesheets/sass/**/*.scss', 'js/modules/*.js' ],
          // tasks: ['sass:dev', 'postcss:dev',  'concat' , 'sftp:files_upload'], //live
          tasks: ['sass:dev', 'postcss:dev',  'concat'], //save only
          options: {
              livereload: true,
          },
        },
      },

      concat: {
        options: {
          banner: '/* DAW General JQuery \n' +
          '-------------------------------------------------------------------*/\n'+
          '//For JSHint\n' +
          '/*global jQuery,Modernizr */\n' +
          '/*jslint latedef:false*/\n'+
          '/*jslint node:true */\n' +
          '/*jslint browser:true */\n' +
          '(function($) {\n' +
          '"use strict";\n',
          footer: '\n\n}(jQuery));',
          separator: ';\n\n',
        },
        dist: {
          src: ['js/modules/general.js', 'js/modules/tech-detection.js'],
          dest: 'js/general-built.js',
        },
      },
  });

  // Load the plugins
  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-ssh');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-notify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Register task(s) for Live
  // grunt.registerTask('default', ['sass:dev', 'postcss:dev','concat','sftp:server_upload']);
  // grunt.registerTask('autoprefix', ['postcss:dev']);
  // grunt.registerTask('compile', ['sass:dev']);
  // grunt.registerTask('concatTask',['concat']);
  // grunt.registerTask('upload', ['sftp:server_upload']);

  // Register task(s) for Save only
  grunt.registerTask('default', ['sass:dev', 'postcss:dev','concat']);
  grunt.registerTask('autoprefix', ['postcss:dev']);
  grunt.registerTask('compile', ['sass:dev']);
  grunt.registerTask('concatTask',['concat']);
};

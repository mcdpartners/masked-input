module.exports = function(grunt) {
  'use strict';

  var banner = '/*!\n' +
    ' * jQuery Masked Input Plugin v<%= pkg.version %>\n' +
    ' *\n' +
    ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.company %>\n' +
    ' * Released under the <%= _.pluck(pkg.licenses, "type").join(", ") %> license\n' +
    ' */\n';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      // Used to copy to dist folder
      dist: {
        options: {
          banner: banner
        },
        files: {
          'dist/jquery.masked-input.js': [
            'src/*.js'
          ]
        }
      }
    },
    uglify: {
      options: {
        preserveComments: false,
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
          '<%= grunt.template.today("m/d/yyyy") %>\n' +
          ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.company %>;' +
          ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
      },
      dist: {
        files: {
          'dist/jquery.masked-input.min.js': 'dist/jquery.masked-input.js'
        }
      }
    },
    jshint: {
      options: {
        jshintrc: true
      },
      core: {
        src: 'src/**/*.js'
      },
      grunt: {
        src: 'Gruntfile.js'
      },
      test: {
        src: 'test/**/*.js'
      }
    },
    watch: {
      options: {
        atBegin: true
      },
      src: {
        files: '<%= jshint.core.src %>',
        tasks: [
          'concat'
        ]
      }
    },
    jscs: {
      options: {
        config: '.jscsrc'
      },
      all: [
        '<%= jshint.core.src %>',
        '<%= jshint.grunt.src %>',
        '<%= jshint.test.src %>'
      ]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js'
      }
    },
    casperjs: {
      options: {
        verbose: true,
        logLevel: 'debug',
        async: {
          parallel: false
        }
      },
      files: ['test/e2e/**/*.js']
    },
    version: {
      options: {
        prefix: '\\.VERSION\\s*=\\s*[\']'
      },
      defaults: {
        src: [
          'src/masked-input.js'
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-casperjs');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-text-replace');
  grunt.loadNpmTasks('grunt-version');

  // grunt.registerTask('test', ['casperjs', 'karma']);
  grunt.registerTask('default', ['concat', 'jscs', 'jshint']);
  grunt.registerTask('release', ['version', 'default', 'uglify']);
  grunt.registerTask('start', ['concat', 'watch']);
};

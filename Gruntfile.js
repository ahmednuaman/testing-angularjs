module.exports = function(grunt) {
  grunt.initConfig({
    compass: {
      dev: {
        options: {
          sassDir: 'assets/css',
          cssDir: '<%= compass.dev.options.sassDir %>',
          outputStyle: 'nested',
          noLineComments: false,
          imagesDir: 'assets/img',
          relativeAssets: true
        }
      },
      prod: {
        options: {
          sassDir: '<%= compass.dev.options.sassDir %>',
          cssDir: '<%= compass.dev.options.sassDir %>',
          environment: 'production',
          outputStyle: 'compressed',
          imagesDir: '<%= compass.dev.options.imagesDir %>',
          relativeAssets: false
        }
      }
    },
    connect: {
      dev: {
        options: {
          port: 8000,
          base: '.'
        }
      }
    },
    copy: {
      prod: {
        files: [
          {
            src: [
              'index.html',
              'assets/js/partial/*.html',
              'assets/img/*.png',
              'assets/img/*.gif'
            ],
            dest: 'build/'
          }, {
            src: ['<%= compass.dev.options.sassDir %>/styles.css'],
            dest: 'build/assets/css/styles-<%= global["git-commit"] %>.css'
          }
        ]
      }
    },
    karma: {
      unit: {
        configFile: 'test/unit/karma.conf.js',
        singleRun: true
      },
      e2e: {
        configFile: 'test/e2e/karma.conf.js',
        singleRun: true
      }
    },
    'regex-replace': {
      prod: {
        src: ['build/index.html'],
        actions: [
          {
            name: 'js',
            search: 'src=\"assets\/vendor\/requirejs\/require\.js\" data-main=\"assets\/js\/app\"',
            replace: 'src="assets/js/app-<%= global["git-commit"] %>.js"'
          }, {
            name: 'css',
            search: 'assets/css/styles.css',
            replace: 'assets/css/styles-<%= global["git-commit"] %>.css'
          }
        ]
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: 'assets/js',
          name: 'app',
          out: 'build/assets/js/app-<%= global["git-commit"] %>.js',
          optimize: 'none',
          deps: [
            '../vendor/almond/almond',
            '../vendor/angular/angular'
          ],
          include: ['routes'],
          insertRequire: ['app'],
          paths: {
            angular: '../vendor/angular/angular'
          },
          shim: {
            angular: {
              exports: 'angular'
            }
          }
        }
      }
    },
    watch: {
      compass: {
        files: [
          '<%= compass.dev.options.sassDir %>/**/*.scss',
          '<%= compass.dev.options.imagesDir %>/**/*.png'
        ],
        tasks: ['compass:dev']
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-karma');
  grunt.loadNpmTasks('grunt-regex-replace');

  grunt.registerTask('default', 'compile the app and run the tests', [
    'compass:dev',
    'connect',
    'karma'
  ]);

  grunt.registerTask('install', 'install bower dependancies', function() {
    var done = this.async();
    var child = grunt.util.spawn({ cmd: 'bower', args: ['install'] }, function(err, result) {
      done();
    });

    child.stdout.on('data', function(data) {
      grunt.log.write(data);
    });
  });

  grunt.registerTask('package', 'package the app', function() {
    var done = this.async();
    var config = {
      cmd: 'git',
      args: ['rev-parse', '--verify', 'HEAD']
    };

    grunt.util.spawn(config, function(err, result) {
      global['git-commit'] = result.stdout;

      grunt.file["delete"]('./build', {
        force: true
      });

      grunt.task.run([
        'karma',
        'requirejs',
        'compass:prod',
        'copy:prod',
        'regex-replace'
      ]);

      done();
    });
  });
};
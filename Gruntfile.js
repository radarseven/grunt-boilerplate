'use strict';
module.exports = function(grunt) {

	// Load Grunt Tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// Watch JS and SCSS
		watch: {
			js: {
				files: ['assets/js/**/*.js','!assets/js/min/**/*.js'],
				tasks: ['jshint', 'uglify:main']
			},
			scss: {
				files: 'assets/css/scss/**/*.scss',
				tasks: ['sass:dev']
			}
		},

		// Compile Sass
		sass: {
			dist: {
				options: {
					style: 'compressed',
				},
				files: {
					'assets/css/main.css': 'assets/css/scss/main.scss', // destination : source
				}
			},
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'assets/css/main.css': 'assets/css/scss/main.scss', // destination : source
				}
			}
		},

		// Lint Javascript
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				"force": true,
				ignores: [
					'assets/js/min/**/*.js',
					'assets/js/map/**/*.js',
					'assets/js/vendor/**/*.js'
				]
			},
			all: [
				'Gruntfile.js',
				'assets/js/**/*.js'
			]
		},

		// Concatenate and Minify
		uglify: {
			main: {
				files: {
					'assets/js/min/main.min.js': [
						'assets/js/main.js'
					]
				}
			}
		},

		// Image Optimization
		imagemin: {
			dist: {
				options: {
					optimizationLevel: 8,
					progressive: true
				},
				files: [{
					expand: true,
					cwd: 'assets/img/',
					src: '**/*',
					dest: 'assets/img/min'
				}]
			}
		}

	});

	// Register Tasks
	grunt.registerTask('default', ['watch']);
	grunt.registerTask('build', [ 'sass:dist', 'uglify:main' ]);

};

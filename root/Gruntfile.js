'use strict';
module.exports = function(grunt) {

	// Load Grunt Tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// Watch JS and SCSS
		watch: {
			js: {
				files: ['{% assetspath %}/js/**/*.js','!assets/js/min/**/*.js'],
				tasks: ['jshint', 'uglify:main']
			},
			scss: {
				files: '{% scsspath %}/**/*.scss',
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
					'{% csspath %}/main.css': '{% csspath %}/scss/main.scss', // destination : source
				}
			},
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'{% csspath %}/main.css': '{% csspath %}/scss/main.scss', // destination : source
				}
			}
		},

		// Lint Javascript
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				"force": true,
				ignores: [
					'{% jspath %}/min/**/*.js',
					'{% jspath %}/map/**/*.js',
					'{% jspath %}/vendor/**/*.js'
				]
			},
			all: [
				'Gruntfile.js',
				'{% jspath %}/**/*.js'
			]
		},

		// Concatenate and Minify
		uglify: {
			main: {
				files: {
					'{% jspath %}/min/main.min.js': [
						'{% jspath %}/main.js'
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

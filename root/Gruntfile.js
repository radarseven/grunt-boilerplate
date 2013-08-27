'use strict';
module.exports = function(grunt) {

	// Load Grunt Tasks
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	grunt.initConfig({

		// Watch JS and SCSS
		watch: {
			js: {
				files: ['{%= js_path %}/**/*.js','!assets/js/min/**/*.js'],
				tasks: ['jshint', 'uglify:main']
			},
			scss: {
				files: '{%= scss_path %}/**/*.scss',
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
					'{%= pkg.css_path %}/main.css': '{%= pkg.css_path %}/scss/main.scss', // destination : source
				}
			},
			dev: {
				options: {
					style: 'expanded'
				},
				files: {
					'{%= pkg.css_path %}/main.css': '{%= pkg.css_path %}/scss/main.scss', // destination : source
				}
			}
		},

		// Lint Javascript
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				"force": true,
				ignores: [
					'{%= pkg.js_path %}/min/**/*.js',
					'{%= pkg.js_path %}/map/**/*.js',
					'{%= pkg.js_path %}/vendor/**/*.js'
				]
			},
			all: [
				'Gruntfile.js',
				'{%= pkg.js_path %}/**/*.js'
			]
		},

		// Concatenate and Minify
		uglify: {
			main: {
				files: {
					'{%= pkg.js_path %}/min/main.min.js': [
						'{%= pkg.js_path %}/main.js'
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

module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: ['Gruntfile.js', 'front_end/*/*.js', 'front_end/*/*/*.js']
		},
		html2js: {
			dist: {
				src: [ 'front_end/html_files/*.html', '*.html'],
				dest: 'tmp/html-bundle.js'
			}
		},
		concat: {
			options: {
				separator: ';'
			},
			dist: {
				src: [ 'node_modules/angular/angular.min.js', 'front_end/js_files/core.js', 'front_end/js_files/models/*.js',
				'front_end/js_files/services/*.js', 'front_end/js_files/controllers/*.js', 'front_end/js_files/directives/*.js', 'tmp/*.js' ],
				dest: 'dist/main-bundle.js'
			}
		},
		concat_css: {
			options: {},
			dist: {
				src: [ "node_modules/bootstrap/dist/css/bootstrap.min.css", "node_modules/bootstrap/dist/css/bootstrap-theme.min.css", "front_end/css_files/*.css" ],
				dest: "dist/main-bundle-css.css"
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/main-bundle.js': [ 'dist/main-bundle.js' ]
				},
				options: {
					mangle: false
				}
			}
		},
		clean: {
			temp: {
				src: [ 'tmp' ]
			}
		},
		watch: {
			dev: {
				files: [ 'Gruntfile.js', 'front_end/js_files/core.js', 'front_end/js_files/models/*.js',
				'front_end/js_files/services/*.js', 'front_end/js_files/controllers/*.js', 'front_end/js_files/directives/*.js', 'front_end/css_files/*.css', 
				'front_end/html_files/*.html', '*.html' ],
				tasks: [ 'jshint', 'html2js:dist', 'concat_css', 'concat:dist', 'clean:temp' ],
				options: {
					atBegin: true
				}
			},
			min: {
				files: [ 'Gruntfile.js', 'front_end/js_files/core.js', 'front_end/js_files/models/*.js',
				'front_end/js_files/services/*.js', 'front_end/js_files/controllers/*.js', 'front_end/js_files/directives/*.js', 'front_end/css_files/*.css',
				'front_end/html_files/*.html', '*.html' ],
				tasks: [ 'jshint', 'html2js:dist', 'concat_css', 'concat:dist', 'clean:temp', 'uglify:dist' ],
				options: {
					atBegin: true
				}
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-html2js');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-concat-css');
	
	grunt.registerTask('dev', ['watch:dev']);
	grunt.registerTask('minified', [ 'watch:min']);
	grunt.registerTask('deploy', [ 'jshint', 'html2js:dist', 'concat_css', 'concat:dist', 'clean:temp', 'uglify:dist' ]);
};

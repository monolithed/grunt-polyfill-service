'use strict';

module.exports = function (grunt) {
	grunt.initConfig({
		'polyfill-service': {
			production: {
				options: {
					uaString: 'MSIE 7.0',
					features: {
						'Math.acosh': {
							flags: ['always', 'gated']
						}
					},
					minify: true,
				},

				dest: 'tests/fixtures.js'
			}
		},

		nodeunit: {
			tasks: ['tests/test.js']
		},

		clean: {
			test: ['tests/tmp/**']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-nodeunit');

	grunt.registerTask('default', []);
	grunt.registerTask('test', ['polyfill-service', 'nodeunit', 'clean']);
};

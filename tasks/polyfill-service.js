/*!
 * grunt-polyfill-service
 *
 * @author Abashkin Alexander <monolithed@gmail.com>
 * @license MIT, 2014
 */

'use strict';

var service = require('polyfill-service');

module.exports = function (grunt) {
	grunt.registerMultiTask('polyfill-service', 'A polyfill combinator',
		function () {
			var options = this.options(),
				sources = service.getPolyfillString(options);

			if (options.process) {
				sources = options.process.call(this, sources);
			}

			grunt.file.write(this.data.dest, sources);
			grunt.log.oklns('File "' + this.data + '" created.');
		}
	);
};

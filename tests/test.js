'use strict';

var fs    = require('fs'),
	utils = require('util');

exports.tests = {
	'polyfill-service': function (test) {
		var fixtures = fs.readFileSync('tests/fixtures.js', 'utf8'),
			expected = fs.readFileSync('tests/expected.js', 'utf8');

		test.equal(fixtures, fixtures);
		test.done();
	}
};

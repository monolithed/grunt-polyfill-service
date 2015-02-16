# grunt-polyfill-service

[![npm version badge](https://img.shields.io/npm/v/grunt-polyfill-service.svg)](https://www.npmjs.org/package/grunt-polyfill-service)

[![Build Status](https://travis-ci.org/monolithed/grunt-polyfill-service.png)](https://travis-ci.org/monolithed/grunt-polyfill-service)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

[![NPM](https://nodei.co/npm/grunt-polyfill-service.png?downloads=true)](https://nodei.co/npm/grunt-polyfill-service/)


> A polyfill combinator

See more info about the [polyfill-service](https://www.npmjs.com/package/polyfill-service)

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-polyfill-service --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-polyfill-service');
```

## polyfill-service task
_Run this task with the `grunt grunt-polyfill-service` command._

Task targets, files and options may be specified according to the grunt [Configuring tasks](http://gruntjs.com/configuring-tasks) guide.

### Options

#### process
Type: `Function(sources)`

This option as an advanced way to control the file contents that are created.

```
....

options: {
	process: function (content) {
		return content;
	}
}

....
```


### Usage Example

```js
module.exports = function (grunt) {
	grunt.config.init({
		'polyfill-service': {
			production: {
				options: {
					uaString: 'MSIE 7.0',

					features: {
						'Math.acosh': {
							flags: ['always', 'gated']
						}
					}
				},

				dest: 'polyfills.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-polyfill-service');
	grunt.registerTask('default', ['polyfill-service']);
};

```


### Tests

```
grunt test
```

### Links

[polyfill-service](https://www.npmjs.com/package/polyfill-service) <br />

Task submitted by [Alexander Abashkin](https://github.com/monolithed)

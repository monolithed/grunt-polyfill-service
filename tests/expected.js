/* For detailed credits and licence information see http://github.com/financial-times/polyfill-service.
 *
 * UA detected: ie/7.0.0
 * Features requested: Math.acosh
 *
 * - Math.acosh, License: CC0  */


// Math.acosh
if (!(Math.acosh)) {
Math.acosh = function acosh(x) {
	return Math.log(x + Math.sqrt(x * x - 1));
};
}

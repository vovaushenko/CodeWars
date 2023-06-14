/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function (arr, fn) {
	return arr.sort((x, y) => fn(x) - fn(y));
};

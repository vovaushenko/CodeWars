/**
 * @param {string} num
 * @return {string}
 */
var removeTrailingZeros = function (num) {
	const str = String(num);

	let last = str.length - 1;

	while (str[last] === '0') {
		last--;
	}

	return str.slice(0, last + 1);
};

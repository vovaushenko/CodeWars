/**
 * @param {number} n
 * @return {boolean}
 */
const isFascinating = (n) =>
	'123456789' === `${n}${n * 2}${n * 3}`.split('').sort().join('');

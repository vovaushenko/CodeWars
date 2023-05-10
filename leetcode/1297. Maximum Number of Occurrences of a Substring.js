/**
 * @param {string} s
 * @param {number} maxLetters
 * @param {number} minSize
 * @param {number} maxSize
 * @return {number}
 */
var maxFreq = function (s, maxLetters, minSize, maxSize) {
	let i = 0;
	let map = {};
	let max = 0;

	while (i < s.length + 1 - minSize) {
		const chunk = s.slice(i, i + minSize);
		let unique = new Set(chunk);
		if (unique.size <= maxLetters) {
			map[chunk] ? map[chunk]++ : (map[chunk] = 1);
			max = Math.max(max, map[chunk]);
		}
		i++;
	}
	return max;
};

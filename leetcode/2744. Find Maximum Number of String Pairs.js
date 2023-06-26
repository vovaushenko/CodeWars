/**
 * @param {string[]} words
 * @return {number}
 */

const isStringPair = (s1, s2) => s1 === [...s2].reverse().join('');

var maximumNumberOfStringPairs = function (words) {
	let count = 0;

	for (let i = 0; i < words.length; i++) {
		for (let j = i + 1; j < words.length; j++) {
			if (isStringPair(words[i], words[j])) count++;
		}
	}

	return count;
};

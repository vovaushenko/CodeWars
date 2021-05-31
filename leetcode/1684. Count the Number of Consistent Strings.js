// https://leetcode.com/problems/count-the-number-of-consistent-strings/

const isConsistent = (word, pattern) => {
	for (let char of word) {
		if (!pattern.includes(char)) return false;
	}
	return true;
};

const countConsistentStrings = (allowed, words) =>
	words.reduce(
		(counter, word) => (isConsistent(word, allowed) && counter++, counter),
		0
	);

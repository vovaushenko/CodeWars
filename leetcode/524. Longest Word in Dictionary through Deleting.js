// https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/

/*
Given a string s and a string array dictionary, return the longest string in the dictionary that can be formed by deleting some of the given string characters. If there is more than one possible result, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.
*/
const findLongestWord = (s, dictionary) => {
	dictionary.sort((w1, w2) =>
		w1.length === w2.length ? w1.localeCompare(w2) : w2.length - w1.length
	);

	for (let word of dictionary) {
		let id = -1;
		for (let char of word) {
			id = s.indexOf(char, id + 1);
			if (id < 0) break;
		}
		if (id >= 0) return word;
	}

	return '';
};

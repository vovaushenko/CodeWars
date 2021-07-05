// https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/

const findLongestWord = (s, dictionary) => {
	// sort dict
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

console.log(findLongestWord('abpcplea', ['ale', 'apple', 'monkey', 'plea']));

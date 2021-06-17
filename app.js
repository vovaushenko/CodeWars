// https://leetcode.com/problems/longest-word-in-dictionary/

const longestWord = (words) => {
	words.sort((w1, w2) => w2.length - w1.length);
	const map = words.reduce((m, w) => (!m[w] ? (m[w] = true) : '', m), {});

	const possibleWords = [];
	for (let word of words) {
		if (isValidWord(word, map)) {
			if (
				possibleWords.length &&
				word.length < possibleWords[possibleWords.length - 1].length
			)
				break;
			possibleWords.push(word);
		}
	}
	possibleWords.sort();

	return possibleWords[possibleWords.length - 1] || '';
};

const isValidWord = (word, map) => {
	for (let i = 1; i < word.length + 1; i++) {
		let prefix = word.slice(0, i);
		if (!map[prefix]) return false;
	}

	return true;
};

console.log(
	longestWord(['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'])
);

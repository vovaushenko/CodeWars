// https://www.codewars.com/kata/562846dd1f77ab7c00000033

const wordPattern = (pattern, str) => {
	const patternChunks = pattern.split('');
	const words = str.split(' ');
	if (patternChunks.length !== words.length) return false;
	const map = {};
	const usedLetters = {};

	for (let i = 0; i < words.length; i++) {
		const word = words[i];
		const letter = patternChunks[i];

		if (!(word in map)) {
			if (letter in usedLetters && usedLetters[letter] !== word) return false;
			map[word] = letter;
			usedLetters[letter] = word;
		} else {
			if (map[word] !== letter) return false;
		}
	}

	return true;
};

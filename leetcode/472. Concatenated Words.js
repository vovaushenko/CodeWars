/*
Given an array of strings words (without duplicates), return all the concatenated words in the given list of words.

A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.
*/

// BRUTE FORCE
const canConstruct = (target, wordBank) => {
	if (target === '') return true;

	for (let prefix of wordBank) {
		if (target.startsWith(prefix)) {
			const suffix = target.replace(prefix, '');
			if (canConstruct(suffix, wordBank) === true) {
				return true;
			}
		}
	}
	return false;
};

const findAllConcatenatedWordsInADict = (words) => {
	const res = [];
	for (const w of words) {
		const withoutW = words.filter((word) => word !== w);
		if (canConstruct(w, withoutW)) {
			res.push(w);
		}
	}

	return res;
};
const findAllConcatenatedWordsInADict = (words) => {
	let dictionary = new Set(words);
	let output = [];

	for (const word of words) {
		if (concatenatedWordsFound(word, dictionary, 0)) {
			if (word !== '') {
				output.push(word);
			}
		}
	}

	return output;
};

const concatenatedWordsFound = (originalWord, dictionary, startPos) => {
	if (startPos === originalWord.length) {
		return true;
	}

	for (let endPos = startPos; endPos < originalWord.length; endPos++) {
		const currSubstring = originalWord.substring(startPos, endPos + 1);

		if (currSubstring === originalWord) {
			continue;
		}

		if (
			dictionary.has(currSubstring) &&
			concatenatedWordsFound(originalWord, dictionary, endPos + 1)
		) {
			return true;
		}
	}

	return false;
};

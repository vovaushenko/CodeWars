//https://www.algoexpert.io/questions/Minimum%20Characters%20For%20Words

const getFrequencyMap = (word) =>
	[...word].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

const minimumCharactersForWords = (words) => {
	const res = [];
	const maxFrequencies = {};
	for (const word of words) {
		const wordMap = getFrequencyMap(word);
		for (const char in wordMap) {
			if (!(char in maxFrequencies)) maxFrequencies[char] = wordMap[char];

			if (wordMap[char] > maxFrequencies[char])
				maxFrequencies[char] = wordMap[char];
		}
	}

	for (const [char, frequency] of Object.entries(maxFrequencies)) {
		for (let i = 0; i < frequency; i++) res.push(char);
	}

	return res;
};

// https://leetcode.com/problems/most-common-word/

const mostCommonWord = (paragraph, banned) => {
	const words = paragraph
		.toLowerCase()
		.match(/[a-z] /gi)
		.join('')
		.split(' ')
		.filter((w) => w);

	console.log(words);

	const map = new Map();
	for (let word of words) {
		if (map.has(word)) {
			let freq = map.get(word);
			map.set(word, freq + 1);
		} else {
			map.set(word, 1);
		}
	}
	let maxFrequency = 0;
	let foundWord = '';
	for (let word of words) {
		if (map.get(word) > maxFrequency && !banned.includes(word)) {
			maxFrequency = Math.max(maxFrequency, map.get(word));
			foundWord = word;
		}
	}

	return foundWord;
};

console.log(mostCommonWord('abx asda.', ['a']));

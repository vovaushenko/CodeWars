// 2085. Count Common Words With One Occurrence
/*
Given two string arrays words1 and words2, return the number of strings that appear exactly once in each of the two arrays.
*/
const getFrequencyMap = (arr) =>
	arr.reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

const countWords = (words1, words2) => {
	const h1 = getFrequencyMap(words1);
	const h2 = getFrequencyMap(words2);

	let count = 0;
	for (let word of words1) {
		if (word in h1 && word in h2 && h1[word] === 1 && h2[word] === 1) {
			count++;
		}
	}
	return count;
};

// https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/
// 2068. Check Whether Two Strings are Almost Equivalent
/*
Two strings word1 and word2 are considered almost equivalent if the differences between the frequencies of each letter from 'a' to 'z' between word1 and word2 is at most 3.

Given two strings word1 and word2, each of length n, return true if word1 and word2 are almost equivalent, or false otherwise.

The frequency of a letter x is the number of times it occurs in the string.
*/

const getFrequencyMap = (word) =>
	[...word].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});
const checkAlmostEquivalent = (word1, word2) => {
	const map1 = getFrequencyMap(word1);
	const map2 = getFrequencyMap(word2);

	for (let i = 0; i < word1.length; i++) {
		const w1fr = map1[word1[i]];
		const w2fr = map2[word1[i]] || 0;

		const c2w2fr = map2[word2[i]];
		const c2w1fr = map1[word2[i]] || 0;
		if (Math.abs(w1fr - w2fr) > 3 || Math.abs(c2w2fr - c2w1fr) > 3)
			return false;
	}

	return true;
};

// https://leetcode.com/problems/count-vowel-substrings-of-a-string/
/*
2063. Vowels of All Substrings

Given a string word, return the sum of the number of vowels ('a', 'e', 'i', 'o', and 'u') in every substring of word.

A substring is a contiguous (non-empty) sequence of characters within a string.

Note: Due to the large constraints, the answer may not fit in a signed 32-bit integer. Please be careful during the calculations.
*/
// BRUTE FORCE
const countVowels = (word) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	if (![...word].some((char) => vowels.includes(char))) {
		return 0;
	}
	let totalVowels = 0;
	for (let i = 0; i < word.length; i++) {
		for (let j = i; j <= word.length; j++) {
			const substring = word.substring(i, j);
			totalVowels += [...substring].filter((c) => vowels.includes(c)).length;
		}
	}
	return totalVowels;
};

const countVowels = (word) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];

	if (![...word].some((char) => vowels.includes(char))) {
		return 0;
	}
	const len = word.length;
	let totalVovels = 0;

	for (let i = 0; i < len; i++) {
		const ch = word[i];
		if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
			const leftSize = 1 + i;
			const rightSize = len - i;
			const outcome = leftSize * rightSize;
			totalVovels += outcome;
		}
	}

	return totalVovels;
};
console.log(countVowels('bbba'));

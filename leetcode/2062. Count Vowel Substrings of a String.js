// 2062. Count Vowel Substrings of a String
/*
A substring is a contiguous (non-empty) sequence of characters within a string.

A vowel substring is a substring that only consists of vowels ('a', 'e', 'i', 'o', and 'u') and has all five vowels present in it.

Given a string word, return the number of vowel substrings in word.

*/

const isVowelString = (str) => {
	const vowels = [...str].filter((c) => ['a', 'e', 'i', 'o', 'u'].includes(c));

	return str.length === vowels.length;
};
const countVowelSubstrings = (word) => {
	const vowels = ['a', 'e', 'i', 'o', 'u'];
	let res = 0;
	for (let i = 0; i < word.length; i++) {
		for (let j = i; j <= word.length; j++) {
			const substring = word.substring(i, j);

			if (
				isVowelString(substring) &&
				vowels.every((vw) => substring.includes(vw))
			) {
				res++;
			}
		}
	}

	return res;
};

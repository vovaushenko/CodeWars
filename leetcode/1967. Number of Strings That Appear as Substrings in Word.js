// https://leetcode.com/problems/number-of-strings-that-appear-as-substrings-in-word/
//* 1967. Number of Strings That Appear as Substrings in Word
/*
Given an array of strings patterns and a string word, return the number of strings in patterns that exist as a substring in word.

A substring is a contiguous sequence of characters within a string.
*/

const numOfStrings = (patterns, word) => {
	let counter = 0;
	for (let p of patterns) {
		if (word.includes(p)) counter++;
	}
	return counter;
};

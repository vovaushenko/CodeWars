// https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/

//! 1941. Check if All Characters Have Equal Number of Occurrences
/*
Given a string s, return true if s is a good string, or false otherwise.

A string s is good if all the characters that appear in s have the same number of occurrences (i.e., the same frequency).
*/
const areOccurrencesEqual = (s) => {
	const map = [...s].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

	return [...new Set(Object.values(map))].length === 1;
};

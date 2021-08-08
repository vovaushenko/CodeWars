// https://leetcode.com/problems/check-if-string-is-a-prefix-of-array/
//* 1961. Check If String Is a Prefix of Array
/*
Given a string s and an array of strings words, determine whether s is a prefix string of words.

A string s is a prefix string of words if s can be made by concatenating the first k strings in words for some positive k no larger than words.length.

Return true if s is a prefix string of words, or false otherwise.
*/

const isPrefixString = (s, words) => {
	let currentStr = '';

	for (let word of words) {
		currentStr += word;
		if (currentStr === s) return true;
	}

	return false;
};

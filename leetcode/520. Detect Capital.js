// https://leetcode.com/problems/detect-capital/

// 520. Detect Capital
/*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.
*/

const detectCapitalUse = (word) => {
	let capitals = [...word].filter((c) => isCapital(c));

	if (
		capitals.length === 0 ||
		(capitals.length === 1 && isCapital(word[0])) ||
		capitals.length === word.length
	)
		return true;

	return false;
};

const isCapital = (letter) => letter === letter.toUpperCase();

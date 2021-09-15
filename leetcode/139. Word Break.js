// https://leetcode.com/problems/word-break/
/*
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.
*/
const wordBreak = (word, wordDict, memo = {}) => {
	if (word in memo) return memo[word];
	if (word === '') return true;

	for (let prefix of wordDict) {
		if (word.startsWith(prefix)) {
			const suffix = word.replace(prefix, '');
			if (wordBreak(suffix, wordDict, memo) === true) {
				memo[word] = true;
				return true;
			}
		}
	}
	memo[word] = false;
	return false;
};

// https://leetcode.com/problems/is-subsequence/

//* 392. Is Subsequence
/*
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).


*/

const isSubsequence = (s, t) => {
	const ids = [...t].reduce(
		(h, c, id) => (h[c] ? h[c].push(id) : (h[c] = [id]), h),
		{}
	);
	let char = '';
	let foundIds = [];
	for (let i = 0; i < s.length; i++) {
		char = s[i];
		if (!(char in ids)) return false;

		if (i === 0) {
			foundIds.push(Math.min(...ids[char]));
		} else {
			let foundId = ids[char].find((id) => id > foundIds[i - 1]);
			if (!foundId) return false;
			foundIds.push(foundId);
		}
	}

	return true;
};

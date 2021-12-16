// 1016. Binary String With Substrings Representing 1 To N
/*
Given a binary string s and a positive integer n, return true if the binary representation of all the integers in the range [1, n] are substrings of s, or false otherwise.

A substring is a contiguous sequence of characters within a string.
*/
const queryString = (s, n) => {
	for (let i = 1; i <= n; i++) {
		if (!s.includes(i.toString(2))) return false;
	}
	return true;
};

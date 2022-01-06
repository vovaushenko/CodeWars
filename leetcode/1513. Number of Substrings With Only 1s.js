// 1513. Number of Substrings With Only 1s
/*
Given a binary string s, return the number of substrings with all characters 1's. Since the answer may be too large, return it modulo 109 + 7.
*/
const numSub = (s) =>
	s.split('0').reduce((acc, c) => acc + (c.length * (c.length + 1)) / 2, 0) %
	(10 ** 9 + 7);

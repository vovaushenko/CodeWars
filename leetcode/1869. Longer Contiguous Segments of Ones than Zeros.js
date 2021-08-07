// https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/
// 1869. Longer Contiguous Segments of Ones than Zeros
/*
Given a binary string s, return true if the longest contiguous segment of 1s is strictly longer than the longest contiguous segment of 0s in s. Return false otherwise.

For example, in s = "110100010" the longest contiguous segment of 1s has length 2, and the longest contiguous segment of 0s has length 3.
Note that if there are no 0s, then the longest contiguous segment of 0s is considered to have length 0. The same applies if there are no 1s.
*/
const checkZeroOnes = (s) => {
	const maxContiguousZero = Math.max(...s.split('1').map((c) => c.length));
	const maxContiguousOne = Math.max(...s.split('0').map((c) => c.length));
	return maxContiguousOne > maxContiguousZero;
};

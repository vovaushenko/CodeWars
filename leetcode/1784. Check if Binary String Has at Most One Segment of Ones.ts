// https://leetcode.com/problems/check-if-binary-string-has-at-most-one-segment-of-ones/

//* 1784. Check if Binary String Has at Most One Segment of Ones
/*
Given a binary string s ​​​​​without leading zeros, return true​​​ if s contains at most one contiguous segment of ones. Otherwise, return false.
*/
const checkOnesSegment = (s: string): boolean =>
	s.split('0').filter((c) => c).length === 1;

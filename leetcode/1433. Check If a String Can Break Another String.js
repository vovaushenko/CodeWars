// 1433. Check If a String Can Break Another String
/*
Given two strings: s1 and s2 with the same size, check if some permutation of string s1 can break some permutation of string s2 or vice-versa. In other words s2 can break s1 or vice-versa.

A string x can break string y (both of size n) if x[i] >= y[i] (in alphabetical order) for all i between 0 and n-1.
*/

//*brute force

const checkIfCanBreak = (s1, s2) => {
	if (s1.length !== s2.length) return false;

	const sorted1 = [...s1].sort();
	const sorted2 = [...s2].sort();

	if (sorted1.every((c, id) => c >= sorted2[id])) return true;
	if (sorted1.every((c, id) => c <= sorted2[id])) return true;

	return false;
};

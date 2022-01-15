//1641. Count Sorted Vowel Strings
/*
Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

 

Example 1:

Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].
Example 2:

Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
*/
const countVowelStrings = (n) => {
	const map = {
		a: 1,
		e: 1,
		i: 1,
		o: 1,
		u: 1,
	};
	for (let i = 2; i <= n; i++) {
		map.a = map.a + map.e + map.i + map.o + map.u;
		map.e = map.e + map.i + map.o + map.u;
		map.i = map.i + map.o + map.u;
		map.o = map.o + map.u;
	}

	let count = 0;
	for (const letter in map) count += map[letter];
	return count;
};

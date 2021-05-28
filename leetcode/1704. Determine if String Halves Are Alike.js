// https://leetcode.com/problems/determine-if-string-halves-are-alike/

// 1704. Determine if String Halves Are Alike

/*
You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike. Otherwise, return false.
*/

const halvesAreAlike = (s) =>
	vowelsLength(s.slice(0, s.length / 2)) ===
	vowelsLength(s.slice(s.length / 2));

const vowelsLength = (s) =>
	[...s].filter((char) => 'aeiouAEIOU'.includes(char)).length;

// 1347. Minimum Number of Steps to Make Two Strings Anagram
/*
You are given two strings of the same length s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.
*/
const getFrequencyMap = (str) =>
	[...str].reduce((h, c) => ((h[c] = h[c] + 1 || 1), h), {});

const minSteps = (s, t) => {
	let map = getFrequencyMap(s);
	let count = 0;

	for (let c of t) {
		if (map[c]) {
			map[c]--;
			continue;
		}
		count++;
	}
	return count;
};

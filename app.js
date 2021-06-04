// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/

// 1876. Substrings of Size Three with Distinct Characters

/*
A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.
*/

let isGood = (str) => [...new Set([...str])].length === str.length;

const countGoodSubstrings = (str) => {
	let goodSubstrings = 0;
	let [i, j, k] = [0, 1, 2];
	while (k < str.length) {
		if (isGood(str[i] + str[j] + str[k])) goodSubstrings++;
		i++;
		j++;
		k++;
	}

	return goodSubstrings;
};

countGoodSubstrings('xyzzaz');

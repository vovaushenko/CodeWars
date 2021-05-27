// https://leetcode.com/problems/longest-common-prefix/
/*
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

*/

const longestCommonPrefix = (strs) => {
	if (strs.length === 1) return strs[0];
	let [i, j] = [0, 1];
	let shortestComPrefLength = Infinity;
	let longestComPref = '';
	while (j < strs.length) {
		let tempComPref = findCommonPrefix(strs[i], strs[j]);
		console.log(tempComPref);

		if (!tempComPref) return '';

		if (tempComPref.length < shortestComPrefLength) {
			shortestComPrefLength = tempComPref.length;
			longestComPref = tempComPref;
		}

		i++;
		j++;
	}

	return longestComPref;
};

const findCommonPrefix = (s1, s2) => {
	let i = 0;
	let commonPrefix = '';
	while (i < s2.length) {
		if (s1[i] === s2[i]) {
			commonPrefix += s1[i];
		} else {
			break;
		}
		i++;
	}

	return commonPrefix;
};

console.log(longestCommonPrefix(['acc', 'aaa', 'aaba']));

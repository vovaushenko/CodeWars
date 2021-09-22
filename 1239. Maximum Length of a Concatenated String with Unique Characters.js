// 1239. Maximum Length of a Concatenated String with Unique Characters

/*
Given an array of strings arr. String s is a concatenation of a sub-sequence of arr which have unique characters.

Return the maximum possible length of s.

*BRUTE FORCE
*/

const generateSubsequences = (arr) => {
	let subsequences = [[]];

	for (let i = 0; i < arr.length; i++) {
		const currentItem = arr[i];

		const len = subsequences.length;
		for (let j = 0; j < len; j++) {
			const copy = [...subsequences[j]];
			copy.push(currentItem);

			subsequences.push(copy);
		}
	}

	return subsequences;
};
const isUnique = (str) => str.length === [...new Set(str)].length;

const maxLength = (arr) => {
	const substrs = generateSubsequences(arr)
		.map((s) => s.join(''))
		.filter((c) => isUnique(c));

	return Math.max(...substrs.map((c) => c.length));
};

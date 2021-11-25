// 696. Count Binary Substrings
/*
Give a binary string s, return the number of non-empty substrings that have the same number of 0's and 1's, and all the 0's and all the 1's in these substrings are grouped consecutively.

Substrings that occur multiple times are counted the number of times they occur.
*/
const countBinarySubstrings = (s) => {
	let chunks = s.replace(/01/g, '0,1').replace(/10/g, '1,0').split(',');
	let total = 0;

	for (let i = 1; i < chunks.length; i++) {
		total += Math.min(chunks[i].length, chunks[i - 1].length);
	}

	return total;
};

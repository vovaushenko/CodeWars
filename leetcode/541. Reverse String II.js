// https://leetcode.com/problems/reverse-string-ii/

/*
Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.
*/

const reverseStr = (s, k) => {
	let res = '';
	let counter = 0;

	let reverser = (str) => {
		if (!str) return;

		let chunk = str.slice(0, k);
		counter % 2 === 0 ? (res += reverseChunk(chunk)) : (res += chunk);
		counter++;

		reverser(str.slice(k));
	};

	reverser(s);

	return res;
};

const reverseChunk = (str) =>
	[...str].reduceRight((rev, char) => (rev += char), '');

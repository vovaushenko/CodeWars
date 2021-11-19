// https://leetcode.com/problems/hamming-distance/

/*
461. Hamming Distance

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Given two integers x and y, return the Hamming distance between them.
*/

const hammingDistance = (x, y) => {
	let bins = [x, y].sort((a, b) => a - b).map((n) => n.toString(2));
	let diff = bins[1].length - bins[0].length;
	if (diff) bins[0] = '0'.repeat(diff) + bins[0];

	let hammDist = [...bins[0]].filter((bit, id) => bit !== bins[1][id]).length;

	return hammDist;
};

const hammingDistance = (x, y) => (x ^ y).toString(2).replace(/0/g, '').length;

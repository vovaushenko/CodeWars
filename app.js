// https://leetcode.com/problems/hamming-distance/

const hammingDistance = (x, y) => {
	let bins = [x, y].sort((a, b) => a - b).map((n) => n.toString(2));
	let diff = bins[1].length - bins[0].length;
	if (diff) bins[0] = '0'.repeat(diff) + bins[0];

	let hammDist = [...bins[0]].filter((bit, id) => bit !== bins[1][id]).length;

	return hammDist;
};

console.log(hammingDistance(4, 1));

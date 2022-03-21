//1007. Minimum Domino Rotations For Equal Row
/*
In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.

Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.

If it cannot be done, return -1
*/
const minDominoRotations = (tops, bottoms) => {
	const [topNums, bottomNums, same] = [
		new Array(7).fill(0),
		new Array(7).fill(0),
		new Array(7).fill(0),
	];
	for (let i = 0; i < tops.length; i++) {
		topNums[tops[i]]++;
		bottomNums[bottoms[i]]++;
		if (tops[i] === bottoms[i]) same[tops[i]]++;
	}

	for (let j = 1; j <= 6; j++) {
		if (topNums[j] + bottomNums[j] - same[j] === tops.length) {
			return Math.min(topNums[j] - same[j], bottomNums[j] - same[j]);
		}
	}
	return -1;
};

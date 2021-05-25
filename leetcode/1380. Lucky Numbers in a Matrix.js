// https://leetcode.com/problems/lucky-numbers-in-a-matrix/
/*
Given a m * n matrix of distinct numbers, return all lucky numbers in the matrix in any order.

A lucky number is an element of the matrix such that it is the minimum element in its row and maximum in its column.

*/
const luckyNumbers = (mat) => {
	let luckyNums = [];
	for (let i = 0; i < mat.length; i++) {
		let rowMin = Math.min(...mat[i]);

		for (let j = 0; j < mat[i].length; j++) {
			let colMax = Math.max(...mat.map((row) => row[j]));
			if (mat[i][j] === rowMin && mat[i][j] === colMax) {
				luckyNums.push(mat[i][j]);
			}
		}
	}

	return luckyNums;
};

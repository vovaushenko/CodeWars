// https://leetcode.com/problems/rotate-image/

/*
48. Rotate Image
You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
*/

const rotate = (matrix) => {
	let initialLength = matrix.length;
	for (let i = 0; i < matrix.length; i++) {
		matrix[i].push(...matrix.map((row) => row[i]).reverse());
	}

	for (let row of matrix) {
		for (let i = 0; i < initialLength; i++) row.shift();
	}
	return matrix;
};

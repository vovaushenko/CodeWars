// https://leetcode.com/problems/matrix-diagonal-sum/

/*
Given a square matrix mat, return the sum of the matrix diagonals.

Only include the sum of all the elements on the primary diagonal and all the elements on the secondary diagonal that are not part of the primary diagonal.
*/

const diagonalSum = (mat) => {
	let start = 0;
	let end = mat.length - 1;
	let sum = 0;
	for (let i = 0; i < mat.length; i++) {
		console.log(mat[i]);
		sum += mat[i][start] + mat[i][end];
		if (start === end) sum -= mat[i][start];
		start++;
		end--;
	}

	return sum;
};

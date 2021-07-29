// https://leetcode.com/problems/search-a-2d-matrix/
// 74. Search a 2D Matrix
/*
Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
*/

const searchMatrix = (matrix, target) => {
	const flat = matrix.reduce((f, row) => f.concat(...row), []);

	let start = 0;
	let end = flat.length - 1;
	let mid = Math.floor((start + end) / 2);

	while (flat[mid] !== target && start < end) {
		r;
		if (target > flat[mid]) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
		mid = Math.floor((start + end) / 2);
	}

	return flat[mid] === target;
};

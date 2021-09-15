// 240. Search a 2D Matrix II
/*
Write an efficient algorithm that searches for a target value in an m x n integer matrix. The matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.
*/

const searchMatrix = (matrix, target) => {
	const firstRow = matrix[0];
	const lastRow = matrix[matrix.length - 1];

	if (firstRow.every((d) => d > target)) return false;
	if (lastRow.every((d) => d < target)) return false;

	for (let row of matrix) {
		if (efficientIncludes(row, target)) return true;
	}
	return false;
};

const efficientIncludes = (arr, target) => {
	let [start, end] = [0, arr.length - 1];
	let mid = ~~((start + end) / 2);

	while (arr[mid] !== target && start < end) {
		if (target < arr[mid]) {
			end = mid - 1;
		} else {
			start = mid + 1;
		}
		mid = ~~((start + end) / 2);
	}

	return arr[mid] === target;
};

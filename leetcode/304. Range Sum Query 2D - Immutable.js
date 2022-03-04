//304. Range Sum Query 2D - Immutable
/*
Given a 2D matrix matrix, handle multiple queries of the following type:

Calculate the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
Implement the NumMatrix class:

NumMatrix(int[][] matrix) Initializes the object with the integer matrix matrix.
int sumRegion(int row1, int col1, int row2, int col2) Returns the sum of the elements of matrix inside the rectangle defined by its upper left corner (row1, col1) and lower right corner (row2, col2).
*/
class NumMatrix {
	constructor(mat) {
		this.mat = mat;
	}

	sumRegion(r1, c1, r2, c2) {
		const cutMat = this.mat.filter((row, id) => id >= r1 && id <= r2);
		const cutCol = cutMat.map((row) =>
			row.filter((_, id) => id >= c1 && id <= c2)
		);

		return cutCol.reduce(
			(total, row) => total + row.reduce((a, b) => a + b, 0),
			0
		);
	}
}

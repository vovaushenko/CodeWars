// 1476. Subrectangle Queries
/*
Implement the class SubrectangleQueries which receives a rows x cols rectangle as a matrix of integers in the constructor and supports two methods:

1. updateSubrectangle(int row1, int col1, int row2, int col2, int newValue)

Updates all values with newValue in the subrectangle whose upper left coordinate is (row1,col1) and bottom right coordinate is (row2,col2).
2. getValue(int row, int col)

Returns the current value of the coordinate (row,col) from the rectangle.
*/

class SubrectangleQueries {
	constructor(private rectangle: number[][]) {}

	updateSubrectangle(
		row1: number,
		col1: number,
		row2: number,
		col2: number,
		newValue: number
	): void {
		for (; row1 <= row2; row1++) {
			let c = col1;
			for (; c <= col2; c++) {
				this.rectangle[row1][c] = newValue;
			}
		}
	}

	getValue(row: number, col: number): number {
		return this.rectangle[row][col];
	}
}

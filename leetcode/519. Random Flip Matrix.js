// 519. Random Flip Matrix
/*
There is an m x n binary grid matrix with all the values set 0 initially. Design an algorithm to randomly pick an index (i, j) where matrix[i][j] == 0 and flips it to 1. All the indices (i, j) where matrix[i][j] == 0 should be equally likely to be returned.

Optimize your algorithm to minimize the number of calls made to the built-in random function of your language and optimize the time and space complexity.

Implement the Solution class:

Solution(int m, int n) Initializes the object with the size of the binary matrix m and n.
int[] flip() Returns a random index [i, j] of the matrix where matrix[i][j] == 0 and flips it to 1.
void reset() Resets all the values of the matrix to be 0.
*/

class Solution {
	constructor(rows, cols) {
		this.rows = rows;
		this.cols = cols;
		this.memo = new Map();
	}
	flip() {
		const rndRow = Math.floor(Math.random() * this.rows);
		const rndCol = Math.floor(Math.random() * this.cols);
		const combo = `${rndRow}x${rndCol}`;

		if (this.memo.has(combo)) {
			return this.flip();
		} else {
			this.memo.set(combo, true);
			return [rndRow, rndCol];
		}
	}

	reset() {
		return (this.memo = new Map());
	}
}

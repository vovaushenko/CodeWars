// 2579. Count Total Number of Colored Cells
/*
There exists an infinitely large two-dimensional grid of uncolored unit cells. You are given a positive integer n, indicating that you must do the following routine for n minutes:

At the first minute, color any arbitrary unit cell blue.
Every minute thereafter, color blue every uncolored cell that touches a blue cell.
Below is a pictorial representation of the state of the grid after minutes 1, 2, and 3.
*/
function coloredCells(n) {
	if (n === 1) return 1;
	let res = 1;
	let count = 2;

	while (count <= n) {
		res += n * 2;
		count++;
	}

	return res;
}

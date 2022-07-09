//807. Max Increase to Keep City Skyline
const maxIncreaseKeepingSkyline = (grid) => {
	const rowMax = grid.map((row) => Math.max(...row));
	const colMax = grid.map((_row, i) => Math.max(...grid.map((r) => r[i])));

	let res = 0;
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			res += Math.min(rowMax[i], colMax[j]) - grid[i][j];
		}
	}
	return res;
};

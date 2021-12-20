// 1219. Path with Maximum Gold
/*
In a gold mine grid of size m x n, each cell in this mine has an integer representing the amount of gold in that cell, 0 if it is empty.

Return the maximum amount of gold you can collect under the conditions:

Every time you are located in a cell you will collect all the gold in that cell.
From your position, you can walk one step to the left, right, up, or down.
You can't visit the same cell more than once.
Never visit a cell with 0 gold.
You can start and stop collecting gold from any position in the grid that has some gold.
*/
const getMaximumGold = (grid) => {
	if (!grid.length) return 0;
	const [rows, cols] = [grid.length, grid[0].length];
	let max = 0;

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			if (!grid[r][c]) continue;
			max = Math.max(max, dfs(r, c, grid));
		}
	}

	return max;
};

const dfs = (r, c, g, s = new Set()) => {
	const currentPath = `${r}*${c}`;
	if (r < 0 || r >= g.length || c < 0 || c >= g[r].length) return 0;
	if (s.has(currentPath) || !g[r][c]) return 0;
	s.add(currentPath);

	let val = g[r][c];
	const max = Math.max(
		dfs(r - 1, c, g, s),
		dfs(r, c + 1, g, s),
		dfs(r + 1, c, g, s),
		dfs(r, c - 1, g, s)
	);
	s.delete(currentPath);
	return val + max;
};

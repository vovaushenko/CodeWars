//2319. Check if Matrix Is X-Matrix

const isValidRow = (row) =>
	row[0] !== 0 &&
	row[row.length - 1] !== 0 &&
	row.filter((n) => n === 0).length === row.length - 2;

const checkXMatrix = (grid) => {
	const leftSide = grid.reduce((ls, row) => ls.concat(row[0]), []);
	const rightSide = grid.reduce(
		(ls, row) => ls.concat(row[row.length - 1]),
		[]
	);
	const topSide = grid[0];
	const bottomSide = grid[grid.length - 1];

	return [leftSide, rightSide, topSide, bottomSide].every(isValidRow);
};

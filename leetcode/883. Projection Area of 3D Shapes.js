//883. Projection Area of 3D Shapes

const projectionArea = (grid) => {
	const x = grid.reduce((a, b) => [...a, ...b], []).filter((x) => x > 0).length;

	const y = grid.reduce((acc, row) => acc + Math.max(...row), 0);

	const z = grid[0]

		.map((_, i) => Math.max(...grid.map((r) => r[i])))

		.reduce((acc, idx) => acc + idx);

	return x + y + z;
};

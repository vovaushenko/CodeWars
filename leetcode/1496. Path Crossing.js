// 1496. Path Crossing
/*
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.

*/
const getRouter = () => ({
	N: ([x, y]) => [x, y + 1],
	S: ([x, y]) => [x, y - 1],
	E: ([x, y]) => [x - 1, y],
	W: ([x, y]) => [x + 1, y],
});

const isPathCrossing = (path) => {
	let coords = [0, 0];
	let visitedPoints = new Map();
	const router = getRouter();

	for (let dir of path) {
		const point = coords.join('*');
		if (visitedPoints.has(point)) return true;
		visitedPoints.set(point, true);
		coords = router[dir](coords);
	}

	if (visitedPoints.has(coords.join('*'))) return true;

	return false;
};

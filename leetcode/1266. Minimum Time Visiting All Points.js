const minTimeToVisitAllPoints = (points) => {
	let id = 0;

	let res = 0;

	while (id < points.length - 1) {
		res = Math.max(
			Math.abs(points[id][0] - points[id + 1][0]),

			Math.abs(points[id][1] - points[id + 1][1])
		);

		id++;
	}

	return res;
};

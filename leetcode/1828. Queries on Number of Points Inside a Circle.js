// 1828. Queries on Number of Points Inside a Circle

// Basic Mathematics will tell you that the distance between two points (x1, y1) and (x2, y2) is given by - sqrt((x1 - x2)^2 + (y1 - y2)^2).

// We need the distance between the center of the circle and a point less than or equal to radius of the circle for it to be considered as a point inside the circle.

// Thus, we need - (circle_center_x - x1) ^ 2 - (circle_center_y - y1) ^ 2 <= r * r for a point to be inside the circle.

const isPointInCircle = (x, y, x1, y1, r) =>
	(x - x1) * (x - x1) + (y - y1) * (y - y1) <= r ** 2;

const countPoints = (points, queries) => {
	let res = [];

	for (const [x, y, r] of queries) {
		let pointsInside = 0;
		for (const [x1, y1] of points) {
			if (isPointInCircle(x, y, x1, y1, r)) pointsInside++;
		}
		res.push(pointsInside);
	}
	return res;
};

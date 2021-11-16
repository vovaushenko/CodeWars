// https://leetcode.com/problems/valid-square/

// 593. Valid Square
/*
Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

A valid square has four equal sides with positive length and four equal angles (90-degree angles).
*/

const getDistance = (a, b) => {
	return (a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]);
};

const validSquare = (p1, p2, p3, p4) => {
	const allDistances = [
		getDistance(p1, p2),
		getDistance(p1, p3),
		getDistance(p1, p4),
		getDistance(p2, p3),
		getDistance(p2, p4),
		getDistance(p3, p4),
	];

	allDistances.sort((a, b) => a - b);

	return (
		allDistances[0] &&
		allDistances[0] === allDistances[1] &&
		allDistances[0] === allDistances[2] &&
		allDistances[0] === allDistances[3] &&
		allDistances[4] === allDistances[5]
	);
};

console.log(validSquare([1, 0], [-1, 0], [0, 1], [0, -1]));

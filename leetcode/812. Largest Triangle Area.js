//812. Largest Triangle Area

const largestTriangleArea = (points) => {
	const n = points.length;

	let maxArea = 0;

	for (let i = 0; i < n; i++) {
		for (let j = i + 1; j < n; j++) {
			for (k = j + 1; k < n; k++) {
				const area = calcArea(points[i], points[j], points[k]);

				maxArea = Math.max(maxArea, area);
			}
		}
	}

	return maxArea;
};

function calcArea([xCoordA, yCoordA], [xCoordB, yCoordB], [xCoordC, yCoordC]) {
	const sideA = xCoordA * (yCoordB - yCoordC);

	const sideB = xCoordB * (yCoordC - yCoordA);

	const sideC = xCoordC * (yCoordA - yCoordB);

	return Math.abs((sideA + sideB + sideC) / 2);
}

// https://www.codewars.com/kata/525a566985a9a47bc8000670

const rotate = (matrix, direction) => {
	if (direction === 'clockwise') {
		return rotateClockwise(matrix);
	} else {
		return rotateAntiClockwise(matrix);
	}
};

const rotateClockwise = (matrix) => {
	const rotated = [];

	const rotator = (mat) => {
		if (!mat[0].length) return;
		const newRow = [];
		const sliced = mat.map((row) => {
			newRow.push(row[0]);
			return row.slice(1);
		});
		rotated.push(newRow.reverse());
		rotator(sliced);
	};

	rotator(matrix);
	return rotated;
};

const rotateAntiClockwise = (matrix) => {
	const rotated = [];

	const rotator = (mat) => {
		if (!mat[0].length) return;
		const newRow = [];
		const sliced = mat.map((row) => {
			newRow.push(row[row.length - 1]);
			return row.slice(0, row.length - 1);
		});

		rotated.push(newRow);
		rotator(sliced);
	};

	rotator(matrix);
	return rotated;
};

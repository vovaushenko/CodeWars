//5 kyu myjinxin katas #001 : Rotate, Remove, Return

const rotate = (matrix) => {
	const rotated = [];
	for (let i = 0; i < matrix[0].length; i++) {
		const column = matrix.map((row) => row[i]);
		rotated.unshift(column);
	}
	return rotated;
};

const removeMinAndMax = (row) => {
	const min = Math.min(...row);
	const max = Math.max(...row);
	let minRemoved = false;
	let maxRemoved = false;

	for (let i = 0; i < row.length; i++) {
		if (minRemoved && maxRemoved) break;
		if (row[i] === min && !minRemoved) {
			row.splice(i, 1);
			i--;
			minRemoved = true;
		}
		if (row[i] === max && !maxRemoved) {
			row.splice(i, 1);
			i--;
			maxRemoved = true;
		}
	}
	return row;
};

const rotateAndRemove = (arr) => {
	let lastNum = null;
	const helper = (matrix) => {
		if (matrix.length === 1 && matrix[0].length === 1)
			return (lastNum = matrix[0][0]);

		const rotated = rotate(matrix);
		const withoutMinAndMax = rotated.map((row) => removeMinAndMax(row));
		helper(withoutMinAndMax);
	};

	helper(arr);
	return lastNum;
};

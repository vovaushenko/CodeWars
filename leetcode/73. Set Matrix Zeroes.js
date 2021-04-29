// 73. Set Matrix Zeroes

// Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

const setZeroes = (matrix) => {
	const nullify = {
		col: [],
		row: [],
	};

	for (let i = 0; i < matrix.length; i++) {
		let currentRow = matrix[i];
		for (let j = 0; j < currentRow.length; j++) {
			let currentNum = currentRow[j];
			if (currentNum === 0) {
				if (!nullify.row.includes(i)) {
					nullify.row.push(i);
				}
				if (!nullify.col.includes(j)) {
					nullify.col.push(j);
				}
			}
		}
	}

	for (let i = 0; i < matrix.length; i++) {
		if (nullify.row.includes(i)) {
			const initialLength = matrix[i].length;
			matrix[i].splice(0, initialLength);
			for (let k = 0; k < initialLength; k++) {
				matrix[i].push(0);
			}
		}

		for (let j = 0; j < matrix[i].length; j++) {
			if (nullify.col.includes(j)) {
				matrix[i][j] = 0;
			}
		}
	}
	return matrix;
};

const findPeakGrid = (mat) => {
	for (let i = 0; i < mat.length; i++) {
		let row = mat[i];
		for (let j = 0; j < row.length; j++) {
			let left = row[j - 1] || -1;
			let right = row[j + 1] || -1;
			let top = mat[i - 1] ? mat[i - 1][j] : -1;
			let bottom = mat[i + 1] ? mat[i + 1][j] : -1;
			let max = Math.max(left, right, top, bottom, row[j]);

			if (max === row[j]) return [i, j];
		}
	}
};

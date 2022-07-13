//1329. Sort the Matrix Diagonally
const diagonalSort = (mat) => {
	const map = {};
	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[0].length; j++) {
			let d = i - j;
			if (!map[d]) map[d] = [];

			map[d].push(mat[i][j]);
		}
	}

	for (const key in map) map[key].sort((a, b) => a - b);

	for (let i = 0; i < mat.length; i++) {
		for (let j = 0; j < mat[0].length; j++) {
			let d = i - j;
			mat[i][j] = map[d].shift();
		}
	}

	return mat;
};

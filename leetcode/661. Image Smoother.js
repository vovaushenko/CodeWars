// An image smoother is a filter of the size 3 x 3 that can be applied to each cell of an image by rounding down the average of the cell and the eight surrounding cells (i.e., the average of the nine cells in the blue smoother). If one or more of the surrounding cells of a cell is not present, we do not consider it in the average (i.e., the average of the four cells in the red smoother).
const getNeighbors = (img, i, j) => {
	const neighbors = [];
	for (let x = i - 1; x <= i + 1; x++) {
		for (let y = j - 1; y <= j + 1; y++) {
			if (
				x >= 0 &&
				x < img.length &&
				y >= 0 &&
				y < img[0].length &&
				!(x === i && y === j)
			) {
				neighbors.push(img[x][y]);
			}
		}
	}
	return neighbors;
};

const imageSmoother = (img) => {
	const res = Array.from({ length: img.length }, () =>
		Array(img[0].length).fill(0)
	);

	for (let i = 0; i < img.length; i++) {
		for (let j = 0; j < img[0].length; j++) {
			const neighbors = getNeighbors(img, i, j);
			const sum = img[i][j] + neighbors.reduce((acc, curr) => acc + curr, 0);
			res[i][j] = Math.floor(sum / (neighbors.length + 1));
		}
	}

	return res;
};

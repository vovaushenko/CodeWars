//1727. Largest Submatrix With Rearrangements
/*
You are given a binary matrix matrix of size m x n, and you are allowed to rearrange the columns of the matrix in any order.

Return the area of the largest submatrix within matrix where every element of the submatrix is 1 after reordering the columns optimally.
*/
const largestSubmatrix = (matrix) => {
	const res = [];
	for (let i = 0; i < matrix[0].length; i++) {
		const col = matrix.map((row) => row.filter((el, id) => id === i)[0]);

		const max = Math.max(
			...col
				.join('')
				.split('0')
				.map((concOnes) => concOnes.length)
		);
		res.push(max);
	}

	res.sort((a, b) => b - a);
	console.log(res);
	let max = -Infinity;

	for (let j = 1; j < res.length + 1; j++) {
		const progress = res.slice(0, j);

		max = Math.max(Math.min(...progress) * progress.length, max);
	}

	return max;
};

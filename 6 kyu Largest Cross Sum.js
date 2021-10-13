// https://www.codewars.com/kata/59fc9e7ec374cbbb8a0000a7

const getRowSum = (row) => row.reduce((acc, num) => acc + num, 0);

const largestCrossSum = (matrix) => {
	const columnSums = [];

	for (let i = 0; i < matrix[0].length; i++) {
		columnSums.push(getRowSum(matrix.map((row) => row[i])));
	}

	let maxCrossSum = -Infinity;
	for (let j = 0; j < matrix.length; j++) {
		const rowSum = getRowSum(matrix[j]);

		for (let k = 0; k < columnSums.length; k++) {
			const columnSum = columnSums[k];
			maxCrossSum = Math.max(rowSum + columnSum - matrix[j][k], maxCrossSum);
		}
	}

	return maxCrossSum;
};

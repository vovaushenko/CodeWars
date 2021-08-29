// https://www.codewars.com/kata/57a4395ce298a72d71000306

const makeMatrix = (arr1, arr2) => {
	let unique = [
		...arr1.filter((d) => !arr2.includes(d)),
		...arr2.filter((d) => !arr1.includes(d)),
	].sort((a, b) => a - b);
	let matrixSize = unique.length;
	const matrix = [];

	while (Math.sqrt(matrixSize) % 1 !== 0) {
		matrixSize--;
	}

	unique = unique.slice(0, matrixSize);
	const rowLength = Math.sqrt(matrixSize);

	while (unique.length) {
		let matrixRow = unique.slice(0, rowLength);
		unique = unique.slice(rowLength);
		matrix.push(matrixRow);
	}

	return matrix;
};

// https://www.codewars.com/kata/56f7493f5d7c12d1690000b6

const mean = (lst) => {
	let digits = lst.filter((c) => /\d/.test(c));
	let concatenatedChars = lst.filter((c) => /[a-z]/gi.test(c)).join('');

	return [
		digits.reduce((a, b) => a + +b, 0) / digits.length,
		concatenatedChars,
	];
};

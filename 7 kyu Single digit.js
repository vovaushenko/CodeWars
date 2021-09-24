// https://www.codewars.com/kata/5a7778790136a132a00000c1

const singleDigit = (n) => (n < 10 ? n : singleDigit(getSumOfBits(n)));

const getSumOfBits = (n) =>
	n
		.toString(2)
		.split('')
		.reduce((acc, c) => acc + (c === '1' ? 1 : 0), 0);
